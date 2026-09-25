"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/primitives";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-cyan uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            Engineering With a Focus on Automation
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8"
        >
          <GlassCard className="p-8 sm:p-10">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am Jamshed Ali, a Full Stack Developer focused on building
              modern web applications, backend systems, and AI-powered
              automations.
            </p>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              My goal is simple: use software and AI to solve real business
              problems, reduce repetitive work, and create reliable digital
              systems.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
