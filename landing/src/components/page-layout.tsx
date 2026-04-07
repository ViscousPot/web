import * as React from "react"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageLayoutProps {
  /** Current page path, passed through to Header for active styling */
  currentPath?: string
  children: React.ReactNode
}

export function PageLayout({ currentPath, children }: PageLayoutProps) {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#2E261F] text-[#F5ECDF]">
      <Header currentPath={currentPath} />
      {children}
      <Footer />
    </main>
  )
}
