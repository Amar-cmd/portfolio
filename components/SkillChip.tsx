"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { chipHover, staggerItem } from "@/lib/motion";
import { ResumeSkillItem } from "@/data/resumeData";

type SkillChipProps = {
  item: ResumeSkillItem;
};

export default function SkillChip({ item }: SkillChipProps) {
  return (
    <motion.div
      className="skill-chip"
      variants={staggerItem}
      whileHover={chipHover}
      whileTap={{ scale: 0.99 }}
    >
      {item.icon ? (
        <Image
          src={item.icon.src}
          alt={item.icon.alt}
          width={item.icon.width}
          height={item.icon.height}
          className="skill-chip-icon"
        />
      ) : null}
      <span className="skill-chip-label">{item.label}</span>
    </motion.div>
  );
}
