"use client";

import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import AmbientGlow from "./AmbientGlow";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientGlow side="right" />
      <div className="container-page">
        <SectionHeading
          eyebrow="projects"
          title="Selected work."
          description="A few of the products I've designed, built, and shipped."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
