"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { projectItems } from "@/lib/portfolio-content";
import { useLanguage } from "@/lib/language-context";

type Project = (typeof projectItems)[number];

export default function ProjectShowcase() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projectItems
      : projectItems.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-3xl font-bold md:text-4xl"
        >
          {t.projects.title}
        </motion.h2>
        <p className="mx-auto max-w-2xl text-slate-400">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2 px-4">
        {t.projects.categories.map((label, index) => {
          const category = ["All", "Web Development", "Mobile Development"][
            index
          ];
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border border-white/20 bg-white/10 text-white"
                  : "border border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
              type="button"
            >
              {label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/[0.07]"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 bg-slate-900">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              {project.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-cyan-300 px-2 py-1 text-xs font-bold text-slate-950">
                  {t.common.featured}
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-200">
                {project.title}
              </h3>
              <p className="mb-4 line-clamp-3 text-slate-400">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-white/20"
                  >
                    {t.common.liveDemo}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 rounded-lg border border-white/20 px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-white/10"
                  >
                    {t.common.code}
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/20 bg-slate-950 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg bg-white/10 px-3 py-1 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
                type="button"
                aria-label="Close project modal"
              >
                X
              </button>
            </div>

            <p className="mb-6 leading-relaxed text-slate-300">
              {selectedProject.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-cyan-300/10 px-3 py-1 text-sm text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="my-4 flex flex-wrap gap-4">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-cyan-300/30 bg-cyan-300/15 px-5 py-3 font-medium text-white transition-colors hover:bg-cyan-300/25"
                >
                  {t.common.liveDemo}
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-medium text-white transition-colors hover:bg-white/15"
                >
                  {t.common.code}
                </a>
              )}
            </div>

            <div className="grid gap-4">
              {selectedProject.images.map((img, idx) => (
                <div
                  key={img}
                  className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black"
                  style={{
                    aspectRatio:
                      selectedProject.category === "Mobile Development"
                        ? "9/16"
                        : "16/9",
                  }}
                >
                  <Image
                    src={img}
                    alt={`${selectedProject.title} ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 900px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
