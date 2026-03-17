'use client'

import { Badge } from '@/components/ui/badge'
import BrowserCascade from './BrowserCascade'

export default function WebProjectsSection() {
  return (
    <section id="web-projects" className="py-32 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-[var(--accent-teal)]/10 text-[var(--accent-teal)] border-[var(--accent-teal)]/20 text-sm px-4 py-2">
            🌐 Web Development
          </Badge>
          <h2 className="mb-4 text-white">Full-Stack & Web Projects</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Healthcare, fintech, enterprise platforms • React/Next.js frontend • Node.js/NestJS backend
          </p>
        </div>

        {/* 3D Browser Cascade */}
        <BrowserCascade />

        {/* Tech Stack Highlights */}
        <div className="mt-20 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            'React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 
            'PostgreSQL', 'Firebase', 'AWS', 'Vercel', 'Docker'
          ].map((tech) => (
            <Badge 
              key={tech}
              variant="outline" 
              className="bg-white/5 border-white/10 text-white/80 px-4 py-2"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
