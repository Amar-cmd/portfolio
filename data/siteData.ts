export type NavLink = {
  label: string;
  href: string;
};

export type HeroData = {
  heading: string;
  role: string;
  primaryCta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type ContactField = {
  name: "name" | "email" | "subject" | "message";
  hint: string;
  type: "text" | "email" | "textarea";
};

export type ContactSocialLink = {
  href: string;
  ariaLabel: string;
  iconSrc: string;
  iconAlt: string;
};

export type SiteData = {
  nav: {
    leftLabel: string;
    rightLinks: NavLink[];
    resumeButton: {
      label: string;
      href: string;
    };
  };
  hero: HeroData;
  liteHero: {
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
  contactPage: {
    heading: string;
    submitLabel: string;
    recipientEmail: string;
    fields: ContactField[];
    socialLinks: ContactSocialLink[];
  };
};

export const siteData: SiteData = {
  nav: {
    leftLabel: "Amar Jyoti",
    rightLinks: [
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    resumeButton: {
      label: "View Resume",
      href: "/resume",
    },
  },

  hero: {
    heading: "Amar Jyoti",
    role: "Finance | Business Analyst",
    primaryCta: {
      label: "View Resume",
      href: "/resume",
    },
    image: {
      src: "/images/profile.png",
      alt: "Amar Jyoti portrait",
    },
  },

  liteHero: {
    heading: "Amar Jyoti",
    role: "Finance | Business Analyst",
    primaryCta: {
      label: "View Resume",
      href: "/resume",
    },
    contactLink: {
      label: "Contact",
      href: "/contact",
    },
  },

  contactPage: {
    heading: "Let's talk",
    submitLabel: "Send",
    recipientEmail: "amarentp23@gmail.com",
    fields: [
      {
        name: "name",
        hint: "Name",
        type: "text",
      },
      {
        name: "email",
        hint: "Email",
        type: "email",
      },
      {
        name: "subject",
        hint: "Subject",
        type: "text",
      },
      {
        name: "message",
        hint: "Message",
        type: "textarea",
      },
    ],
    socialLinks: [
      {
        href: "https://www.youtube.com/@PremierProgrammer",
        ariaLabel: "YouTube",
        iconSrc: "/images/social/youtube.png",
        iconAlt: "YouTube icon",
      },
      {
        href: "https://www.linkedin.com/in/a-jyoti/",
        ariaLabel: "LinkedIn",
        iconSrc: "/images/social/linkedin.png",
        iconAlt: "LinkedIn icon",
      },
      {
        href: "tel:+919667284567",
        ariaLabel: "Phone",
        iconSrc: "/images/social/phone.png",
        iconAlt: "Phone icon",
      },
      {
        href: "https://instagram.com",
        ariaLabel: "Instagram",
        iconSrc: "/images/social/instagram.png",
        iconAlt: "Instagram icon",
      },
    ],
  },
};
