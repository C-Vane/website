import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { Layout } from "components/layout"
import { JsonLd } from "components/json-ld"
import { buildServicesItemList } from "lib/structured-data"

const services = [
  {
    title: "Custom Software Development",
    tagline: "Built exactly the way you need it",
    description:
      "Whether you need a customer-facing web application, an internal operations tool, or a complex API integration, we design and build it from the ground up. We work with modern stacks  -  React, Next.js, Node.js, Python  -  and deliver clean, maintainable codebases your team will be proud to own.",
    bullets: [
      "Web and mobile application development",
      "API design and third-party integrations",
      "Legacy system modernisation",
      "Cloud-native architecture and deployment",
      "Ongoing maintenance and feature development",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Staff Augmentation",
    tagline: "The right person, in the right seat, right now",
    description:
      "Hiring takes time. We bridge the gap by embedding vetted, experienced engineers directly into your team while you run a permanent hire process. Our people integrate quickly, contribute from day one, and hand over cleanly when your new hire is ready  -  no knowledge loss, no disruption.",
    bullets: [
      "Short and long-term contractor placement",
      "Full-stack, front-end, back-end, and DevOps profiles",
      "Rapid onboarding and team integration",
      "Transparent handover when the permanent hire starts",
      "Flexible notice periods  -  scale up or down as needed",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
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
    tagline: "More visibility, more traffic, more conversions",
    description:
      "We combine traditional technical SEO with Answer Engine Optimisation (AEO) to ensure your business is found  -  whether someone is searching on Google or asking an AI assistant. From in-depth audits to hands-on implementation, we focus on changes that generate measurable results, not vanity metrics.",
    bullets: [
      "Technical SEO audits (Core Web Vitals, crawlability, structured data)",
      "Answer Engine Optimisation (AEO) for AI-powered search",
      "On-page and off-page SEO implementation",
      "Performance and page speed improvements",
      "Analytics setup and reporting dashboards",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    ),
  },
  {
    title: "Design",
    tagline: "Interfaces people actually enjoy using",
    description:
      "Great software needs great design. We approach UX and UI as a discipline  -  grounded in research, tested with users, and delivered as polished, production-ready specifications. We also support brand identity work for companies building something new.",
    bullets: [
      "UX research and user journey mapping",
      "UI design and component libraries",
      "Interactive prototypes (Figma)",
      "Design systems and brand guidelines",
      "Accessibility-first design approach",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Automation & AI Integration",
    tagline: "Work smarter, not harder",
    description:
      "We help businesses identify where manual, repetitive work is costing time and money  -  then build the automation and AI integrations to fix it. From connecting your existing tools to building custom AI-powered workflows, we make your processes faster, more reliable, and easier to scale.",
    bullets: [
      "Business process analysis and automation roadmap",
      "Workflow automation (Zapier, Make, n8n, custom-built)",
      "AI model integration into existing products and operations",
      "CRM, ERP, and third-party tool connectivity",
      "Custom AI assistants and internal knowledge tools",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Estonia Relocation & e-Residency",
    tagline: "Your gateway to doing business in the EU",
    description:
      "Estonia is one of the most business-friendly jurisdictions in the world  -  fully digital, EU-compliant, and low-overhead. We guide companies and entrepreneurs through every step of the process, from the first e-Residency application to a fully operational Estonian company, whether you are relocating from anywhere in Europe or setting up a remote entity from scratch.",
    bullets: [
      "e-Residency application guidance and preparation",
      "Estonian company formation (OÜ / AS)",
      "e-Business setup: banking, accounting, and compliance",
      "Full company relocation from any European country",
      "Ongoing corporate consulting post-establishment",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253"
        />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  const servicesStructuredData = buildServicesItemList(
    services.map((item) => ({
      title: item.title,
      description: item.description,
    }))
  )

  return (
    <Layout
      title="Services"
      description="Custom software development, staff augmentation, SEO and AEO, design, and Estonia company relocation consulting  -  all under one roof."
    >
      {servicesStructuredData ? <JsonLd data={servicesStructuredData} /> : null}
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
          alt="Team working together"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-background/75" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(29,78,216,0.5), transparent)",
          }}
        />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl text-white leading-tight">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              We cover the full software lifecycle - from the first design
              sketch to a live product, and everyone you need to run it.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="px-6 pb-24">
        <div className="container max-w-5xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-2xl bg-surface border border-border overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-white">
                        {service.title}
                      </h2>
                      <span className="text-sm text-primary font-medium sm:before:content-['·'] sm:before:mx-2 sm:before:text-slate-600">
                        {service.tagline}
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <svg
                            className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="container max-w-3xl mx-auto text-center">
          <div
            className="rounded-2xl p-10 md:p-14 border border-primary/30"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(99,102,241,0.12), rgba(17,17,24,0.9))",
            }}
          >
            <h2 className="text-2xl font-black text-white mb-3">
              Not sure which service fits?
            </h2>
            <p className="text-slate-400 mb-6">
              Tell us about your challenge and we will figure it out together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 font-semibold text-white bg-primary hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
