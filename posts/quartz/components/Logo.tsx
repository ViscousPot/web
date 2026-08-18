import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Logo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/logo.svg")
  return (
    <a href="/" class={classNames(displayClass, "site-logo")} aria-label={cfg.pageTitle}>
      <img src={logoPath} alt="" />
      <span class="site-logo-wordmark">{cfg.pageTitle}</span>
    </a>
  )
}

Logo.css = `
@font-face {
  font-family: "Atkinson Hyperlegible Next Variable";
  font-style: normal;
  font-display: swap;
  font-weight: 200 800;
  src: url("./static/fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2") format("woff2-variations");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}

.site-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.15s ease;
}

.site-logo:hover {
  transform: scale(1.04);
}

.site-logo > img {
  width: 3rem;
  height: 3rem;
}

/* the wordmark is desktop only; below that the sidebar keeps the icon alone */
.site-logo-wordmark {
  display: none;
}

/* on desktop, copy the landing page header: px-10 py-6, 3.5rem icon, and pinned
   to the document corner rather than the centered grid so it lands in the same
   spot at every window width */
@media all and (min-width: 1200px) {
  .site-logo {
    position: absolute;
    top: 0.5rem;
    left: 2.5rem;
    z-index: 5;
  }

  .site-logo > img {
    width: 3.5rem;
    height: 3.5rem;
  }

  .site-logo-wordmark {
    display: inline;
    font-family: "Atkinson Hyperlegible Next Variable", var(--headerFont), sans-serif;
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    font-variant: small-caps;
    color: var(--text-normal);
  }
}
`

export default (() => Logo) satisfies QuartzComponentConstructor
