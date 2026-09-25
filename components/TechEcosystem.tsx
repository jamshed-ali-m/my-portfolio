"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Workflow, ShoppingCart, Smartphone, LucideIcon } from "lucide-react";
import { techGroups } from "@/lib/data";
import { GlassCard, SectionHeading } from "./ui/primitives";

const groupIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  ai: BrainCircuit,
  automation: Workflow,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
};

export default function TechEcosystem() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Technology" title="An Interactive Technology Ecosystem" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group, gi) => {
            const Icon = groupIcons[group.id] ?? Code2;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                <GlassCard className="h-full p-5">
                  <div className="mb-4 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet/25 to-accent-cyan/25 text-accent-cyan">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                      {group.label}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => {
                      const key = `${group.id}-${item}`;
                      return (
                        <motion.div
                          key={key}
                          onMouseEnter={() => setHovered(key)}
                          onMouseLeave={() => setHovered(null)}
                          animate={{
                            scale: hovered === key ? 1.03 : 1,
                            borderColor:
                              hovered === key
                                ? "rgba(34,211,238,0.5)"
                                : "rgba(255,255,255,0.08)",
                          }}
                          className="rounded-lg border bg-white/[0.02] px-3 py-2 text-sm text-gray-300"
                        >
                          {item}
                        </motion.div>
                      );
                    })}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
