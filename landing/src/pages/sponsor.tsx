import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { PageLayout } from "../components/page-layout";
import { SeoHead } from "../components/seo-head";

const SponsorPage: React.FC<PageProps> = () => {
  return (
    <PageLayout currentPath="/sponsor">
      <article className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-6 pb-16 pt-6 md:px-10 md:pb-24 md:pt-10">
        {/* Hero */}
        <header className="text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdac633] bg-[#26211C]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4BDA1] backdrop-blur-sm md:text-sm">
            Sponsor
          </p>
          <h1 className="bg-gradient-to-b from-[#FBF3E4] via-[#EBDAC6] to-[#A8916F] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent [font-variant:small-caps] sm:text-5xl md:text-6xl">
            Sponsor ViscousPotential
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#D4BDA1] md:text-lg">
            Every patron and sponsor pays for the hours that go into the work. If you've used GitSync and want it to keep getting better, or you're waiting on Vocode to ship, this is the part that funds it.
          </p>
        </header>

        {/* CTA cards */}
        <section className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {/* Patreon */}
          <a
            href="https://www.patreon.com/c/ViscousPotential"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-[#ebdac633] bg-[#26211C]/60 p-6 backdrop-blur-sm transition-colors hover:border-[#FF424D] md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF424D] text-xl text-white ring-1 ring-[#ebdac633]">
                <FontAwesomeIcon icon={faPatreon} />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold text-[#EBDAC6] md:text-3xl">
                  Patreon
                </h2>
                <p className="text-sm font-medium text-[#D4BDA1]">
                  Monthly backing
                </p>
              </div>
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
              Patrons also get early access to YouTube video releases, up to a
              week before they go public.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#FF424D] px-5 py-2.5 text-sm font-bold text-white transition-transform group-hover:scale-[1.03] md:text-base">
              Become a patron
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs"
              />
            </span>
          </a>

          {/* GitHub Sponsors */}
          <a
            href="https://github.com/sponsors/ViscousPot"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-[#ebdac633] bg-[#26211C]/60 p-6 backdrop-blur-sm transition-colors hover:border-[#EBDAC6] md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0d1117] text-3xl text-white">
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <div>
                <h2 className="text-2xl font-extrabold text-[#EBDAC6] md:text-3xl">
                  GitHub Sponsors
                </h2>
                <p className="text-sm font-medium text-[#D4BDA1]">
                  One-time or monthly, no fees
                </p>
              </div>
            </div>
            <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
              Sponsor directly through GitHub. 100% goes to the project, and you
              can choose a one-time amount or set up recurring monthly support.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#EBDAC6] px-5 py-2.5 text-sm font-bold text-[#2E261F] transition-transform group-hover:scale-[1.03] md:text-base">
              Sponsor on GitHub
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs"
              />
            </span>
          </a>
        </section>

        {/* Thank you */}
        <section className="mt-16 text-center md:mt-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4BDA1]">
            Thank you
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#EBDAC6]/90 md:text-lg">
            Sponsoring is one way to back the work. Filing a sharp bug report or telling a friend about GitSync is another. Either way it lands.
          </p>
        </section>
      </article>
    </PageLayout>
  );
};

export default SponsorPage;

export const Head: HeadFC = () => (
  <SeoHead
    title="Sponsor ViscousPotential: Patreon & GitHub Sponsors"
    description="Sponsor ViscousPotential's work on GitSync and Vocode. Become a patron on Patreon or sponsor directly through GitHub Sponsors."
    path="/sponsor"
  />
);
