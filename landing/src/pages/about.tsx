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
            Hi, I'm the developer behind ViscousPotential.
          </p>
        </header>

        {/* The story */}
        <section className="mt-14 md:mt-16">
          <div className="space-y-5 text-center text-base leading-relaxed text-[#EBDAC6]/90 md:text-lg">
            <p>
              ViscousPotential exists because of{" "}
              <strong className="text-[#EBDAC6]">GitSync</strong>. I made the
              name to have somewhere to put that project, and everything I've
              built since has lived under it. There's no team here, so when you
              open an issue or send a message, I'm the one reading it.
            </p>
            <p>
              GitSync came from two frustrations at once. I wanted my Obsidian
              vault to sync to my phone automatically and for free, and I wanted
              a git client on Android that was actually decent to use. Nothing
              out there did either well, so I wrote my own. Bringing it to iOS
              meant rebuilding the entire app from scratch as a cross-platform
              one, which was an ordeal, but both versions now come from the same
              codebase.
            </p>
            <p>
              <strong className="text-[#EBDAC6]">Vocode</strong> actually
              started around the same time as GitSync. I sat on it for about two
              years before making it public: a recorder that transcribes on the
              device, so nothing gets shipped off to someone else's server.{" "}
              <strong className="text-[#EBDAC6]">WriteAway</strong> came from
              wanting my handwritten notes to be searchable in Obsidian.{" "}
              <strong className="text-[#EBDAC6]">B.I.T.S.</strong> is the Corne
              split keyboard I built to use forever: mostly 3D printed, with a
              powered dongle dock built into the shell.
            </p>
            <p>
              I build these things as if I'll still be using them in five years,
              because I usually am. The code is on GitHub and the issues stay
              public. If something breaks in a way that matters, I'd rather hear
              about it than not.
            </p>
            <p>
              There are no investors, no growth targets, and no process to sit
              through, which means I can move on a fix the same day I hear about
              it. It also means I can take the time to get something right, and
              say no to the features that would quietly make it worse.
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
