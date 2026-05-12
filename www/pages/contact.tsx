import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { Layout } from "components/layout"

const contactDetails = [
  {
    label: "Company",
    value: "Cattabiani IT Solutions OÜ",
    href: "/legal",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
]

type FormState = "idle" | "sending" | "sent" | "error"

export default function ContactPage() {
  const [formState, setFormState] = React.useState<FormState>("idle")
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormState("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send")
      }

      setFormState("sent")
    } catch {
      setFormState("error")
    }
  }

  return (
    <Layout
      title="Contact"
      description="Get in touch with Cattabiani IT Solutions OÜ  -  we respond within one business day."
    >
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80"
          alt="Tallinn, Estonia"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl text-white leading-tight">
              Let's talk
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us about your project or your hiring challenge. We respond within
              one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact details */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-lg font-bold text-white mb-6">Contact details</h2>
                <ul className="space-y-5">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="text-sm text-slate-300 hover:text-white transition-colors"
                          target={item.href.startsWith("http") ? "_blank" : "_self"}
                          rel={item.href.startsWith("http") ? "noreferrer" : ""}
                        >
                          {item.value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-border">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Registered company
                </p>
                <p className="text-sm text-slate-400">
                  Cattabiani IT Solutions OÜ
                  <br />
                  Reg. No. 16835209
                  <br />
                  VAT EE102664616
                </p>
                <Link href="/legal" className="text-xs text-primary hover:underline mt-2 inline-block">
                  Full legal notice →
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="rounded-2xl bg-surface border border-border p-8">
                <h2 className="text-lg font-bold text-white mb-6">Send us a message</h2>

                {formState === "sent" ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">Message sent!</p>
                    <p className="text-sm text-slate-400">
                      We received your message and will get back to you within one business day.
                    </p>
                    <button
                      onClick={() => { setFormState("idle"); setFormData({ name: "", email: "", subject: "", message: "" }) }}
                      className="text-sm text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : formState === "error" ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mx-auto">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">Something went wrong</p>
                    <p className="text-sm text-slate-400">
                      Your message could not be sent. Please try again or email us directly.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="text-sm text-primary hover:underline"
                    >
                      Try again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                          Full name <span className="text-primary">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                          Email address <span className="text-primary">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white focus:outline-none focus:border-primary transition-colors text-sm"
                      >
                        <option value="">Select a topic…</option>
                        <option value="Custom software development">Custom software development</option>
                        <option value="Staff augmentation">Staff augmentation</option>
                        <option value="SEO & AEO">SEO &amp; AEO</option>
                        <option value="Automation & AI integration">Automation &amp; AI integration</option>
                        <option value="Design">Design</option>
                        <option value="Estonia relocation & e-Residency">Estonia relocation &amp; e-Residency</option>
                        <option value="General enquiry">General enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or challenge…"
                        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="w-full py-3 px-6 font-semibold text-white bg-primary hover:bg-indigo-500 rounded-lg transition-colors disabled:opacity-60"
                    >
                      {formState === "sending" ? "Sending…" : "Send message"}
                    </button>
                    <p className="text-xs text-slate-500 text-center">
                      We will reply to your email address within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
