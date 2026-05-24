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
        style={{ background: 'rgba(8, 13, 30, 0.9)', borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo & Name */}
            <a href="#" className="flex items-center gap-3 group">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }}
              >
                EE
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight leading-tight">Elram Espra</span>
                <span className="text-slate-500 text-xs font-medium">Full-Stack & Mobile Engineer</span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#mobile-apps" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Mobile</a>
              <a href="#web-projects" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Web</a>
              <a href="#blockchain" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Web3</a>
              <a href="#tech-stack" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.25)'
                }}
              >
                Contact Me
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
              <a href="#mobile-apps" className="block text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Mobile</a>
              <a href="#web-projects" className="block text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Web</a>
              <a href="#blockchain" className="block text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Web3</a>
              <a href="#tech-stack" className="block text-slate-300 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block text-white font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact Me</a>
            </div>
          )}
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <MobileAppsSection />
      <WebProjectsSection />
      <BlockchainSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}
