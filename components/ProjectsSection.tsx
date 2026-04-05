"use client";

import { motion } from "motion/react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { revealUp, staggerContainer } from "@/lib/motion";
import { ResumeProjectsSection } from "@/data/resumeData";

type ProjectsSectionProps = {
  data: ResumeProjectsSection;
};

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <motion.section
      className="resume-block"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <SectionHeading title={data.title} />

      <motion.div className="project-cards" variants={staggerContainer}>
        {data.items.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </motion.div>
    </motion.section>
  );
}
