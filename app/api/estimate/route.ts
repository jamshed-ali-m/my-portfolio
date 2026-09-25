import { NextRequest, NextResponse } from "next/server";

// POST /api/estimate
// Body: { process: string; current: string; frequency: string; tools: string }
// Response: { complexity, tools, workflow, note, mode }
//
// This produces a rule-based DEMO analysis so the estimator works without a
// live backend. Replace `buildDemoEstimate` with a real LLM call (see the
// commented block in app/api/chat/route.ts for the request shape) once an
// API key is configured. The response is explicitly framed as an initial,
// AI-assisted assessment — never a guaranteed quote.

type EstimateInput = {
  process: string;
  current: string;
  frequency: string;
  tools: string;
};

function buildDemoEstimate(input: EstimateInput) {
  const text = `${input.process} ${input.current} ${input.tools}`.toLowerCase();

  let complexity: "Low" | "Medium" | "High" = "Medium";
  if (text.includes("email") || text.includes("spreadsheet") || text.includes("simple")) {
    complexity = "Low";
  }
  if (
    text.includes("multiple systems") ||
    text.includes("integration") ||
    text.includes("approval") ||
    text.includes("custom")
  ) {
    complexity = "High";
  }

  const suggestedTools = ["n8n"];
  if (text.includes("email") || text.includes("gmail")) suggestedTools.push("Gmail/Email API");
  if (text.includes("crm") || text.includes("sheet")) suggestedTools.push("CRM / Google Sheets");
  if (text.includes("support") || text.includes("chat") || text.includes("customer")) {
    suggestedTools.push("LLM for response generation");
  }
  if (text.includes("database") || text.includes("api")) suggestedTools.push("Custom API / Database");
  if (suggestedTools.length === 1) suggestedTools.push("LLM (for understanding requests)");

  const workflow = [
    "Trigger (form, email, or webhook)",
    "AI understands / classifies the request",
    "Lookup relevant data (API or database)",
    "Generate the response or action",
    "Update your system of record",
  ];

  return {
    complexity,
    tools: Array.from(new Set(suggestedTools)),
    workflow,
    note:
      "This is an initial AI-assisted assessment based on what you shared — not a guaranteed quote. A short project discussion will refine scope, timeline, and cost.",
  };
}

async function getGroqEstimate(input: EstimateInput) {
  const prompt = `A business wants to automate this process:
Process: ${input.process}
Currently handled by: ${input.current}
Frequency: ${input.frequency || "not specified"}
Current tools: ${input.tools || "not specified"}

Respond with ONLY valid JSON, no markdown, no commentary, in exactly this shape:
{"complexity":"Low"|"Medium"|"High","tools":string[],"workflow":string[],"note":string}
"workflow" should be 4-6 short ordered steps. "note" should remind the reader this is an initial AI-assisted assessment, not a guaranteed quote.`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      max_tokens: 500,
      response_format: { type: "json_object" },
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) throw new Error(`Groq request failed: ${res.status}`);

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content ?? "{}";
  return JSON.parse(raw);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<EstimateInput>;
    const { process: proc, current, frequency, tools } = body;

    if (!proc || !current) {
      return NextResponse.json(
        { ok: false, error: "Please describe the process and how it's currently handled." },
        { status: 400 }
      );
    }

    const input: EstimateInput = { process: proc, current, frequency: frequency ?? "", tools: tools ?? "" };

    if (process.env.GROQ_API_KEY) {
      try {
        const result = await getGroqEstimate(input);
        return NextResponse.json({ ...result, mode: "live" });
      } catch (err) {
        console.error("Groq estimate failed, falling back to demo mode:", err);
      }
    }

    const result = buildDemoEstimate(input);
    return NextResponse.json({ ...result, mode: "demo" });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 });
  }
}
