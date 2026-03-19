"use client"

import { Badge } from '@/components/ui/badge'

const apps = [
  {
    name: 'Truest',
    description: 'Snap, Secure, Share · Camera app · 10k+ users',
    screenshot: '/screenshots/truest-appstore.jpg',
  },
  {
    name: 'RentCircle',
    description: 'PH Landlord & Tenant Management',
    screenshot: '/screenshots/rentcircle-appstore.jpg',
  },
  {
    name: 'MCash Wallet',
    description: 'M Lhuillier Digital Wallet',
    screenshot: '/screenshots/mcash-appstore.jpg',
  },
  {
    name: 'mWell Health ID',
    description: 'Digital Health Records · 24/7 Doctor Consult',
    screenshot: '/screenshots/mwell-appstore.jpg',
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
            4 production apps · React Native · iOS & Android · 10k+ users
          </p>
        </div>

        {/* App Store Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                <img 
                  src={app.screenshot} 
                  alt={`${app.name} App Store`}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-lg">{app.name}</p>
                <p className="text-white/60 text-sm mt-1">{app.description}</p>
              </div>
            </div>
          ))}
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
