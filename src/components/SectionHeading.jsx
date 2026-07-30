"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="eyebrow"
      >
        {`// ${eyebrow}`}
      </motion.span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-paper">
        {title}
      </h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: align === "center" ? "center" : "left" }}
        className="mt-4 block h-px w-16 bg-accent/60"
      />
      {description && (
        <p className="mt-4 text-paper/60 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
