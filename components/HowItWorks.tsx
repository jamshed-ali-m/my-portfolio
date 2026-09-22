"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "./ui/primitives";

export default function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="How It Works" title="A Simple, Transparent Process" />

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px bg-white/10 lg:block" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-base-950 text-sm font-mono text-accent-cyan">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
