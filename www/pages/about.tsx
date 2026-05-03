import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Layout } from "components/layout"

const values = [
  {
    title: "Quality first",
    description:
      "We do not ship code we are not proud of. Every project gets the same level of care and rigour, regardless of size.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Full transparency",
    description:
      "No surprises. We communicate progress, blockers, and estimates clearly so you are always in the loop.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Flexibility",
    description:
      "Businesses change. We structure our engagements to accommodate shifting priorities without friction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <Layout
      title="About"
      description="Cattabiani IT Solutions OÜ  -  a software house registered in Estonia, helping businesses build software and find the right people."
    >
      {/* Hero */}
      <section className="relative px-6 pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99,102,241,0.35), transparent)",
          }}
        />
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
                About Cattabiani IT Solutions
              </h1>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                We are a software house registered in Estonia and operating internationally.
                Founded in 2023, we help businesses build software on demand, cover open
                engineering positions while permanent hiring is underway, and sharpen their
                digital presence through SEO, AEO, and design, automate and integrate AI into their operations, and guide companies through relocating to Estonia and setting up e-Residency.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Our clients range from early-stage startups to established companies that need
                a reliable, no-nonsense technical partner  -  someone who ships and communicates
                clearly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 font-semibold text-white bg-primary hover:bg-indigo-500 rounded-lg transition-colors text-center"
                >
                  Get in touch
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 font-semibold text-slate-300 bg-surface hover:bg-surface-2 border border-border rounded-lg transition-colors text-center"
                >
                  See what we do
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-2xl scale-95 -z-10" />
                <Image
                  src="/images/photo.jpeg"
                  alt="Vanessa Cattabiani  -  Founder of Cattabiani IT Solutions"
                  width={380}
                  height={460}
                  className="rounded-2xl object-cover shadow-2xl border border-border"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 bg-surface border-y border-border">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2023", label: "Founded" },
              { value: "6+", label: "Core services" },
              { value: "100%", label: "Remote-first" },
              { value: "EU", label: "Registered & compliant" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-primary">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tallinn photo break */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80"
          alt="Tallinn, Estonia  -  where Cattabiani IT Solutions is registered"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg md:text-xl font-semibold tracking-wide opacity-90">
            Tallinn, Estonia  -  EU registered &amp; globally active
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 md:py-24">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl text-white">
              How we work
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Three principles that guide every engagement we take on.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-2xl bg-surface-2 border border-border overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative min-h-64 md:min-h-0">
                <Image
                  src="/images/photo-w-glasses.jpeg"
                  alt="Vanessa Cattabiani"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179Z" />
                </svg>
                <blockquote className="text-lg text-white font-medium leading-relaxed mb-6">
                  "I started Cattabiani IT Solutions because I kept seeing the same problem:
                  companies with great ideas but no reliable technical partner to execute them.
                  We exist to close that gap  -  honestly, quickly, and without the usual agency overhead."
                </blockquote>
                <div>
                  <p className="font-semibold text-white">Vanessa Cattabiani</p>
                  <p className="text-sm text-primary">Founder &amp; CEO, Cattabiani IT Solutions OÜ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal teaser */}
      <section className="px-6 pb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="rounded-xl bg-surface border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white">Legal information</h3>
              <p className="text-sm text-slate-400 mt-1">
                Cattabiani IT Solutions OÜ · Reg. No. 16835209 · Tallinn, Estonia · VAT EE102664616
              </p>
            </div>
            <Link
              href="/legal"
              className="flex-shrink-0 text-sm font-medium text-primary hover:underline"
            >
              View full legal notice →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
