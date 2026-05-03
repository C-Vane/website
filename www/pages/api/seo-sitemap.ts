import type { NextApiRequest, NextApiResponse } from "next"

import { getBaseUrl } from "lib/site-url"

const paths = ["", "/services", "/about", "/contact", "/legal"] as const

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export default function seoSitemapHandler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const base = getBaseUrl()

  if (!base) {
    res.setHeader("Content-Type", "application/xml; charset=utf-8")
    res
      .status(200)
      .send(
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`
      )
    return
  }

  const lastMod = new Date().toISOString().slice(0, 10)

  const urls = paths
    .map((path) => {
      const loc = path === "" ? `${base}/` : `${base}${path}`
      const priority =
        path === ""
          ? "1.0"
          : path === "/services" || path === "/contact"
            ? "0.9"
            : "0.7"
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  res.setHeader("Content-Type", "application/xml; charset=utf-8")
  res.status(200).send(xml)
}
