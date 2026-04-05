"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";
import { ResumePageData } from "@/data/resumeData";

type ResumeIntroCardProps = {
  data: ResumePageData["intro"];
};

export default function ResumeIntroCard({ data }: ResumeIntroCardProps) {
  return (
    <motion.div
      className="resume-intro-card"
      variants={revealUp}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="resume-intro-title" variants={staggerItem}>
        {data.name}
      </motion.h1>

      <motion.div
        className="resume-intro-tags"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {data.tags.map((tag, index) => (
          <Fragment key={tag}>
            <motion.span className="resume-intro-tag" variants={staggerItem}>
              {tag}
            </motion.span>
            {index < data.tags.length - 1 ? (
              <motion.span className="resume-intro-separator" variants={staggerItem}>
                |
              </motion.span>
            ) : null}
          </Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
}
