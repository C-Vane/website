/**
 * Public site base URL without a trailing slash. Used for canonical links,
 * Open Graph URLs, and structured data.
 */
export function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_BASE_URL
  if (typeof raw === "string" && raw.trim().length > 0) {
    return raw.trim().replace(/\/$/, "")
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4444"
  }
  return ""
}
