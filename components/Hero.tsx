"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, User, Cpu, Brain, Workflow, Database, Zap } from "lucide-react";
import { Badge, PrimaryButton, SecondaryButton } from "./ui/primitives";

const flowNodes = [
  { label: "Customer Request", icon: User },
  { label: "AI", icon: Brain },
  { label: "Understand", icon: Cpu },
  { label: "n8n", icon: Workflow },
  { label: "API / Database", icon: Database },
  { label: "Automated Action", icon: Zap },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>
                <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />
                AI Automation • Full Stack • AI Integration
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08]"
            >
              Build Better.
              <br />
              <span className="text-gradient">Automate Smarter.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg text-gray-400"
            >
              I build modern web applications and AI-powered automations that
              help businesses reduce repetitive work, connect their systems,
              and operate more efficiently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <PrimaryButton href="#contact">
                Start a Project <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href="#services">Explore Solutions</SecondaryButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 sm:p-8 shadow-glow">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                  live workflow
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  active
                </span>
              </div>

              <div className="relative flex flex-col items-center">
                {flowNodes.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                        className="relative flex w-full max-w-[280px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-violet/30 to-accent-cyan/30 text-accent-cyan">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-medium text-gray-200">
                          {node.label}
                        </span>
                      </motion.div>

                      {i < flowNodes.length - 1 && (
                        <div className="relative h-8 w-px overflow-hidden bg-white/10">
                          <motion.div
                            className="absolute left-0 top-0 h-3 w-px bg-accent-cyan shadow-glow-cyan"
                            animate={{ y: ["-20%", "220%"] }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.2,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -right-6 hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl glass shadow-glow-cyan"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain className="h-6 w-6 text-accent-cyan" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
