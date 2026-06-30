"use client";

import { motion } from "motion/react";
import SpotlightCard from "@/components/Components/SpotlightCard/SpotlightCard";
import { profile } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

export default function ResumeSnapshot() {
  const { t } = useLanguage();

  return (
    <section id="resume" className="mx-auto w-full max-w-6xl py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.resume.title}
        </motion.h2>
        <p className="mx-auto max-w-3xl text-slate-400">
          {t.resume.subtitle}
        </p>
      </div>

      <SpotlightCard
        className="rounded-2xl border-white/10 bg-white/[0.04] p-5 sm:p-8"
        spotlightColor="rgba(34, 211, 238, 0.18)"
      >
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {t.resume.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-cyan-200/20 bg-cyan-300/10 p-5">
            <div>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">
                {t.resume.note}
              </p>
              <div className="space-y-2 text-sm text-slate-300">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p>{profile.location}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-cyan-300 px-5 py-3 text-center font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                {t.common.viewCv}
              </a>
              <a
                href={profile.resume}
                download
                className="rounded-xl border border-white/20 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t.common.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
