"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { buttonHover, revealUp, staggerContainer, staggerItem } from "@/lib/motion";
import { ContactField, ContactSocialLink } from "@/data/siteData";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactSectionProps = {
  data: {
    heading: string;
    submitLabel: string;
    recipientEmail: string;
    fields: ContactField[];
    socialLinks: ContactSocialLink[];
  };
};

function buildGmailComposeUrl(params: {
  to: string;
  subject: string;
  body: string;
}) {
  const searchParams = new URLSearchParams({
    view: "cm",
    fs: "1",
    tf: "cm",
    to: params.to,
    su: params.subject,
    body: params.body,
  });

  return `https://mail.google.com/mail/u/0/?${searchParams.toString()}`;
}

function ContactInputField({
  field,
  value,
  onChange,
}: {
  field: ContactField;
  value: string;
  onChange: (name: keyof FormValues, value: string) => void;
}) {
  const isTextarea = field.type === "textarea";

  const autoCompleteValue =
    field.name === "name" ? "name" : field.name === "email" ? "email" : "off";

  return (
    <motion.div className="contact-field" variants={staggerItem}>
      <div className="floating-field">
        {isTextarea ? (
          <textarea
            id={field.name}
            name={field.name}
            placeholder=" "
            required
            rows={1}
            className="contact-input contact-textarea"
            value={value}
            onChange={(event) => onChange(field.name, event.target.value)}
          />
        ) : (
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder=" "
            required
            autoComplete={autoCompleteValue}
            className="contact-input"
            value={value}
            onChange={(event) => onChange(field.name, event.target.value)}
          />
        )}

        <label htmlFor={field.name} className="floating-label">
          {field.hint}
        </label>
      </div>
    </motion.div>
  );
}

export default function ContactSection({ data }: ContactSectionProps) {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (name: keyof FormValues, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = formValues.subject.trim();
    const body = [
      `Name: ${formValues.name.trim()}`,
      `Email: ${formValues.email.trim()}`,
      "",
      "Message:",
      formValues.message.trim(),
    ].join("\n");

    const gmailUrl = buildGmailComposeUrl({
      to: data.recipientEmail,
      subject,
      body,
    });

    const opened = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = gmailUrl;
    }
  };

  return (
    <motion.section
      className="contact-page-section"
      variants={revealUp}
      initial="hidden"
      animate="visible"
    >
      <div className="contact-center-frame">
        <motion.div
          className="contact-heading-row"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="contact-heading-dot" />
          <h1 className="contact-heading">{data.heading}</h1>
        </motion.div>

        <div className="contact-card">
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {data.fields.map((field) => (
              <ContactInputField
                key={field.name}
                field={field}
                value={formValues[field.name]}
                onChange={handleChange}
              />
            ))}

            <motion.button
              type="submit"
              className="resume-button contact-submit-button"
              whileHover={buttonHover}
              whileTap={{ scale: 0.985 }}
              variants={staggerItem}
            >
              {data.submitLabel}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          className="contact-socials"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {data.socialLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <motion.a
                key={link.ariaLabel}
                href={link.href}
                className="contact-social-link"
                aria-label={link.ariaLabel}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                variants={staggerItem}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <Image
                  src={link.iconSrc}
                  alt={link.iconAlt}
                  width={38}
                  height={38}
                  className="contact-social-icon"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
