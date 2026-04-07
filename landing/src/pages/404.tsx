import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faRefresh } from "@fortawesome/free-solid-svg-icons"
import { PageLayout } from "../components/page-layout"
import { SeoHead } from "../components/seo-head"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <PageLayout currentPath="/404">
      <section className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 text-center md:px-10 md:py-24">
        <h1 className="bg-gradient-to-b from-[#FBF3E4] via-[#EBDAC6] to-[#A8916F] bg-clip-text text-7xl font-extrabold tracking-tight text-transparent md:text-9xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-extrabold text-[#EBDAC6] md:text-4xl">
          Page not found
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-[#D4BDA1] md:text-lg">
          The page you're looking for has wandered off. Try heading home, or pick another page from the footer.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#EBDAC6] px-5 py-2.5 text-sm font-bold text-[#2E261F] transition-all hover:scale-[1.03] hover:bg-white md:text-base"
          >
            <FontAwesomeIcon icon={faHome} />
            Go home
          </a>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-full border border-[#ebdac659] px-5 py-2.5 text-sm font-bold text-[#EBDAC6] transition-all hover:border-[#EBDAC6] hover:bg-[#26211C] md:text-base"
          >
            <FontAwesomeIcon icon={faRefresh} />
            Refresh
          </button>
        </div>
      </section>
    </PageLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <SeoHead
    title="404 Page Not Found · ViscousPotential"
    description="The page you're looking for doesn't exist. Head back to the ViscousPotential homepage."
    path="/404"
  />
)
