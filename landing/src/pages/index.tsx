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
    ["https://discord.gg/fd4wSAuK", "Discord", faDiscord, "text-black bg-white md:hover:bg-[#7289da] md:hover:text-white md:text-black md:bg-white text-md md:text-xs p-2"],
    ["https://www.reddit.com/user/ViscousPotential/submitted/", "Reddit", faReddit, "text-md md:text-xl text-[#FF4500] bg-white md:hover:text-[#FF4500] md:hover:bg-white md:text-neutral-900 md:bg-white"],
    ["https://viscouspotential.medium.com/", "Medium", faMedium, "text-black bg-white md:hover:bg-black md:hover:text-white md:text-black md:bg-white text-md md:text-xs p-2"],
  ] satisfies [string, string, IconDefinition, string][];

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-[#26211C] px-6 py-4 text-white md:px-8 md:py-4">
      <div className="relative flex w-full flex-row items-center justify-start">
        <a href="https://viscouspotenti.al/" className="transition-all hover:scale-150" >
          <Icon className="h-16 w-16 md:mx-4" />
        </a>

        <div className="text-md absolute left-1/2 z-50 flex -translate-x-1/2 items-center gap-12 rounded-full bg-[#2E261F] p-1 px-2 pl-4 font-semibold [font-variant:small-caps] md:p-3 md:pl-6">
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
            {/* {open && ( */}
            <div className={`absolute right-0 z-10 mt-4 flex flex-col gap-3 rounded-md bg-[#2E261F] p-3 ${!open ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} shadow-lg transition-all`}>
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
            {/* )} */}
          </div>
        </div>
        {/*<div className="text-md absolute left-1/2 flex -translate-x-1/2 flex-row items-center justify-center gap-12 rounded-full bg-neutral-900 p-3 pl-6 font-semibold">
          <a href="/posts">Posts</a>
          <div className="flex flex-row items-center justify-center gap-3">
            {([
              ["https://github.com/ViscousPot/", faGithub, "bg-[#0d1117] text-xl text-white md:hover:bg-[#0d1117] md:hover:text-white md:text-neutral-900 md:bg-white "],
              ["https://www.reddit.com/user/ViscousPotential/submitted/", faReddit, "text-xl text-[#FF4500] bg-white md:hover:text-[#FF4500] md:hover:bg-white md:text-neutral-900 md:bg-white "],
              ["https://viscouspotential.medium.com/", faMedium, "text-black bg-white md:hover:bg-black md:hover:text-white md:text-black md:bg-white text-xs p-2"],
            ] satisfies [string, IconDefinition, string][]).map(([link, icon, classNames]) =>
              <a target="_blank" href={link} className={`inline-flex group items-center justify-center p-1 transition-all ${classNames} rounded-full aspect-square`}>
                <FontAwesomeIcon icon={icon} className="-translate-x-[0.05rem] scale-150 md:scale-100 md:group-hover:scale-150" />
              </a>
            )}
          </div>
        </div> */}
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
            {/* <a target="_blank" className="group/gitsync flex h-full w-full flex-col items-center justify-center gap-2 transition-all hover:scale-105 md:gap-8">
              <GitSync className="h-32 w-32 transition-all md:h-48 md:w-48 md:opacity-20 md:group-hover:h-32 md:group-hover:w-32 md:group-hover/gitsync:opacity-100" />
              <h1 className="md:leading-20 text-2xl font-black group-hover:h-auto md:h-0 md:overflow-hidden md:text-6xl md:opacity-20 md:group-hover/gitsync:opacity-100">GitSync</h1>
            </a>
            <a href="https://vocode-docs.viscouspotenti.al/" target="_blank" className="flex w-full items-center justify-center gap-4 overflow-hidden rounded-3xl p-8 text-blue-300 transition-all hover:scale-105 md:h-0 md:p-0 md:text-white md:opacity-20 md:hover:text-blue-300 md:hover:opacity-100 md:group-hover:h-auto md:group-hover:p-12">
              <FontAwesomeIcon icon={faBookBookmark} className="-translate-x-[0.05rem] text-xl md:text-2xl" />
              <h2 className="text-xl font-bold md:text-3xl">WIKI</h2>
            </a> */}
          </div>
        </BlurryBlob>
      </div>
      {/* <div className="flex h-full w-full flex-col gap-8 md:flex-row">
        <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-[linear-gradient(124deg,black,#151515,black)]">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="-bottom-100 absolute -left-80 h-full rotate-90 scale-50 opacity-40 transition-all group-hover:opacity-20"
          >
            <defs>
              <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                <stop id="stop1" stopColor="#F5FFFA" offset="0%" />
                <stop id="stop2" stopColor="#FAF0E6" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M24.9,-31.8C29.8,-25.6,29.4,-15.4,29.3,-6.6C29.2,2.3,29.4,9.6,26.3,15.5C23.3,21.4,17.2,25.8,10.7,27.2C4.3,28.6,-2.5,27,-8.7,24.5C-14.9,21.9,-20.6,18.5,-25.6,13.2C-30.7,7.8,-35.1,0.4,-33.6,-5.6C-32.2,-11.6,-24.9,-16.3,-18.3,-22.2C-11.7,-28,-5.9,-35.1,2.1,-37.5C10,-40,20.1,-37.9,24.9,-31.8Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              style={{
                transition: "0.3s",
              }}
              strokeWidth={0}
            />
          </svg>
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-5 absolute -right-20 -top-80 h-full opacity-80 transition-all group-hover:opacity-60"
          >
            <defs>
              <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                <stop id="stop1" stopColor="#F5FFFA" offset="0%" />
                <stop id="stop2" stopColor="#FAF0E6" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M9.6,-5.5C16.1,-6,27.6,-6.4,33.9,-1.4C40.2,3.6,41.4,14.1,36.5,19.7C31.6,25.4,20.7,26.2,13.5,22.4C6.3,18.7,2.8,10.3,-1.3,7.3C-5.4,4.2,-10.2,6.4,-14,5.4C-17.8,4.3,-20.7,0.1,-20.6,-4.2C-20.4,-8.4,-17.3,-12.6,-13.4,-12.6C-9.4,-12.6,-4.7,-8.2,-1.6,-6.4C1.5,-4.5,3.1,-5,9.6,-5.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              style={{
                transition: "0.3s",
              }}
              strokeWidth={0}
            />
          </svg>
          <div className="absolute inset-0 z-10 backdrop-blur-3xl" />
          <div className="md:group-hover:border-16 absolute inset-0 z-20 flex flex-col rounded-3xl border-8 border-white md:border-0">
            <a href="https://gitsync.viscouspotenti.al/" target="_blank" className="group/gitsync flex h-full w-full flex-col items-center justify-center gap-2 transition-all hover:scale-105 md:gap-8">
              <GitSync className="h-32 w-32 transition-all md:h-48 md:w-48 md:opacity-20 md:group-hover/gitsync:opacity-100" />
              <h1 className="md:leading-20 text-2xl font-black group-hover:h-auto md:h-0 md:overflow-hidden md:text-6xl md:opacity-20 md:group-hover/gitsync:opacity-100">GitSync</h1>
            </a>
            <a href="https://gitsync.viscouspotenti.al/wiki" target="_blank" className="flex w-full items-center justify-center gap-4 overflow-hidden rounded-3xl p-8 text-blue-300 transition-all hover:scale-105 md:h-0 md:p-0 md:text-white md:opacity-20 md:hover:text-blue-300 md:hover:opacity-100 md:group-hover:h-auto md:group-hover:p-24">
              <FontAwesomeIcon icon={faBookBookmark} className="-translate-x-[0.05rem] text-xl md:text-2xl" />
              <h2 className="text-xl font-bold md:text-3xl">WIKI</h2>
            </a>
          </div>
        </div>
        <div className="group relative h-full w-full overflow-hidden rounded-3xl bg-[linear-gradient(37deg,black,#151515,black)]">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-200 absolute -right-80 -top-40 h-full rotate-90 opacity-60 group-hover:opacity-40"
          >
            <defs>
              <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                <stop id="stop1" stopColor="#FAFAFA" offset="0%" />
                <stop id="stop2" stopColor="#FDF5E6" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M13.9,-18.5C17.4,-13.7,19.1,-8.7,19.3,-3.9C19.5,0.8,18.3,5.3,15.8,8.8C13.4,12.4,9.9,14.9,4.4,20.7C-1.1,26.4,-8.7,35.4,-15,35.6C-21.4,35.7,-26.7,27.1,-27.1,19.1C-27.5,11.2,-23.1,4,-19.7,-1.4C-16.3,-6.8,-14,-10.4,-10.9,-15.3C-7.8,-20.2,-3.9,-26.5,0.7,-27.3C5.2,-28.1,10.4,-23.4,13.9,-18.5Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              style={{
                transition: "0.3s",
              }}
              strokeWidth={0}
            />
          </svg>
          <div className="absolute inset-0 z-10 backdrop-blur-3xl" />
          <div className="md:group-hover:border-16 absolute inset-0 z-20 flex flex-col rounded-3xl border-8 border-white md:border-0">
            <a className="group/gitsync flex h-full w-full flex-col items-center justify-center gap-4 transition-all hover:scale-105 hover:cursor-not-allowed md:gap-8">
              <Vocode className="h-32 w-32 text-[#6bb3a7] transition-all md:h-48 md:w-48 md:text-white md:opacity-20 md:group-hover/gitsync:text-[#6bb3a7] md:group-hover/gitsync:opacity-100" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="md:group-hover/gitsync:opsacity-100 md:leading-20 overflow-hidden text-2xl font-black line-through md:h-0 md:text-6xl md:opacity-20 md:group-hover:h-auto">Vocode</h1>
                <h2 className="md:group-hover/gitsync:ospacity-100 overflow-hidden text-sm font-black md:h-0 md:text-xl md:opacity-20 md:group-hover:h-auto">COMING SOON</h2>
              </div>
            </a>
            <a href="https://vocode-docs.viscouspotenti.al/" target="_blank" className="flex w-full items-center justify-center gap-4 overflow-hidden rounded-3xl p-8 text-blue-300 transition-all hover:scale-105 md:h-0 md:p-0 md:text-white md:opacity-20 md:hover:text-blue-300 md:hover:opacity-100 md:group-hover:h-auto md:group-hover:p-24">
              <FontAwesomeIcon icon={faBookBookmark} className="-translate-x-[0.05rem] text-xl md:text-2xl" />
              <h2 className="text-xl font-bold md:text-3xl">WIKI</h2>
            </a>
          </div>
        </div>
      </div> */}
      <div className="h-4 md:h-12" />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>ViscousPotential</title>
