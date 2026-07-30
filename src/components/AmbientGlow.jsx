"use client";

import { motion } from "framer-motion";

export default function AmbientGlow({ side = "left" }) {
  const position = side === "left" ? "-left-32" : "-right-32";
  return (
    <motion.div
      aria-hidden="true"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute ${position} top-1/3 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[110px]`}
    />
  );
}
