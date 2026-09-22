import { NextRequest, NextResponse } from "next/server";

// Contact handler. Sends a real email via Resend's free tier when
// RESEND_API_KEY is set (see .env.example); otherwise falls back to logging
// the submission server-side so the form still "succeeds" in demo mode.

async function sendViaResend(body: Record<string, string>) {
  const { name, email, company, need, process: proc, budget, message } = body;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL,
      reply_to: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "-"}`,
        `Needs: ${need}`,
        `Current process: ${proc || "-"}`,
        `Budget: ${budget || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Resend request failed: ${res.status} ${detail}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, need, message } = body ?? {};

    if (!name || !email || !need || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      try {
        await sendViaResend(body);
        return NextResponse.json({ ok: true, mode: "live" });
      } catch (err) {
        console.error("Resend send failed, falling back to log-only mode:", err);
      }
    }

    console.log("New contact submission (demo mode):", body);
    return NextResponse.json({ ok: true, mode: "demo" });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
