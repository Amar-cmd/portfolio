import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="portfolio-tag-list" aria-label="Technologies and skills">
      {items.map((item) => (
        <span className="portfolio-tag" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function PortfolioHome() {
  const data = portfolioData;

  return (
    <div className="portfolio-home">
      <section className="portfolio-hero" aria-labelledby="portfolio-hero-title">
        <div className="portfolio-hero-copy">
          <p className="portfolio-eyebrow">{data.hero.eyebrow}</p>
          <h1 id="portfolio-hero-title" className="portfolio-hero-title">
            {data.hero.heading}
          </h1>
          <p className="portfolio-hero-description">{data.hero.description}</p>

          <div className="portfolio-hero-actions">
            <a className="portfolio-primary-cta" href={data.hero.primaryCta.href}>
              {data.hero.primaryCta.label}
            </a>
            <Link className="portfolio-secondary-cta" href={data.hero.secondaryCta.href}>
              {data.hero.secondaryCta.label}
            </Link>
          </div>

          <div className="portfolio-social-links" aria-label="Professional profiles">
            {data.hero.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ExternalArrow />
              </a>
            ))}
          </div>
        </div>

        <div className="portfolio-hero-visual" aria-label="Amar Jyoti portrait and positioning summary">
          <div className="portfolio-portrait-card">
            <div className="portfolio-portrait-frame">
              <Image
                src="/images/profile.png"
                alt="Amar Jyoti"
                width={680}
                height={840}
                priority
                className="portfolio-portrait"
              />
            </div>
            <div className="portfolio-portrait-meta">
              <span>AI Product</span>
              <span>Product Analytics</span>
              <span>GenAI SaaS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-metrics" aria-label="Selected proof points">
        {data.metrics.map((metric) => (
          <article className="portfolio-metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.detail}</small>
          </article>
        ))}
      </section>

      <section id="project-z" className="portfolio-section portfolio-flagship-section">
        <div className="portfolio-section-heading portfolio-section-heading-wide">
          <div>
            <p className="portfolio-kicker">{data.flagship.label}</p>
            <h2>{data.flagship.title}</h2>
          </div>
          <p>{data.flagship.subtitle}</p>
        </div>

        <div className="portfolio-flagship-grid">
          <div className="portfolio-flagship-copy">
            <p>{data.flagship.description}</p>
            <div className="portfolio-principle-card">
              <span>Product principle</span>
              <p>{data.flagship.principle}</p>
            </div>

            <div className="portfolio-validation-card">
              <div>
                <span>{data.flagship.validation.label}</span>
                <strong>{data.flagship.validation.fixture}</strong>
              </div>
              <ul>
                {data.flagship.validation.stats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
            </div>

            <TagList items={data.flagship.tech} />

            <div className="portfolio-project-actions">
              <a
                className="portfolio-primary-cta portfolio-compact-cta"
                href={data.flagship.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View live product <ExternalArrow />
              </a>
              <span className="portfolio-link-note">{data.flagship.liveNote}</span>
            </div>
          </div>

          <div className="portfolio-product-preview" aria-label="Project Z workflow preview">
            <div className="portfolio-browser-bar">
              <span />
              <span />
              <span />
              <div>projectz.vercel.app</div>
            </div>
            <div className="portfolio-product-preview-body">
              <div className="portfolio-product-preview-top">
                <div>
                  <small>Professor dashboard</small>
                  <strong>Evaluation workflow</strong>
                </div>
                <span className="portfolio-status-pill">Production ready</span>
              </div>

              <div className="portfolio-product-stats">
                <div><strong>50</strong><span>Students</span></div>
                <div><strong>2</strong><span>Questions</span></div>
                <div><strong>100</strong><span>AI evaluations</span></div>
                <div><strong>0</strong><span>Failed tasks</span></div>
              </div>

              <div className="portfolio-flow-list">
                {data.flagship.flow.map((step, index) => (
                  <div className="portfolio-flow-step" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                    {index < data.flagship.flow.length - 1 ? <i aria-hidden="true">→</i> : null}
                  </div>
                ))}
              </div>

              <div className="portfolio-review-panel">
                <div>
                  <small>AI suggestion</small>
                  <strong>Rubric-grounded first pass</strong>
                </div>
                <div>
                  <small>Final authority</small>
                  <strong>Professor review & decision</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="portfolio-section">
        <div className="portfolio-section-heading">
          <div>
            <p className="portfolio-kicker">SELECTED WORK</p>
            <h2>Products and workflows with practical outcomes.</h2>
          </div>
        </div>

        <div className="portfolio-work-grid">
          {data.selectedWork.map((project, index) => (
            <article className="portfolio-work-card" key={project.title}>
              <div className="portfolio-work-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <TagList items={project.tags} />
              {project.link ? (
                <a href={project.link.href} target="_blank" rel="noreferrer" className="portfolio-text-link">
                  {project.link.label} <ExternalArrow />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="portfolio-section">
        <div className="portfolio-section-heading">
          <div>
            <p className="portfolio-kicker">EXPERIENCE</p>
            <h2>Research, product thinking, and technical communication.</h2>
          </div>
        </div>

        <div className="portfolio-experience-list">
          {data.experience.map((item) => (
            <article className="portfolio-experience-card" key={`${item.organization}-${item.role}`}>
              <div className="portfolio-experience-head">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <p className="portfolio-experience-description">{item.description}</p>
              <TagList items={item.tags} />
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-capabilities-section">
        <div className="portfolio-section-heading">
          <div>
            <p className="portfolio-kicker">CAPABILITIES</p>
            <h2>Enough technical depth to build, enough business context to prioritize.</h2>
          </div>
        </div>

        <div className="portfolio-capabilities-grid">
          {data.capabilities.map((group) => (
            <article className="portfolio-capability-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section portfolio-education-section">
        <div className="portfolio-section-heading">
          <div>
            <p className="portfolio-kicker">EDUCATION & HIGHLIGHTS</p>
            <h2>Technology foundation, business training, and academic consistency.</h2>
          </div>
        </div>

        <div className="portfolio-education-grid">
          <div className="portfolio-education-list">
            {data.education.map((item) => (
              <article className="portfolio-education-card" key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                </div>
                <div className="portfolio-education-meta">
                  <span>{item.period}</span>
                  <strong>{item.result}</strong>
                </div>
              </article>
            ))}
          </div>

          <aside className="portfolio-highlights-card">
            <span>Selected highlights</span>
            <ul>
              {data.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="contact" className="portfolio-contact-section">
        <div>
          <p className="portfolio-kicker">CONTACT</p>
          <h2>{data.contact.heading}</h2>
          <p>{data.contact.description}</p>
        </div>
        <div className="portfolio-contact-actions">
          <Link href="/contact" className="portfolio-primary-cta">
            Contact me
          </Link>
          <a href="https://www.linkedin.com/in/a-jyoti/" target="_blank" rel="noreferrer" className="portfolio-secondary-cta">
            LinkedIn <ExternalArrow />
          </a>
          <a href="https://github.com/Amar-cmd" target="_blank" rel="noreferrer" className="portfolio-secondary-cta">
            GitHub <ExternalArrow />
          </a>
        </div>
      </section>
    </div>
  );
}
