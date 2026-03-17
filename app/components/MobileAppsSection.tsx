'use client'

import { useEffect, useRef } from 'react'

const mobileApps = [
  {
    name: 'Ray Media',
    description: 'Camera app with custom controls, gesture navigation, and Firebase integration for 10,000+ potential users',
    icon: '📸',
    platforms: ['iOS (TestFlight)', 'Android (Play Store)'],
    tech: ['React Native', 'Firebase', 'Sentry', 'Custom Camera API'],
    appStore: null, // TestFlight/Closed testing
    playStore: null, // Closed testing
    gradient: 'from-purple-600 to-pink-600',
    status: 'Production (Closed Testing)',
    highlights: [
      '10,000+ potential users',
      'Custom camera system with gesture controls',
      'Firebase Cloud Functions & Push Notifications'
    ]
  },
  {
    name: 'RentCircle',
    description: 'Tenant management app for Philippine landlords with SMS reminders and payment tracking',
    icon: '🏠',
    platforms: ['iOS (App Store)', 'Android (Play Store)'],
    tech: ['React Native', 'Firebase', 'TypeScript', 'Cloud Messaging'],
    appStore: 'https://apps.apple.com/us/app/rentcircle/id6651860576',
    playStore: 'https://play.google.com/store/apps/details?id=com.symph.rentcircle&hl=en',
    gradient: 'from-green-600 to-teal-600',
    status: 'Live on App Store & Play Store',
    highlights: [
      'Published on both App Store & Play Store',
      'Firebase push notifications',
      'Tenant management & reminders'
    ]
  },
  {
    name: 'MCash / ML Wallet',
    description: 'M Lhuillier digital wallet and money transfer app for remittance and financial services',
    icon: '💰',
    platforms: ['iOS (App Store)', 'Android (Play Store)'],
    tech: ['React Native', 'TypeScript', 'Financial APIs', 'OTP Auth'],
    appStore: 'https://apps.apple.com/ph/app/mcash-wallet/id962204987',
    playStore: 'https://play.google.com/store/apps/details?id=com.mlhuillier.mlwallet&hl=en',
    gradient: 'from-blue-600 to-indigo-600',
    status: 'Live on App Store & Play Store',
    highlights: [
      'National financial services app',
      'Secure payment processing',
      'Money transfer integration'
    ]
  },
  {
    name: 'mWell Health ID',
    description: 'Digital health identification and medical records management for healthcare platform',
    icon: '🏥',
    platforms: ['iOS & Android'],
    tech: ['React Native', 'Healthcare APIs', 'Secure Document Management'],
    appStore: null, // Search "mWell" on App Store
    playStore: null,
    gradient: 'from-red-600 to-orange-600',
    status: 'Production',
    highlights: [
      'Healthcare platform integration',
      'Secure medical document viewing',
      'Patient health records management'
    ]
  },
  {
    name: 'Kindred',
    description: 'AI-powered storytelling startup kit with voice recording and multi-generational narratives',
    icon: '📖',
    platforms: ['iOS & Android (Development)'],
    tech: ['React Native', 'NestJS', 'Firebase', 'AI Integration'],
    appStore: null,
    playStore: null,
    gradient: 'from-yellow-600 to-orange-600',
    status: 'Startup Kit (NDA)',
    highlights: [
      'AI storytelling platform',
      'Voice recording & playback',
      'Full-stack mobile + backend'
    ]
  }
]

export default function MobileAppsSection() {
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
    <section id="mobile-apps" className="px-4 py-16 md:py-24 bg-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl md:text-6xl">📱</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mobile Applications
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            2+ years React Native development. 
            <br className="hidden md:block" />
            Shipped 5 production apps to App Store and Play Store.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileApps.map((app, index) => (
            <article
              key={app.name}
              ref={(el) => { cardRefs.current[index] = el }}
              className="glass-card rounded-2xl overflow-hidden project-fade group hover:scale-105 transition-transform duration-300"
            >
              {/* Phone Frame Mockup */}
              <div className={`h-48 bg-gradient-to-br ${app.gradient} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                {/* Phone Frame */}
                <div className="relative z-10 w-32 h-40 bg-black rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="w-28 h-36 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center">
                    <span className="text-5xl">{app.icon}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {app.name}
                </h3>

                <p className="text-sm text-white/70 mb-3 leading-relaxed">
                  {app.description}
                </p>

                {/* Status Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                    {app.status}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {app.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start">
                        <span className="text-blue-400 mr-1.5 mt-0.5">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {app.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Store Links */}
                <div className="flex flex-col gap-2">
                  {app.appStore && (
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store
                    </a>
                  )}
                  {app.playStore && (
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-medium hover:bg-blue-500 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Play Store
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">5</div>
            <div className="text-sm text-white/70">Production Apps</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">2+</div>
            <div className="text-sm text-white/70">Years React Native</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">10k+</div>
            <div className="text-sm text-white/70">App Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}
