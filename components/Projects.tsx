"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects } from "@/lib/data";
import { GlassCard, Pill, SectionHeading } from "./ui/primitives";

type Project = (typeof projects)[number];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Selected Work" title="Selected Work" />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="h-full cursor-pointer"
              onClick={() => setActive(project)}
            >
              <GlassCard className="flex h-full flex-col p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-400/80">
                      Problem
                    </p>
                    <p className="mt-1 text-gray-400">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/80">
                      Solution
                    </p>
                    <p className="mt-1 text-gray-400">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan/80">
                      Workflow
                    </p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {project.workflow.map((step, idx) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-1 text-[11px] text-gray-300">
                            {step}
                          </span>
                          {idx < project.workflow.length - 1 && (
                            <span className="text-gray-600 text-xs">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-4 text-sm">
                  <a
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                  >
                    Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <span className="ml-auto text-[11px] uppercase tracking-widest text-gray-600">
                    link placeholder
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{active.title}</h3>
                <button
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="shrink-0 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-400/80">
                    Problem
                  </p>
                  <p className="mt-1.5 text-gray-300">{active.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400/80">
                    Solution
                  </p>
                  <p className="mt-1.5 text-gray-300">{active.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-cyan/80">
                    Full Workflow
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    {active.workflow.map((step, i) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-gray-300"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-cyan/15 text-[10px] font-mono text-accent-cyan">
                          {i + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                    Technology
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.stack.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-4 border-t border-white/5 pt-5 text-sm">
                <a
                  href={active.link}
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <a
                  href={active.link}
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
