"use client";

import Image from "next/image";
import { motion } from "motion/react";
import InlineRichText from "@/components/InlineRichText";
import { cardHover, staggerItem } from "@/lib/motion";
import { ResumeProjectItem } from "@/data/resumeData";

type ProjectCardProps = {
  item: ResumeProjectItem;
};

export default function ProjectCard({ item }: ProjectCardProps) {
  const cardProps = item.href
    ? {
        href: item.href,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <motion.a
      className="project-card"
      variants={staggerItem}
      whileHover={cardHover}
      whileTap={{ scale: 0.998 }}
      {...cardProps}
    >
      <div className="project-card-logo-slot">
        {item.logo ? (
          <Image
            src={item.logo.src}
            alt={item.logo.alt}
            width={item.logo.width}
            height={item.logo.height}
            className="project-card-logo"
          />
        ) : null}
      </div>

      <div className="project-card-content">
        <h3 className="project-card-title">
          <InlineRichText text={item.title} />
        </h3>

        <ul className="project-card-points">
          {item.points.map((point) => (
            <li key={point}>
              <InlineRichText text={point} />
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}
