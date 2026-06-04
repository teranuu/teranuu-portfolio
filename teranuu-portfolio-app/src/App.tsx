import { useEffect, useState } from 'react'
import './App.css'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Communication' },
]

const projects = [
  {
    index: '01',
    title: 'Synapse Engine',
    description:
      'A real-time orchestration layer for distributed product teams, pairing resilient event streams with observable deployment workflows.',
    stack: ['React', 'Node', 'Kafka', 'Postgres'],
  },
  {
    index: '02',
    title: 'Quartz UI',
    description:
      'A precision component system for analytics tools with accessible primitives, motion-safe interactions, and dark-mode first tokens.',
    stack: ['TypeScript', 'Design Systems', 'Storybook', 'Vite'],
  },
]

const roles = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Nebula Labs',
    period: '2024 - Present',
    current: true,
    description:
      'Leading platform interfaces, edge service integrations, and deploy tooling for high-trust developer workflows.',
  },
  {
    title: 'Product Engineer',
    company: 'Orbit Systems',
    period: '2021 - 2024',
    current: false,
    description:
      'Shipped customer-facing dashboards, internal automation, and observability features across the product surface.',
  },
  {
    title: 'Frontend Developer',
    company: 'Northstar Studio',
    period: '2019 - 2021',
    current: false,
    description:
      'Built responsive marketing systems and interactive prototypes for early-stage SaaS teams.',
  },
]

function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.6],
      },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-top" />
      <div className="ambient ambient-bottom" />

      <aside className="sidebar" aria-label="Portfolio directory">
        <div>
          <a className="status-pill" href="#hero">
            System v2.4.0
          </a>

          <nav className="directory-nav" aria-label="Directory navigation">
            <p className="sidebar-label">Directory</p>
            {sections.map((section, index) => (
              <a
                key={section.id}
                className={activeSection === section.id ? 'active' : ''}
                href={`#${section.id}`}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="connection-block">
          <p className="sidebar-label">Connection</p>
          <dl>
            <div>
              <dt>Latency</dt>
              <dd>18ms</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Available</dd>
            </div>
          </dl>
        </div>
      </aside>

      <main className="content-column">
        <section id="hero" className="hero-section" aria-labelledby="hero-title">
          <p className="chip">ACTIVE_DEPLOYMENT</p>
          <h1 id="hero-title">
            Denn Cayacap builds resilient interfaces for{' '}
            <span>high-velocity systems.</span>
          </h1>
          <p className="hero-copy">
            Full-stack developer at Nebula Labs, focused on production-grade
            React applications, service integrations, and operational tooling
            that keeps complex teams moving cleanly.
          </p>
        </section>

        <section
          id="projects"
          className="content-section"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <p>/usr/bin/projects</p>
            <h2 id="projects-title">Selected Projects</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-preview" aria-hidden="true">
                  <span>{project.index}</span>
                </div>
                <div className="project-details">
                  <h3>
                    <span>[{project.index}]</span>
                    {project.title}
                  </h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} stack`}>
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="content-section"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p>CV.log</p>
            <h2 id="experience-title">Experience</h2>
          </div>

          <div className="timeline">
            {roles.map((role) => (
              <article
                className={`timeline-item${role.current ? ' current' : ''}`}
                key={`${role.company}-${role.title}`}
              >
                <div className="timeline-dot" aria-hidden="true" />
                <div>
                  <p className="timeline-period">{role.period}</p>
                  <h3>{role.title}</h3>
                  <p className="timeline-company">{role.company}</p>
                  <p>{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="content-section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="section-heading">
            <p>Connect_Node</p>
            <h2 id="contact-title">Communication</h2>
          </div>

          <div className="contact-grid">
            <a href="mailto:alex@nebula.dev" className="contact-card">
              <span>Email</span>
              alex@nebula.dev
            </a>
            <a
              href="https://github.com/alexrivers"
              className="contact-card"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              github.com/alexrivers
            </a>
          </div>
        </section>

        <footer className="site-footer">
          <span>BUILD_HASH: 9F4C2A</span>
          <span>UPTIME: 99.98%</span>
        </footer>
      </main>
    </div>
  )
}

export default App
