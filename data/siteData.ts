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
    description: string;
    recipientEmail: string;
    emailLabel: string;
    socialLinks: ContactSocialLink[];
  };
};

export const siteData: SiteData = {
  nav: {
    leftLabel: "Amar Jyoti",
    rightLinks: [
      { label: "Work", href: "/#work" },
      { label: "About", href: "/#about" },
      { label: "Experience", href: "/#experience" },
      { label: "Contact", href: "/#contact" },
    ],
    resumeButton: {
      label: "Resume",
      href: "/resume",
    },
  },

  hero: {
    heading: "Amar Jyoti",
    role: "AI Product · Product Analytics · GenAI",
    primaryCta: {
      label: "View selected work",
      href: "/#work",
    },
    image: {
      src: "/images/profile.png",
      alt: "Amar Jyoti portrait",
    },
  },

  liteHero: {
    heading: "Amar Jyoti",
    role: "AI Product · Product Analytics · GenAI",
    primaryCta: {
      label: "Resume",
      href: "/resume",
    },
    contactLink: {
      label: "Contact",
      href: "/#contact",
    },
  },

  contactPage: {
    heading: "Let’s talk",
    description:
      "For AI Product, Product Analytics, Technical Product, AI Solutions or GenAI-focused opportunities, email me directly or connect through one of the professional profiles below.",
    recipientEmail: "amarentp23@gmail.com",
    emailLabel: "Send an email",
    socialLinks: [
      {
        href: "https://www.linkedin.com/in/a-jyoti/",
        ariaLabel: "LinkedIn",
        iconSrc: "/images/social/linkedin.png",
        iconAlt: "LinkedIn icon",
      },
      {
        href: "https://github.com/Amar-cmd",
        ariaLabel: "GitHub",
        iconSrc: "/images/logos/github.png",
        iconAlt: "GitHub icon",
      },
      {
        href: "https://www.youtube.com/@PremierProgrammer",
        ariaLabel: "YouTube",
        iconSrc: "/images/social/youtube.png",
        iconAlt: "YouTube icon",
      },
    ],
  },
};
