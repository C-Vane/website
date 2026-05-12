import { SiteConfig } from "types"

export const site: SiteConfig = {
  name: "Cattabiani IT Solutions",
  description:
    "We build software on demand, help you find the right people, and optimise your digital presence.",
  copyright: `© ${new Date().getFullYear()} Cattabiani IT Solutions OÜ. All rights reserved.`,
  openGraphImagePath: "/images/logo.png",
  organization: {
    legalName: "Cattabiani IT Solutions OÜ",
    addressCountry: "EE",
    registrationNumber: "16835209",
    vatId: "EE102664616",
  },
  links: [
    {
      title: "Services",
      href: "/services",
      activePathNames: ["/services"],
    },
    {
      title: "About",
      href: "/about",
      activePathNames: ["/about"],
    },
    {
      title: "Contact",
      href: "/contact",
      activePathNames: ["/contact"],
    },
  ],
  social: {
    github: "",
    contact: "/contact",
    twitter: "",
  },
  versions: [],
}
