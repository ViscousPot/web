import * as React from "react"

const SITE_URL = "https://viscouspotenti.al"
const SITE_NAME = "ViscousPotential"
const OG_IMAGE = `${SITE_URL}/icon.png`

interface SeoHeadProps {
  title: string
  description: string
  /** Path starting with `/`, e.g. `/about` or `/` for the homepage */
  path: string
  /** Optional extra elements to render inside <head> after the standard tags */
  children?: React.ReactNode
}

/**
 * Shared SEO Head fragment used by every page's `Head` export. Renders title,
 * description, canonical, theme color, full Open Graph + Twitter card sets, and
 * a per-page WebPage JSON-LD entry. Page-specific structured data (e.g. the
 * Organization schema on the homepage) should be passed via `children`.
 */
export function SeoHead({ title, description, path, children }: SeoHeadProps) {
  const url = `${SITE_URL}${path}`
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
  }

  return (
    <>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      <link rel="canonical" href={url} />
      <link
        rel="preconnect"
        href="https://cdnjs.cloudflare.com"
        crossOrigin="anonymous"
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:alt" content={`${SITE_NAME} logo`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta property="twitter:domain" content="viscouspotenti.al" />
      <meta property="twitter:url" content={url} />

      <link rel="icon" href="/icon.png" />
      <meta name="theme-color" content="#2E261F" />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {children}
    </>
  )
}
