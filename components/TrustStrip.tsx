"use client";

import { motion } from "framer-motion";
import { trustItems } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="relative py-14 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-sm sm:text-base font-medium text-gray-400">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
