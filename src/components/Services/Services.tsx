"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";

const accents = [
  "from-cyan-400 to-blue-500",
  "from-emerald-400 to-cyan-500",
  "from-amber-300 to-orange-500",
  "from-fuchsia-400 to-sky-500",
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mx-auto w-full max-w-6xl py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.services.title}
        </motion.h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {t.services.items.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]"
          >
            <div
              className={`mb-5 h-1 w-16 rounded-full bg-gradient-to-r ${accents[index]}`}
            />
            <h3 className="mb-3 text-2xl font-bold text-white">
              {service.title}
            </h3>
            <p className="mb-5 leading-relaxed text-slate-400">
              {service.description}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
