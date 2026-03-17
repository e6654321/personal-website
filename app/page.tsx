import Hero from './components/Hero'
import BlockchainSection from './components/BlockchainSection'
import MobileAppsSection from './components/MobileAppsSection'
import WebProjectsSection from './components/WebProjectsSection'
import TechStackSection from './components/TechStackSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BlockchainSection />
      <MobileAppsSection />
      <WebProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  )
}
