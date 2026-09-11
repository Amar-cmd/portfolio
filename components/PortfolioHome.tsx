import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function StackLine({ items }: { items: string[] }) {
  return <p className="editorial-stack-line">{items.join(" · ")}</p>;
}

export default function PortfolioHome() {
  const data = portfolioData;

  return (
    <div className="editorial-home">
      <section className="editorial-hero" aria-labelledby="portfolio-hero-title">
        <div className="editorial-frame editorial-hero-grid">
          <div className="editorial-hero-copy">
            <p className="editorial-eyebrow">{data.hero.eyebrow}</p>
            <h1 id="portfolio-hero-title" className="editorial-hero-title">
              <span>{data.hero.heading}</span>
              <em>{data.hero.emphasis}</em>
            </h1>
            <p className="editorial-hero-description">{data.hero.description}</p>
            <p className="editorial-hero-context">{data.hero.context}</p>

            <div className="editorial-link-row">
              <a href={data.hero.primaryCta.href} className="editorial-link editorial-link-strong">
                {data.hero.primaryCta.label} <span aria-hidden="true">↓</span>
              </a>
              <Link href={data.hero.secondaryCta.href} className="editorial-link">
                {data.hero.secondaryCta.label} <ExternalArrow />
              </Link>
            </div>

            <div className="editorial-social-row" aria-label="Professional profiles">
              {data.hero.socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ExternalArrow />
                </a>
              ))}
            </div>
          </div>

          <figure className="editorial-portrait-block">
            <div className="editorial-portrait-frame">
              <Image
                src="/images/profile.png"
                alt="Amar Jyoti"
                width={720}
                height={900}
                priority
                className="editorial-portrait"
              />
            </div>
            <figcaption>Amar Jyoti · Delhi NCR</figcaption>
          </figure>
        </div>

        <div className="editorial-frame editorial-fact-strip" aria-label="Current profile summary">
          {data.hero.facts.map((fact) => (
            <div className="editorial-fact" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="editorial-case-study">
        <div className="editorial-frame">
          <header className="editorial-case-header">
            <div className="editorial-case-number">{data.flagship.number}</div>
            <div>
              <p className="editorial-section-label">{data.flagship.label}</p>
              <h2>{data.flagship.title}</h2>
              <p className="editorial-case-headline">{data.flagship.headline}</p>
            </div>
          </header>

          <div className="editorial-case-grid">
            <div className="editorial-case-story">
              <article className="editorial-story-block">
                <span>01 — Problem</span>
                <p>{data.flagship.problem}</p>
              </article>

              <article className="editorial-story-block">
                <span>02 — What I built</span>
                <p>{data.flagship.built}</p>
              </article>

              <div className="editorial-flow" aria-label="Project Z workflow">
                <span className="editorial-flow-label">Workflow</span>
                <ol>
                  {data.flagship.flow.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="editorial-decisions">
                <p className="editorial-section-label">PRODUCT DECISIONS</p>
                {data.flagship.decisions.map((decision, index) => (
                  <article className="editorial-decision-row" key={decision.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{decision.title}</h3>
                    <p>{decision.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="editorial-evidence-column">
              <div className="editorial-evidence-heading">
                <p className="editorial-section-label">{data.flagship.validation.heading}</p>
                <h3>{data.flagship.validation.fixture}</h3>
              </div>

              <div className="editorial-metric-list">
                {data.flagship.validation.metrics.map((metric) => (
                  <div className="editorial-metric-row" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>

              <p className="editorial-caveat">{data.flagship.validation.note}</p>

              <div className="editorial-stack-block">
                <span>Built with</span>
                <StackLine items={data.flagship.stack} />
              </div>

              <div className="editorial-live-block">
                <a href={data.flagship.liveUrl} target="_blank" rel="noreferrer" className="editorial-link editorial-link-light">
                  Open live product <ExternalArrow />
                </a>
                <small>{data.flagship.liveNote}</small>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-frame" aria-labelledby="selected-work-title">
        <header className="editorial-section-head">
          <p className="editorial-section-label">02 — 04 · SELECTED WORK</p>
          <h2 id="selected-work-title">A few more things I’ve built or studied.</h2>
        </header>

        <div className="editorial-work-list">
          {data.selectedWork.map((project) => (
            <article className="editorial-work-row" key={project.number}>
              <div className="editorial-work-number">{project.number}</div>
              <div className="editorial-work-main">
                <div className="editorial-work-meta">
                  <span>{project.year}</span>
                  <span>{project.role}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="editorial-work-proof">
                <span>Why it matters</span>
                <p>{project.proof}</p>
                <StackLine items={project.stack} />
                <a href={project.link.href} target="_blank" rel="noreferrer" className="editorial-text-link">
                  {project.link.label} <ExternalArrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="editorial-about-band">
        <div className="editorial-frame editorial-about-grid">
          <div className="editorial-about-intro">
            <p className="editorial-section-label">{data.about.label}</p>
            <h2>{data.about.heading}</h2>
          </div>
          <div className="editorial-about-copy">
            {data.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="editorial-frame editorial-principles">
          {data.about.principles.map((principle) => (
            <article className="editorial-principle" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="editorial-section editorial-frame">
        <header className="editorial-section-head editorial-section-head-compact">
          <p className="editorial-section-label">EXPERIENCE</p>
          <h2>Work that shaped the product side of the profile.</h2>
        </header>

        <div className="editorial-experience-list">
          {data.experience.map((item) => (
            <article className="editorial-experience-row" key={`${item.organization}-${item.role}`}>
              <span className="editorial-period">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="editorial-organization">{item.organization}</p>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-frame editorial-capabilities-section">
        <header className="editorial-section-head editorial-section-head-compact">
          <p className="editorial-section-label">CAPABILITIES</p>
          <h2>The toolkit is secondary to the problem — but it still matters.</h2>
        </header>

        <div className="editorial-capability-list">
          {data.capabilities.map((group) => (
            <div className="editorial-capability-row" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-frame editorial-education-section">
        <header className="editorial-section-head editorial-section-head-compact">
          <p className="editorial-section-label">EDUCATION + SIGNALS</p>
          <h2>Technical foundation, business context.</h2>
        </header>

        <div className="editorial-education-list">
          {data.education.map((item) => (
            <article className="editorial-education-row" key={item.institution}>
              <span>{item.period}</span>
              <div>
                <h3>{item.institution}</h3>
                <p>{item.degree}</p>
              </div>
              <strong>{item.result}</strong>
            </article>
          ))}
        </div>

        <div className="editorial-highlight-line">
          {data.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </section>

      <footer id="contact" className="editorial-footer">
        <div className="editorial-frame editorial-footer-grid">
          <div>
            <p className="editorial-section-label editorial-section-label-light">CONTACT</p>
            <h2>{data.contact.heading}</h2>
          </div>
          <div className="editorial-footer-copy">
            <p>{data.contact.description}</p>
            <a href={`mailto:${data.contact.email}`} className="editorial-footer-email">
              {data.contact.email} <ExternalArrow />
            </a>
            <div className="editorial-footer-links">
              <a href="https://www.linkedin.com/in/a-jyoti/" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
              <a href="https://github.com/Amar-cmd" target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
              <Link href="/resume">Resume <ExternalArrow /></Link>
            </div>
          </div>
        </div>
        <div className="editorial-frame editorial-footer-bottom">
          <span>Amar Jyoti</span>
          <span>AI Product · Product Analytics · GenAI</span>
        </div>
      </footer>
    </div>
  );
}
