'use client'

import { useEffect, useRef } from 'react'

const otherProjects = [
  {
    title: 'Healthcare Management',
    description: 'Electronic health records system with patient portals and HIPAA compliance',
    tags: ['HIPAA', 'Security'],
    image: '/healthcare.png',
    imageGradient: 'linear-gradient(135deg, #0369a1 0%, #0e7490 100%)',
  },
  {
    title: 'E-Commerce Marketplace',
    description: 'Multi-vendor platform with inventory management and payment processing',
    tags: ['Shopify', 'Payments'],
    image: '/ecommerce.png',
    imageGradient: 'linear-gradient(135deg, #0f766e 0%, #047857 100%)',
  },
  {
    title: 'Collaboration Tool',
    description: 'Team workspace with real-time collaboration and project management',
    tags: ['WebRTC', 'Real-time'],
    image: '/collaboration.png',
    imageGradient: 'linear-gradient(135deg, #0e7490 0%, #0369a1 100%)',
  },
  {
    title: 'Data Visualization',
    description: 'Interactive analytics platform with custom charts and reporting',
    tags: ['D3.js', 'Analytics'],
    image: '/data-viz.png',
    imageGradient: 'linear-gradient(135deg, #047857 0%, #0f766e 100%)',
  },
]

export default function OtherProjects() {
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
    <section id="other-projects" className="px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Other Projects</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Additional client work and enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {otherProjects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => { cardRefs.current[index] = el }}
              className="glass-card rounded-2xl overflow-hidden project-fade"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden" style={{background: project.imageGradient}}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:w-3/5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 pr-2">{project.title}</h3>
                    <span className="badge badge-nda text-xs flex-shrink-0">NDA</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-100 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs italic mt-3">
                    Client project under NDA
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
