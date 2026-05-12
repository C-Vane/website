import { site } from "config/site"
import { getBaseUrl } from "lib/site-url"

function organizationId(base: string): string {
  return `${base}/#organization`
}

function websiteId(base: string): string {
  return `${base}/#website`
}

export function buildOrganizationAndWebsiteGraph(): Record<string, unknown> | null {
  const base = getBaseUrl()
  if (!base) {
    return null
  }

  const sameAs: string[] = []
  if (site.social.github) {
    sameAs.push(site.social.github)
  }
  if (site.social.twitter) {
    sameAs.push(site.social.twitter)
  }

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": organizationId(base),
    name: site.name,
    legalName: site.organization.legalName,
    url: base,
    logo: `${base}${site.openGraphImagePath}`,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.organization.addressCountry,
    },
    vatID: site.organization.vatId,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Estonian registry code",
      value: site.organization.registrationNumber,
    },
  }

  if (sameAs.length > 0) {
    organization.sameAs = sameAs
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": websiteId(base),
        url: base,
        name: site.name,
        description: site.description,
        inLanguage: "en",
        publisher: { "@id": organizationId(base) },
      },
    ],
  }
}

export function buildFaqPageSchema(
  items: readonly { question: string; answer: string }[]
): Record<string, unknown> | null {
  const base = getBaseUrl()
  if (!base) {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function buildServicesItemList(
  services: readonly { title: string; description: string }[]
): Record<string, unknown> | null {
  const base = getBaseUrl()
  if (!base) {
    return null
  }

  const pageUrl = `${base}/services`
  const orgRef = organizationId(base)

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} services`,
    description: "Professional services offered by the company.",
    url: pageUrl,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": orgRef },
        areaServed: "Worldwide",
      },
    })),
  }
}
