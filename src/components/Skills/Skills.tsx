"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { skillItems } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

const iconMap: Record<string, string> = {
  "Vue.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Nuxt.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS3/SCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js / Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "Dart / Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "SQL Server": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Vuetify: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
};

const fallbackStyleMap: Record<string, string> = {
  Libraries: "#e879f9",
  DevOps: "#34d399",
  Workflow: "#fbbf24",
  "AI Support": "#67e8f9",
};

const labelMap: Record<string, string> = {
  "Ant Design Vue": "Ant",
  "Socket.IO": "SIO",
  PeerJS: "PJS",
  Cloudinary: "CLD",
  GSAP: "GSAP",
  AOS: "AOS",
  VPS: "VPS",
  "Agile/Scrum": "AG",
  "MCP Server": "MCP",
  "Codex CLI": "CX",
  "GitHub Copilot": "GHC",
  Claude: "CL",
  "ChatGPT Plus": "GPT",
};

function FallbackSkillIcon({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <svg
      className="h-10 w-10"
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="10"
        fill="#0f172a"
        stroke={color}
        strokeOpacity="0.55"
      />
      <path
        d="M14 16h20M14 32h20M16 14v20M32 14v20"
        stroke={color}
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />
      <circle cx="14" cy="16" r="2" fill={color} fillOpacity="0.7" />
      <circle cx="34" cy="32" r="2" fill={color} fillOpacity="0.7" />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        className="fill-white text-[10px] font-bold"
      >
        {label}
      </text>
    </svg>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryMap = t.skills.categories;

  const filteredSkills =
    activeCategory === "All"
      ? skillItems
      : skillItems.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="mx-auto w-full max-w-6xl py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.skills.title}
        </motion.h2>
        <p className="mx-auto max-w-2xl text-slate-400">{t.skills.subtitle}</p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2 px-4">
        {categoryMap.map((category, index) => {
          const rawCategory = index === 0 ? "All" : category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(rawCategory)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                activeCategory === rawCategory
                  ? "border border-white/20 bg-white/10 text-white"
                  : "border border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
              type="button"
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={`${skill.category}-${skill.name}`}
            layout
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.25 }}
            className="flex min-h-24 items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white">
              {iconMap[skill.name] ? (
                <img
                  src={iconMap[skill.name]}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                  className="h-8 w-8 object-contain"
                />
              ) : (
                <FallbackSkillIcon
                  label={labelMap[skill.name] ?? skill.name.slice(0, 2)}
                  color={fallbackStyleMap[skill.category] ?? "#94a3b8"}
                />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-white">{skill.name}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {"description" in skill ? skill.description : skill.category}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
