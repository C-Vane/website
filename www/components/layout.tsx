import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import classNames from "classnames"
import { NextSeo } from "next-seo"

import { site } from "config/site"

interface LayoutProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export function Layout({ title = "", description = "", children }: LayoutProps) {
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const { asPath: path, pathname } = useRouter()

  return (
    <>
      <NextSeo
        title={path === "/" ? site.name : `${title}  -  ${site.name}`}
        description={description || site.description}
        canonical={`${process.env.NEXT_PUBLIC_BASE_URL}${path}`}
        openGraph={{
          title,
          description: description || site.description,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/meta.jpg`,
              width: 800,
              height: 600,
            },
          ],
        }}
      />

      {/* Mobile slide-out menu */}
      <div
        className={classNames(
          "fixed z-50 flex flex-col p-6 overflow-auto bg-surface border-r border-border bottom-0 transition-transform top-0 w-64 lg:hidden",
          showMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={() => setShowMenu(false)}>
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={40}
              height={40}
              style={{ filter: "invert(1)" }}
              className="object-contain"
            />
          </Link>
          <button
            onClick={() => setShowMenu(false)}
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="grid grid-flow-row gap-4 auto-rows-max">
          <li>
            <Link
              href="/"
              onClick={() => setShowMenu(false)}
              className={classNames(
                "text-base font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-slate-300"
              )}
            >
              Home
            </Link>
          </li>
          {site.links.map((link, index) => {
            const isActive =
              pathname === link.href || link.activePathNames?.includes(pathname)
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setShowMenu(false)}
                  className={classNames(
                    "text-base font-medium transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-slate-300"
                  )}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noreferrer" : ""}
                >
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {showMenu && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setShowMenu(false)}
        />
      )}

      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container flex items-center justify-between px-6 mx-auto h-16 xl:px-8">
            {/* Left: hamburger + logo */}
            <div className="flex items-center space-x-4">
              <button
                className="flex lg:hidden text-slate-400 hover:text-white transition-colors"
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt={site.name}
                  width={36}
                  height={36}
                  style={{ filter: "invert(1)" }}
                  className="object-contain"
                />
                <span className="font-semibold text-white text-sm sm:text-base hidden sm:inline">
                  {site.name}
                </span>
              </Link>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {site.links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  link.activePathNames?.includes(pathname)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={classNames(
                      "text-sm font-medium transition-colors hover:text-white",
                      isActive ? "text-white" : "text-slate-400"
                    )}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noreferrer" : ""}
                  >
                    {link.title}
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-indigo-500 rounded-lg transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border bg-surface mt-16">
          <div className="container mx-auto px-6 py-12 xl:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="/images/logo.png"
                    alt={site.name}
                    width={32}
                    height={32}
                    style={{ filter: "invert(1)" }}
                    className="object-contain"
                  />
                  <span className="font-semibold text-white">{site.name}</span>
                </Link>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {site.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Navigation
                </h3>
                <ul className="space-y-2">
                  {site.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors"
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noreferrer" : ""}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/legal"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Legal Notice
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Contact
                </h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>Randla tn 12-28, Tallinn, Estonia</li>
                  <li>Reg. No. 16835209</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">{site.copyright}</p>
              <Link href="/legal" className="text-sm text-slate-500 hover:text-white transition-colors">
                Legal Notice
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
