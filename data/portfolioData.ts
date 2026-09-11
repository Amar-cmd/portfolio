export type PortfolioMetric = {
  value: string;
  label: string;
  detail: string;
};

export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
  link?: PortfolioLink;
};

export type PortfolioExperience = {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export const portfolioData = {
  hero: {
    eyebrow: "AI PRODUCT • PRODUCT ANALYTICS • GENAI SAAS",
    heading: "I build AI-assisted products and analytics workflows that solve real operational problems.",
    description:
      "B.Tech in Computer Science (AI & Data Science) and PGDM in Finance & Business Analytics, combining product thinking, SQL/Python analytics, and hands-on SaaS development.",
    primaryCta: { label: "Explore Project Z", href: "#project-z" },
    secondaryCta: { label: "View Resume", href: "/resume" },
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/a-jyoti/" },
      { label: "GitHub", href: "https://github.com/Amar-cmd" },
      { label: "YouTube", href: "https://www.youtube.com/@PremierProgrammer" },
    ],
  },

  metrics: [
    {
      value: "100 / 100",
      label: "Successful AI evaluations",
      detail: "Controlled technical validation",
    },
    {
      value: "18",
      label: "SaaS products benchmarked",
      detail: "Product research at Fooracles",
    },
    {
      value: "165+",
      label: "Technical tutorials published",
      detail: "Premier Programmer",
    },
    {
      value: "9.27 / 10",
      label: "PGDM Year 1 CGPA",
      detail: "IMS Ghaziabad",
    },
  ] satisfies PortfolioMetric[],

  flagship: {
    label: "FLAGSHIP PRODUCT",
    title: "AI Subjective Evaluation Engine",
    subtitle: "Professor-first GenAI SaaS for rubric-grounded subjective-answer evaluation.",
    description:
      "Built an end-to-end academic evaluation workflow covering exam and rubric setup, LMS response ingestion, answer mapping, AI evaluation, professor review and re-evaluation, and final-marks export.",
    principle:
      "Designed around human-in-the-loop control: AI suggestions remain separate from final professor decisions, keeping the professor as the final authority.",
    validation: {
      label: "Controlled technical validation",
      fixture: "50-student × 2-question fixture",
      stats: [
        "100 mappings",
        "100 evaluation tasks",
        "100 successful AI evaluations",
        "0 failed evaluation tasks",
      ],
    },
    flow: [
      "LMS response ingestion",
      "Answer mapping",
      "AI evaluation",
      "Professor review",
      "Final-marks export",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase/PostgreSQL",
      "Auth/RLS",
      "Gemini",
      "Vercel",
    ],
    liveUrl: "https://projectz.vercel.app",
    liveNote: "Login required — the workflow preview above lets recruiters understand the core product flow without signing in.",
  },

  selectedWork: [
    {
      title: "Placement Cell Data Processing & Workflow Automation",
      description:
        "Automated consolidation, standardization, routing and highlighting of responses from multiple Google Forms across Google Sheets, reducing repetitive manual processing effort by approximately 50–60%.",
      tags: ["Workflow Automation", "Google Sheets", "Data Cleaning"],
      link: {
        label: "View live workflow",
        href: "https://placement-copilot-vercel.vercel.app",
      },
    },
    {
      title: "AI Buddy — AI-Powered College Assistance Chatbot",
      description:
        "Built a full-stack AI assistant with authenticated chat, a managed knowledge base, caching, rate limiting, and multi-provider LLM fallback with provider-level diagnostics.",
      tags: ["GenAI", "LLM APIs", "Next.js", "Supabase", "PostgreSQL"],
      link: {
        label: "View live app",
        href: "https://college-ai-helpdesk-chatbot.vercel.app",
      },
    },
    {
      title: "Counterfactual Learning in Customer Churn Prediction",
      description:
        "Developed a churn-prediction workflow under class imbalance using SMOTE, Logistic Regression and neural networks, with counterfactual explanations using Wachter’s Method, Growing Spheres and a Genetic Algorithm.",
      tags: ["Python", "Machine Learning", "Explainable AI", "Data Analysis"],
      link: {
        label: "View research & code",
        href: "https://github.com/Amar-cmd/Counterfactual-Learning-In-Customer-Churn-Prediction-Under-Class-Imbalance",
      },
    },
  ] satisfies PortfolioProject[],

  experience: [
    {
      role: "Product Testing & Research Intern",
      organization: "Fooracles",
      period: "May 2026 – Jul 2026",
      description:
        "Benchmarked 18 SaaS competitors and conducted detailed feature and UX/UI analysis across 10 key products to identify product gaps, usability issues and improvement opportunities. Translated findings into Figma-based product/interface recommendations, with selected recommendations adopted.",
      tags: ["Product Research", "Competitive Analysis", "UX Research", "Figma"],
    },
    {
      role: "Founder & Technical Educator",
      organization: "Premier Programmer",
      period: "Mar 2024 – Present",
      description:
        "Build structured technical learning content across programming, data and AI. Completed a Python learning track with 165+ tutorials, 40+ hours of content, 750+ coding questions and 25 hands-on projects.",
      tags: ["Python", "Technical Communication", "Content Development"],
    },
  ] satisfies PortfolioExperience[],

  capabilities: [
    {
      title: "Product & Analytics",
      items: [
        "Product Analytics",
        "SQL/PostgreSQL",
        "Business Analytics",
        "Power BI",
        "Advanced Excel",
        "Competitive Analysis",
        "UX Research",
      ],
    },
    {
      title: "AI & Automation",
      items: [
        "Generative AI",
        "LLM APIs",
        "Prompt Design",
        "Human-in-the-Loop AI",
        "AI Evaluation Workflows",
        "Workflow Automation",
      ],
    },
    {
      title: "Build & Prototype",
      items: [
        "Python/Pandas",
        "Next.js",
        "TypeScript",
        "Supabase",
        "Git",
        "Vercel",
        "Figma",
      ],
    },
  ],

  education: [
    {
      institution: "Institute of Management Studies (IMS) Ghaziabad",
      degree: "PGDM — Finance & Business Analytics",
      period: "2025–2027",
      result: "CGPA 9.27 / 10 (Year 1)",
    },
    {
      institution: "Galgotias University",
      degree: "B.Tech — CSE (AI & Data Science)",
      period: "2020–2024",
      result: "CGPA 8.81 / 10 · First Class with Distinction",
    },
  ],

  highlights: [
    "Regional Qualifier — AIMA Business Simulation",
    "₹50,000 B.Tech Merit Scholarship",
    "Finance Core Member — Finnacle, The Finance Club",
  ],

  contact: {
    heading: "Let’s build something useful.",
    description:
      "Open to opportunities across AI Product, Product Analytics, Technical Product, AI Solutions and GenAI-focused analyst roles.",
  },
};
