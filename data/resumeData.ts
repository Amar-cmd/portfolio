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
  icon?: ResumeLogo;
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
    tags: ["AI Product", "Product Analytics", "GenAI SaaS", "SQL & Python"],
  },

  timelineSections: [
    {
      id: "experience",
      title: "EXPERIENCE",
      items: [
        {
          id: "fooracles-product-research",
          title: "Product Testing & Research Intern",
          subtitle: "Fooracles",
          date: "May 2026 – Jul 2026",
          points: [
            "Benchmarked **18 SaaS competitors** and conducted detailed feature and UX/UI analysis of **10 key products** to identify product gaps, usability issues and improvement opportunities.",
            "Synthesized findings into product and interface recommendations for Fooracles.",
            "Redesigned dashboard and selected UI elements in Figma; **selected recommendations were adopted** in the product interface.",
          ],
        },
        {
          id: "premier-programmer",
          title: "Founder & Technical Educator",
          subtitle: "Premier Programmer",
          date: "Mar 2024 – Present",
          href: "https://www.youtube.com/@PremierProgrammer",
          logo: {
            src: "/images/logos/youtube.png",
            alt: "YouTube logo",
            width: 48,
            height: 34,
          },
          points: [
            "Published **165+ Python tutorials** covering **40+ hours** of structured learning content.",
            "Created **750+ coding questions** and **25 hands-on projects** for practical learning.",
            "Reached **21K+ views** and **125+ learner comments** through code-focused educational content.",
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
          title: "PGDM — Finance & Business Analytics",
          subtitle: "Institute of Management Studies (IMS) Ghaziabad",
          date: "2025 – 2027",
          href: "https://www.ims-ghaziabad.ac.in/",
          logo: {
            src: "/images/logos/ims.png",
            alt: "IMS Ghaziabad logo",
            width: 60,
            height: 28,
          },
          points: ["Year 1 CGPA: **9.27 / 10**", "Finance Core Member, **Finnacle — The Finance Club**"],
        },
        {
          id: "galgotias-btech",
          title: "B.Tech — Computer Science & Engineering (AI & Data Science)",
          subtitle: "Galgotias University",
          date: "2020 – 2024",
          logo: {
            src: "/images/logos/galgotias.png",
            alt: "Galgotias University logo",
            width: 48,
            height: 48,
          },
          points: ["CGPA: **8.81 / 10**", "First Class with **Distinction**"],
        },
        {
          id: "evergreen-class-12",
          title: "Class XII (CBSE)",
          subtitle: "Evergreen Public School",
          date: "2020",
          logo: {
            src: "/images/logos/evergreen.png",
            alt: "Evergreen Public School logo",
            width: 48,
            height: 48,
          },
          points: ["Final Grade: **85.4%**"],
        },
        {
          id: "xaviers-class-10",
          title: "Class X (ICSE)",
          subtitle: "St. Xavier's High School, Patna",
          date: "2017",
          logo: {
            src: "/images/logos/xaviers.png",
            alt: "St. Xavier's High School logo",
            width: 48,
            height: 48,
          },
          points: ["Final Grade: **90.6%**"],
        },
      ],
    },
  ],

  skillsSection: {
    id: "skills",
    title: "SKILLS",
    groups: [
      {
        id: "analytics-skills",
        items: [
          { id: "sql", label: "SQL / PostgreSQL" },
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
            id: "power-bi",
            label: "Power BI",
            icon: {
              src: "/images/skills/powerbi.png",
              alt: "Power BI icon",
              width: 34,
              height: 34,
            },
          },
          {
            id: "excel",
            label: "Advanced Excel",
            icon: {
              src: "/images/skills/excel.png",
              alt: "Excel icon",
              width: 34,
              height: 34,
            },
          },
          { id: "data-visualization", label: "Data Cleaning & Visualization" },
        ],
      },
      {
        id: "ai-product-skills",
        items: [
          { id: "genai", label: "Generative AI / LLM APIs" },
          { id: "prompt-design", label: "Prompt Design" },
          { id: "human-loop", label: "Human-in-the-Loop AI" },
          { id: "evaluation-workflows", label: "AI Evaluation Workflows" },
          { id: "nextjs", label: "Next.js" },
          { id: "typescript", label: "TypeScript" },
          { id: "supabase", label: "Supabase / Auth / RLS" },
          { id: "figma", label: "Figma" },
        ],
      },
      {
        id: "product-business-skills",
        items: [
          { id: "product-analytics", label: "Product Analytics" },
          { id: "business-analytics", label: "Business Analytics" },
          { id: "competitive-analysis", label: "SaaS Competitive Analysis" },
          { id: "product-testing", label: "Product Testing" },
          { id: "ux-research", label: "UX Research" },
          { id: "workflow-analysis", label: "Workflow Analysis" },
        ],
      },
    ],
  },

  certificationSection: {
    id: "certification",
    title: "CERTIFICATIONS & ACHIEVEMENTS",
    items: [
      {
        id: "pcap-python",
        title: "PCAP — Certified Associate in Python Programming",
        subtitle: "Cisco / OpenEDG",
        actions: [],
      },
      {
        id: "oracle-sql",
        title: "Oracle Academy SQL",
        subtitle: "Oracle Academy",
        actions: [],
      },
      {
        id: "meity-genai",
        title: "Generative AI Literacy",
        subtitle: "Ministry of Electronics and Information Technology, Government of India",
        actions: [],
      },
      {
        id: "aima-qualifier",
        title: "Regional Qualifier — AIMA Business Simulation",
        subtitle: "AIMA",
        actions: [],
      },
      {
        id: "merit-scholarship",
        title: "₹50,000 B.Tech Merit Scholarship",
        subtitle: "Galgotias University",
        logo: {
          src: "/images/logos/galgotias.png",
          alt: "Galgotias University logo",
          width: 48,
          height: 48,
        },
        actions: [],
      },
    ],
  },

  projectsSection: {
    id: "projects",
    title: "SELECTED PROJECTS",
    items: [
      {
        id: "project-z",
        title: "AI Subjective Evaluation Engine (Project Z)",
        href: "https://projectz.vercel.app",
        points: [
          "Built and deployed a **professor-first GenAI SaaS** spanning exam/rubric setup, LMS response ingestion, answer mapping, AI evaluation, professor review/re-evaluation and final-marks export.",
          "Implemented human-in-the-loop controls, multi-tenant access, background processing, retries, auditability and immutable exports.",
          "Technically validated a controlled **50-student × 2-question** workflow with **100 successful AI evaluations and 0 failed evaluation tasks**.",
        ],
      },
      {
        id: "placement-automation",
        title: "Placement Cell Data Processing & Workflow Automation",
        href: "https://placement-copilot-vercel.vercel.app",
        points: [
          "Automated consolidation, standardization, routing and highlighting of responses from multiple Google Forms across Google Sheets.",
          "Reduced repetitive manual processing effort by approximately **50–60%** while improving consistency in placement-data handling.",
        ],
      },
      {
        id: "customer-churn-counterfactual",
        title: "Counterfactual Learning in Customer Churn Prediction under Class Imbalance",
        href: "https://github.com/Amar-cmd/Counterfactual-Learning-In-Customer-Churn-Prediction-Under-Class-Imbalance",
        logo: {
          src: "/images/logos/github.png",
          alt: "GitHub logo",
          width: 52,
          height: 52,
        },
        points: [
          "Developed a machine-learning workflow for customer churn prediction under class imbalance using **SMOTE, Logistic Regression and neural networks**.",
          "Implemented counterfactual explanation methods including **Wachter’s Method, Growing Spheres and a Genetic Algorithm** and documented the work through a reproducible notebook and research paper.",
        ],
      },
    ],
  },
};
