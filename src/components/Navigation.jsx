"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { scrollToId } from "@/lib/utils";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-page">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-300 ${
            scrolled ? "glass py-2.5 shadow-glow" : "py-1"
          }`}
        >
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#home");
            }}
            whileHover="hover"
            className="font-mono text-lg sm:text-xl font-medium tracking-tight text-paper"
          >
            <motion.span
              variants={{ hover: { rotate: -12, x: -2 } }}
              className="inline-block text-accent"
            >
              &lt;
            </motion.span>
            Ubaid Ahmed
            <motion.span
              variants={{ hover: { rotate: 12, x: 2 } }}
              className="inline-block text-accent"
            >
              /&gt;
            </motion.span>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full px-4 py-2 font-mono text-sm text-paper/70 transition-colors hover:text-accent hover:bg-paper/5"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-primary"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-full p-2 text-paper hover:bg-paper/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="glass mt-2 rounded-2xl p-4 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="rounded-xl px-4 py-3 text-left font-mono text-sm text-paper/80 hover:bg-paper/5 hover:text-accent"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 font-mono text-sm text-primary"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
