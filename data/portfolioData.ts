export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioWork = {
  number: string;
  year: string;
  title: string;
  role: string;
  summary: string;
  proof: string;
  stack: string[];
  link: PortfolioLink;
};

export type PortfolioExperience = {
  period: string;
  role: string;
  organization: string;
  description: string;
};

export const portfolioData = {
  hero: {
    eyebrow: "AI PRODUCT · PRODUCT ANALYTICS · GENAI",
    heading: "Product thinking,",
    emphasis: "backed by code.",
    description:
      "I turn messy workflows into practical products — combining product research, SQL/Python analytics, and hands-on AI SaaS development.",
    context:
      "B.Tech in Computer Science (AI & Data Science) · PGDM in Finance & Business Analytics",
    primaryCta: { label: "View selected work", href: "#work" },
    secondaryCta: { label: "Resume", href: "/resume" },
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/a-jyoti/" },
      { label: "GitHub", href: "https://github.com/Amar-cmd" },
      { label: "YouTube", href: "https://www.youtube.com/@PremierProgrammer" },
    ],
    facts: [
      { label: "Currently", value: "PGDM · IMS Ghaziabad" },
      { label: "Based", value: "Delhi NCR · Remote" },
      { label: "Building", value: "Project Z" },
    ],
  },

  flagship: {
    number: "01",
    label: "FLAGSHIP CASE STUDY",
    title: "Project Z",
    headline:
      "A professor-first way to evaluate subjective answers with AI — without handing final judgment to the model.",
    problem:
      "Subjective evaluation is repetitive and slow, but a fully automated grader creates a different problem: faculty lose control over context, rubric interpretation and final marks.",
    built:
      "I designed and built an end-to-end workflow covering exam and rubric setup, LMS response ingestion, answer mapping, AI evaluation, professor review, re-evaluation and final-marks export.",
    decisions: [
      {
        title: "Keep the human decision separate",
        body:
          "AI suggestions and final professor decisions are stored separately. The professor remains the final authority instead of becoming a rubber stamp.",
      },
      {
        title: "Design for failure, not just the happy path",
        body:
          "Background jobs, retries, fault recovery and provider-attempt tracking make evaluation work recoverable instead of fragile.",
      },
      {
        title: "Treat academic data as tenant-scoped data",
        body:
          "Multi-tenant access controls, PostgreSQL RLS, audit trails and immutable export snapshots were built into the workflow rather than added later.",
      },
    ],
    validation: {
      heading: "Controlled technical validation",
      fixture: "50 students × 2 questions",
      metrics: [
        { value: "100", label: "answer mappings" },
        { value: "100", label: "evaluation tasks" },
        { value: "100", label: "successful AI evaluations" },
        { value: "0", label: "failed evaluation tasks" },
      ],
      note:
        "This is a technical test fixture, not a claim of real faculty adoption. The next step is a controlled professor pilot measuring time saved, approval rate, modification rate and grading agreement.",
    },
    flow: [
      "Exam + rubric",
      "LMS responses",
      "Answer mapping",
      "AI first pass",
      "Professor review",
      "Final marks export",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase / PostgreSQL",
      "Auth + RLS",
      "Gemini",
      "Vercel",
    ],
    liveUrl: "https://projectz.vercel.app",
    liveNote: "Login is required for the protected professor workflow.",
  },

  selectedWork: [
    {
      number: "02",
      year: "2026",
      title: "Placement Cell Workflow Automation",
      role: "Workflow automation · data operations",
      summary:
        "Automated consolidation, standardization, routing and highlighting of responses from multiple Google Forms across Google Sheets.",
      proof: "Reduced repetitive manual processing effort by approximately 50–60%.",
      stack: ["Google Sheets", "Data Cleaning", "Workflow Automation"],
      link: {
        label: "Open live workflow",
        href: "https://placement-copilot-vercel.vercel.app",
      },
    },
    {
      number: "03",
      year: "2026",
      title: "AI Buddy",
      role: "GenAI product · full-stack prototype",
      summary:
        "Built an authenticated college assistance chatbot with a managed knowledge base, caching, rate limiting and multi-provider LLM fallback.",
      proof:
        "Provider-level diagnostics capture success, failure, timeout, latency and fallback behavior instead of hiding model reliability behind a single chat box.",
      stack: ["Next.js", "Supabase", "PostgreSQL", "LLM APIs"],
      link: {
        label: "Open live app",
        href: "https://college-ai-helpdesk-chatbot.vercel.app",
      },
    },
    {
      number: "04",
      year: "2024",
      title: "Counterfactual Learning in Customer Churn",
      role: "Machine learning research",
      summary:
        "Studied customer churn under class imbalance and documented the modelling approach and findings through a research paper and reproducible notebook.",
      proof:
        "Explored class-imbalance handling and counterfactual explanation methods to move beyond prediction toward actionable interpretation.",
      stack: ["Python", "Machine Learning", "Explainable AI", "Data Analysis"],
      link: {
        label: "View research + code",
        href: "https://github.com/Amar-cmd/Counterfactual-Learning-In-Customer-Churn-Prediction-Under-Class-Imbalance",
      },
    },
  ] satisfies PortfolioWork[],

  experience: [
    {
      period: "May 2026 — Jul 2026",
      role: "Product Testing & Research Intern",
      organization: "Fooracles",
      description:
        "Benchmarked 18 SaaS competitors and completed detailed feature and UX/UI analysis across 10 products. Turned findings into Figma-based product and interface recommendations; selected recommendations were adopted.",
    },
    {
      period: "Mar 2024 — Present",
      role: "Founder & Technical Educator",
      organization: "Premier Programmer",
      description:
        "Published 165+ Python tutorials covering 40+ hours of content, 750+ coding questions and 25 hands-on projects — translating technical ideas into structured learning experiences.",
    },
  ] satisfies PortfolioExperience[],

  about: {
    label: "ABOUT",
    heading: "I sit between the product question and the technical implementation.",
    paragraphs: [
      "My B.Tech gave me the engineering base to understand systems and build prototypes. My PGDM added the business, finance and analytics context to ask whether something should be built in the first place.",
      "That combination is why I am most interested in AI Product, Product Analytics and technical product roles: work where user problems, data, product decisions and implementation all matter.",
    ],
    principles: [
      {
        number: "01",
        title: "Problem before feature",
        body: "Start with the workflow, user constraint and evidence — not the technology label.",
      },
      {
        number: "02",
        title: "Build enough to learn",
        body: "Use prototypes and working systems to answer product questions, not just to decorate a portfolio.",
      },
      {
        number: "03",
        title: "Keep claims measurable",
        body: "Separate technical validation from real-world adoption, and state what is still unproven.",
      },
    ],
  },

  capabilities: [
    {
      title: "Product",
      items: "Product research · competitive analysis · workflow analysis · UX research · Figma",
    },
    {
      title: "Analytics",
      items: "SQL / PostgreSQL · Python / Pandas · Power BI · Advanced Excel · data cleaning",
    },
    {
      title: "AI + Build",
      items: "GenAI · LLM APIs · prompt design · human-in-the-loop workflows · Next.js · TypeScript · Supabase",
    },
  ],

  education: [
    {
      period: "2025 — 2027",
      institution: "IMS Ghaziabad",
      degree: "PGDM · Finance & Business Analytics",
      result: "CGPA 9.27 / 10 · Year 1",
    },
    {
      period: "2020 — 2024",
      institution: "Galgotias University",
      degree: "B.Tech · CSE (AI & Data Science)",
      result: "CGPA 8.81 / 10 · First Class with Distinction",
    },
  ],

  highlights: [
    "Regional Qualifier · AIMA Business Simulation",
    "₹50,000 B.Tech Merit Scholarship",
    "Finance Core Member · Finnacle, The Finance Club",
  ],

  contact: {
    heading: "If the problem sits between product, analytics and AI, I’m interested.",
    description:
      "Open to AI Product, Product Analytics, Technical Product, AI Solutions and GenAI-focused analyst opportunities — with preference for Delhi NCR or remote roles.",
    email: "amarentp23@gmail.com",
  },
};
