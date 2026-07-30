"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/portfolio";
import { scrollToId } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const terminalLines = [
  { prompt: "whoami", output: profile.name },
  { prompt: "role --current", output: profile.role },
  { prompt: "status", output: "available_for_hire: true" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container-page relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 font-mono text-xs sm:text-sm text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.badge}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.05] tracking-tight"
          >
            Hi, I&apos;m
            <br />
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={profile.resumeUrl}
              download
              whileHover={{ y: -3, boxShadow: "0 20px 60px -20px rgba(161,194,189,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-primary"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <motion.a
              href={profile.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: "rgba(161,194,189,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full border border-paper/15 px-6 py-3.5 font-medium text-paper hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: Github, href: profile.socials.github, label: "GitHub" },
              { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: profile.socials.instagram, label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/10 text-paper/60 transition-colors hover:border-accent/40 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Signature element: a live "terminal" card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md animate-float"
        >
          <div className="card-surface glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-1.5 border-b border-paper/10 bg-paper/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-paper/40">
                ubaid@portfolio ~ zsh
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={line.prompt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.35 }}
                  className="mb-3"
                >
                  <p className="text-accent">
                    <span className="text-paper/40">$</span> {line.prompt}
                  </p>
                  <p className="pl-3 text-paper/80">{line.output}</p>
                </motion.div>
              ))}
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-paper/10 pt-4">
                {profile.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 + i * 0.1 }}
                    className="rounded-lg bg-primary/60 px-2 py-3 text-center"
                  >
                    <p className="font-display text-xl text-accent">{stat.value}</p>
                    <p className="mt-0.5 text-[11px] text-paper/50">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/40 hover:text-accent sm:flex"
      >
        <span className="font-mono text-xs">scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
