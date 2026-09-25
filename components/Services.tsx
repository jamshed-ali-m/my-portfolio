"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Layers,
  Bot,
  GitBranch,
  Server,
  Sparkles,
  LucideIcon,
  ShoppingCart,
  Palette,
  LifeBuoy,
  Smartphone,
} from "lucide-react";
import { services } from "@/lib/data";
import { GlassCard, Pill, SectionHeading } from "./ui/primitives";

const icons: Record<string, LucideIcon> = {
  "ai-automation": Workflow,
  "full-stack": Layers,
  ecommerce: ShoppingCart,
  "ai-assistants": Bot,
  "process-automation": GitBranch,
  "backend-api": Server,
  "ai-integration": Sparkles,
  mobile: Smartphone,
  "ui-ux": Palette,
  maintenance: LifeBuoy,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="What I Build"
          subtitle="Full-stack development, e-commerce, and AI automation — built for businesses in Europe, the US, and worldwide."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.id] ?? Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <GlassCard className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/25">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/0 to-transparent group-hover:via-accent-cyan/60 transition-all duration-500" />
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
