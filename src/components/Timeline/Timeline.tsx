"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/lib/language-context";

export default function Timeline() {
  const { t } = useLanguage();

  return (
    <section id="timeline" className="mx-auto w-full max-w-5xl py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.timeline.title}
        </motion.h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          {t.timeline.subtitle}
        </p>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-300 via-sky-500 to-transparent md:left-8" />

        <div className="space-y-8">
          {t.timeline.events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex gap-6 md:gap-8"
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-200/40 bg-cyan-300/20 md:h-16 md:w-16">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
              </div>

              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                <span className="mb-3 inline-flex rounded-full bg-cyan-300/15 px-3 py-1 text-sm font-semibold text-cyan-100">
                  {event.year}
                </span>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {event.title}
                </h3>
                <p className="leading-relaxed text-slate-300">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
