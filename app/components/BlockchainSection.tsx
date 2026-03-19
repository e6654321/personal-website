'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from './AnimateOnScroll'

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
      title: 'EthSign Platform',
      description: 'Contributed to decentralized signing and verification platform for Web3',
      tech: ['Solidity', 'IPFS', 'React', 'Ethers.js'],
      link: 'https://ethsign.xyz',
      highlights: [
        'Smart contract integration',
        'Token gating mechanisms',
        'Decentralized storage'
      ]
    },
    {
      title: 'C3 Platform',
      description: 'ETHGlobal hackathon winner - built web3 collaboration platform',
      tech: ['Solidity', 'Hardhat', 'Next.js', 'Wagmi'],
      link: null,
      highlights: [
        'Smart contract security audit',
        'Wallet connect implementation',
        'On-chain governance'
      ]
    },
    {
      title: 'Stanible NFT Marketplace',
      description: 'NFT marketplace with custom minting and trading features',
      tech: ['Solidity', 'OpenZeppelin', 'React', 'Web3.js'],
      link: null,
      highlights: [
        'ERC-721 token standard',
        'Royalty distribution',
        'IPFS metadata storage'
      ]
    }
  ]

  return (
    <section id="blockchain" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <Badge className="mb-4 bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20">
            Blockchain & Web3
          </Badge>
          <h2 className="mb-4">Blockchain Projects</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Building secure, scalable smart contracts and decentralized applications
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="glass-card p-6 h-full hover:border-[#3B82F6]/30 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  
                  <p className="text-[#94A3B8] mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-white/50 mb-2 uppercase tracking-wide">Key Features:</p>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-[#94A3B8] flex items-start gap-2">
                          <span className="text-[#3B82F6] mt-1">•</span>
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
                      className="w-full border-[#3B82F6]/30 text-[#3B82F6] hover:bg-[#3B82F6]/10"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project →
                      </a>
                    </Button>
                  )}
                </Card>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
