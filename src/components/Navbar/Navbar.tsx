"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { languages, type Language } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#skills", label: t.nav.skills },
    { href: "#process", label: t.nav.process },
    { href: "#timeline", label: t.nav.journey },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const languageToggle = (
    <div className="flex items-center rounded-full border border-white/15 bg-white/5 p-1">
      {(Object.keys(languages) as Language[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`h-8 min-w-10 rounded-full px-3 text-xs font-semibold transition-colors ${
            language === item
              ? "bg-white text-black"
              : "text-slate-300 hover:bg-white/10 hover:text-white"
          }`}
          aria-pressed={language === item}
        >
          {languages[item]}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="fixed left-0 right-0 top-0 z-30 px-4 py-4">
      <div className="relative z-10 mx-auto flex max-w-6xl items-start justify-end md:justify-center gap-3">
        <div className="flex w-full max-w-fit items-center justify-between rounded-2xl border border-white/15 bg-black/85 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur md:px-6">
          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-1 py-1 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-sky-400 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-9 w-9 flex-col items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20 md:hidden"
            aria-label="Toggle mobile menu"
            type="button"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ${
                isOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>

        <div className="hidden md:block">{languageToggle}</div>

        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              aria-label="Close mobile menu"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute bottom-0 right-0 top-0 flex w-[min(86vw,360px)] flex-col border-l border-white/10 bg-[#060914] p-5 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    Duong Van Manh
                  </div>
                  <div className="text-xs text-slate-400">
                    Front-End Developer
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-semibold text-white"
                  aria-label="Close mobile menu"
                >
                  X
                </button>
              </div>

              <div className="mb-8">{languageToggle}</div>

              <div className="grid gap-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-base font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.aside>
          </div>
        )}
      </div>
    </nav>
  );
}
