'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import BlockchainSection from './components/BlockchainSection';
import MobileAppsSection from './components/MobileAppsSection';
import WebProjectsSection from './components/WebProjectsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: '#080d1e' }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full backdrop-blur-xl border-b z-50"
        style={{ background: 'rgba(8, 13, 30, 0.85)', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                RE
              </div>
              <span className="text-white font-bold text-lg tracking-tight">elram</span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#blockchain" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Blockchain</a>
              <a href="#mobile-apps" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Mobile</a>
              <a href="#web-projects" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Web</a>
              <a href="#tech-stack" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About</a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-sm font-semibold text-blue-400 transition-all"
                style={{ background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.15)')}
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <a href="#blockchain" className="block text-slate-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>Blockchain</a>
              <a href="#mobile-apps" className="block text-slate-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>Mobile</a>
              <a href="#web-projects" className="block text-slate-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>Web</a>
              <a href="#tech-stack" className="block text-slate-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block text-slate-300 hover:text-white py-1" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <BlockchainSection />
      <MobileAppsSection />
      <WebProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
