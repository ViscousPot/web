import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Icon from "../images/icon.svg"
import GitSync from "../images/gitsync.svg"
import Vocode from "../images/vocode.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faGithub,
  faMedium,
  faReddit,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faBookBookmark } from "@fortawesome/free-solid-svg-icons"
import BlurryBlob from "../components/animata/blurry-blob"

const IndexPage: React.FC<PageProps> = () => {
  const [open, setOpen] = React.useState(false);
  const socials = [
    ["https://github.com/ViscousPot/", "GitHub", faGithub, "bg-[#0d1117]  text-md md:text-xl text-white md:hover:bg-[#0d1117] md:hover:text-white md:text-neutral-900 md:bg-white"],
    ["https://discord.gg/cgvjdDyzzB", "Discord", faDiscord, "text-black bg-white md:hover:bg-[#7289da] md:hover:text-white md:text-black md:bg-white text-md md:text-xs p-2"],
    ["https://www.reddit.com/user/ViscousPotential/submitted/", "Reddit", faReddit, "text-md md:text-xl text-[#FF4500] bg-white md:hover:text-[#FF4500] md:hover:bg-white md:text-neutral-900 md:bg-white"],
    ["https://viscouspotential.medium.com/", "Medium", faMedium, "text-black bg-white md:hover:bg-black md:hover:text-white md:text-black md:bg-white text-md md:text-xs p-2"],
  ] satisfies [string, string, IconDefinition, string][];

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-[#2E261F] px-6 py-4 text-white md:px-8 md:py-4">
      <div className="relative flex w-full flex-row items-center justify-start">
        <a href="https://viscouspotenti.al/" className="transition-all hover:scale-150" >
          <Icon className="h-16 w-16 md:mx-4" />
        </a>

        <div className="text-md absolute left-1/2 z-50 flex -translate-x-1/2 items-center gap-12 rounded-full bg-[#26211C] p-1 px-2 pl-4 font-semibold [font-variant:small-caps] md:p-3 md:pl-6">
          <a href="/posts">Posts</a>

          <div className="hidden flex-row items-center justify-center gap-3 md:flex">
            {socials.map(([link, label, icon, classNames]) => (
              <a
                key={link}
                target="_blank"
                href={link}
                className={`inline-flex group items-center justify-center p-1 transition-all ${classNames} rounded-full aspect-square`}
              >
                <FontAwesomeIcon icon={icon} className="-translate-x-[0.05rem] scale-150 md:scale-100 md:group-hover:scale-150" />
              </a>
            ))}
          </div>

          <div className="relative md:hidden">
            <button onClick={() => setOpen(!open)} className="text-md rounded-full p-2 text-white">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`absolute right-0 z-10 mt-4 flex flex-col gap-3 rounded-md bg-[#26211C] p-3 ${!open ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} shadow-lg transition-all`}>
              {socials.map(([link, label, icon, classNames]) => (
                <a
                  key={link}
                  target="_blank"
                  href={link}
                  className={`inline-flex items-center p-2 text-md rounded ${classNames}`}
                  onClick={() => setOpen(false)}
                >
                  <FontAwesomeIcon icon={icon} className="mr-2" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col gap-8 md:flex-row">
        <BlurryBlob firstBlobColor="bg-[#D4BDA1]" secondBlobColor="bg-[#D4BDA1]" >
          <div className="md:group-hover:border-16 absolute inset-0 z-20 flex flex-col rounded-3xl border-8 border-[#EBDAC6] transition-all md:border-0">
            <a href="https://gitsync.viscouspotenti.al/" target="_blank" className="group/gitsync flex h-full w-full flex-col items-center justify-center gap-2 transition-all hover:scale-105 md:gap-8">
              <GitSync className="h-24 w-24 transition-all md:h-48 md:w-48 md:opacity-20 md:group-hover:h-32 md:group-hover:w-32 md:group-hover/gitsync:opacity-100" />
              <h1 className="md:leading-20 text-2xl font-black group-hover:h-auto md:h-0 md:overflow-hidden md:text-6xl md:opacity-20 md:group-hover/gitsync:opacity-100">GitSync</h1>
            </a>
            <a href="https://gitsync.viscouspotenti.al/wiki" target="_blank" className="flex w-full items-center justify-center gap-4 overflow-hidden rounded-3xl p-8 text-blue-300 transition-all hover:scale-105 md:h-0 md:p-0 md:text-white md:opacity-20 md:hover:text-blue-300 md:hover:opacity-100 md:group-hover:h-auto md:group-hover:p-12">
              <FontAwesomeIcon icon={faBookBookmark} className="-translate-x-[0.05rem] text-xl md:text-2xl" />
              <h2 className="text-xl font-bold md:text-3xl">WIKI</h2>
            </a>
          </div>
        </BlurryBlob>
        <BlurryBlob firstBlobColor="bg-[#D4BDA1]" secondBlobColor="bg-[#D4BDA1]" >
          <div className="md:group-hover:border-16 absolute inset-0 z-20 flex flex-col rounded-3xl border-8 border-[#EBDAC6] transition-all md:border-0">
            <a className="group/gitsync flex h-full w-full flex-col items-center justify-center gap-4 transition-all hover:scale-105 hover:cursor-not-allowed md:gap-8">
              <Vocode className="h-24 w-24 text-[#6bb3a7] transition-all md:h-48 md:w-48 md:text-white md:opacity-20 md:group-hover:h-32 md:group-hover:w-32 md:group-hover/gitsync:text-[#6bb3a7] md:group-hover/gitsync:opacity-100" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:group-hover/gitsync:opsacity-100 md:leading-20 overflow-hidden text-2xl font-black line-through md:h-0 md:text-6xl md:opacity-20 md:group-hover:h-auto">Vocode</h1>
                <h2 className="md:group-hover/gitsync:ospacity-100 overflow-hidden text-sm font-black md:h-0 md:text-xl md:opacity-20 md:group-hover:h-auto">COMING SOON</h2>
              </div>
            </a>
            <a href="https://vocode-docs.viscouspotenti.al/" target="_blank" className="flex w-full items-center justify-center gap-4 overflow-hidden rounded-3xl p-8 text-blue-300 transition-all hover:scale-105 md:h-0 md:p-0 md:text-[#EBDAC6] md:opacity-20 md:hover:text-blue-300 md:hover:opacity-100 md:group-hover:h-auto md:group-hover:p-12">
              <FontAwesomeIcon icon={faBookBookmark} className="-translate-x-[0.05rem] text-xl md:text-2xl" />
              <h2 className="text-xl font-bold md:text-3xl">WIKI</h2>
            </a>
          </div>
        </BlurryBlob>
      </div>
      <div className="h-4 md:h-12" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ViscousPotential</title>
