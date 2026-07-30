"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, GraduationCap } from "lucide-react";
import { experiences, education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import AmbientGlow from "./AmbientGlow";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientGlow side="left" />
      <div className="container-page">
        <SectionHeading
          eyebrow="experience"
          title="From intern to team lead."
          description="A timeline of roles at NubitSoft, each building on the last."
        />

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-paper/10 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.role}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col gap-5 pl-12 sm:w-1/2 sm:pl-0 sm:pr-12 ${
                  index % 2 === 0
                    ? "sm:mr-auto sm:text-right sm:items-end"
                    : "sm:ml-auto sm:pl-12 sm:pr-0"
                }`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                  className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary sm:top-0 ${
                    index % 2 === 0 ? "sm:-right-5 sm:left-auto" : "sm:-left-5"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                </motion.span>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="card-surface w-full rounded-2xl p-6 transition-colors hover:border-accent/30"
                >
                  <h3 className="font-display text-xl text-paper">{exp.role}</h3>
                  <div
                    className={`mt-1 flex items-center gap-2 text-sm text-accent ${
                      index % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    <CalendarDays className="h-3.5 w-3.5" />
                    {exp.duration}
                    <span className="text-paper/40">· {exp.company}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-paper/60">
                    {exp.testimonial}
                  </p>
                  <ul
                    className={`mt-4 space-y-1.5 text-sm text-paper/70 ${
                      index % 2 === 0 ? "sm:text-right" : ""
                    }`}
                  >
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <SectionHeading eyebrow="education" title="Academic foundation." />
          <div className="mt-10 flex justify-center">
            {education.map((item) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5 }}
                className="card-surface flex w-full max-w-md items-center gap-4 rounded-2xl p-6 transition-colors hover:border-accent/30"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-mono text-xs text-accent">{item.status}</p>
                  <h3 className="mt-1 font-display text-lg text-paper">{item.field}</h3>
                  <p className="text-sm text-paper/60">{item.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
