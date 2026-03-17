'use client'

import { Badge } from '@/components/ui/badge'

export default function MobileAppsSection() {
  const apps = [
    {
      name: 'Ray Media',
      description: 'Camera app with 10k+ potential users',
      screenshot: 'https://via.placeholder.com/280x570/1a1a2e/00D4AA?text=Ray+Media',
      color: '#FF6B6B'
    },
    {
      name: 'RentCircle',
      description: 'Tenant management platform',
      screenshot: 'https://via.placeholder.com/280x570/1a1a2e/00D4AA?text=RentCircle',
      color: '#4ECDC4'
    },
    {
      name: 'MCash/ML Money',
      description: 'M Lhuillier digital wallet',
      screenshot: 'https://via.placeholder.com/280x570/1a1a2e/00D4AA?text=MCash',
      color: '#45B7D1'
    },
    {
      name: 'mWell Health ID',
      description: 'Digital health identification',
      screenshot: 'https://via.placeholder.com/280x570/1a1a2e/00D4AA?text=mWell',
      color: '#96CEB4'
    },
    {
      name: 'Kindred',
      description: 'AI storytelling startup kit',
      screenshot: 'https://via.placeholder.com/280x570/1a1a2e/00D4AA?text=Kindred',
      color: '#9B59B6'
    }
  ]

  return (
    <section id="mobile-apps" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Mobile Development
          </Badge>
          <h2 className="mb-4">Mobile Applications</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            5 production apps shipped to App Store & Google Play
          </p>
        </div>

        {/* Phone Frames Carousel/Fan Layout */}
        <div className="relative flex justify-center items-center gap-4 flex-wrap lg:flex-nowrap py-12">
          {apps.map((app, index) => {
            // Create fan effect - center phone is larger, side phones are smaller and tilted
            const isCenter = index === 2
            const offset = index - 2 // -2, -1, 0, 1, 2
            
            const scale = isCenter ? 1 : 0.85 - Math.abs(offset) * 0.05
            const rotateY = offset * -8
            const translateX = offset * (isCenter ? 0 : 20)
            const zIndex = 5 - Math.abs(offset)

            return (
              <div
                key={index}
                className="phone-frame"
                style={{
                  transform: `
                    perspective(1500px) 
                    rotateY(${rotateY}deg) 
                    scale(${scale}) 
                    translateX(${translateX}px)
                  `,
                  zIndex,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <img
                  src={app.screenshot}
                  alt={app.name}
                  className="phone-frame-screen"
                />
                
                {/* App Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold text-sm">{app.name}</p>
                  <p className="text-white/60 text-xs">{app.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {apps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === 2 
                  ? 'bg-[#00D4AA] w-6' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-3">Built with:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['React Native', 'TypeScript', 'Firebase', 'Redux', 'Native Modules', 'iOS', 'Android'].map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="bg-white/5 border-white/10 text-white/70"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
