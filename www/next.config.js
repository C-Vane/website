module.exports = {
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      { source: "/docs/:path*", destination: "/", permanent: true },
      { source: "/learn/:path*", destination: "/", permanent: true },
      { source: "/guides/:path*", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: "/robots.txt", destination: "/api/seo-robots" },
      { source: "/sitemap.xml", destination: "/api/seo-sitemap" },
    ]
  },
}
