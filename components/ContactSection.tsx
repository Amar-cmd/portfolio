"use client";

import { motion } from "motion/react";
import { ContactSocialLink } from "@/data/siteData";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";
import styles from "./ContactSection.module.css";

type ContactSectionProps = {
  data: {
    heading: string;
    description: string;
    recipientEmail: string;
    emailLabel: string;
    socialLinks: ContactSocialLink[];
  };
};

export default function ContactSection({ data }: ContactSectionProps) {
  return (
    <motion.section
      className={styles.section}
      variants={revealUp}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.frame}>
        <motion.div
          className={styles.main}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.kicker} variants={staggerItem}>
            Contact
          </motion.p>

          <motion.h1 className={styles.title} variants={staggerItem}>
            <span>{data.heading}</span>
            <em>about useful products.</em>
          </motion.h1>

          <motion.p className={styles.description} variants={staggerItem}>
            {data.description}
          </motion.p>

          <motion.a
            variants={staggerItem}
            className={styles.emailButton}
            href={`mailto:${data.recipientEmail}`}
            whileTap={{ scale: 0.99 }}
          >
            <span>{data.emailLabel}</span>
            <span className={styles.emailArrow} aria-hidden="true">
              ↗
            </span>
          </motion.a>

          <motion.a
            variants={staggerItem}
            className={styles.emailAddress}
            href={`mailto:${data.recipientEmail}`}
          >
            {data.recipientEmail}
          </motion.a>
        </motion.div>

        <motion.aside
          className={styles.aside}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.asideIntro} variants={staggerItem}>
            <span className={styles.asideLabel}>Best fit</span>
            <p>AI Product, Product Analytics and GenAI-focused work.</p>
          </motion.div>

          <motion.div className={styles.socialBlock} variants={staggerItem}>
            <span className={styles.socialLabel}>Elsewhere</span>
            <div className={styles.socialList}>
              {data.socialLinks.map((link) => (
                <motion.a
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className={styles.socialLink}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>{link.ariaLabel}</span>
                  <span className={styles.socialArrow} aria-hidden="true">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
