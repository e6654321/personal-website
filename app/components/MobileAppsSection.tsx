'use client'

import { Badge } from '@/components/ui/badge'
import { Iphone15Pro } from '@/components/ui/iphone-15-pro'

const apps = [
  {
    name: 'RentCircle',
    description: 'Tenant management platform',
    color: '#0f172a',
    accent: '#3B82F6',
    screenshot: 'https://placehold.co/390x844/0f172a/3B82F6?text=RentCircle&font=roboto',
  },
  {
    name: 'MCash',
    description: 'M Lhuillier digital wallet',
    color: '#071427',
    accent: '#60A5FA',
    screenshot: 'https://placehold.co/390x844/071427/60A5FA?text=MCash&font=roboto',
  },
  {
    name: 'Ray Media',
    description: 'Camera app · 10k+ users',
    color: '#0a0a1a',
    accent: '#A78BFA',
    screenshot: 'https://placehold.co/390x844/0a0a1a/A78BFA?text=Ray+Media&font=roboto',
  },
  {
    name: 'mWell',
    description: 'Digital health ID platform',
    color: '#062116',
    accent: '#34D399',
    screenshot: 'https://placehold.co/390x844/062116/34D399?text=mWell&font=roboto',
  },
  {
    name: 'Kindred',
    description: 'AI storytelling startup kit',
    color: '#150720',
    accent: '#C084FC',
    screenshot: 'https://placehold.co/390x844/150720/C084FC?text=Kindred&font=roboto',
  },
]

export default function MobileAppsSection() {
  return (
    <section id="mobile-apps" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20">
            Mobile Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mobile Applications</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            2+ years React Native · 5 production apps shipped to TestFlight &amp; Play Store
          </p>
        </div>

        {/* 3D Phone Carousel using Iphone15Pro from 21st.dev */}
        <div
          className="relative flex items-center justify-center"
          style={{ perspective: '1500px', minHeight: '520px' }}
        >
          {apps.map((app, index) => {
            const offset = index - 2 // -2, -1, 0, 1, 2
            const isCenter = offset === 0
            const absOffset = Math.abs(offset)
            const phoneW = isCenter ? 200 : 160 - absOffset * 10
            const phoneH = isCenter ? 408 : 326 - absOffset * 20
            const rotateY = offset * -15
            const translateX = offset * 170
            const translateZ = isCenter ? 0 : -80 - absOffset * 40
            const zIndex = 10 - absOffset
            const opacity = isCenter ? 1 : 0.65 - absOffset * 0.1

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `rotateY(${rotateY}deg) translateX(${translateX}px) translateZ(${translateZ}px)`,
                  zIndex,
                  opacity,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="drop-shadow-2xl">
                  <Iphone15Pro
                    width={phoneW}
                    height={phoneH}
                    src={app.screenshot}
                  />
                </div>

                {isCenter && (
                  <div className="text-center mt-4">
                    <p className="text-white font-semibold text-sm">{app.name}</p>
                    <p className="text-white/50 text-xs">{app.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* App name strip below carousel */}
        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          {apps.map((app, index) => (
            <div key={index} className="text-center">
              <div
                className="w-2 h-2 rounded-full mx-auto mb-1"
                style={{ background: app.accent }}
              />
              <p className="text-white/60 text-xs">{app.name}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-10 text-center">
          <p className="text-white/40 text-xs mb-3 uppercase tracking-widest">Built with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['React Native', 'TypeScript', 'Firebase', 'Sentry', 'Fastlane', 'iOS', 'Android'].map(
              (tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white/70"
                >
                  {tech}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
