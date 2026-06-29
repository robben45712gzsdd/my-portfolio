"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="mx-auto w-full max-w-6xl py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.process.title}
        </motion.h2>
        <p className="mx-auto max-w-2xl text-slate-400">{t.process.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            {index < t.process.steps.length - 1 && (
              <div className="absolute left-full top-10 z-0 hidden h-px w-full bg-gradient-to-r from-cyan-300/30 to-transparent lg:block" />
            )}
            <span className="mb-5 block text-3xl font-bold text-white/25">
              {step.number}
            </span>
            <h3 className="mb-3 text-xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="leading-relaxed text-slate-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
