"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="card-surface group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-accent/30 hover:shadow-glow"
    >
      <div className="relative h-48 w-full overflow-hidden bg-primary-dark">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg text-paper">{project.title}</h3>
          <motion.span
            initial={{ x: 0, y: 0 }}
            whileHover={{ x: 2, y: -2 }}
            className="shrink-0 text-paper/40 transition-colors group-hover:text-accent"
          >
            <ArrowUpRight className="h-5 w-5" />
          </motion.span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-paper/10 bg-paper/[0.03] px-2.5 py-1 text-[11px] text-paper/60 transition-colors group-hover:border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
