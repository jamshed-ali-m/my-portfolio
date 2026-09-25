import Link from "next/link";
import { ChevronRight, Home, Shield, Scale, Receipt, LucideIcon } from "lucide-react";
import { legalPages, legalInfo } from "@/lib/data";
import { GlassCard } from "../ui/primitives";

export type PolicySection = {
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const tabIcons: Record<string, LucideIcon> = {
  "privacy-policy": Shield,
  "terms-and-conditions": Scale,
  "refund-policy": Receipt,
};

function readingTime(sections: PolicySection[]) {
  const words = sections.reduce((acc, s) => {
    const paraWords = s.paragraphs.join(" ").split(/\s+/).length;
    const bulletWords = (s.bullets ?? []).join(" ").split(/\s+/).length;
    return acc + paraWords + bulletWords;
  }, 0);
  return Math.max(1, Math.round(words / 200));
}

export default function PolicyShell({
  activeId,
  eyebrow,
  title,
  highlight,
  subtitle,
  sections,
}: {
  activeId: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  sections: PolicySection[];
}) {
  const activePage = legalPages.find((p) => p.id === activeId);
  const minutes = readingTime(sections);

  return (
    <section className="relative pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-gray-300">{activePage?.label}</span>
        </div>

        {/* Header */}
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-cyan uppercase">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title} <span className="text-gradient">{highlight}</span>
          </h1>
          <p className="mt-5 text-base text-gray-400 sm:text-lg">{subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-2 sm:flex-row">
          {legalPages.map((page) => {
            const Icon = tabIcons[page.id] ?? Shield;
            const active = page.id === activeId;
            return (
              <Link
                key={page.id}
                href={page.href}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-gradient-to-r from-accent-violet to-accent-blue text-white shadow-glow"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {page.label}
              </Link>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <GlassCard className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan">
                  Table of Contents
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-500">~{minutes} min read</p>
              <nav className="mt-4 flex flex-col gap-1 border-t border-white/5 pt-4">
                {sections.map((s) => (
                  <a
                    key={s.number}
                    href={`#section-${s.number}`}
                    className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-gray-400 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    <span className="font-mono text-xs text-accent-cyan">{s.number}</span>
                    <span className="truncate">{s.title}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-500">
                <span>Version</span>
                <span className="font-mono text-gray-400">{legalInfo.lastUpdated}</span>
              </div>
            </GlassCard>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-5">
            <GlassCard className="flex items-start gap-4 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/25">
                <Shield className="h-5 w-5 text-accent-cyan" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-white">
                  Independent Software & AI Automation Services
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                  This document applies to services provided by{" "}
                  <span className="font-medium text-gray-200">
                    {legalInfo.operatorName}, trading as {legalInfo.brandName}
                  </span>
                  , to clients based in {legalInfo.serviceRegions}. All engagements, project
                  discussions, and deliverables are governed by the terms described here.
                </p>
              </div>
            </GlassCard>

            {sections.map((s) => (
              <GlassCard key={s.number} id={`section-${s.number}`} className="scroll-mt-28 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-cyan/15 text-xs font-mono font-semibold text-accent-cyan">
                    {s.number}
                  </span>
                  <h2 className="text-xl font-semibold text-white">{s.title}</h2>
                </div>
                <div className="mt-4 space-y-3.5">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-gray-400 sm:text-[15px]">
                      {p}
                    </p>
                  ))}
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="mt-2 space-y-2">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 sm:text-[15px]">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
