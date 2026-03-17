'use client'

import Hero from './components/Hero'
import BlockchainSection from './components/BlockchainSection'
import MobileAppsSection from './components/MobileAppsSection'
import WebProjectsSection from './components/WebProjectsSection'
import TechStackSection from './components/TechStackSection'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import StickyCtaBar from './components/StickyCtaBar'

export default function Home() {
  return (
    <>
      <ThemeToggle />

      <main>
        <Hero />
        <BlockchainSection />
        <MobileAppsSection />
        <WebProjectsSection />
        <TechStackSection />
        <Contact />
      </main>

      <footer className="px-4 py-8 text-center text-white/80">
        <p className="mb-2">© 2026 Elram Espra. All rights reserved.</p>
        <p className="text-sm text-white/60">Built with Next.js, TypeScript, and Tailwind CSS</p>
      </footer>

      <StickyCtaBar />
    </>
  )
}
