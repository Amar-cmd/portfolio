"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { buttonHover, revealUp, staggerContainer, staggerItem } from "@/lib/motion";
import { HeroData } from "@/data/siteData";

type HeroProps = {
  data: HeroData;
};

export default function Hero({ data }: HeroProps) {
  return (
    <motion.section
      className="hero-section"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-content" variants={staggerContainer}>
        <motion.h1 className="hero-title hero-gradient-title" variants={staggerItem}>
          {data.heading}
        </motion.h1>
        <motion.p className="hero-subtitle" variants={staggerItem}>
          {data.role}
        </motion.p>

        <motion.div variants={staggerItem} whileHover={buttonHover} whileTap={{ scale: 0.985 }}>
          <Link href={data.primaryCta.href} className="resume-button hero-resume-button">
            {data.primaryCta.label}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-wrap"
        variants={revealUp}
        whileHover={{ y: -4, transition: { duration: 0.22 } }}
      >
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={680}
          height={840}
          priority
          className="hero-image"
        />
      </motion.div>
    </motion.section>
  );
}
