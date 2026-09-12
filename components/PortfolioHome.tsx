import Link from "next/link";
import { portfolioData as d } from "@/data/portfolioData";

const ExternalArrow = () => <span aria-hidden="true">↗</span>;
const fooraclesCertificate = "https://drive.google.com/file/d/1RHxzQh9YDPj2O2M5FyJzfv8gwwg5I96m/view?usp=sharing";

export default function PortfolioHome() {
  return (
    <div className="editorial-home">
      <section className="editorial-hero">
        <div className="editorial-frame editorial-hero-grid">
          <div className="editorial-hero-copy">
            <p className="editorial-eyebrow">{d.hero.eyebrow}</p>
            <h1 className="editorial-hero-title">
              <span>{d.hero.heading}</span>
              <em>{d.hero.emphasis}</em>
            </h1>
            <p className="editorial-hero-description">{d.hero.description}</p>
            <p className="editorial-hero-context">{d.hero.context}</p>
            <div className="editorial-link-row">
              <a className="editorial-link editorial-link-strong" href="#work">View selected work ↓</a>
              <Link className="editorial-link" href="/resume">Resume <ExternalArrow /></Link>
            </div>
          </div>

          <figure className="editorial-portrait-block">
            <div className="editorial-portrait-stage">
              <img src="/images/amar-jyoti-portrait.png" alt="Amar Jyoti" className="editorial-portrait" />
            </div>
          </figure>
        </div>

        <div className="editorial-frame editorial-fact-strip">
          {d.hero.facts.map((fact) => (
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
            <div className="editorial-case-number">01</div>
            <div>
              <p className="editorial-section-title editorial-section-title-light">Case study</p>
              <h2>{d.flagship.title}</h2>
              <p className="editorial-case-headline">{d.flagship.headline}</p>
            </div>
          </header>

          <div className="editorial-case-grid">
            <div className="editorial-case-story">
              <article className="editorial-story-block"><span>Problem</span><p>{d.flagship.problem}</p></article>
              <article className="editorial-story-block"><span>What I built</span><p>{d.flagship.built}</p></article>

              <div className="editorial-flow">
                <span className="editorial-flow-label">Workflow</span>
                <ol>
                  {d.flagship.flow.map((step, index) => (
                    <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
                  ))}
                </ol>
              </div>

              <div className="editorial-decisions">
                <p className="editorial-section-title editorial-section-title-light">Product decisions</p>
                {d.flagship.decisions.map((decision, index) => (
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
                <p className="editorial-section-title editorial-section-title-light">{d.flagship.validation.heading}</p>
                <h3>{d.flagship.validation.fixture}</h3>
              </div>
              <div className="editorial-metric-list">
                {d.flagship.validation.metrics.map((metric) => (
                  <div className="editorial-metric-row" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
                ))}
              </div>
              <div className="editorial-stack-block"><span>Built with</span><p className="editorial-stack-line">{d.flagship.stack.join(" · ")}</p></div>
              <div className="editorial-live-block"><a className="editorial-link editorial-link-light" href={d.flagship.liveUrl} target="_blank" rel="noreferrer">Open live product <ExternalArrow /></a></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-frame">
        <header className="editorial-section-head"><p className="editorial-section-title">Selected work</p><h2>A few more things I’ve built or studied.</h2></header>
        <div className="editorial-work-list">
          {d.selectedWork.map((project) => (
            <article className="editorial-work-row" key={project.number}>
              <div className="editorial-work-number">{project.number}</div>
              <div className="editorial-work-main"><h3>{project.title}</h3><p>{project.summary}</p></div>
              <div className="editorial-work-proof"><span>Why it matters</span><p>{project.proof}</p><p className="editorial-stack-line">{project.stack.join(" · ")}</p><a className="editorial-text-link" href={project.link.href} target="_blank" rel="noreferrer">Open <ExternalArrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="editorial-about-band">
        <div className="editorial-frame editorial-about-grid">
          <div className="editorial-about-intro"><p className="editorial-section-title">About</p><h2>{d.about.heading}</h2></div>
          <div className="editorial-about-copy">{d.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section id="experience" className="editorial-section editorial-frame">
        <header className="editorial-section-head editorial-section-head-compact"><p className="editorial-section-title">Experience</p><h2>Research, product thinking and technical communication.</h2></header>
        <div className="editorial-experience-list">
          {d.experience.map((item) => (
            <article className="editorial-experience-row" key={item.organization}>
              <span className="editorial-period">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="editorial-organization">{item.organization}</p>
                {item.organization === "Fooracles" ? <a href={fooraclesCertificate} target="_blank" rel="noreferrer" className="editorial-text-link experience-proof-link"><img src="/images/logos/fooracles.png" alt="Fooracles logo" className="experience-logo" /> Internship certificate <ExternalArrow /></a> : null}
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section editorial-frame">
        <header className="editorial-section-head editorial-section-head-compact"><p className="editorial-section-title">Capabilities</p><h2>Tools that support the work.</h2></header>
        <div className="editorial-capability-list">{d.capabilities.map((group) => <div className="editorial-capability-row" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></div>)}</div>
      </section>

      <section id="education" className="editorial-section editorial-frame">
        <header className="editorial-section-head editorial-section-head-compact"><p className="editorial-section-title">Education</p><h2>Technical foundation with business and analytics context.</h2></header>
        <div className="editorial-education-list">{d.education.map((item) => <article className="editorial-education-row" key={item.institution}><span>{item.period}</span><div><h3>{item.institution}</h3><p>{item.degree}</p></div><strong>{item.result}</strong></article>)}</div>

        <div className="editorial-achievements">
          <h3>Selected achievements</h3>
          <div>{d.achievements.map((achievement) => <p key={achievement}>{achievement}</p>)}</div>
        </div>
      </section>

      <section id="contact" className="portfolio-contact-section">
        <div className="editorial-frame portfolio-contact-grid">
          <div>
            <p className="editorial-section-title">Contact</p>
            <h2>{d.contact.heading}</h2>
            <p className="portfolio-contact-description">{d.contact.description}</p>
          </div>
          <div className="portfolio-contact-actions">
            <Link href="/contact" className="portfolio-contact-primary">Contact me</Link>
            <a href="https://www.linkedin.com/in/a-jyoti/" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
            <a href="https://github.com/Amar-cmd" target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
            <Link href="/resume">Resume <ExternalArrow /></Link>
          </div>
        </div>
      </section>

      <footer className="portfolio-site-footer">
        <div className="editorial-frame"><span>Amar Jyoti</span><span>AI Product · Product Analytics · GenAI</span></div>
      </footer>
    </div>
  );
}
