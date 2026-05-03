import Script from "next/script"
import { DefaultSeo } from "next-seo"
import { Analytics } from "@vercel/analytics/react"

import { site } from "config/site"
import { getBaseUrl } from "lib/site-url"

import "../styles/global.css"
import "../styles/mdx.css"

export default function App({ Component, pageProps }) {
  const baseUrl = getBaseUrl()
  const defaultOgImage = baseUrl
    ? `${baseUrl}${site.openGraphImagePath}`
    : undefined

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-KZRZTL6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-KZRZTL6');
        `}
      </Script>
      <DefaultSeo
        defaultTitle={site.name}
        description={site.description}
        openGraph={{
          title: site.name,
          description: site.description,
          type: "website",
          ...(baseUrl ? { url: baseUrl } : {}),
          site_name: site.name,
          locale: "en_US",
          ...(defaultOgImage
            ? {
                images: [
                  {
                    url: defaultOgImage,
                    width: 512,
                    height: 512,
                    alt: site.name,
                  },
                ],
              }
            : {}),
        }}
        twitter={{
          cardType: "summary_large_image",
          ...(site.social.twitter ? { site: site.social.twitter } : {}),
        }}
        additionalMetaTags={[
          {
            name: "theme-color",
            content: "#111118",
          },
          {
            name: "apple-mobile-web-app-title",
            content: site.name,
          },
        ]}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
