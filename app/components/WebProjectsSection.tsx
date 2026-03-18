'use client'

import { Badge } from '@/components/ui/badge'
import { Safari } from '@/components/ui/safari'

const projects = [
  {
    title: 'TokenTable',
    url: 'tokentable.xyz',
    screenshot: 'https://placehold.co/1200x700/0f172a/3B82F6?text=TokenTable+-+Crypto+Vesting+Platform&font=roboto',
    description: 'Lead smart contract dev · Crypto token vesting platform · Web3 wallet integrations',
    tags: ['Solidity', 'React', 'Ethers.js', 'AWS'],
  },
  {
    title: 'EthSign Platform',
    url: 'ethsign.xyz',
    screenshot: 'https://placehold.co/1200x700/080d1e/A78BFA?text=EthSign+-+Decentralized+Signing&font=roboto',
    description: 'Web3 electronic signature platform · Blockchain transaction handling',
    tags: ['React', 'TypeScript', 'Web3', 'PDFTron'],
  },
  {
    title: 'ML Shop E-commerce',
    url: 'mlhuillier.com/shop',
    screenshot: 'https://placehold.co/1200x700/0a1628/60A5FA?text=ML+Shop+-+E-commerce+Platform&font=roboto',
    description: 'M Lhuillier jewelry e-commerce revamp · Next.js full-stack',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
  },
  {
    title: 'Watch My Back',
    url: 'watchmyback.org',
    screenshot: 'https://placehold.co/1200x700/0d1a0d/34D399?text=Watch+My+Back+-+Community+Safety&font=roboto',
    description: 'Community incident reporting · Real-time safety platform',
    tags: ['React', 'Firebase', 'Next.js'],
  },
  {
    title: 'MPIC Sustainability',
    url: 'sustainability.mpic.com.ph',
    screenshot: 'https://placehold.co/1200x700/150a20/C084FC?text=MPIC+Sustainability+Platform&font=roboto',
    description: 'Enterprise sustainability tracking · MPIC subsidiaries dashboard',
    tags: ['React', 'TypeScript', 'Data Viz'],
  },
  {
    title: 'M Lhuillier Website',
    url: 'mlhuillier.com',
    screenshot: 'https://placehold.co/1200x700/1a1200/FCD34D?text=M+Lhuillier+-+Financial+Services&font=roboto',
    description: 'Lead developer · National remittance and financial services',
    tags: ['11ty', 'jQuery', 'Contentful', 'Netlify'],
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
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            Web Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Full-Stack &amp; Web Projects</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Healthcare · Fintech · Blockchain · Enterprise platforms
          </p>
        </div>

        {/* Safari browser frames from 21st.dev in a 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const rotateY = index % 2 === 0 ? 1.5 : -1.5

            return (
              <div
                key={index}
                className="group"
                style={{
                  transform: `perspective(1500px) rotateY(${rotateY}deg) rotateX(0.5deg)`,
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    'perspective(1500px) rotateY(0deg) rotateX(0deg) translateY(-6px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `perspective(1500px) rotateY(${rotateY}deg) rotateX(0.5deg)`
                }}
              >
                {/* Safari component from 21st.dev */}
                <Safari
                  url={project.url}
                  src={project.screenshot}
                  width={800}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                />

                {/* Project info */}
                <div className="mt-4 px-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs bg-white/5 border-white/10 text-white/60"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#94A3B8] text-sm">{project.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-xs mb-3 uppercase tracking-widest">Technologies</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'NestJS',
              'PostgreSQL',
              'MongoDB',
              'RabbitMQ',
              'Docker',
              'AWS',
              'GCP',
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
