import * as React from "react"
import Link from "next/link"

import { Layout } from "components/layout"

const legalFields = [
  { label: "Legal name", value: "Cattabiani IT Solutions OÜ" },
  {
    label: "Registered address",
    value: "Randla tn 12-28 Harjumaa, Tallinn Põhja-Tallinna linnaosa 10315, Estonia",
  },
  { label: "Registration number", value: "16835209" },
  { label: "Date of registration", value: "06/10/2023" },
  { label: "VAT identification number", value: "EE102664616" },
]

export default function LegalPage() {
  return (
    <Layout
      title="Legal Notice"
      description="Legal information for Cattabiani IT Solutions OÜ  -  registered in Tallinn, Estonia."
    >
      <section className="relative px-6 pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(99,102,241,0.35), transparent)",
          }}
        />
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl text-white mb-4">
            Legal Notice
          </h1>
          <p className="text-slate-400">
            Company information as registered with the Estonian Business Register.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container max-w-3xl mx-auto space-y-6">
          {/* Company details */}
          <div className="rounded-2xl bg-surface border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-white">Company Details</h2>
            </div>
            <dl className="divide-y divide-border">
              {legalFields.map((field) => (
                <div key={field.label} className="px-6 py-4 grid sm:grid-cols-2 gap-2">
                  <dt className="text-sm font-medium text-slate-400">{field.label}</dt>
                  <dd className="text-sm text-white">
                    {field.href ? (
                      <a href={field.href} className="hover:text-primary transition-colors">
                        {field.value}
                      </a>
                    ) : (
                      field.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Liability */}
          <div className="rounded-2xl bg-surface border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-white">Liability for Content</h2>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                The content of this website has been compiled with the utmost care. However,
                we cannot guarantee the accuracy, completeness, or timeliness of the content.
                As a service provider, we are responsible for our own content on these pages
                in accordance with applicable law. We are not obligated to monitor transmitted
                or stored third-party information or to investigate circumstances that indicate
                illegal activity.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="rounded-2xl bg-surface border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-white">Liability for Links</h2>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Our website contains links to external third-party websites. We have no
                influence over the content of those external sites and therefore cannot
                accept any liability for their content. The respective providers or operators
                of the linked pages are responsible for their content. Linked pages were
                checked for potential legal violations at the time of linking and no illegal
                content was apparent at that time.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="rounded-2xl bg-surface border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h2 className="font-semibold text-white">Copyright</h2>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                The content and works created by the site operators on these pages are subject
                to copyright law. Duplication, processing, distribution, or any form of
                commercialisation of such material beyond the scope of copyright law requires
                the prior written consent of its respective author or creator.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/" className="text-sm text-primary hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
