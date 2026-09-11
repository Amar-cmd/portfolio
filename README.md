# Amar Jyoti — Portfolio

Recruiter-focused portfolio for **AI Product, Product Analytics, Technical Product and GenAI-oriented analyst roles**.

## Design direction

The site intentionally avoids the common AI-generated portfolio pattern of gradient cards, glassmorphism, pill-heavy skill walls and generic feature grids. The current direction is editorial and case-study-led: flat surfaces, strong typography, ruled layouts, minimal decoration and clear evidence of product thinking.

The homepage prioritizes:

1. Clear positioning in the first screen.
2. Project Z as a deep flagship case study covering the problem, what was built, product decisions, technical validation and the current limitation.
3. A small set of secondary projects presented as evidence, not as a gallery of everything ever built.
4. Product-relevant experience, capabilities and education.
5. Direct recruiter paths to resume, contact, LinkedIn, GitHub and live work.

## Stack

- Next.js 16
- React 19
- TypeScript
- Motion for subtle navigation/reveal behavior
- CSS
- Vercel

## Structure

- `app/page.tsx` — recruiter-focused one-page portfolio
- `data/portfolioData.ts` — homepage content source
- `components/PortfolioHome.tsx` — editorial homepage and case-study structure
- `app/resume/page.tsx` + `data/resumeData.ts` — web resume aligned to the current profile
- `app/contact/page.tsx` — professional contact page
- `app/portfolio.css` — shared editorial visual system for portfolio, resume and contact surfaces

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

The repository is connected to Vercel. Branch pushes generate preview deployments before changes are merged into `main`. The redesign is reviewed on `portfolio-ai-product-refresh` before production merge.
