'use client'

import { Badge } from '@/components/ui/badge'
import PhoneCarousel from './PhoneCarousel'

export default function MobileAppsSection() {
  return (
    <section id="mobile-apps" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] border-[var(--accent-cyan)]/20 text-sm px-4 py-2">
            📱 Mobile Applications
          </Badge>
          <h2 className="mb-4 text-white">Mobile Apps Portfolio</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            2+ years React Native • 5 production apps shipped to App Store & Play Store
          </p>
        </div>

        {/* 3D Phone Carousel */}
        <PhoneCarousel />

        {/* App Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--accent-cyan)] mb-2">5</div>
            <div className="text-[var(--text-secondary)] text-sm">Production Apps</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--accent-teal)] mb-2">2+</div>
            <div className="text-[var(--text-secondary)] text-sm">Years React Native</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[var(--accent-red)] mb-2">10k+</div>
            <div className="text-[var(--text-secondary)] text-sm">App Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}
