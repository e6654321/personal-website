'use client'

import { Badge } from '@/components/ui/badge'

export default function MobileAppsSection() {
  const apps = [
    {
      name: 'RentCircle',
      description: 'Tenant management platform',
      screenshot: 'https://placehold.co/280x570/1a1a2e/3B82F6?text=RentCircle&font=roboto',
      frameColor: '#5F5F5F' // Space gray
    },
    {
      name: 'MCash',
      description: 'M Lhuillier digital wallet',
      screenshot: 'https://placehold.co/280x570/1a1a2e/3B82F6?text=MCash&font=roboto',
      frameColor: '#4A4A4A' // Dark gray
    },
    {
      name: 'Ray Media',
      description: 'Camera app with 10k+ potential users',
      screenshot: 'https://placehold.co/280x570/1a1a2e/3B82F6?text=Ray+Media&font=roboto',
      frameColor: '#3A3A3A' // Center - darkest
    },
    {
      name: 'mWell',
      description: 'Digital health identification',
      screenshot: 'https://placehold.co/280x570/1a1a2e/3B82F6?text=mWell&font=roboto',
      frameColor: '#4A4A4A' // Dark gray
    },
    {
      name: 'Kindred',
      description: 'AI storytelling startup kit',
      screenshot: 'https://placehold.co/280x570/1a1a2e/3B82F6?text=Kindred&font=roboto',
      frameColor: '#8B7355' // Rose gold
    }
  ]

  return (
    <section id="mobile-apps" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20">
            Mobile Development
          </Badge>
          <h2 className="mb-4">Mobile Applications</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            2+ years React Native • 5 production apps
          </p>
        </div>

        {/* 3D Phone Carousel - Center phone largest, sides rotated inward */}
        <div className="relative perspective-container min-h-[650px] flex items-center justify-center">
          <div className="relative flex justify-center items-center gap-0">
            {apps.map((app, index) => {
              const isCenter = index === 2 // Ray Media in center
              const offset = index - 2 // -2, -1, 0, 1, 2
              
              // 3D perspective calculations
              const scale = isCenter ? 1 : 0.85 - Math.abs(offset) * 0.1
              const rotateY = offset * -12 // More pronounced rotation
              const translateX = offset * 50 // Spacing between phones
              const translateZ = isCenter ? 0 : -100 - Math.abs(offset) * 50
              const zIndex = 10 - Math.abs(offset)

              return (
                <div
                  key={index}
                  className="phone-frame absolute"
                  style={{
                    transform: `
                      perspective(1500px) 
                      rotateY(${rotateY}deg) 
                      scale(${scale}) 
                      translateX(${translateX}px)
                      translateZ(${translateZ}px)
                    `,
                    zIndex,
                    borderColor: app.frameColor,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isCenter ? 1 : 0.7
                  }}
                >
                  <img
                    src={app.screenshot}
                    alt={app.name}
                    className="phone-frame-screen"
                  />
                  
                  {/* App Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white font-semibold text-sm">{app.name}</p>
                    <p className="text-white/70 text-xs">{app.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
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
