"use client";

import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import SkillChip from "@/components/SkillChip";
import { revealUp, staggerContainer } from "@/lib/motion";
import { ResumeSkillsSection } from "@/data/resumeData";

type SkillsSectionProps = {
  data: ResumeSkillsSection;
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  return (
    <motion.section
      className="resume-block"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <SectionHeading title={data.title} />

      <div className="skills-groups">
        {data.groups.map((group) => (
          <motion.div key={group.id} className="skills-row" variants={staggerContainer}>
            {group.items.map((item) => (
              <SkillChip key={item.id} item={item} />
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
