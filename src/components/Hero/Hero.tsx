"use client";

import { motion } from "motion/react";
import TextType from "../TextAnimations/TextType/TextType";
import { profile } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-start px-6 text-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            {t.common.available}
          </span>
        </motion.div>

        <h1 className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-4 block text-2xl text-cyan-200 sm:text-3xl"
          >
            {t.hero.greeting}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="block bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent text-4xl"
          >
            <TextType
              text={[...t.hero.roles]}
              typingSpeed={60}
              pauseDuration={1400}
              showCursor
              cursorCharacter="|"
            />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mb-8 flex w-full flex-col items-stretch gap-4 sm:items-center md:flex-row"
        >
          <a
            href="#projects"
            className="rounded-xl flex-1 bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            {t.common.viewWork}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl border border-cyan-200/40 bg-cyan-300/10 px-6 py-3 text-center font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
          >
            {t.common.viewCv}
          </a>
          <a
            href="#contact"
            className="rounded-xl flex-1 border border-white/20 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t.common.getInTouch}
          </a>
        </motion.div>

        
      </div>
    </header>
  );
}
