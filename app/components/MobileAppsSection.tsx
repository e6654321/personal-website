"use client"

import { Badge } from '@/components/ui/badge'
import { Iphone15Pro } from '@/components/ui/iphone-15-pro'

const apps = [
  {
    name: 'Truest',
    description: 'Snap, Secure, Share · Camera app · 10k+ users',
    screenshot: '/screenshots/truest-screen.jpg',
  },
  {
    name: 'RentCircle',
    description: 'PH Landlord & Tenant Management',
    screenshot: '/screenshots/rentcircle-placeholder.jpg',
  },
  {
    name: 'MCash Wallet',
    description: 'M Lhuillier Digital Wallet',
    screenshot: '/screenshots/mcash-screen.jpg',
  },
  {
    name: 'mWell Health ID',
    description: 'Digital Health Records · 24/7 Doctor Consult',
    screenshot: '/screenshots/mwell-screen.png',
  },
  {
    name: 'PAO Connect',
    description: 'Philippine Academy of Ophthalmology',
    screenshot: '/screenshots/paoconnect-placeholder.jpg',
  },
]

export default function MobileAppsSection() {
  return (
    <section id="mobile-apps" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 60%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20">
            Mobile Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mobile Applications</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            5 production apps · React Native · iOS & Android · 10k+ users
          </p>
        </div>

        {/* Phone Frame Carousel */}
        <div
          className="relative overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="flex gap-8 min-w-max justify-start md:justify-center px-4">
            {apps.map((app, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                  <Iphone15Pro
                    width={220}
                    height={449}
                    src={app.screenshot}
                    className="cursor-pointer"
                  />
                </div>

                <div className="text-center mt-6">
                  <p className="text-white font-semibold text-lg">{app.name}</p>
                  <p className="text-white/60 text-sm mt-1">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="text-center mt-4 md:hidden">
          <p className="text-white/40 text-xs">← Swipe to see more →</p>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Tech Stack</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            {['React Native', 'TypeScript', 'Firebase', 'Sentry', 'Fastlane', 'iOS', 'Android', 'TestFlight'].map(
              (tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 transition-colors"
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
