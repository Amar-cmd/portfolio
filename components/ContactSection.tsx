"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ContactSocialLink } from "@/data/siteData";
import { revealUp, staggerContainer, staggerItem } from "@/lib/motion";

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
      className="contact-page-section contact-page-section-simple"
      variants={revealUp}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="contact-simple-card"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="contact-simple-copy" variants={staggerItem}>
          <span className="contact-simple-kicker">CONTACT</span>
          <h1>{data.heading}</h1>
          <p>{data.description}</p>
        </motion.div>

        <motion.a
          variants={staggerItem}
          className="resume-button contact-email-button"
          href={`mailto:${data.recipientEmail}`}
        >
          {data.emailLabel}
        </motion.a>

        <motion.div className="contact-simple-socials" variants={staggerContainer}>
          {data.socialLinks.map((link) => (
            <motion.a
              key={link.ariaLabel}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
              className="contact-simple-social-link"
              variants={staggerItem}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={link.iconSrc}
                alt={link.iconAlt}
                width={34}
                height={34}
                className="contact-simple-social-icon"
              />
              <span>{link.ariaLabel}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
