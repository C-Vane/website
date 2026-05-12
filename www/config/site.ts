import { SiteConfig } from "types"

export const site: SiteConfig = {
  name: "Cattabiani IT Solutions",
  description:
    "Reliable software in a world full of bugs. We help teams ship products, scale engineering, and grow.",
  copyright: `© ${new Date().getFullYear()} Cattabiani IT Solutions OÜ. All rights reserved.`,
  openGraphImagePath: "/images/logo.png",
  organization: {
    legalName: "Cattabiani IT Solutions OÜ",
    addressCountry: "EE",
    addressLocality: "Tallinn",
    registrationNumber: "16835209",
    vatId: "EE102664616",
  },
  contactEmail: "vanessa@cattabiani.eu",
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
    linkedin: "",
    contact: "/contact",
    twitter: "",
  },
  versions: [],
}
