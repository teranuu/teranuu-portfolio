import { useEffect, useState } from 'react'
import { Github, Mail } from 'lucide-react'

import './App.css'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './components/ui/navigation-menu'
import { Separator } from './components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './components/ui/tooltip'
import { cn } from './lib/utils'

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
    <TooltipProvider delayDuration={160}>
      <div className="relative isolate min-h-svh overflow-hidden bg-[radial-gradient(circle_at_top_right,oklch(0.55_0.24_277_/_12%),transparent_34rem),radial-gradient(circle_at_bottom_left,oklch(0.55_0.24_277_/_10%),transparent_30rem),var(--background)]">
        <div className="pointer-events-none fixed -right-32 -top-48 -z-10 size-[28rem] rounded-full bg-accent/30 blur-[110px]" />
        <div className="pointer-events-none fixed -bottom-52 -left-40 -z-10 size-[28rem] rounded-full bg-accent/30 blur-[110px]" />

      <aside
        className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col justify-between border-r border-border bg-background/80 px-5 py-8 backdrop-blur-2xl md:flex"
        aria-label="Portfolio directory"
      >
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#hero">
                <Badge className="px-3 py-2">System v2.4.0</Badge>
              </a>
            </TooltipTrigger>
            <TooltipContent>Return to overview</TooltipContent>
          </Tooltip>

          <NavigationMenu
            className="mt-14 block max-w-none"
            aria-label="Directory navigation"
          >
            <div className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
              Directory
            </div>
            <NavigationMenuList>
              {sections.map((section, index) => (
                <NavigationMenuItem key={section.id}>
                  <NavigationMenuLink
                    active={activeSection === section.id}
                    href={`#${section.id}`}
                  >
                    <span className="font-mono text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* <div className="rounded-lg border border-border bg-surface/70 p-4">
          <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
            Connection
          </p>
          <dl className="grid gap-3">
            <div className="flex justify-between gap-4 font-mono text-xs">
              <dt>Latency</dt>
              <dd className="text-foreground">18ms</dd>
            </div>
            <div className="flex justify-between gap-4 font-mono text-xs">
              <dt>Status</dt>
              <dd className="text-foreground">Available</dd>
            </div>
          </dl>
        </div> */}
      </aside>

      <main className="mx-auto w-[min(calc(100%_-_2rem),44rem)] px-0 py-8 md:ml-[clamp(18rem,22vw,23rem)] md:w-[min(64rem,calc(100%_-_clamp(18rem,22vw,23rem)_-_3rem))] md:py-24">
        <section
          id="hero"
          className="flex min-h-0 scroll-mt-16 flex-col justify-center py-20 md:min-h-[86svh] md:pb-20 md:pt-8"
          aria-labelledby="hero-title"
        >
          <Badge className="mb-5 px-3 py-2">ACTIVE_DEPLOYMENT</Badge>
          <h1
            id="hero-title"
            className="max-w-5xl font-display text-[clamp(3rem,17vw,4.6rem)] font-bold leading-[0.94] text-foreground md:text-[clamp(3.7rem,7vw,6.8rem)]"
          >
            Denn Cayacap builds resilient interfaces for{' '}
            <span className="bg-[linear-gradient(110deg,var(--foreground),var(--accent)_42%,#a5b4fc)] bg-clip-text text-transparent">
              high-velocity systems.
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-[1.04rem] leading-7 text-muted md:text-[1.16rem] md:leading-8">
            Full-stack developer at Nebula Labs, focused on production-grade
            React applications, service integrations, and operational tooling
            that keeps complex teams moving cleanly.
          </p>
        </section>

        <section
          id="projects"
          className="scroll-mt-16 border-t border-border py-20"
          aria-labelledby="projects-title"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <p className="font-mono text-sm text-accent">/usr/bin/projects</p>
            <h2
              id="projects-title"
              className="font-display text-[clamp(1.6rem,3vw,2.45rem)] font-semibold text-foreground"
            >
              Selected Projects
            </h2>
          </div>

          <div className="grid gap-4">
            {projects.map((project) => (
              <article
                className="grid gap-5 rounded-lg border border-border bg-surface/70 p-4 md:grid-cols-[minmax(10rem,1fr)_2fr]"
                key={project.title}
              >
                <div
                  className="relative grid aspect-square min-h-0 place-items-center overflow-hidden rounded-md border border-border bg-[linear-gradient(135deg,oklch(0.55_0.24_277_/_28%),transparent_58%),linear-gradient(45deg,oklch(0.28_0.13_278),oklch(0.18_0.07_280))] md:min-h-52"
                  aria-hidden="true"
                >
                  <div className="absolute inset-[18%] rounded-full border border-accent/50" />
                  <span className="relative font-mono text-base text-foreground">
                    {project.index}
                  </span>
                </div>
                <div className="self-center px-2 py-3">
                  <h3 className="mb-3 flex flex-wrap items-baseline gap-3 font-display text-[clamp(1.45rem,3vw,2.1rem)] font-semibold text-foreground">
                    <span className="font-mono text-sm font-medium text-accent">
                      [{project.index}]
                    </span>
                    {project.title}
                  </h3>
                  <p className="text-muted">{project.description}</p>
                  <ul
                    className="mt-5 flex list-none flex-wrap gap-2 p-0"
                    aria-label={`${project.title} stack`}
                  >
                    {project.stack.map((item) => (
                      <li
                        className="rounded-full border border-border px-2 py-1 font-mono text-xs text-foreground"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-16 border-t border-border py-20"
          aria-labelledby="experience-title"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <p className="font-mono text-sm text-accent">CV.log</p>
            <h2
              id="experience-title"
              className="font-display text-[clamp(1.6rem,3vw,2.45rem)] font-semibold text-foreground"
            >
              Experience
            </h2>
          </div>

          <div className="relative grid gap-8 before:absolute before:bottom-2 before:left-[0.44rem] before:top-2 before:w-px before:bg-border">
            {roles.map((role) => (
              <article
                className="relative grid grid-cols-[1rem_1fr] gap-5"
                key={`${role.company}-${role.title}`}
              >
                <div
                  className={cn(
                    'relative z-[1] mt-2 size-3.5 rounded-full bg-muted shadow-[0_0_0_6px_var(--background)]',
                    role.current &&
                      'bg-accent shadow-[0_0_0_6px_var(--background),0_0_30px_var(--accent)]',
                  )}
                  aria-hidden="true"
                />
                <div>
                  <p className="mb-1 font-mono text-xs text-accent">
                    {role.period}
                  </p>
                  <h3 className="mb-1 font-display text-xl text-foreground">
                    {role.title}
                  </h3>
                  <p className="mb-3 font-mono text-xs text-muted">
                    {role.company}
                  </p>
                  <p className="text-muted">{role.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 border-t border-border py-20 pb-16"
          aria-labelledby="contact-title"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <p className="font-mono text-sm text-accent">Connect_Node</p>
            <h2
              id="contact-title"
              className="font-display text-[clamp(1.6rem,3vw,2.45rem)] font-semibold text-foreground"
            >
              Communication
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Button
              asChild
              className="min-h-40 justify-between p-5 text-base"
              variant="subtle"
            >
              <a href="mailto:alex@nebula.dev">
                <span className="grid gap-4 text-left">
                  <span className="font-mono text-xs text-accent">Email</span>
                  alex@nebula.dev
                </span>
                <Mail className="size-5 text-accent" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              className="min-h-40 justify-between p-5 text-base"
              variant="subtle"
            >
              <a
                href="https://github.com/alexrivers"
                target="_blank"
                rel="noreferrer"
              >
                <span className="grid gap-4 text-left">
                  <span className="font-mono text-xs text-accent">GitHub</span>
                  github.com/alexrivers
                </span>
                <Github className="size-5 text-accent" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>

        <Separator />
        <footer className="flex flex-col justify-between gap-4 pt-6 font-mono text-xs uppercase text-muted md:flex-row">
          <span>BUILD_HASH: 9F4C2A</span>
          <span>UPTIME: 99.98%</span>
        </footer>
      </main>
      </div>
    </TooltipProvider>
  )
}

export default App
