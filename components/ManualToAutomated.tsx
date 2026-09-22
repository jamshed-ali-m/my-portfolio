"use client";

import { motion } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";
import { beforeSteps, afterSteps } from "@/lib/data";
import { GlassCard, PrimaryButton, SectionHeading } from "./ui/primitives";

function StepColumn({
  steps,
  variant,
}: {
  steps: string[];
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";
  return (
    <GlassCard className={`p-6 sm:p-8 ${isBefore ? "" : "shadow-glow-cyan"}`}>
      <div className="mb-6 flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            isBefore ? "bg-red-500/15 text-red-400" : "bg-emerald-500/15 text-emerald-400"
          }`}
        >
          {isBefore ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
        </span>
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          {isBefore ? "Before" : "After"}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: isBefore ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`rounded-lg border px-4 py-3 text-sm ${
              isBefore
                ? "border-red-500/10 bg-red-500/[0.04] text-gray-400"
                : "border-emerald-500/10 bg-emerald-500/[0.05] text-gray-200"
            }`}
          >
            {step}
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function ManualToAutomated() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="From Manual To Automated"
          title="Turn Manual Work Into Automated Workflows"
        />

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <StepColumn steps={beforeSteps} variant="before" />
          <div className="flex justify-center py-4 lg:py-0">
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-12 w-12 rotate-90 lg:rotate-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-accent-cyan"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </div>
          <StepColumn steps={afterSteps} variant="after" />
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton href="#contact">
            Automate This Process <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
