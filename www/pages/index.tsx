import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { site } from "config/site"
import { homeFaqItems } from "config/home-faq"
import { Layout } from "components/layout"
import { JsonLd } from "components/json-ld"
import { buildFaqPageSchema } from "lib/structured-data"

const services = [
  {
    title: "Custom Software Development",
    description:
      "Bespoke web and mobile applications built to your exact requirements  -  from MVPs to full-scale platforms.",
    icon: (
      <svg
        className="w-7 h-7"
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
    description:
      "Skilled developers embedded in your team while you search for permanent hires  -  no gap in delivery.",
    icon: (
      <svg
        className="w-7 h-7"
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
    description:
      "Technical SEO audits, answer engine optimisation, and performance improvements that drive real visibility and traffic.",
    icon: (
      <svg
        className="w-7 h-7"
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
    description:
      "UX/UI design, branding, and interactive prototypes  -  built for the users who actually use your product.",
    icon: (
      <svg
        className="w-7 h-7"
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
    description:
      "Streamline your operations with intelligent automation  -  eliminating manual work, connecting your tools, and embedding AI where it creates the most value.",
    icon: (
      <svg
        className="w-7 h-7"
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
    description:
      "End-to-end consulting for moving your company to Estonia  -  from e-Residency and e-business setup to full relocation anywhere in Europe.",
    icon: (
      <svg
        className="w-7 h-7"
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

const whyUs = [
  {
    title: "Fast Delivery",
    description:
      "We move quickly without cutting corners. Lean processes and experienced engineers mean you ship sooner.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
  {
    title: "Flexible Engagement",
    description:
      "Fixed-price projects, time-and-materials, or staff augmentation  -  we adapt to what works for you.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
        />
      </svg>
    ),
  },
  {
    title: "End-to-end Ownership",
    description:
      "From discovery to deployment and beyond  -  we own every stage so nothing falls through the cracks.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
]

export default function IndexPage() {
  const faqStructuredData = buildFaqPageSchema(homeFaqItems)

  return (
    <Layout title={site.name} description={site.description}>
      {faqStructuredData ? <JsonLd data={faqStructuredData} /> : null}
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(29,78,216,0.5), transparent)",
          }}
        />
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 mb-6 px-4 py-1.5 rounded-full bg-surface border border-border text-sm text-slate-400">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <span>
                  Software house · Estonia-registered · Operating globally
                </span>
              </div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
                Software that works.
                <br />
                <span className="text-primary">People you can rely on.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
                We build software on demand, place skilled engineers in your
                team, and optimise your digital presence - all under one roof.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link
                  href="/contact"
                  className="px-8 py-3 font-semibold text-center text-white bg-primary hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Get in touch
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-3 font-semibold text-center text-slate-300 bg-surface hover:bg-surface-2 border border-border rounded-lg transition-colors"
                >
                  Our services
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl -z-10" />
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                      alt="Team collaborating"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-36 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                      alt="Developer coding"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                </div>
                <div className="space-y-3 pt-6">
                  <div className="rounded-2xl overflow-hidden h-36 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
                      alt="Modern workspace"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                      alt="Business strategy"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="px-6 py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl text-white">
              What we do
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
              From the first line of code to the right hire - we cover the full
              spectrum.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-primary hover:underline font-medium"
            >
              <span>See all services</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-xl md:text-3xl font-black text-white max-w-2xl mx-auto leading-snug">
              &quot;We don&apos;t just deliver code - we deliver outcomes.&quot;
            </p>
            <p className="mt-3 text-slate-400 text-sm">
              Vanessa Cattabiani, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="px-6 py-16 md:py-24 bg-surface border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl text-white">
              Why work with us
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently asked questions (visible copy + FAQPage structured data) */}
      <section
        className="px-6 py-16 md:py-24 border-t border-border bg-surface/50"
        aria-labelledby="faq-heading"
      >
        <div className="container max-w-3xl mx-auto">
          <h2
            id="faq-heading"
            className="text-3xl font-black tracking-tight md:text-4xl text-white text-center mb-4"
          >
            Frequently asked questions
          </h2>
          <p className="text-center text-slate-400 mb-10 max-w-xl mx-auto">
            Straight answers about how we work, where we are based, and what
            answer engine optimisation means.
          </p>
          <dl className="space-y-4">
            {homeFaqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-border bg-background/80 p-5 md:p-6"
              >
                <dt className="text-base font-semibold text-white">
                  {item.question}
                </dt>
                <dd className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-6 py-20 md:py-28">
        <div className="container max-w-3xl mx-auto text-center">
          <div
            className="rounded-2xl p-10 md:p-16 border border-primary/30 relative overflow-hidden"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(99,102,241,0.12), rgba(17,17,24,0.9))",
            }}
          >
            <h2 className="text-3xl font-black tracking-tight md:text-4xl lg:text-5xl text-white mb-4">
              Ready to build something?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto">
              Tell us about your project and we will get back to you within one
              business day.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-3 font-semibold text-white bg-primary hover:bg-indigo-500 rounded-lg transition-colors"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
