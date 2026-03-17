'use client'

import { useEffect, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const blockchainProjects = [
  {
    title: 'TokenTable',
    company: 'EthSign',
    role: 'Lead Smart Contract Developer',
    description: 'Led smart contract development for production cryptocurrency token vesting platform serving real crypto projects. Built on-chain token operations using TON FunC and Blueprint.',
    technologies: ['TON FunC', 'TypeScript', 'Blueprint', 'Smart Contracts'],
    website: 'https://www.tokentable.xyz/',
    icon: '🔐',
    gradient: 'from-blue-600 to-cyan-600',
    achievements: [
      'Designed and deployed TON blockchain smart contracts',
      'Led cross-team security audits ensuring production readiness',
      'Built token vesting logic with on-chain operations'
    ]
  },
  {
    title: 'EthSign Platform',
    company: 'EthSign',
    role: 'Full-Stack Blockchain Developer',
    description: 'Built Web3 electronic signature platform with blockchain integration using Web3 React and Ethers.js. Implemented digital wallet integrations (MetaMask, WalletConnect) for secure blockchain transactions.',
    technologies: ['React', 'Ethers.js', 'Web3 React', 'TypeScript', 'AWS'],
    website: 'https://www.ethsign.xyz/',
    icon: '✍️',
    gradient: 'from-purple-600 to-blue-600',
    achievements: [
      'Blockchain transaction handling with gas optimization',
      'Transaction monitoring and error recovery systems',
      'Digital wallet integration for multiple providers'
    ]
  },
  {
    title: 'C3 Platform',
    company: 'ETHGlobal Hackathon',
    role: 'Full-Stack Developer',
    description: '🏆 Won ETHGlobal hackathon building C3 decentralized application platform. Full-stack implementation with Next.js frontend, Express backend, Firebase, and Web3 integration.',
    technologies: ['Next.js', 'Firebase', 'Web3 React', 'Ethers.js', 'Express'],
    website: 'https://ethglobal.com/showcase/c3-nk9s5',
    icon: '🏆',
    gradient: 'from-green-600 to-teal-600',
    achievements: [
      'ETHGlobal hackathon winner',
      'Built full-stack dApp in 48 hours',
      'Integrated blockchain with traditional backend'
    ]
  },
  {
    title: 'Stanible',
    company: 'Symph',
    role: 'Lead Developer',
    description: 'Built React Native mobile app with Ethereum blockchain integration using Go-Ethereum. Developed mobile dApp for crypto operations with secure wallet management.',
    technologies: ['React Native', 'Go-Ethereum', 'TypeScript', 'Firebase'],
    website: null,
    icon: '📱',
    gradient: 'from-orange-600 to-red-600',
    achievements: [
      'Mobile blockchain integration with Go-Ethereum',
      'Secure wallet management for mobile',
      'Cross-platform iOS/Android dApp'
    ]
  }
]

export default function BlockchainSection() {
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
    <section id="blockchain" className="px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl md:text-6xl">⛓️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blockchain & Web3
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            3+ years building production cryptocurrency platforms at EthSign. 
            <br className="hidden md:block" />
            Smart contract development, DeFi, and Web3 integrations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
              TON FunC
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
              Solidity
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
              Web3 React
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
              Ethers.js
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blockchainProjects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => { cardRefs.current[index] = el }}
              className="glass-card rounded-2xl overflow-hidden project-fade group"
            >
              {/* Card Header with Gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                <span className="text-6xl relative z-10">{project.icon}</span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-400 font-semibold">
                    {project.company} • {project.role}
                  </p>
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-white/70 flex items-start">
                        <span className="text-blue-400 mr-2 mt-0.5">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag tech-tag-sky text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-12 text-center">
          <div className="glass-card inline-block rounded-2xl px-8 py-6">
            <p className="text-white text-lg">
              <span className="font-bold text-2xl text-blue-400">3+ years</span> building production blockchain applications
              <br />
              <span className="text-base text-white/70">
                Smart contracts • DeFi platforms • Web3 integrations • Token vesting • dApps
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
