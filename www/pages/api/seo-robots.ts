import type { NextApiRequest, NextApiResponse } from "next"

import { getBaseUrl } from "lib/site-url"

export default function seoRobotsHandler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const base = getBaseUrl()

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    ...(base ? [`Sitemap: ${base}/sitemap.xml`] : []),
  ].join("\n")

  res.setHeader("Content-Type", "text/plain; charset=utf-8")
  res.status(200).send(body)
}
