"use client";

import { motion } from "motion/react";
import { cardHover, staggerItem } from "@/lib/motion";
import { ResumeCertificationItem } from "@/data/resumeData";

type CertificationCardProps = { item: ResumeCertificationItem };

export default function CertificationCard({ item }: CertificationCardProps) {
  return (
    <motion.article className="cert-card" variants={staggerItem} whileHover={cardHover} whileTap={{ scale: 0.998 }}>
      <div className="cert-card-main">
        <div className="cert-card-logo-slot">
          {item.logo ? <img src={item.logo.src} alt={item.logo.alt} width={item.logo.width} height={item.logo.height} className="cert-card-logo" loading="lazy" /> : null}
        </div>
        <div className="cert-card-content">
          <h3 className="cert-card-title">{item.title}</h3>
          <p className="cert-card-subtitle">{item.subtitle}</p>
          {item.actions.length ? <div className="cert-card-actions">{item.actions.map(action => (
            <motion.a key={action.id} href={action.href} className="cert-card-action" target="_blank" rel="noreferrer" whileHover={{ y: -1 }} whileTap={{ scale: 0.985 }}>{action.label}</motion.a>
          ))}</div> : null}
        </div>
      </div>
    </motion.article>
  );
}
