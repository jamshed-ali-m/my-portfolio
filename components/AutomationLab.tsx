"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, ArrowRight } from "lucide-react";
import { automationLabNodes } from "@/lib/data";
import { GlassCard, Badge } from "./ui/primitives";

export default function AutomationLab() {
  const [activeId, setActiveId] = useState(automationLabNodes[1].id);
  const active = automationLabNodes.find((n) => n.id === activeId)!;

  return (
    <section id="automation-lab" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge>
            <FlaskConical className="h-3.5 w-3.5 text-accent-violet" />
            Interactive
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
            AI Automation Lab
          </h2>
          <p className="mt-3 max-w-xl text-gray-400">
            Click a node to see what happens at each stage of an AI-driven
            lead workflow.
          </p>
        </div>

        <GlassCard className="p-6 sm:p-10">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            {automationLabNodes.map((node, i) => (
              <div key={node.id} className="flex items-center gap-3">
                <motion.button
                  onClick={() => setActiveId(node.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    activeId === node.id
                      ? "border-accent-cyan/50 bg-accent-cyan/10 text-white shadow-glow-cyan"
                      : "border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.07]"
                  }`}
                >
                  {activeId === node.id && (
                    <motion.span
                      layoutId="lab-active-dot"
                      className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-accent-cyan shadow-glow-cyan"
                    />
                  )}
                  {node.title}
                </motion.button>
                {i < automationLabNodes.length - 1 && (
                  <ArrowRight className="hidden sm:block h-4 w-4 text-gray-600 shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 min-h-[92px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mx-auto max-w-xl rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <p className="text-sm font-semibold text-accent-cyan uppercase tracking-widest">
                  {active.title}
                </p>
                <p className="mt-2 text-gray-300">{active.detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
