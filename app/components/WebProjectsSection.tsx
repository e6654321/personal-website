'use client'

import { useEffect, useRef } from 'react'

const webProjects = [
  {
    name: 'ML Shop E-commerce',
    company: 'M Lhuillier',
    description: 'Revamped M Lhuillier Jewelries e-commerce website with modern UI/UX, cart system, and maintenance mode features',
    url: 'https://mlhuillier.com/shop',
    tech: ['Next.js', 'TypeScript', 'E-commerce', 'Financial Systems'],
    icon: '💎',
    gradient: 'from-yellow-600 to-orange-600',
    category: 'E-commerce',
    year: '2025'
  },
  {
    name: 'Watch My Back',
    company: 'Community Safety Platform',
    description: 'Community-based incident reporting and safety tracking platform with real-time updates and agency management dashboard',
    url: 'https://watchmyback.org/',
    tech: ['React', 'Firebase', 'Next.js', 'TypeScript'],
    icon: '🛡️',
    gradient: 'from-red-600 to-pink-600',
    category: 'Community Safety',
    year: '2024'
  },
  {
    name: 'MPIC Sustainability Platform',
    company: 'MPIC Enterprise',
    description: 'Enterprise sustainability tracking and reporting platform for MPIC subsidiaries with data visualization and variance analysis',
    url: 'https://sustainability.mpic.com.ph/',
    tech: ['React', 'TypeScript', 'Enterprise Dashboards', 'Data Visualization'],
    icon: '🌱',
    gradient: 'from-green-600 to-emerald-600',
    category: 'Enterprise',
    year: '2024'
  },
  {
    name: 'mWell 1Life Integration',
    company: 'mWell Healthcare',
    description: 'Healthcare platform integration for 1Life primary care facility with patient management, video calls, and comprehensive medical profiling',
    url: 'https://www.mwell.com.ph/',
    tech: ['React', 'Next.js', 'TypeScript', 'Healthcare APIs'],
    icon: '🏥',
    gradient: 'from-blue-600 to-cyan-600',
    category: 'Healthcare',
    year: '2024'
  },
  {
    name: 'NCC Hub 2.0',
    company: 'NCC Church',
    description: 'Backend microservices for RockKidz promotion system with event management, attendance tracking, and RabbitMQ messaging',
    url: null,
    tech: ['NestJS', 'RabbitMQ', 'PostgreSQL', 'Microservices'],
    icon: '⚙️',
    gradient: 'from-purple-600 to-indigo-600',
    category: 'Backend/Enterprise',
    year: '2024-2026'
  },
  {
    name: 'M Lhuillier Website',
    company: 'M Lhuillier Financial',
    description: 'Lead developer for national remittance company website with Google Sheets API and Contentful CMS integration',
    url: 'https://mlhuillier.com/',
    tech: ['11ty', 'JavaScript', 'Google Sheets API', 'Contentful'],
    icon: '💼',
    gradient: 'from-blue-600 to-indigo-600',
    category: 'Corporate Website',
    year: '2020-2022'
  }
]

export default function WebProjectsSection() {
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="web-projects" className="px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl md:text-6xl">🌐</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full-Stack & Web Projects
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Healthcare, fintech, enterprise, and community platforms.
            <br className="hidden md:block" />
            React/Next.js frontend • Node.js/NestJS backend • Cloud deployment
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webProjects.map((project, index) => (
            <article
              key={project.name}
              ref={(el) => { cardRefs.current[index] = el }}
              className="glass-card rounded-2xl overflow-hidden project-fade group"
            >
              {/* Browser Frame Mockup */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex flex-col relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Browser Chrome */}
                <div className="relative z-10 flex items-center px-3 py-2 bg-black/30 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-3 flex-1 h-5 bg-white/20 rounded-md px-2 flex items-center">
                    <span className="text-xs text-white/70 truncate">
                      {project.url ? new URL(project.url).hostname : 'Internal System'}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex items-center justify-center relative z-10">
                  <span className="text-6xl">{project.icon}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-blue-400 font-medium">
                      {project.company}
                    </p>
                    <span className="text-xs text-white/50">
                      {project.year}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-sm text-white/50 italic">
                    Internal System
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
