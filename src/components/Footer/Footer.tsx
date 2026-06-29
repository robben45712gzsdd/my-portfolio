"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

const socialIcons = {
  GitHub: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  Facebook: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Email: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navigation = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.journey, href: "#timeline" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const social = [
    { name: "GitHub", href: profile.github, icon: socialIcons.GitHub },
    { name: "Facebook", href: profile.facebook, icon: socialIcons.Facebook },
    { name: "Email", href: `mailto:${profile.email}`, icon: socialIcons.Email },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
            <p className="mt-2 max-w-md text-slate-400">{t.footer.summary}</p>

            <div className="mt-6 grid max-w-sm grid-cols-3 gap-4">
              <div>
                <div className="text-xl font-bold text-white">2</div>
                <div className="text-xs text-slate-400">{t.footer.stats[0]}</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">5</div>
                <div className="text-xs text-slate-400">{t.footer.stats[1]}</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">3.37/4</div>
                <div className="text-xs text-slate-400">{t.footer.stats[2]}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h4 className="mb-5 text-lg font-semibold text-white">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="mb-5 text-lg font-semibold text-white">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <div className="mb-1 font-medium text-white">Email</div>
                <a href={`mailto:${profile.email}`} className="break-all hover:text-white">
                  {profile.email}
                </a>
              </div>
              <div>
                <div className="mb-1 font-medium text-white">Phone</div>
                <a href={`tel:${profile.phone}`} className="hover:text-white">
                  {profile.phone}
                </a>
              </div>
              <div>
                <div className="mb-1 font-medium text-white">Location</div>
                <div>{profile.location}</div>
              </div>
              <div>
                <div className="mb-1 font-medium text-white">{t.footer.status}</div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  {t.footer.available}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-4">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-slate-400 transition-colors hover:bg-cyan-300/20 hover:text-white"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="text-center text-sm text-slate-400 sm:text-right">
            <div>
              © {currentYear} {profile.name}. All rights reserved.
            </div>
            <div className="text-xs text-slate-500">{t.footer.builtWith}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
