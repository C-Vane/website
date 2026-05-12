import * as React from "react"
import Link from "next/link"

import { site } from "config/site"
import { homeFaqItems } from "config/home-faq"
import { Layout } from "components/layout"
import { JsonLd } from "components/json-ld"
import { FadeIn } from "components/fade-in"
import { buildFaqPageSchema } from "lib/structured-data"

const trustLabels = ["B2B SaaS", "HR-tech", "EU scale-ups", "Founder-led teams"]

const problemPains = [
  {
    title: "Generalist agencies.",
    body: "They sell hours, not outcomes. You get juniors, handoffs, and a feature list nobody asked for.",
  },
  {
    title: "Vibe-coded MVPs.",
    body: "Artificial intelligence-generated codebases that demo well and collapse on day thirty-one. You inherit the debt.",
  },
  {
    title: "Vendor sprawl.",
    body: "One agency for code, one for design, one for search engine optimisation, one for operations. Nothing connects. You become the project manager.",
  },
  {
    title: "No product thinking.",
    body: "Engineers without product context build what is specced, not what is needed. You ship and nobody uses it.",
  },
]

const services = [
  {
    title: "Custom Software Development",
    description:
      "Web and mobile, minimum viable product to platform. Modern stacks, clean handover, no lock-in.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Staff Augmentation",
    description: "Senior engineers in your team within days. Your process, our delivery.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
  {
    title: "SEO & AEO",
    description:
      "Get found by humans and artificial intelligence. Technical search engine optimisation, answer engine optimisation, real traffic.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    title: "Design",
    description: "User experience, user interface, prototypes shaped by user research, not designer taste.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Automation & AI",
    description: "We map the manual work, automate it, and embed artificial intelligence where it pays back.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Estonia Relocation & e-Residency",
    description: "Set up a European Union company from anywhere. End to end.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253"
        />
      </svg>
    ),
  },
]

const processSteps = [
  {
    title: "Map",
    phase: "week 1",
    body: "We audit your problem, stack, and goals. You get a written plan, not a slide deck.",
  },
  {
    title: "Build",
    phase: "weeks 2–N",
    body: "Senior team, weekly demos, shippable increments. You see progress every Friday.",
  },
  {
    title: "Ship & grow",
    phase: "ongoing",
    body: "We deploy, document, hand over, and stay on retainer if you want growth, search engine optimisation, or artificial intelligence extensions.",
  },
]

const proofStats = [
  "1000+ payments processed at 95%+ success rate on automated billing infrastructure.",
  "500+ active users on multi-tenant human-resources technology software as a service built and scaled.",
  "60+ senior engineers interviewed; structured three-week onboarding designed and run.",
  "4+ years shipping production software across software as a service, blockchain gaming, and human-resources technology.",
]

const engagementModels = [
  {
    title: "Fixed-scope project",
    body: "Best for minimum viable products and defined builds. Clear scope, clear price.",
    recommended: false,
  },
  {
    title: "Time & materials",
    body: "Best for evolving products. Weekly visibility, monthly invoices.",
    recommended: false,
  },
  {
    title: "Embedded engineer",
    body: "Best when you are hiring. Senior plug-in within seven days.",
    recommended: true,
  },
  {
    title: "Growth retainer",
    body: "Best post-launch. Search engine optimisation and answer engine optimisation, artificial intelligence extensions, ongoing iteration.",
    recommended: false,
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-eyebrow text-muted mb-3">{children}</p>
  )
}

export default function IndexPage() {
  const faqStructuredData = buildFaqPageSchema(homeFaqItems)

  return (
    <Layout title={site.name} description={site.description}>
      {faqStructuredData ? <JsonLd data={faqStructuredData} /> : null}

      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden hero-noise">
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% -15%, rgba(255, 255, 255, 0.12), transparent 55%)",
          }}
        />
        <div className="container mx-auto px-0 md:px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-eyebrow text-muted mb-6">
              Software house · Tallinn · Global
            </p>
            <h1 className="font-display font-extrabold tracking-[-0.02em] text-foreground leading-[1.05] text-[clamp(2.5rem,6vw,5.25rem)]">
              Software that works.
              <br />
              <span className="text-white">In an era of bugs.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Most software ships broken. We do not. We build, staff, and grow products that actually work, from the
              first line of code to your first paying customer.
            </p>
            <p className="mt-4 font-mono text-sm text-muted/80">
              <span className="text-white/50">$</span> cd ~/your-product
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="px-8 py-3.5 font-semibold text-center text-background bg-primary hover:bg-primary-hover rounded-card transition-colors"
              >
                Book a call
              </Link>
              <Link
                href="/#how-we-work"
                className="px-8 py-3.5 font-semibold text-center text-foreground border border-border bg-surface/50 hover:bg-surface-2 rounded-card transition-colors"
              >
                See how we work
              </Link>
            </div>
            <p className="mt-14 text-sm text-muted">Trusted by founders, scale-ups, and operators across the EU.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 md:gap-10">
              {trustLabels.map((label) => (
                <span
                  key={label}
                  className="text-xs font-medium uppercase tracking-wider text-muted opacity-50 hover:opacity-100 transition-opacity"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section id="the-problem" className="px-6 py-16 md:py-24 border-t border-border bg-surface/40">
        <div className="container mx-auto">
          <FadeIn>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight max-w-2xl">
              Why most software projects fail.
            </h2>
            <p className="mt-4 text-muted max-w-2xl leading-relaxed">
              Before we pitch a stack, we name what usually goes wrong, so you know we have seen it before.
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {problemPains.map((item) => (
              <FadeIn key={item.title}>
                <div className="h-full p-6 rounded-card bg-surface border border-border hover:border-white/25 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="what-we-do" className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <FadeIn>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
              One team. Full stack. From idea to growth.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FadeIn key={service.title}>
                <div className="h-full p-6 rounded-card bg-surface border border-border hover:border-white/25 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-foreground mb-4 group-hover:bg-white/[0.14] transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 text-foreground hover:text-muted font-medium transition-colors underline-offset-4 hover:underline">
              <span>All services</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how-we-work" className="px-6 py-16 md:py-24 border-t border-border bg-surface-2/50">
        <div className="container mx-auto">
          <FadeIn>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight max-w-3xl">
              A process built by engineers who got tired of agency processes.
            </h2>
          </FadeIn>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <FadeIn key={step.title}>
                <li className="relative p-6 rounded-card bg-surface border border-border h-full">
                  <span className="text-4xl font-display font-black text-white/[0.08] absolute top-4 right-5">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">{step.phase}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* Proof */}
      <section id="proof" className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <FadeIn>
            <Eyebrow>Proof</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
              Real numbers. Real shipped software.
            </h2>
          </FadeIn>
          <ul className="mt-10 space-y-4 max-w-3xl">
            {proofStats.map((line) => (
              <FadeIn key={line}>
                <li className="flex gap-3 text-muted leading-relaxed">
                  <span className="text-foreground mt-1.5 flex-shrink-0" aria-hidden="true">
                    ●
                  </span>
                  <span>{line}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
          <FadeIn>
            <figure className="mt-14 p-8 rounded-card bg-surface border-l-4 border-white border-y border-r border-border">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                &ldquo;They shipped billing automation without drama. We have held ninety-five percent plus success on
                payments since go-live.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted">Engineering lead, B2B SaaS (anonymous)</figcaption>
            </figure>
          </FadeIn>
        </div>
      </section>

      {/* Engagement */}
      <section id="engagement" className="px-6 py-16 md:py-24 border-t border-border bg-surface/40">
        <div className="container mx-auto">
          <FadeIn>
            <Eyebrow>Engagement</Eyebrow>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
              Pay for outcomes, not for hours.
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model) => (
              <FadeIn key={model.title}>
                <div
                  className={`h-full p-6 rounded-card bg-surface border transition-colors ${
                    model.recommended
                      ? "border-white shadow-[0_0_0_1px_rgba(255,255,255,0.22)]"
                      : "border-border hover:border-white/20"
                  }`}
                >
                  {model.recommended ? (
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">Recommended</p>
                  ) : (
                    <div className="h-[18px] mb-3" aria-hidden="true" />
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-2">{model.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{model.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto max-w-3xl">
          <FadeIn>
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="faq-heading" className="font-display font-bold text-3xl md:text-4xl text-foreground text-center mb-4">
              Frequently asked questions
            </h2>
            <p className="text-center text-muted mb-10 leading-relaxed">
              Straight answers about how we work, compliance, and tooling.
            </p>
          </FadeIn>
          <dl className="space-y-4">
            {homeFaqItems.map((item) => (
              <FadeIn key={item.question}>
                <div className="rounded-card border border-border bg-surface p-5 md:p-6">
                  <dt className="text-base font-semibold text-foreground">{item.question}</dt>
                  <dd className="mt-3 text-sm text-muted leading-relaxed">{item.answer}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="container mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">
              Have a product to ship, or a problem to untangle?
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
              Tell us what you are building. A senior engineer replies within one business day. No sales development
              representative funnel.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 px-10 py-3.5 font-semibold text-background bg-primary hover:bg-primary-hover rounded-card transition-colors"
            >
              Start a project →
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  )
}
