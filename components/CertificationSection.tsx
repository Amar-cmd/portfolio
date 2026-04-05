"use client";

import { motion } from "motion/react";
import CertificationCard from "@/components/CertificationCard";
import SectionHeading from "@/components/SectionHeading";
import { revealUp, staggerContainer } from "@/lib/motion";
import { ResumeCertificationSection } from "@/data/resumeData";

type CertificationSectionProps = {
  data: ResumeCertificationSection;
};

export default function CertificationSection({ data }: CertificationSectionProps) {
  return (
    <motion.section
      className="resume-block"
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <SectionHeading title={data.title} />

      <motion.div className="cert-cards" variants={staggerContainer}>
        {data.items.map((item) => (
          <CertificationCard key={item.id} item={item} />
        ))}
      </motion.div>
    </motion.section>
  );
}
