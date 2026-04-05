"use client";

import { motion } from "motion/react";
import CardItem from "@/components/CardItem";
import SectionHeading from "@/components/SectionHeading";
import { revealUp, staggerContainer } from "@/lib/motion";
import { ResumeTimelineSection } from "@/data/resumeData";

type CardSectionProps = {
  section: ResumeTimelineSection;
};

export default function CardSection({ section }: CardSectionProps) {
  return (
    <motion.section
      className="resume-block"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionHeading title={section.title} />

      <motion.div className="repeating-section-cards" variants={staggerContainer}>
        {section.items.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </motion.div>
    </motion.section>
  );
}
