"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { buttonHover, easeOut, revealUp, staggerContainer, staggerItem } from "@/lib/motion";
import { NavLink } from "@/data/siteData";

type HeaderProps = {
  leftLabel: string;
  rightLinks: NavLink[];
  resumeButton: {
    label: string;
    href: string;
  };
  activePath?: string;
  showBrandUnderline?: boolean;
};

export default function Header({
  leftLabel,
  rightLinks,
  resumeButton,
  activePath,
  showBrandUnderline = false,
}: HeaderProps) {
  return (
    <motion.header
      className="site-header"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="brand-block" variants={staggerItem}>
        <Link href="/" className="brand-name">
          {leftLabel}
        </Link>

        {showBrandUnderline ? (
          <motion.span
            className="brand-underline"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.18, ease: easeOut }}
          />
        ) : null}
      </motion.div>

      <motion.div className="header-actions" variants={revealUp}>
        <motion.nav className="header-nav" variants={staggerContainer}>
          {rightLinks.map((link) => {
            const isActive = activePath === link.href;

            return (
              <motion.div key={link.label} variants={staggerItem}>
                <Link
                  href={link.href}
                  className={`header-link ${isActive ? "header-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.985 }}>
          <Link href={resumeButton.href} className="resume-button top-resume-button">
            {resumeButton.label}
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}
