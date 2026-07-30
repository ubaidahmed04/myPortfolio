"use client";

import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { githubUsername } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function GithubActivity() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="activity" title="GitHub contributions." align="center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="card-surface mt-10 flex justify-center overflow-x-auto rounded-2xl p-6"
        >
          <GitHubCalendar
            username={githubUsername}
            blockMargin={6}
            blockRadius={4}
            blockSize={11}
            fontSize={12}
            colorScheme="dark"
            theme={{
              dark: ["#19183B", "#242256", "#556B74", "#708993", "#A1C2BD"],
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
