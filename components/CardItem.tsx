"use client";

import Image from "next/image";
import { motion } from "motion/react";
import InlineRichText from "@/components/InlineRichText";
import { cardHover, staggerItem } from "@/lib/motion";
import { ResumeTimelineItem } from "@/data/resumeData";

type CardItemProps = {
  item: ResumeTimelineItem;
};

export default function CardItem({ item }: CardItemProps) {
  const cardClassName = item.points?.length
    ? "repeating-card"
    : "repeating-card repeating-card-no-points";
  const cardProps = item.href
    ? {
        href: item.href,
        target: "_blank",
        rel: "noreferrer",
      }
    : {};

  return (
    <motion.a
      className={cardClassName}
      variants={staggerItem}
      whileHover={cardHover}
      whileTap={{ scale: 0.998 }}
      {...cardProps}
    >
      <div className="repeating-card-logo-slot">
        {item.logo ? (
          <Image
            src={item.logo.src}
            alt={item.logo.alt}
            width={item.logo.width}
            height={item.logo.height}
            className="repeating-card-logo"
          />
        ) : null}
      </div>

      <div className="repeating-card-content">
        <h3 className="repeating-card-title">
          <InlineRichText text={item.title} />
        </h3>
        <p className="repeating-card-subtitle">
          <InlineRichText text={item.subtitle} />
        </p>

        {item.points?.length ? (
          <ul className="repeating-card-points">
            {item.points.map((point) => (
              <li key={point}>
                <InlineRichText text={point} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <p className="repeating-card-date">{item.date}</p>
    </motion.a>
  );
}
