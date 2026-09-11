# Amar Jyoti — Portfolio

Recruiter-focused personal portfolio for **AI Product, Product Analytics, GenAI SaaS, Technical Product, and AI Solutions** opportunities.

## What the site highlights

- **Project Z — AI Subjective Evaluation Engine** as the flagship product
- Selected work across workflow automation, GenAI, and machine learning
- Product testing and SaaS research experience at Fooracles
- Technical education work through Premier Programmer
- Product/analytics, AI/automation, and prototyping capabilities
- Current education, achievements, and recruiter contact paths

## Stack

- Next.js 16
- React 19
- TypeScript
- Motion
- CSS
- Vercel

## Structure

- `app/page.tsx` — recruiter-focused one-page portfolio
- `data/portfolioData.ts` — homepage content source
- `components/PortfolioHome.tsx` — portfolio sections and proof surfaces
- `app/resume/page.tsx` + `data/resumeData.ts` — web resume aligned to the current profile
- `app/contact/page.tsx` — simplified professional contact page
- `app/portfolio.css` — portfolio-specific responsive styling

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Deployment

The repository is connected to Vercel. Branch pushes generate preview deployments before changes are merged into `main`.
