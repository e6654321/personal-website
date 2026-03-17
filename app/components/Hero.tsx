'use client'

import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glowing Wave Graphic Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-[var(--accent-cyan)] via-blue-500 to-purple-600 blur-[100px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Name */}
          <h1 className="mb-6 text-white font-bold tracking-tight">
            Elram Espra
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 font-medium">
            Senior Full-Stack Developer | Mobile Engineer | Blockchain Developer
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-3 text-base font-semibold">
              6+ Years Experience
            </Badge>
            <Badge className="bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border-[var(--accent-cyan)]/30 px-6 py-3 text-base font-semibold">
              3 Years Blockchain
            </Badge>
            <Badge className="bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border-[var(--accent-teal)]/30 px-6 py-3 text-base font-semibold">
              5 Mobile Apps Shipped
            </Badge>
          </div>

          {/* Description */}
          <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed max-w-2xl">
            Building production blockchain platforms, mobile apps, and full-stack web applications. 
            Specializing in React Native, Web3, and cloud-native architectures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#blockchain" className="btn-outline-cyan inline-block">
              VIEW PROJECTS →
            </a>
            <a 
              href="mailto:enespra@gmail.com"
              className="inline-block px-8 py-3 rounded-full bg-[var(--accent-cyan)]/10 border-2 border-[var(--accent-cyan)]/30 text-white font-semibold hover:bg-[var(--accent-cyan)]/20 transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
