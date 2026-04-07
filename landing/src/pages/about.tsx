import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { PageLayout } from "../components/page-layout";
import { SeoHead } from "../components/seo-head";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <PageLayout currentPath="/about">
      <article className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-6 pb-16 pt-6 md:px-10 md:pb-24 md:pt-10">
        {/* Hero */}
        <header className="text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdac633] bg-[#26211C]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4BDA1] backdrop-blur-sm md:text-sm">
            About
          </p>
          <h1 className="bg-gradient-to-b from-[#FBF3E4] via-[#EBDAC6] to-[#A8916F] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent [font-variant:small-caps] sm:text-5xl md:text-6xl">
            About ViscousPotential
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#D4BDA1] md:text-lg">
            About the dev behind ViscousPotential.
          </p>
        </header>

        {/* The story */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4BDA1]">
            The story
          </h2>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-[#EBDAC6]/90 md:text-lg">
            <p>
              ViscousPotential is one independent developer working in the open.
              The name started as a label for personal projects that grew up
              enough to need a home, and it's been the home for them ever since.
              One person, shipping things and watching what people do with them.
            </p>
            <p>
              The first project that really took off was{" "}
              <strong className="text-[#EBDAC6]">GitSync</strong>. It started as
              a personal itch. I wanted to keep a folder synced between a git
              remote and a phone with the same one-tap reliability you'd expect
              from any decent desktop client. Most of the existing options had
              been abandoned, or treated the phone like a second-class device.
              So I built one. The motivating idea has been the same ever since:
              developer tools that take phones seriously.
            </p>
            <p>
              Everything here gets built as if it has to last. The code lives on
              GitHub and the issues stay public, because the work belongs to the
              people using it. There are no investors or growth targets to
              answer to, so the work can take its time. Five years from now, the
              projects should still work.
            </p>
          </div>
        </section>
      </article>
    </PageLayout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => (
  <SeoHead
    title="About ViscousPotential: Independent dev behind GitSync & Vocode"
    description="The independent developer behind GitSync and Vocode"
    path="/about"
  />
);
