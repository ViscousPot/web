import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import GitSync from "../images/gitsync.svg";
import Vocode from "../images/vocode.svg";
import BoardInTheShell from "../images/boardintheshell.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import BlurryBlob from "../components/animata/blurry-blob";
import { PageLayout } from "../components/page-layout";
import { SeoHead } from "../components/seo-head";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout currentPath="/">
      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pt-6 pb-10 text-center md:pt-10 md:pb-16">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdac633] bg-[#26211C]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4BDA1] backdrop-blur-sm md:text-sm">
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
          <BlurryBlob
            firstBlobColor="bg-[#D4BDA1]"
            secondBlobColor="bg-[#A8916F]"
          >
            <div className="absolute inset-0 z-20 flex flex-col rounded-3xl border-2 border-[#ebdac659] bg-[#2E261F]/30 p-6 backdrop-blur-[2px] transition-colors duration-300 md:p-8 md:hover:border-[#EBDAC6] md:hover:bg-[#2E261F]/55">
              <div className="flex items-center gap-4">
                <GitSync className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
                <div className="min-w-0">
                  <h2 className="text-3xl font-extrabold leading-none md:text-4xl">
                    GitSync
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#D4BDA1] md:text-base">
                    Mobile git client for Android & iOS
                  </p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
                A cross-platform git client that keeps a folder synced between a
                remote repository and your device. Set it up once and it runs
                quietly in the background, syncing over SSH or HTTPS. OAuth is
                there too if your remote needs it.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4BDA1] md:text-sm">
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Android
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  iOS
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Open Source
                </span>
                <span className="rounded-full border border-[#FFCB6B66] bg-[#FFCB6B14] px-3 py-1 text-[#FFCB6B]">
                  ★ 2024 Obsidian Gem
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://gitsync.viscouspotenti.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EBDAC6] px-5 py-2.5 text-sm font-bold text-[#2E261F] transition-all hover:bg-white hover:scale-[1.03] md:text-base"
                >
                  Get GitSync
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
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
          <BlurryBlob
            firstBlobColor="bg-[#6bb3a7]"
            secondBlobColor="bg-[#3f8079]"
          >
            <div className="absolute inset-0 z-20 flex flex-col rounded-3xl border-2 border-[#ebdac659] bg-[#2E261F]/30 p-6 backdrop-blur-[2px] transition-colors duration-300 md:p-8 md:hover:border-[#EBDAC6] md:hover:bg-[#2E261F]/55">
              <div className="flex items-center gap-4">
                <Vocode className="h-16 w-16 shrink-0 text-[#6bb3a7] md:h-20 md:w-20" />
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-extrabold leading-none md:text-4xl">
                      Vocode
                    </h2>
                    <span className="rounded-full bg-[#6bb3a722] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#6bb3a7] md:text-xs">
                      In beta
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#D4BDA1] md:text-base">
                    Offline voice recording and transcription
                  </p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
                Vocode records your voice and turns it into transcribed notes
                that go straight into your existing notes app or automations. It
                runs completely offline, so the audio and the transcripts never
                leave the phone. Hold to start talking. Release to transcribe
                and save.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4BDA1] md:text-sm">
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Voice notes
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Mobile
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Plugins
                </span>
                <span className="rounded-full border border-[#6bb3a766] bg-[#6bb3a714] px-3 py-1 text-[#6bb3a7]">
                  Fully offline
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://vocode.viscouspotenti.al"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EBDAC6] px-5 py-2.5 text-sm font-bold text-[#2E261F] transition-all hover:bg-white hover:scale-[1.03] md:text-base"
                >
                  In Beta
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                </a>
                <a
                  href="https://vocode.viscouspotenti.al/wiki/"
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

        {/* WriteAway */}
        <article className="relative min-h-[26rem] md:min-h-[32rem]">
          <BlurryBlob
            firstBlobColor="bg-[#8b4ddb]"
            secondBlobColor="bg-[#5c2f94]"
          >
            <div className="absolute inset-0 z-20 flex flex-col rounded-3xl border-2 border-[#ebdac659] bg-[#2E261F]/30 p-6 backdrop-blur-[2px] transition-colors duration-300 md:p-8 md:hover:border-[#EBDAC6] md:hover:bg-[#2E261F]/55">
              <div className="flex items-center gap-4">
                <img
                  src="/writeaway.png"
                  alt="WriteAway"
                  className="h-16 w-16 shrink-0 md:h-20 md:w-20"
                />
                <div className="min-w-0">
                  <h2 className="text-3xl font-extrabold leading-none md:text-4xl">
                    WriteAway
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#D4BDA1] md:text-base">
                    Handwriting recognition for Obsidian
                  </p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
                An Obsidian plugin that turns handwritten notes into real,
                searchable text. Built from scratch end to end: the datasets,
                the recognition model, and the plugin itself.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4BDA1] md:text-sm">
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Obsidian
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Handwriting
                </span>
                <span className="rounded-full border border-[#8b4ddb66] bg-[#8b4ddb14] px-3 py-1 text-[#a97ae8]">
                  Built from scratch
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://writeaway.viscouspotenti.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EBDAC6] px-5 py-2.5 text-sm font-bold text-[#2E261F] transition-all hover:bg-white hover:scale-[1.03] md:text-base"
                >
                  View samples
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs"
                  />
                </a>
              </div>
            </div>
          </BlurryBlob>
        </article>

        {/* B.I.T.S. */}
        <article className="relative min-h-[26rem] md:min-h-[32rem]">
          <BlurryBlob
            firstBlobColor="bg-[#e8447f]"
            secondBlobColor="bg-[#972c53]"
          >
            <div className="absolute inset-0 z-20 flex flex-col rounded-3xl border-2 border-[#ebdac659] bg-[#2E261F]/30 p-6 backdrop-blur-[2px] transition-colors duration-300 md:p-8 md:hover:border-[#EBDAC6] md:hover:bg-[#2E261F]/55">
              <div className="flex items-center gap-4">
                <BoardInTheShell className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
                <div className="min-w-0">
                  <h2 className="text-3xl font-extrabold leading-none md:text-4xl">
                    B.I.T.S.
                  </h2>
                  <p className="mt-1 text-sm font-medium text-[#D4BDA1] md:text-base">
                    Corne split keyboard in a 3D printed shell
                  </p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-[#EBDAC6]/90 md:text-base">
                A wireless split Corne build housed in a 3D printed shell with a
                powered dongle dock and room for a large battery. The dongle is
                3D printed too, and it can be duplicated so you can keep one per
                machine. Everything is open source: shells, dongle, firmware.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#D4BDA1] md:text-sm">
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Corne
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  3D printed
                </span>
                <span className="rounded-full border border-[#ebdac633] px-3 py-1">
                  Wireless dongle
                </span>
                <span className="rounded-full border border-[#e8447f66] bg-[#e8447f14] px-3 py-1 text-[#e8447f]">
                  Open Source
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed select-none items-center gap-2 rounded-full border border-[#ebdac633] bg-[#EBDAC6]/10 px-5 py-2.5 text-sm font-bold text-[#D4BDA1]/70 md:text-base"
                >
                  Coming soon
                </span>
              </div>
            </div>
          </BlurryBlob>
        </article>
      </section>
    </PageLayout>
  );
};

export default IndexPage;

const PAGE_DESCRIPTION =
  "ViscousPotential makes GitSync, the open-source mobile git client, and Vocode, a private offline voice recorder and transcription app for your phone.";

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
    "https://viscouspotential.medium.com/",
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
      url: "https://vocode.viscouspotenti.al/",
      description:
        "Private offline voice recording and transcription app for capturing notes on your phone. Currently in beta.",
    },
    {
      "@type": "SoftwareApplication",
      name: "WriteAway",
      applicationCategory: "UtilitiesApplication",
      url: "https://writeaway.viscouspotenti.al/",
      description:
        "Obsidian plugin that converts handwritten notes into searchable text using a purpose-built handwriting recognition model. Currently in prototype.",
    },
    {
      "@type": "Product",
      name: "B.I.T.S.",
      url: "https://boardintheshell.viscouspotenti.al/",
      description:
        "Open-source wireless Corne split keyboard in a 3D printed shell with a powered dongle dock, large battery space, and a duplicable 3D printed dongle.",
    },
  ],
};

export const Head: HeadFC = () => (
  <SeoHead
    title="ViscousPotential: GitSync, Vocode, and other tools"
    description={PAGE_DESCRIPTION}
    path="/"
  >
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
    />
  </SeoHead>
);
