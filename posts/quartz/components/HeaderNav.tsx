import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// same glyph the landing page header uses, read from the icon package rather
// than duplicated into this repo
const [iconWidth, iconHeight, , , iconPathData] = faArrowUpRightFromSquare.icon
const iconPath = typeof iconPathData === "string" ? iconPathData : iconPathData[0]

const HeaderNav: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <nav class={classNames(displayClass, "site-nav")} aria-label="Primary">
      <a href="/posts" class="site-nav-link">
        Posts
        <svg
          class="site-nav-icon"
          viewBox={`0 0 ${iconWidth} ${iconHeight}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d={iconPath} />
        </svg>
      </a>
    </nav>
  )
}

HeaderNav.css = `
/* mirrors the landing page nav: pinned to the top right of the page, level with
   the logo. hidden below desktop, where the sidebar becomes a compact header */
.site-nav {
  display: none;
}

.site-nav-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.site-nav-icon {
  /* landing sizes this with text-xs, a fixed 0.75rem, not relative to the
     button's own font size */
  width: 0.75rem;
  height: 0.75rem;
  opacity: 0.7;
  flex-shrink: 0;
}

@media all and (min-width: 1200px) {
  .site-nav {
    display: block;
    position: absolute;
    top: calc(2rem - 1px);
    right: calc(-100vw + 100% + 2.5rem - 1px);
    z-index: 5;
  }
}
`

export default (() => HeaderNav) satisfies QuartzComponentConstructor
