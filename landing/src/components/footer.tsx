import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIALS } from "./socials";

const PAGES: { href: string; label: string; external?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/posts", label: "Posts" },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-[#ebdac622] bg-[#26211C]/40 px-6 py-10 backdrop-blur-sm md:px-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        {/* Brand + copyright */}
        <div className="flex flex-col gap-3">
          <span className="text-base font-extrabold tracking-tight [font-variant:small-caps] text-[#EBDAC6]">
            ViscousPotential
          </span>
          <p className="max-w-xs text-xs text-[#D4BDA1] md:text-sm">
            Tools and experiments for developers
          </p>
          <p className="mt-2 text-xs text-[#D4BDA1]/70">
            © {new Date().getFullYear()} ViscousPotential · Independent Dev
          </p>
        </div>

        {/* Pages column */}
        <nav aria-label="Site" className="flex flex-col gap-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4BDA1]">
            Pages
          </h2>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm md:flex md:flex-col md:gap-2">
            {PAGES.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#EBDAC6] transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4BDA1]">
            Social Links
          </h2>
          <ul className="flex flex-wrap items-center gap-2">
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
      </div>
    </footer>
  );
}
