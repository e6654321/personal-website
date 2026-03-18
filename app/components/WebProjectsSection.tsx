'use client'

import { Badge } from '@/components/ui/badge'
import { Safari } from '@/components/ui/safari'

const projects = [
  {
    title: 'TokenTable',
    url: 'tokentable.xyz',
    screenshot: 'https://placehold.co/1200x700/0f172a/3B82F6?text=TokenTable+Vesting+Platform',
    description: 'Lead smart contract developer · Token vesting platform managing $50M+ in assets',
    tags: ['Solidity', 'React', 'Web3.js', 'TypeScript'],
  },
  {
    title: 'AI/ML Platform',
    url: 'symph.co',
    screenshot: 'https://placehold.co/1200x700/1a103d/A78BFA?text=AI+Document+Processing',
    description: 'Enterprise AI platform · OpenAI API integration · LangChain · Document intelligence',
    tags: ['React', 'OpenAI', 'LangChain', 'Python'],
  },
  {
    title: 'M Lhuillier Platform',
    url: 'mlhuillier.com',
    screenshot: 'https://placehold.co/1200x700/1a0a00/FCD34D?text=M+Lhuillier+Services',
    description: 'National remittance & financial services · 10,000+ daily users',
    tags: ['11ty', 'jQuery', 'Contentful', 'Netlify'],
  },
  {
    title: 'Property Management',
    url: 'propertymanagement.app',
    screenshot: 'https://placehold.co/1200x700/0d1a28/60A5FA?text=Property+Management',
    description: 'Real estate platform · Tenant management · Lease tracking',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
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
            Blockchain · AI · Fintech · Enterprise platforms
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
