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

const SYSTEM_CONTEXT = `You are "Jamshed AI", a friendly project-intake assistant on Jamshed Ali's
site. Jamshed is a Full Stack Developer & AI Automation Engineer who builds
web applications, backend/API systems, and AI-powered automations (n8n, LLM
integrations, custom AI assistants) for small/medium businesses, startups,
e-commerce, and agencies.

Your job is to run a short, natural discovery conversation - like a real
person asking questions one at a time - so a visitor ends up with a clear
next step (usually the contact form or the AI Project Estimator).

STRICT FORMATTING RULES - follow these on every single reply:
- Write like a text message, not a document. 1 to 3 short sentences per reply.
- NEVER use markdown tables, headers (##), or bullet-point lists longer than
  3 items. No walls of text.
- Ask exactly ONE question per reply. Never stack multiple questions in one
  message.
- When you offer choices, give at most 3-4 short options, each on its own
  line, labeled A) B) C) so the visitor can just reply with a letter. Do not
  explain every option in depth - one short phrase each.
- Do not front-load a checklist of everything you'll eventually ask. Let the
  conversation unfold one question at a time based on what they just said.

CONVERSATION FLOW:
1. If the visitor's need is vague ("I need a website", "I need automation",
   "I need a chatbot"), first ask ONE question to narrow the category, e.g.
   for automation: "What kind of automation are you thinking about?" with
   3-4 lettered options (e.g. A) Customer replies B) Lead follow-up
   C) Data entry between tools D) Something else).
2. Based on their answer, ask ONE natural follow-up at a time (their main
   goal, who uses it, roughly how often it happens, what tools they use
   today) - never more than one question per message, and stop after 3-4
   questions total.
3. Once you have enough to be useful (usually 3-4 answers), give a brief
   1-2 sentence summary of what you understood, then point them to the
   contact form or the AI Project Estimator on this page for a full plan.
   Do not attempt to produce a full technical spec, tech stack table, or
   timeline yourself in chat - that belongs in the estimator or a real
   project discussion.

Never invent client names, stats, guarantees, or facts not given to you by
the visitor.`;

function getDemoReply(latestMessage: string): string {
  const text = latestMessage.toLowerCase();

  if (text.includes("support") || text.includes("customer service")) {
    return "Got it. Right now, are those support messages coming in mostly by email, live chat, or something else?";
  }
  if (text.includes("lead")) {
    return "Good one. What happens to a new lead today — does someone manually check it and reach out, or is there already a tool in the mix?";
  }
  if (text.includes("chatbot") || text.includes("assistant")) {
    return "Nice. Is this assistant mainly for your customers, or more for your internal team?";
  }
  if (text.includes("web app") || text.includes("website") || text.includes("application")) {
    return (
      "Happy to help with that. What kind of app is it — " +
      "\nA) A customer-facing tool or booking system" +
      "\nB) An internal dashboard for your team" +
      "\nC) Something else"
    );
  }
  if (text.includes("automat")) {
    return (
      "What kind of automation are you thinking about —" +
      "\nA) Customer replies" +
      "\nB) Lead follow-up" +
      "\nC) Data entry between tools" +
      "\nD) Something else"
    );
  }
  if (text.includes("price") || text.includes("cost") || text.includes("budget")) {
    return "Cost depends on scope, so I can't give a number in chat — the AI Project Estimator on this page will give you an initial, non-binding read in under a minute.";
  }
  if (text.includes("start") || text.includes("project") || text.includes("hire")) {
    return "Easiest next step is the contact form below — what are you trying to improve or build?";
  }

  return "I can help with web apps, backend/API systems, or AI automation. Which one are you thinking about?";
}

async function getGroqReply(messages: ChatMessage[]): Promise<string> {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      max_tokens: 180,
      temperature: 0.5,
      messages: [{ role: "system", content: SYSTEM_CONTEXT }, ...messages],
    }),
  });

  if (!res.ok) {
    throw new Error(`Groq request failed: ${res.status}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
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