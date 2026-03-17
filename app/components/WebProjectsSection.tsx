'use client'

import { Badge } from '@/components/ui/badge'

export default function WebProjectsSection() {
  const projects = [
    {
      title: 'TokenTable Dashboard',
      url: 'tokentable.xyz',
      screenshot: 'https://placehold.co/1200x800/f5f5f5/333?text=TokenTable+Dashboard&font=roboto',
      description: 'Crypto vesting platform managing $50M+ in locked tokens'
    },
    {
      title: 'EthSign Platform',
      url: 'ethsign.xyz',
      screenshot: 'https://placehold.co/1200x800/f5f5f5/333?text=EthSign+Platform&font=roboto',
      description: 'Decentralized signing and verification for Web3'
    },
    {
      title: 'ML Shop E-commerce',
      url: 'mlshop.com.ph',
      screenshot: 'https://placehold.co/1200x800/f5f5f5/333?text=ML+Shop&font=roboto',
      description: 'E-commerce marketplace with 100k+ products'
    },
    {
      title: 'Watch My Back Security',
      url: 'watchmyback.com',
      screenshot: 'https://placehold.co/1200x800/f5f5f5/333?text=Watch+My+Back&font=roboto',
      description: 'Real-time security monitoring platform'
    },
    {
      title: 'MPIC Employee Portal',
      url: 'internal.mpic.com',
      screenshot: 'https://placehold.co/1200x800/f5f5f5/333?text=MPIC+Portal&font=roboto',
      description: 'Enterprise employee management system'
    },
    {
      title: 'M Lhuillier Microservices',
      url: 'mlhuillier.com',
      screenshot: 'https://placehold.co/1200x800/f5f5f5/333?text=M+Lhuillier&font=roboto',
      description: 'Financial services microservices architecture'
    }
  ]

  return (
    <section id="web-projects" className="py-20 relative" style={{ background: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20">
            Web Development
          </Badge>
          <h2 className="mb-4">Full-Stack & Web Projects</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Healthcare, fintech, enterprise platforms
          </p>
        </div>

        {/* Browser Mockups - Overlapping Cascade with 3D Tilt */}
        <div className="relative perspective-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              // Alternating 3D tilt direction
              const rotateY = index % 2 === 0 ? 2 : -2
              const rotateX = 1

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    transform: `perspective(1500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(1500px) rotateY(0deg) rotateX(0deg) translateY(-8px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `perspective(1500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
                  }}
                >
                  {/* Browser Frame */}
                  <div className="browser-frame">
                    {/* Chrome UI */}
                    <div className="browser-chrome">
                      {/* macOS Traffic Light Buttons */}
                      <div className="browser-dots">
                        <div className="browser-dot red" />
                        <div className="browser-dot yellow" />
                        <div className="browser-dot green" />
                      </div>

                      {/* Address Bar */}
                      <div className="browser-address-bar">
                        <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        {project.url}
                      </div>
                    </div>

                    {/* Browser Content */}
                    <div className="browser-content">
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-[#94A3B8] text-sm">{project.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm mb-3">Technologies:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 
              'PostgreSQL', 'MongoDB', 'RabbitMQ', 'Docker', 'AWS', 'GCP'
            ].map((tech) => (
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
