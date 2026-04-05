"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { buttonHover, staggerContainer, staggerItem } from "@/lib/motion";

type LiteHeroProps = {
  data: {
    heading: string;
    role: string;
    primaryCta: {
      label: string;
      href: string;
    };
    contactLink: {
      label: string;
      href: string;
    };
  };
};

export default function LiteHero({ data }: LiteHeroProps) {
  return (
    <motion.section
      className="lite-hero"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="lite-top-label" variants={staggerItem}>
        Amar Jyoti
      </motion.p>

      <motion.h1 className="lite-title hero-gradient-title" variants={staggerItem}>
        {data.heading}
      </motion.h1>
      <motion.p className="lite-subtitle" variants={staggerItem}>
        {data.role}
      </motion.p>

      <motion.div className="lite-actions" variants={staggerItem}>
        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.985 }}>
          <Link href={data.primaryCta.href} className="resume-button lite-resume-button">
            {data.primaryCta.label}
          </Link>
        </motion.div>

        <Link href={data.contactLink.href} className="lite-contact-link">
          {data.contactLink.label}
        </Link>
      </motion.div>
    </motion.section>
  );
}
