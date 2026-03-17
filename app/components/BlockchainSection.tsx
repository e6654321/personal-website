'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function BlockchainSection() {
  const projects = [
    {
      title: 'TokenTable',
      description: 'Lead smart contract developer for crypto vesting platform managing $50M+ in locked tokens',
      tech: ['Solidity', 'Web3.js', 'React', 'TypeScript'],
      link: 'https://tokentable.xyz',
      highlights: [
        'Vesting contract architecture',
        'Multi-sig wallet integration',
        'Gas optimization strategies'
      ]
    },
    {
      title: 'TON Blockchain Smart Contracts',
      description: 'Developed on-chain token operations and decentralized applications on The Open Network',
      tech: ['FunC', 'Blueprint', 'TypeScript', 'TON SDK'],
      link: null,
      highlights: [
        'Custom token standard implementation',
        'On-chain voting mechanisms',
        'Jetton wallet contracts'
      ]
    },
    {
      title: 'C3 Platform (ETHGlobal Winner)',
      description: 'Built web3 platform for decentralized collaboration - won ETHGlobal hackathon',
      tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
      link: null,
      highlights: [
        'Smart contract security audit',
        'IPFS integration',
        'Wallet connect implementation'
      ]
    }
  ]

  return (
    <section id="blockchain" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/20">
            Blockchain & Web3
          </Badge>
          <h2 className="mb-4">Blockchain Projects</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building secure, scalable smart contracts and decentralized applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              
              <p className="text-white/70 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs text-white/50 mb-2 uppercase tracking-wide">Key Features:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-[#00D4AA] mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="text-xs bg-white/5 border-white/10 text-white/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.link && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-[#00D4AA]/30 text-[#00D4AA] hover:bg-[#00D4AA]/10"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
