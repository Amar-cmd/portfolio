export const easeOut = [0.22, 1, 0.36, 1] as const;

export const pageEnter = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
    },
  },
};

export const revealUp = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: easeOut,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: easeOut,
    },
  },
};

export const buttonHover = {
  y: -2,
  scale: 1.01,
  transition: {
    type: "spring" as const,
    stiffness: 320,
    damping: 24,
  },
};

export const cardHover = {
  y: -4,
  transition: {
    duration: 0.22,
    ease: easeOut,
  },
};

export const chipHover = {
  y: -2,
  transition: {
    duration: 0.18,
    ease: easeOut,
  },
};
