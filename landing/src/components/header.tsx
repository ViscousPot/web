import * as React from "react"
import Icon from "../images/icon.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

interface HeaderProps {
  /** Current page path, used to apply active styling */
  currentPath?: string
}

const NAV_BASE =
  "inline-flex items-center gap-2 rounded-full bg-[#26211C] px-5 py-2 text-sm font-semibold [font-variant:small-caps] ring-1 ring-[#ebdac633] transition-all hover:bg-[#3a322a] hover:ring-[#EBDAC6] md:text-base"
const NAV_ACTIVE = "ring-[#EBDAC6] bg-[#3a322a]"

export function Header({ currentPath }: HeaderProps) {
  const isAbout = currentPath === "/about"

  return (
    <header className="relative z-30 flex w-full items-center justify-between px-6 py-5 md:px-10 md:py-6">
      <a
        href="/"
        aria-label="ViscousPotential home"
        className="inline-flex items-center gap-3 transition-transform hover:scale-[1.04]"
      >
        <Icon className="h-12 w-12 md:h-14 md:w-14" />
        <span className="hidden text-lg font-extrabold tracking-tight [font-variant:small-caps] sm:inline">
          ViscousPotential
        </span>
      </a>
      <nav aria-label="Primary" className="flex items-center gap-2 md:gap-3">
        <a
          href="/about"
          aria-current={isAbout ? "page" : undefined}
          className={`${NAV_BASE} ${isAbout ? NAV_ACTIVE : ""}`}
        >
          About
        </a>
        <a href="/posts" className={NAV_BASE}>
          Posts
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-xs opacity-70"
          />
        </a>
      </nav>
    </header>
  )
}
