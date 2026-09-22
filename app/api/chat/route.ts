import { NextRequest, NextResponse } from "next/server";

// POST /api/chat
// Body: { messages: { role: "user" | "assistant"; content: string }[] }
// Response: { reply: string; mode: "demo" | "live" }
//
// This route is a clean abstraction boundary between the chat widget UI and
// whatever actually generates the reply. Right now it runs a small rule-based
// demo responder so the site works with zero configuration. When a real LLM
// key is configured, swap `getDemoReply` for a real provider call — the
// commented block below shows the shape of an Anthropic Messages API call.

type ChatMessage = { role: "user" | "assistant"; content: string };

const SYSTEM_CONTEXT = `You are "Jamshed AI", the project assistant on Jamshed Ali's
site. Jamshed is a Full Stack Developer & AI Automation Engineer who builds
web applications, backend/API systems, and AI-powered automations (n8n, LLM
integrations, custom AI assistants) for small/medium businesses, startups,
e-commerce, and agencies. Answer questions about services, how automation
works, and how to start a project. Be concise, concrete, and never invent
client names, stats, or guarantees.`;

function getDemoReply(latestMessage: string): string {
  const text = latestMessage.toLowerCase();

  if (text.includes("support") || text.includes("customer service")) {
    return "Yes. I can help design an automation that receives customer messages, uses AI to understand the request, checks your business system or API, generates an appropriate response, and records the interaction.";
  }
  if (text.includes("lead")) {
    return "I can build a workflow that qualifies incoming leads with AI, scores them, generates a personalized outreach message, and logs everything to your CRM automatically — reducing manual follow-up work.";
  }
  if (text.includes("chatbot") || text.includes("assistant")) {
    return "I build AI assistants that are grounded in your business information (via RAG or a knowledge base) so they can answer real questions accurately, rather than generic scripted responses.";
  }
  if (text.includes("web app") || text.includes("website") || text.includes("application")) {
    return "I build full-stack web applications end to end — React/Next.js on the frontend, Node.js/NestJS APIs and PostgreSQL on the backend — designed to be maintainable and to integrate cleanly with automation later.";
  }
  if (text.includes("automat")) {
    return "I automate repetitive processes — things like lead handling, customer replies, data entry between tools, and reporting — using n8n, APIs, and AI where judgment or language understanding is needed.";
  }
  if (text.includes("price") || text.includes("cost") || text.includes("budget")) {
    return "Cost depends on the scope of the automation or application. The best next step is a short project discussion — you can use the contact form below or the AI Project Estimator for an initial, non-binding assessment.";
  }
  if (text.includes("start") || text.includes("project") || text.includes("hire")) {
    return "Happy to help. The fastest way to start is the contact form — tell me what you're trying to improve and the current process, and I'll follow up with a practical technical approach.";
  }

  return "I can help with full-stack web development, backend/API systems, and AI automation (n8n workflows, LLM integrations, custom AI assistants). Ask me about a specific process you want automated, or describe the application you want built.";
}

async function getGroqReply(messages: ChatMessage[]): Promise<string> {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      max_tokens: 400,
      include_reasoning: false,
      messages: [
        { role: "system", content: SYSTEM_CONTEXT },
        ...messages,
      ],
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Groq request failed: ${res.status} - ${errorText}`
    );
  }

  const data = await res.json();

  return (
    data.choices?.[0]?.message?.content ??
    "Sorry, I couldn't generate a response."
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body?.messages ?? [];
    const latest = [...messages].reverse().find((m) => m.role === "user");

    if (!latest?.content) {
      return NextResponse.json(
        { ok: false, error: "No user message provided." },
        { status: 400 }
      );
    }

    if (process.env.GROQ_API_KEY) {
      try {
        const reply = await getGroqReply(messages);
        return NextResponse.json({ reply, mode: "live" });
      } catch (err) {
        console.error("Groq call failed, falling back to demo mode:", err);
      }
    }

    const reply = getDemoReply(latest.content);
    return NextResponse.json({ reply, mode: "demo" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}
