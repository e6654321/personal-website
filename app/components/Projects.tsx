'use client'

import { useEffect, useRef } from 'react'

const featuredProjects = [
  {
    title: 'Waterlock AI',
    description: 'AI-powered rental platform with smart matching, automated leasing workflows, and predictive analytics',
    tags: ['React', 'AI/ML', 'Node.js'],
    tagColors: ['sky', 'cyan', 'teal'],
    headerIcon: '🏠',
    headerGradient: 'from-sky-600 to-cyan-700',
    github: 'https://github.com/e6654321/waterlock',
    badge: 'Featured',
    badgeClass: '',
  },
  {
    title: 'RentCircle',
    description: 'Comprehensive property management suite with tenant portals, maintenance tracking, and financial reporting',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    tagColors: ['sky', 'cyan', 'teal'],
    headerIcon: '🏢',
    headerGradient: 'from-teal-600 to-emerald-700',
    github: 'https://github.com/e6654321/rentcircle',
    badge: 'Featured',
    badgeClass: '',
  },
  {
    title: 'Enterprise CRM',
    description: 'Custom CRM platform with pipeline management, lead scoring, email integration, and sales analytics',
    tags: ['Vue.js', 'Express', 'MongoDB'],
    tagColors: ['sky', 'cyan', 'teal'],
    headerIcon: '📊',
    headerGradient: 'from-cyan-600 to-sky-700',
    github: null,
    badge: 'NDA',
    badgeClass: 'badge-nda',
  },
  {
    title: 'Financial Analytics',
    description: 'Real-time financial dashboards with market data integration, portfolio tracking, and risk analysis',
    tags: ['React', 'D3.js', 'WebSocket'],
    tagColors: ['sky', 'cyan', 'teal'],
    headerIcon: '📈',
    headerGradient: 'from-emerald-600 to-teal-700',
    github: null,
    badge: 'NDA',
    badgeClass: 'badge-nda',
  },
  {
    title: 'AI Assistant',
    description: 'Context-aware automation platform with natural language processing and workflow orchestration',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    tagColors: ['sky', 'cyan', 'teal'],
    headerIcon: '🤖',
    headerGradient: 'from-sky-600 to-cyan-700',
    github: null,
    badge: 'NDA',
    badgeClass: 'badge-nda',
  },
  {
    title: 'Home Automation',
    description: 'IoT integration platform for smart home devices with voice control and energy optimization',
    tags: ['React Native', 'MQTT', 'IoT'],
    tagColors: ['sky', 'cyan', 'teal'],
    headerIcon: '🏡',
    headerGradient: 'from-teal-600 to-emerald-700',
    github: null,
    badge: 'NDA',
    badgeClass: 'badge-nda',
  },
]

const tagColorMap: Record<string, string> = {
  sky: 'tech-tag tech-tag-sky',
  cyan: 'tech-tag tech-tag-cyan',
  teal: 'tech-tag tech-tag-teal',
}

const gradientMap: Record<string, string> = {
  'from-sky-600 to-cyan-700': 'project-header-gradient-sky',
  'from-teal-600 to-emerald-700': 'project-header-gradient-teal',
  'from-cyan-600 to-sky-700': 'project-header-gradient-cyan',
  'from-emerald-600 to-teal-700': 'project-header-gradient-emerald',
}

export default function Projects() {
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
    <section id="featured" className="px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            A selection of my recent work in web development, AI integration, and enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => { cardRefs.current[index] = el }}
              className="glass-card rounded-2xl overflow-hidden project-fade"
            >
              <div className="project-card-header" style={{background: project.headerGradient}}>
                <span className="project-card-header-icon">{project.headerIcon}</span>
                <span className="project-card-header-title">{project.title}</span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <span className={`badge ${project.badgeClass}`}>{project.badge}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={tag} className={tagColorMap[project.tagColors[i]]}>
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sky-700 hover:text-sky-800 dark:text-sky-200 dark:hover:text-sky-100 font-semibold"
                  >
                    View on GitHub
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>
                ) : (
                  <span className="text-gray-700 dark:text-gray-200 text-sm italic">
                    Client project under NDA
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
