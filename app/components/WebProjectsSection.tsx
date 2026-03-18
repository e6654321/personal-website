'use client'

import { Badge } from '@/components/ui/badge'
import { Safari } from '@/components/ui/safari'

const projects = [
  {
    title: 'TokenTable',
    url: 'tokentable.xyz',
    screenshot: '/screenshots/tokentable.jpg',
    description: 'Lead smart contract developer · Token vesting platform managing $50M+ in assets',
    tags: ['Solidity', 'React', 'Web3.js', 'TypeScript'],
  },
  {
    title: 'EthSign Platform',
    url: 'ethsign.xyz',
    screenshot: '/screenshots/ethsign.jpg',
    description: 'Web3 electronic signature platform · Blockchain transaction handling',
    tags: ['React', 'Web3.js', 'AWS', 'PDFTron'],
  },
  {
    title: 'Watch My Back',
    url: 'watchmyback.org',
    screenshot: 'https://placehold.co/1200x700/064e3b/10b981?text=Watch+My+Back+Community+Safety&font=roboto',
    description: 'Community incident reporting platform · Real-time safety tracking',
    tags: ['React', 'Firebase', 'Next.js', 'TypeScript'],
  },
  {
    title: 'M Lhuillier Website',
    url: 'mlhuillier.com',
    screenshot: '/screenshots/mlhuillier.jpg',
    description: 'Lead developer · National remittance & financial services · 10,000+ daily users',
    tags: ['11ty', 'jQuery', 'Contentful', 'Netlify'],
  },
  {
    title: 'MPIC Sustainability',
    url: 'sustainability.mpic.com.ph',
    screenshot: '/screenshots/mpic-sustainability.png',
    description: 'Enterprise sustainability tracking and reporting for MPIC subsidiaries',
    tags: ['React', 'TypeScript', 'Data Viz'],
  },
  {
    title: 'UNITS Property Management',
    url: 'unitsapp.co',
    screenshot: 'https://placehold.co/1200x700/1e3a8a/60A5FA?text=UNITS+Property+SaaS&font=roboto',
    description: 'Lead development · Property management SaaS platform',
    tags: ['React', 'Python', 'Node.js', 'Redux'],
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

        {/* Safari browser frames - responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group hover:scale-[1.02] transition-all duration-300"
            >
              {/* Safari component from 21st.dev */}
              <div className="relative">
                <Safari
                  url={project.url}
                  src={project.screenshot}
                  width={1200}
                  height={700}
                  className="w-full h-auto drop-shadow-2xl"
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
