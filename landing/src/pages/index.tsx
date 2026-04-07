import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Icon from "../images/icon.svg"
import GitSync from "../images/gitsync.svg"
import Vocode from "../images/vocode.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faGithub,
  faInstagram,
  faMedium,
  faPatreon,
  faReddit,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faBookBookmark } from "@fortawesome/free-solid-svg-icons"
import BlurryBlob from "../components/animata/blurry-blob"

type Social = {
  href: string
  label: string
  icon: IconDefinition
  /** Tailwind classes for the hover/focus brand color */
  hover: string
}

const SOCIALS: Social[] = [
  { href: "https://www.youtube.com/@ViscousPotential", label: "YouTube", icon: faYoutube, hover: "hover:bg-[#FF0000] hover:text-white focus-visible:bg-[#FF0000] focus-visible:text-white" },
  { href: "https://github.com/ViscousPot/", label: "GitHub", icon: faGithub, hover: "hover:bg-[#0d1117] hover:text-white focus-visible:bg-[#0d1117] focus-visible:text-white" },
  { href: "https://discord.gg/cgvjdDyzzB", label: "Discord", icon: faDiscord, hover: "hover:bg-[#5865F2] hover:text-white focus-visible:bg-[#5865F2] focus-visible:text-white" },
  { href: "https://www.patreon.com/c/ViscousPotential", label: "Patreon", icon: faPatreon, hover: "hover:bg-[#FF424D] hover:text-white focus-visible:bg-[#FF424D] focus-visible:text-white" },
  { href: "https://www.reddit.com/user/ViscousPotential/submitted/", label: "Reddit", icon: faReddit, hover: "hover:bg-[#FF4500] hover:text-white focus-visible:bg-[#FF4500] focus-visible:text-white" },
  { href: "https://viscouspotenti.medium.com/", label: "Medium", icon: faMedium, hover: "hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white" },
  { href: "https://www.instagram.com/viscouspotential/", label: "Instagram", icon: faInstagram, hover: "hover:bg-[#E4405F] hover:text-white focus-visible:bg-[#E4405F] focus-visible:text-white" },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#2E261F] text-[#F5ECDF]">
      {/* Header */}
      <header className="relative z-30 flex w-full items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="https://viscouspotenti.al/" aria-label="ViscousPotential home" className="inline-flex items-center gap-3 transition-transform hover:scale-[1.04]">
          <Icon className="h-12 w-12 md:h-14 md:w-14" />
          <span className="hidden text-lg font-extrabold tracking-tight [font-variant:small-caps] sm:inline">ViscousPotential</span>
        </a>
        <nav aria-label="Primary">
          <a
            href="/posts"
            className="inline-flex items-center gap-2 rounded-full bg-[#26211C] px-5 py-2 text-sm font-semibold [font-variant:small-caps] ring-1 ring-[#ebdac633] transition-all hover:bg-[#3a322a] hover:ring-[#EBDAC6] md:text-base"
          >
            Posts
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs opacity-70" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-6 pb-10 text-center md:pt-10 md:pb-16">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdac633] bg-[#26211C]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4BDA1] backdrop-blur-sm md:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4BDA1]" />
          Independent dev
        </p>
        <h1 className="bg-gradient-to-b from-[#FBF3E4] via-[#EBDAC6] to-[#A8916F] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent [font-variant:small-caps] sm:text-5xl md:text-7xl lg:text-8xl">
          ViscousPotential
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D4BDA1] md:text-lg">
          Tools and experiments for developers
        </p>
      </section>

      {/* Products */}
      <section className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 gap-6 px-6 pb-12 md:grid-cols-2 md:gap-8 md:px-10 md:pb-16">
        {/* GitSync */}
        <article className="relative min-h-[26rem] md:min-h-[32rem]">
          <BlurryBlob firstBlobColor="bg-[#D4BDA1]" secondBlobColor="bg-[#A8916F]">
            <div className="absolute inset-0 z-20 flex flex-col rounded-3xl border-2 border-[#ebdac659] bg-[#2E261F]/30 p-6 backdrop-blur-[2px] transition-colors duration-300 md:p-8 md:hover:border-[#EBDAC6] md:hover:bg-[#2E261F]/55">
              <div className="flex items-center gap-4">
                <GitSync className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
                <div className="min-w-0">
                  <h2 className="text-3xl font-extrabold leading-none md:text-4xl">GitSync</h2>
                  <p className="mt-1 text-sm font-medium text-[#D4BDA1] md:text-base">Mobile git client for Android & iOS</p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
                A cross-platform git client that keeps a folder synced between a remote repository and your device. One-time setup, automatic background sync, HTTPS / SSH / OAuth, built for the way you actually use your phone.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4BDA1] md:text-sm">
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">Android</span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">iOS</span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">Open Source</span>
                <span className="rounded-full border border-[#FFCB6B66] bg-[#FFCB6B14] px-3 py-1 text-[#FFCB6B]">★ 2024 Obsidian Gem</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://gitsync.viscouspotenti.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EBDAC6] px-5 py-2.5 text-sm font-bold text-[#2E261F] transition-all hover:bg-white hover:scale-[1.03] md:text-base"
                >
                  Get GitSync
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                </a>
                <a
                  href="https://gitsync.viscouspotenti.al/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ebdac659] px-5 py-2.5 text-sm font-bold text-[#EBDAC6] transition-all hover:border-[#EBDAC6] hover:bg-[#26211C] md:text-base"
                >
                  <FontAwesomeIcon icon={faBookBookmark} />
                  Wiki
                </a>
              </div>
            </div>
          </BlurryBlob>
        </article>

        {/* Vocode */}
        <article className="relative min-h-[26rem] md:min-h-[32rem]">
          <BlurryBlob firstBlobColor="bg-[#6bb3a7]" secondBlobColor="bg-[#3f8079]">
            <div className="absolute inset-0 z-20 flex flex-col rounded-3xl border-2 border-[#ebdac659] bg-[#2E261F]/30 p-6 backdrop-blur-[2px] transition-colors duration-300 md:p-8 md:hover:border-[#EBDAC6] md:hover:bg-[#2E261F]/55">
              <div className="flex items-center gap-4">
                <Vocode className="h-16 w-16 shrink-0 text-[#6bb3a7] md:h-20 md:w-20" />
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-extrabold leading-none md:text-4xl">Vocode</h2>
                    <span className="rounded-full bg-[#6bb3a722] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6bb3a7] md:text-xs">
                      In beta
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#D4BDA1] md:text-base">Community plugin platform</p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
                An extensible plugin platform with a growing community ecosystem. Core plugins, community-built plugins, and full documentation. Build, share, and extend what Vocode can do.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4BDA1] md:text-sm">
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">Plugins</span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">Extensible</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-[#26211C] px-5 py-2.5 text-sm font-bold text-[#D4BDA1]/70 ring-1 ring-[#ebdac633] md:text-base"
                >
                  In Beta
                </span>
                <a
                  href="https://vocode-docs.viscouspotenti.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ebdac659] px-5 py-2.5 text-sm font-bold text-[#EBDAC6] transition-all hover:border-[#EBDAC6] hover:bg-[#26211C] md:text-base"
                >
                  <FontAwesomeIcon icon={faBookBookmark} />
                  Docs
                </a>
              </div>
            </div>
          </BlurryBlob>
        </article>
      </section>

      {/* Footer with socials */}
      <footer className="relative z-10 mt-auto border-t border-[#ebdac622] bg-[#26211C]/40 px-6 py-8 backdrop-blur-sm md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
          <p className="text-xs text-[#D4BDA1] md:text-sm">
            © {new Date().getFullYear()} ViscousPotential · Independent Dev
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {SOCIALS.map(({ href, label, icon, hover }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2E261F] text-base text-[#EBDAC6] ring-1 ring-[#ebdac633] transition-all hover:scale-110 hover:ring-transparent focus-visible:scale-110 focus-visible:outline-none focus-visible:ring-transparent ${hover}`}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

const PAGE_DESCRIPTION =
  "ViscousPotential builds developer tools, including GitSync, the open-source cross-platform mobile git client for Android and iOS, and Vocode, an extensible plugin platform currently in beta."

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ViscousPotential",
  alternateName: "Viscous Potential",
  url: "https://viscouspotenti.al/",
  logo: "https://viscouspotenti.al/icon.png",
  description: PAGE_DESCRIPTION,
  sameAs: [
    "https://www.youtube.com/@ViscousPotential",
    "https://github.com/ViscousPot/",
    "https://discord.gg/cgvjdDyzzB",
    "https://www.patreon.com/c/ViscousPotential",
    "https://www.reddit.com/user/ViscousPotential/submitted/",
    "https://viscouspotenti.medium.com/",
    "https://www.instagram.com/viscouspotential/",
  ],
  makesOffer: [
    {
      "@type": "SoftwareApplication",
      name: "GitSync",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Android, iOS",
      url: "https://gitsync.viscouspotenti.al/",
      description:
        "Cross-platform mobile git client that syncs a folder between a remote repository and a local directory on Android and iOS.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Vocode",
      applicationCategory: "DeveloperApplication",
      url: "https://vocode-docs.viscouspotenti.al/",
      description:
        "Extensible plugin platform with a growing community ecosystem. Currently in beta.",
    },
  ],
}

export const Head: HeadFC = () => (
  <>
    <title>ViscousPotential: GitSync, Vocode & open-source developer tools</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={PAGE_DESCRIPTION} />
    <meta name="keywords" content="ViscousPotential, GitSync, Vocode, mobile git client, Android git, iOS git, open source developer tools" />
    <meta name="author" content="ViscousPotential" />
    <link rel="canonical" href="https://viscouspotenti.al/" />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

    {/* Open Graph */}
    <meta property="og:site_name" content="ViscousPotential" />
    <meta property="og:title" content="ViscousPotential: GitSync, Vocode & open-source developer tools" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={PAGE_DESCRIPTION} />
    <meta property="og:url" content="https://viscouspotenti.al/" />
    <meta property="og:image" content="https://viscouspotenti.al/icon.png" />
    <meta property="og:image:alt" content="ViscousPotential logo" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ViscousPotential: GitSync, Vocode & open-source developer tools" />
    <meta name="twitter:description" content={PAGE_DESCRIPTION} />
    <meta name="twitter:image" content="https://viscouspotenti.al/icon.png" />
    <meta property="twitter:domain" content="viscouspotenti.al" />
    <meta property="twitter:url" content="https://viscouspotenti.al/" />

    <link rel="icon" href="/icon.png" />
    <meta name="theme-color" content="#2E261F" />

    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
    />
  </>
)
