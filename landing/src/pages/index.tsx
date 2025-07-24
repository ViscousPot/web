import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Icon from "../images/icon.svg"
import GitSync from "../images/gitsync.svg"
import Vocode from "../images/vocode.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
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
    ["https://www.reddit.com/user/ViscousPotential/submitted/", "Reddit", faReddit, " text-mdmd:text-xl text-[#FF4500] bg-white md:hover:text-[#FF4500] md:hover:bg-white md:text-neutral-900 md:bg-white"],
    ["https://viscouspotential.medium.com/", "Medium", faMedium, "text-black bg-white md:hover:bg-black md:hover:text-white md:text-black md:bg-white text-md md:text-xs p-2"],
  ] satisfies [string, string, IconDefinition, string][];

  return (
    <main className="bg-black w-screen h-screen px-6 py-4 md:py-4 md:px-8 text-white flex flex-col items-center justify-center gap-4 overflow-hidden">
      <div className="flex flex-row items-center justify-start relative w-full">
        <a href="https://viscouspotenti.al/" className="hover:scale-150 transition-all" >
          <Icon className="w-16 h-16 md:mx-4" />
        </a>

        <div className="z-50 absolute left-1/2 -translate-x-1/2 pl-3 p-1 md:pl-6 md:p-3 text-md bg-neutral-900 rounded-full font-semibold flex items-center gap-12">
          <a href="/posts">Posts</a>

          <div className="hidden md:flex flex-row items-center justify-center gap-3">
            {socials.map(([link, label, icon, classNames]) => (
              <a
                key={link}
                target="_blank"
                href={link}
                className={`inline-flex group items-center justify-center p-1 transition-all ${classNames} rounded-full aspect-square`}
              >
                <FontAwesomeIcon icon={icon} className="scale-150 md:scale-100 md:group-hover:scale-150 -translate-x-[0.05rem]" />
              </a>
            ))}
          </div>

          <div className="md:hidden relative">
            <button onClick={() => setOpen(!open)} className="p-2 text-md rounded-full text-white">
              <FontAwesomeIcon icon={faBars} />
            </button>
            {open && (
              <div className="absolute right-0 mt-4 bg-neutral-900 rounded-md shadow-lg flex flex-col gap-2 p-2 z-10">
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
            )}
          </div>
        </div>
        {/*<div className="absolute left-1/2 -translate-x-1/2 pl-6 p-3 text-md bg-neutral-900 rounded-full font-semibold flex flex-row items-center justify-center gap-12">
          <a href="/posts">Posts</a>
          <div className="flex flex-row items-center justify-center gap-3">
            {([
              ["https://github.com/ViscousPot/", faGithub, "bg-[#0d1117] text-xl text-white md:hover:bg-[#0d1117] md:hover:text-white md:text-neutral-900 md:bg-white "],
              ["https://www.reddit.com/user/ViscousPotential/submitted/", faReddit, "text-xl text-[#FF4500] bg-white md:hover:text-[#FF4500] md:hover:bg-white md:text-neutral-900 md:bg-white "],
              ["https://viscouspotential.medium.com/", faMedium, "text-black bg-white md:hover:bg-black md:hover:text-white md:text-black md:bg-white text-xs p-2"],
            ] satisfies [string, IconDefinition, string][]).map(([link, icon, classNames]) =>
              <a target="_blank" href={link} className={`inline-flex group items-center justify-center p-1 transition-all ${classNames} rounded-full aspect-square`}>
                <FontAwesomeIcon icon={icon} className="scale-150 md:scale-100 md:group-hover:scale-150 -translate-x-[0.05rem]" />
              </a>
            )}
          </div>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row h-full w-full gap-8">
        <BlurryBlob firstBlobColor="bg-white" secondBlobColor="bg-white" >
          <div className="absolute inset-0 z-20 flex-col flex border-8 md:border-0 md:group-hover:border-16 border-white rounded-3xl">
            <a href="https://gitsync.viscouspotenti.al/" target="_blank" className="transition-all flex flex-col gap-2 md:gap-8 hover:scale-105 group/gitsync items-center justify-center h-full w-full">
              <GitSync className="md:opacity-20 md:group-hover/gitsync:opacity-100 transition-all w-24 h-24 md:w-48 md:h-48 md:group-hover:w-32 md:group-hover:h-32" />
              <h1 className="text-2xl md:text-6xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:opacity-100 md:overflow-hidden group-hover:h-auto md:leading-20">GitSync</h1>
            </a>
            <a href="https://gitsync.viscouspotenti.al/wiki" target="_blank" className="p-8 md:p-0 md:group-hover:p-12 transition-all flex items-center text-blue-300 md:text-white justify-center md:opacity-20 md:hover:text-blue-300 hover:scale-105 md:hover:opacity-100 md:h-0 md:group-hover:h-auto w-full rounded-3xl overflow-hidden gap-4">
              <FontAwesomeIcon icon={faBookBookmark} className="text-xl md:text-2xl -translate-x-[0.05rem]" />
              <h2 className="text-xl md:text-3xl font-bold">WIKI</h2>
            </a>
          </div>
        </BlurryBlob>
        <BlurryBlob firstBlobColor="bg-white" secondBlobColor="bg-white" >
          <div className="absolute inset-0 z-20 flex-col flex border-8 md:border-0 md:group-hover:border-16 border-white rounded-3xl">
            <a className="transition-all flex flex-col gap-4 md:gap-8  hover:scale-105 group/gitsync items-center justify-center h-full w-full hover:cursor-not-allowed">
              <Vocode className="md:opacity-20 md:group-hover/gitsync:opacity-100 transition-all text-[#6bb3a7] md:text-white md:group-hover/gitsync:text-[#6bb3a7] w-24 h-24 md:w-48 md:h-48 md:group-hover:w-32 md:group-hover:h-32" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-6xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:opsacity-100 overflow-hidden md:group-hover:h-auto md:leading-20 line-through">Vocode</h1>
                <h2 className="text-sm md:text-xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:ospacity-100 overflow-hidden md:group-hover:h-auto">COMING SOON</h2>
              </div>
            </a>
            <a href="https://vocode-docs.viscouspotenti.al/" target="_blank" className="p-8 md:p-0 md:group-hover:p-12 transition-all flex items-center text-blue-300 md:text-white justify-center md:opacity-20 md:hover:text-blue-300 hover:scale-105 md:hover:opacity-100 md:h-0 md:group-hover:h-auto w-full rounded-3xl overflow-hidden gap-4">
              <FontAwesomeIcon icon={faBookBookmark} className="text-xl md:text-2xl -translate-x-[0.05rem]" />
              <h2 className="text-xl md:text-3xl font-bold">WIKI</h2>
            </a>
            {/* <a target="_blank" className="transition-all flex flex-col gap-2 md:gap-8 hover:scale-105 group/gitsync items-center justify-center h-full w-full">
              <GitSync className="md:opacity-20 md:group-hover/gitsync:opacity-100 transition-all w-32 h-32 md:w-48 md:h-48 md:group-hover:w-32 md:group-hover:h-32" />
              <h1 className="text-2xl md:text-6xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:opacity-100 md:overflow-hidden group-hover:h-auto md:leading-20">GitSync</h1>
            </a>
            <a href="https://vocode-docs.viscouspotenti.al/" target="_blank" className="p-8 md:p-0 md:group-hover:p-12 transition-all flex items-center text-blue-300 md:text-white justify-center md:opacity-20 md:hover:text-blue-300 hover:scale-105 md:hover:opacity-100 md:h-0 md:group-hover:h-auto w-full rounded-3xl overflow-hidden gap-4">
              <FontAwesomeIcon icon={faBookBookmark} className="text-xl md:text-2xl -translate-x-[0.05rem]" />
              <h2 className="text-xl md:text-3xl font-bold">WIKI</h2>
            </a> */}
          </div>
        </BlurryBlob>
      </div>
      {/* <div className="flex flex-col md:flex-row h-full w-full gap-8">
        <div className="bg-[linear-gradient(124deg,black,#151515,black)] group rounded-3xl h-full w-full relative overflow-hidden">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute scale-50 rotate-90 h-full transition-all -bottom-100 -left-80 opacity-40 group-hover:opacity-20"
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
            className="absolute -rotate-5 h-full transition-all -right-20 -top-80 opacity-80 group-hover:opacity-60"
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
          <div className="absolute inset-0 z-20 flex-col flex border-8 md:border-0 md:group-hover:border-16 border-white rounded-3xl">
            <a href="https://gitsync.viscouspotenti.al/" target="_blank" className="transition-all flex flex-col gap-2 md:gap-8 hover:scale-105 group/gitsync items-center justify-center h-full w-full">
              <GitSync className="md:opacity-20 md:group-hover/gitsync:opacity-100 transition-all w-32 h-32 md:w-48 md:h-48" />
              <h1 className="text-2xl md:text-6xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:opacity-100 md:overflow-hidden group-hover:h-auto md:leading-20">GitSync</h1>
            </a>
            <a href="https://gitsync.viscouspotenti.al/wiki" target="_blank" className="p-8 md:p-0 md:group-hover:p-24 transition-all flex items-center text-blue-300 md:text-white justify-center md:opacity-20 md:hover:text-blue-300 hover:scale-105 md:hover:opacity-100 md:h-0 md:group-hover:h-auto w-full rounded-3xl overflow-hidden gap-4">
              <FontAwesomeIcon icon={faBookBookmark} className="text-xl md:text-2xl -translate-x-[0.05rem]" />
              <h2 className="text-xl md:text-3xl font-bold">WIKI</h2>
            </a>
          </div>
        </div>
        <div className="bg-[linear-gradient(37deg,black,#151515,black)] rounded-3xl h-full w-full relative overflow-hidden group">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute rotate-90 scale-200 h-full -right-80 -top-40 opacity-60 group-hover:opacity-40"
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
          <div className="absolute inset-0 z-20 flex-col flex  border-8 md:border-0 md:group-hover:border-16 border-white rounded-3xl">
            <a className="transition-all flex flex-col gap-4 md:gap-8  hover:scale-105 group/gitsync items-center justify-center h-full w-full hover:cursor-not-allowed">
              <Vocode className="md:opacity-20 md:group-hover/gitsync:opacity-100 transition-all text-[#6bb3a7] md:text-white md:group-hover/gitsync:text-[#6bb3a7] w-32 h-32 md:w-48 md:h-48" />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl md:text-6xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:opsacity-100 overflow-hidden md:group-hover:h-auto md:leading-20 line-through">Vocode</h1>
                <h2 className="text-sm md:text-xl font-black md:h-0 md:opacity-20 md:group-hover/gitsync:ospacity-100 overflow-hidden md:group-hover:h-auto">COMING SOON</h2>
              </div>
            </a>
            <a href="https://vocode-docs.viscouspotenti.al/" target="_blank" className="p-8 md:p-0 md:group-hover:p-24 transition-all flex items-center text-blue-300 md:text-white justify-center md:opacity-20 md:hover:text-blue-300 hover:scale-105 md:hover:opacity-100 md:h-0 md:group-hover:h-auto w-full rounded-3xl overflow-hidden gap-4">
              <FontAwesomeIcon icon={faBookBookmark} className="text-xl md:text-2xl -translate-x-[0.05rem]" />
              <h2 className="text-xl md:text-3xl font-bold">WIKI</h2>
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
