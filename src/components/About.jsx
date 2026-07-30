"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download, Sparkles } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import AmbientGlow from "./AmbientGlow";

const paragraphContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const paragraphItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientGlow side="left" />
      <div className="container-page">
        <SectionHeading
          eyebrow="about"
          title="Building things that work — and teaching others to build too."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            variants={paragraphContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={paragraphItem}
                className="text-base sm:text-lg leading-relaxed text-paper/70"
              >
                {p}
              </motion.p>
            ))}

            <motion.a
              variants={paragraphItem}
              href={profile.resumeUrl}
              download
              className="group mt-2 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-primary"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Redesigned profile card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 blur-2xl" />

            <div className="card-surface glass overflow-hidden rounded-3xl">
              <div className="relative h-28 w-full">
                <Image
                  src={profile.banner}
                  alt="Profile banner"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              </div>

              <div className="relative -mt-12 flex flex-col items-center px-6 pb-6 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 h-[100px] w-[100px] rounded-full border border-dashed border-accent/30"
                />
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={92}
                  height={92}
                  className="rounded-full border-4 border-primary object-cover shadow-glow"
                />

                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
                  <Sparkles className="h-3 w-3" />
                  {profile.role}
                </span>

                <h3 className="mt-3 font-display text-xl font-medium text-paper">
                  {profile.name}
                </h3>

                <div className="mt-6 grid w-full grid-cols-3 divide-x divide-paper/10 rounded-xl border border-paper/10 bg-paper/[0.03]">
                  {profile.stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-3"
                    >
                      <p className="font-display text-lg text-accent">{stat.value}</p>
                      <p className="text-[10px] text-paper/50">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {[
                    { icon: Github, href: profile.socials.github, label: "GitHub" },
                    { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
                    { icon: Instagram, href: profile.socials.instagram, label: "Instagram" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/[0.06] text-paper/70 transition-colors hover:bg-accent hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
