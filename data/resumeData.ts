export type ResumeLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ResumeIntroData = {
  name: string;
  tags: string[];
};

export type ResumeTimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  href?: string;
  logo?: ResumeLogo;
  points?: string[];
};

export type ResumeTimelineSection = {
  id: string;
  title: string;
  items: ResumeTimelineItem[];
};

export type ResumeSkillItem = {
  id: string;
  label: string;
  icon: ResumeLogo;
};

export type ResumeSkillGroup = {
  id: string;
  items: ResumeSkillItem[];
};

export type ResumeSkillsSection = {
  id: string;
  title: string;
  groups: ResumeSkillGroup[];
};

export type ResumeActionLink = {
  id: string;
  label: string;
  href: string;
};

export type ResumeCertificationItem = {
  id: string;
  title: string;
  subtitle: string;
  logo?: ResumeLogo;
  actions: ResumeActionLink[];
};

export type ResumeCertificationSection = {
  id: string;
  title: string;
  items: ResumeCertificationItem[];
};

export type ResumeProjectItem = {
  id: string;
  title: string;
  href?: string;
  logo?: ResumeLogo;
  points: string[];
};

export type ResumeProjectsSection = {
  id: string;
  title: string;
  items: ResumeProjectItem[];
};

export type ResumePageData = {
  intro: ResumeIntroData;
  timelineSections: ResumeTimelineSection[];
  skillsSection: ResumeSkillsSection;
  certificationSection: ResumeCertificationSection;
  projectsSection: ResumeProjectsSection;
};

export const resumeData: ResumePageData = {
  intro: {
    name: "Amar Jyoti",
    tags: ["PGDM", "Business Analysis", "Finance"],
  },

  timelineSections: [
    {
      id: "experience",
      title: "EXPERIENCE",
      items: [
        {
          id: "youtube-content-creator",
          title: "Content Creator / Python Tutor",
          subtitle: "YouTube",
          date: "March 2024 - Present",
          href: "https://www.youtube.com/@PremierProgrammer",
          logo: {
            src: "/images/logos/youtube.png",
            alt: "YouTube logo",
            width: 48,
            height: 34,
          },
          points: [
            "Created **139+** Python tutorial videos for beginner learners.",
            "Developed **30+ hours** of course content, **700+** coding questions and **25+** hands-on projects.",
            "Reached **13K+** views, and received positive learner feedback.",
          ],
        },
        {
          id: "upwork-freelance",
          title: "Freelance Website Designer & Graphic Designer",
          subtitle: "Upwork",
          date: "May 2024 - Aug 2024",
          href: "https://www.upwork.com/freelancers/~012347d15afb9bf4dc",
          logo: {
            src: "/images/logos/upwork.png",
            alt: "Upwork logo",
            width: 46,
            height: 46,
          },
          points: [
            "Designed websites and graphic assets for international clients (**USA & Sri Lanka**).",
            "Created **500+ AI-generated images** for a client project with quality and consistency.",
            "Managed **client requirements, design execution, and timely delivery**.",
          ],
        },
      ],
    },
    {
      id: "education",
      title: "EDUCATION",
      items: [
        {
          id: "ims-pgdm",
          title: "Post Graduate Diploma in Management (PGDM), [Finance | Analytics]",
          subtitle: "IMS Ghaziabad",
          date: "2027",
          href: "https://www.ims-ghaziabad.ac.in/",
          logo: {
            src: "/images/logos/ims.png",
            alt: "IMS Ghaziabad logo",
            width: 60,
            height: 28,
          },
        },
        {
          id: "galgotias-btech",
          title: "Bachelor of Technology (B.Tech in CSE AI & Data Science Specialization)",
          subtitle: "Galgotias University, Greater Noida",
          date: "June 2024",
          href: "https://certificates.galgotiasuniversity.edu.in/verify/2024/0c44fecf-10c5-490d-b3e6-8703ee08a064",
          logo: {
            src: "/images/logos/galgotias.png",
            alt: "Galgotias logo",
            width: 48,
            height: 48,
          },
          points: ["Graduated with **Distinction**", "CGPA: **8.81**"],
        },
        {
          id: "evergreen-class-12",
          title: "Class XII (CBSE)",
          subtitle: "Evergreen Public School, New Delhi",
          date: "July 2020",
          href: "https://drive.google.com/file/d/18roR6Zg9wnQ-xR_khz_N3tBCSqHLr0zu/view?usp=sharing",
          logo: {
            src: "/images/logos/evergreen.png",
            alt: "Evergreen Public School logo",
            width: 48,
            height: 48,
          },
          points: ["Final Grade: **86%**"],
        },
        {
          id: "xaviers-class-10",
          title: "Class X (ICSE)",
          subtitle: "St. Xavier's High School, Patna",
          date: "July 2020",
          href: "https://drive.google.com/file/d/1V9sVB0DCeHliFPSoiiumUZ8s1iY-xW5w/view?usp=sharing",
          logo: {
            src: "/images/logos/xaviers.png",
            alt: "St. Xavier's High School logo",
            width: 48,
            height: 48,
          },
          points: ["Final Grade: **92.2%**"],
        },
      ],
    },
  ],

  skillsSection: {
    id: "skills",
    title: "SKILLS",
    groups: [
      {
        id: "skills-group-1",
        items: [
          {
            id: "ms-word",
            label: "MS Word",
            icon: {
              src: "/images/skills/word.png",
              alt: "MS Word icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "ms-excel",
            label: "MS Excel",
            icon: {
              src: "/images/skills/excel.png",
              alt: "MS Excel icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "ms-powerpoint",
            label: "MS Powerpoint",
            icon: {
              src: "/images/skills/powerpoint.png",
              alt: "MS Powerpoint icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "power-bi",
            label: "Power BI",
            icon: {
              src: "/images/skills/powerbi.png",
              alt: "Power BI icon",
              width: 34,
              height: 34,
            },
          },
        ],
      },
      {
        id: "skills-group-2",
        items: [
          {
            id: "python",
            label: "Python",
            icon: {
              src: "/images/skills/python.png",
              alt: "Python icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "numpy",
            label: "Numpy",
            icon: {
              src: "/images/skills/numpy.png",
              alt: "Numpy icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "pandas",
            label: "Pandas",
            icon: {
              src: "/images/skills/pandas.png",
              alt: "Pandas icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "matplotlib",
            label: "Matplotlib",
            icon: {
              src: "/images/skills/idvwpDn6Co.png",
              alt: "Matplotlib icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "seaborn",
            label: "Seaborn",
            icon: {
              src: "/images/skills/seaborn.png",
              alt: "Seaborn icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "pytorch",
            label: "Pytorch",
            icon: {
              src: "/images/skills/pytorch.png",
              alt: "Pytorch icon",
              width: 34,
              height: 34,
            },
          },
        ],
      },
    ],
  },

  certificationSection: {
    id: "certification",
    title: "CERTIFICATION",
    items: [
      {
        id: "udemy-python-ml",
        title: "Python for Data Science and Machine Learning Bootcamp",
        subtitle: "Udemy",
        logo: {
          src: "/images/logos/udemy.png",
          alt: "Udemy logo",
          width: 52,
          height: 52,
        },
        actions: [
          {
            id: "udemy-python-ml-cert-1",
            label: "Show Certificate",
            href: "https://www.udemy.com/certificate/UC-1ddece34-9af6-4618-8db6-08e99cb623f5/",
          },
          
        ],
      },
      {
        id: "ibm-ai-fundamentals",
        title: "Artificial Intelligence Fundamentals",
        subtitle: "IBM",
        logo: {
          src: "/images/logos/ibm.png",
          alt: "IBM logo",
          width: 52,
          height: 24,
        },
        actions: [
          {
            id: "ibm-ai-fundamentals-cert",
            label: "Show Certificate",
            href: "https://skills.yourlearning.ibm.com/certificate/PLAN-7913EE1DB030",
          },
        ],
      },
      {
        id: "udemy-maths-genai",
        title: "Mathematics-Basics to Advance for Data Science and GenAI",
        subtitle: "Udemy",
        logo: {
          src: "/images/logos/udemy.png",
          alt: "Udemy logo",
          width: 52,
          height: 52,
        },
        actions: [
          {
            id: "udemy-maths-genai-cert",
            label: "Show Certificate",
            href: "https://www.udemy.com/certificate/UC-e0fe2007-16e0-4546-b693-1c6e4b62e4c7/",
          },
        ],
      },
    ],
  },

  projectsSection: {
    id: "projects",
    title: "PROJECTS",
    items: [
      {
        id: "finnacle-club-website",
        title: "Finnacle Club IMS Website Development",
        href: "https://finnacle-ims.vercel.app/",
        logo: {
          src: "/images/logos/finnacle.jpg",
          alt: "Project logo",
          width: 52,
          height: 52,
        },
        points: [
          "Developed an **IMS website for Finnacle Club** to manage and organize club-related information and activities.",
          "Applied **problem-solving, web development, and system design** to build the website.",
        ],
      },
      {
        id: "laptop-price-prediction",
        title: "Laptop Price Prediction using Feature Engineering and Linear Regression",
        href: "https://github.com/Amar-cmd/Prediction---Laptop-Price",
        logo: {
          src: "/images/logos/github.png",
          alt: "Project logo",
          width: 52,
          height: 52,
        },
        points: [
          "Built an **ML model** to predict laptop prices using **feature engineering** and **linear regression**.",
          "Performed **data cleaning, preprocessing, and feature transformation** to improve model input quality.",
        ],
      },
    ],
  },
};
