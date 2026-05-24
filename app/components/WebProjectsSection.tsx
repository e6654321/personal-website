'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from './AnimateOnScroll'

const projects = [
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
  {
    title: 'UNITS Property Management',
    url: 'unitsapp.co',
    screenshot: '/screenshots/units-login.png',
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
        <AnimateOnScroll className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            Web Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Full-Stack & Web Projects</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Next.js frontends, NestJS APIs, microservices, and enterprise product delivery
          </p>
        </AnimateOnScroll>

        {/* Browser frames - responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <AnimateOnScroll 
              key={index} 
              delay={index * 0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                className="group"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* Custom browser frame */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl group-hover:border-purple-500/30 group-hover:shadow-purple-500/10 transition-all duration-300">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-[#1a1a1a] rounded-md px-3 py-1.5 text-xs text-white/50 flex items-center gap-2">
                        <svg className="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        {project.url}
                      </div>
                    </div>
                  </div>
                  {/* Screenshot - fixed height with top alignment */}
                  <div className="h-[280px] overflow-hidden">
                    <img 
                      src={project.screenshot} 
                      alt={`${project.title} website`}
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: 'top' }}
                    />
                  </div>
                </div>

                {/* Project info */}
                <div className="mt-5 px-1">
                  <h3 className="text-lg font-bold text-white mb-1.5">{project.title}</h3>
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
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Tech Stack */}
        <AnimateOnScroll delay={0.3} className="mt-20 text-center">
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
        </AnimateOnScroll>
      </div>
    </section>
  )
}
