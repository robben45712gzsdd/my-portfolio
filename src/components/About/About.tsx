"use client";

import { motion } from "motion/react";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import { profile, skillItems } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

const techGroups = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "Libraries",
  "DevOps",
  "Workflow",
  "AI Support",
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto w-full max-w-6xl">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.about.title}
        </motion.h2>
      </div>

      <div className="flex flex-col items-center md:items-start justify-between gap-8 md:flex-row">
        <ProfileCard
          name={profile.name}
          title={profile.role}
          handle={profile.handle}
          status="Online"
          contactText={t.common.contactMe}
          avatarUrl="/textures/my-profile.png"
          showUserInfo
          enableTilt={false}
          enableMobileTilt={false}
          onContactClick={() => window.open(`mailto:${profile.email}`, "_blank")}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="flex-1 space-y-7"
        >
          <div className="space-y-4 text-lg leading-relaxed text-slate-300">
            <p className="text-xl font-medium text-white">{t.about.intro}</p>

            <div className="flex flex-wrap gap-3 text-sm">
              {t.about.facts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-slate-300"
                >
                  {fact}
                </span>
              ))}
            </div>

            <p>{t.about.summary}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              {t.about.techTitle}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {techGroups.map((group) => (
                <div key={group}>
                  <h4 className="mb-2 text-sm font-semibold text-white">
                    {group}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillItems
                      .filter((item) => item.category === group)
                      .slice(0, 6)
                      .map((item) => (
                        <span
                          key={item.name}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-slate-300"
                        >
                          {item.name}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {t.about.workflowTitle}
            </h3>
            <p className="text-slate-300">{t.about.workflow}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              {t.about.passionsTitle}
            </h3>
            <div className="flex flex-wrap gap-3">
              {t.about.passions.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
