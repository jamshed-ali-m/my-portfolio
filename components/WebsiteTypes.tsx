"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ShoppingBag,
  Home,
  HeartPulse,
  CalendarCheck,
  HandHeart,
  UtensilsCrossed,
  GraduationCap,
  LayoutDashboard,
  UserCircle,
  Newspaper,
  Rocket,
  LucideIcon,
} from "lucide-react";
import { websiteTypes } from "@/lib/data";
import { GlassCard, SectionHeading } from "./ui/primitives";

const icons: Record<string, LucideIcon> = {
  business: Building2,
  ecommerce: ShoppingBag,
  "real-estate": Home,
  healthcare: HeartPulse,
  booking: CalendarCheck,
  nonprofit: HandHeart,
  restaurant: UtensilsCrossed,
  education: GraduationCap,
  saas: LayoutDashboard,
  portfolio: UserCircle,
  blog: Newspaper,
  landing: Rocket,
};

export default function WebsiteTypes() {
  return (
    <section id="website-types" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Web Development"
          title="Websites I Build, By Industry"
          subtitle="Whatever your business needs, chances are it fits one of these — each built responsive, fast, and SEO-ready."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {websiteTypes.map((type, i) => {
            const Icon = icons[type.id] ?? Building2;
            return (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              >
                <GlassCard className="flex h-full items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/25">
                    <Icon className="h-5 w-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{type.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-400 leading-relaxed">
                      {type.description}
                    </p>
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
