'use client'

import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'TokenTable',
    url: 'tokentable.xyz',
    screenshot: '/screenshots/tokentable-real.jpg',
    description: 'Lead smart contract developer · Token vesting platform managing $50M+ in assets',
    tags: ['Solidity', 'React', 'Web3.js', 'TypeScript'],
  },
  {
    title: 'EthSign Platform',
    url: 'ethsign.xyz',
    screenshot: '/screenshots/ethsign-real.jpg',
    description: 'Web3 electronic signature platform · Blockchain transaction handling',
    tags: ['React', 'Web3.js', 'AWS', 'PDFTron'],
  },
  {
    title: 'M Lhuillier Website',
    url: 'mlhuillier.com',
    screenshot: '/screenshots/mlhuillier-real.jpg',
    description: 'Lead developer · National remittance & financial services · 10,000+ daily users',
    tags: ['11ty', 'jQuery', 'Contentful', 'Netlify'],
  },
  {
    title: 'Watch My Back',
    url: 'watchmyback.org',
    screenshot: '/screenshots/watchmyback.png',
    description: 'Community incident reporting platform · Real-time safety tracking',
    tags: ['React', 'Firebase', 'Next.js', 'TypeScript'],
  },
  {
    title: 'MPIC Sustainability',
    url: 'sustainability.mpic.com.ph',
    screenshot: '/screenshots/mpic-sustainability.png',
    description: 'Enterprise sustainability tracking and reporting for MPIC subsidiaries',
    tags: ['React', 'TypeScript', 'Data Viz'],
  },
]

export default function WebProjectsSection() {
  return (
    <section id="web-projects" className="py-24 relative" style={{ background: '#000000' }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            Web Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Full-Stack & Web Projects</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Blockchain · Enterprise · Fintech · Healthcare · Community Safety
          </p>
        </div>

        {/* Website Screenshots Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Browser-style frame */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1a1a]">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-[#1a1a1a] rounded-md px-3 py-1 text-xs text-white/50">
                      {project.url}
                    </div>
                  </div>
                </div>
                {/* Screenshot */}
                <img 
                  src={project.screenshot} 
                  alt={`${project.title} website`}
                  className="w-full h-auto"
                />
              </div>

              {/* Project info */}
              <div className="mt-6 px-2">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#94A3B8] text-sm mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs bg-white/5 border-white/10 text-white/60 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <p className="text-white/40 text-xs mb-4 uppercase tracking-widest">Tech Stack</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'NestJS',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'AWS',
              'Vercel',
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white/5 border-white/10 text-white/70 hover:bg-white/10 transition-colors"
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
