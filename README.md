# Jamshed Ali — Full Stack Developer & AI Automation Engineer

Premium Next.js + TypeScript + Tailwind CSS + Framer Motion business site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Connecting a real AI backend

Two API routes are stubbed with demo/fallback logic and clean abstractions:

- `app/api/chat/route.ts` — powers the "Ask AI" assistant widget
- `app/api/estimate/route.ts` — powers the AI Project Estimator

Both currently return rule-based demo responses so the site works with zero
configuration. To connect a real LLM:

1. Copy `.env.example` to `.env.local` and add `ANTHROPIC_API_KEY` (or your provider of choice).
2. In each route file, replace the `getDemoResponse(...)` call with a real
   call to your provider's SDK/API (a commented example is included in both files).
3. Never call the LLM API directly from client components — always go through
   these server routes so keys stay server-side.

## Structure

- `app/` — App Router pages, layout, API routes, global styles
- `components/` — one component per section (Navbar, Hero, Services, etc.)
- `components/ui/` — small reusable primitives (GlassCard, Badge, Button, SectionHeading)
- `lib/` — shared utilities and content/data constants

## Notes

- No fake stats, testimonials, client logos, or invented experience are included anywhere —
  placeholders are marked clearly where real information should go later.
- Respects `prefers-reduced-motion` throughout.
# my-portfolio
