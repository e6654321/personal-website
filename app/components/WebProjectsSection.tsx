'use client'

import { Badge } from '@/components/ui/badge'

export default function WebProjectsSection() {
  const projects = [
    {
      title: 'TokenTable Dashboard',
      url: 'tokentable.xyz',
      screenshot: 'https://via.placeholder.com/1200x800/f5f5f5/333?text=TokenTable+Dashboard',
      description: 'Crypto vesting platform dashboard'
    },
    {
      title: 'NCC Hub 2.0',
      url: 'ncc-hub.com',
      screenshot: 'https://via.placeholder.com/1200x800/f5f5f5/333?text=NCC+Hub+Platform',
      description: 'Enterprise microservices platform'
    },
    {
      title: 'ML Shop E-commerce',
      url: 'mlshop.com.ph',
      screenshot: 'https://via.placeholder.com/1200x800/f5f5f5/333?text=ML+Shop',
      description: 'E-commerce marketplace'
    }
  ]

  return (
    <section id="web-projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            Web Development
          </Badge>
          <h2 className="mb-4">Web Projects</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Full-stack web applications and enterprise platforms
          </p>
        </div>

        {/* Browser Mockups - Stacked/Overlapping Layout */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative mx-auto"
              style={{
                maxWidth: '900px',
                transform: index % 2 === 0 
                  ? 'perspective(1500px) rotateY(2deg) rotateX(1deg)' 
                  : 'perspective(1500px) rotateY(-2deg) rotateX(1deg)'
              }}
            >
              {/* Browser Frame */}
              <div className="browser-frame">
                {/* Browser Chrome */}
                <div className="browser-chrome">
                  {/* Traffic Light Buttons */}
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
                <p className="text-white/60 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
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
