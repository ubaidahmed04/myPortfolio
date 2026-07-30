"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, GitBranch, Layers } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import AmbientGlow from "./AmbientGlow";

const icons = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Tools: GitBranch,
  "Full-Stack Practices": Layers,
};

const chipContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const chip = {
  hidden: { opacity: 0, y: 6, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientGlow side="right" />
      <div className="container-page">
        <SectionHeading
          eyebrow="skills"
          title="A toolkit built for shipping full-stack products."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[group.category] ?? Layers;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="card-surface group rounded-2xl p-6 transition-colors hover:border-accent/30 hover:shadow-glow"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="mt-5 font-display text-lg text-paper">
                  {group.category}
                </h3>
                <motion.div
                  variants={chipContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={chip}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="rounded-full border border-paper/10 bg-paper/[0.03] px-3 py-1 text-xs text-paper/70 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
