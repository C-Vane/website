import { MdxNode } from "next-mdx"

declare global {
  interface Window {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    docsearch: any
  }
}

export interface MdxComponents {
  [name: string]: React.ReactNode
}

export type Doc = MdxNode<{
  title: string
  excerpt?: string
}>

export type Blog = MdxNode<{
  title: string
  published: boolean
  excerpt?: string
  date?: string
  author?: string
}>

export type Guide = MdxNode<{
  title?: string
  date?: string
  excerpt?: string
  author?: string
  image?: string
  caption?: string
  externalUrl?: string
}>

export type Tutorial = MdxNode<{
  title: string
  excerpt?: string
  weight?: number
  group?: string
  video?: string
}>

export type Feature = MdxNode<{
  title: string
  excerpt?: string
  weight?: number
}>

export type NavLink = {
  title: string
  external?: boolean
  activePathNames?: string[]
  badge?: string
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type NavLinks = NavLink[]

export interface SiteOrganization {
  legalName: string
  /** ISO 3166-1 alpha-2 country code */
  addressCountry: string
  registrationNumber: string
  vatId: string
}

export interface SiteConfig {
  name: string
  description?: string
  copyright?: string
  /** Path under public/ used for Open Graph and Twitter cards (minimum 1200×630 recommended). */
  openGraphImagePath: string
  organization: SiteOrganization
  links: NavLinks
  social: {
    github?: string
    twitter?: string
    contact?: string
  }
  versions: {
    version: string
    url?: string
    active?: boolean
  }[]
}

export interface DocsConfig {
  links: NavLinks
}

export interface GuidesConfig {
  links: NavLinks
}
