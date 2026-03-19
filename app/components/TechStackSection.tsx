'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import AnimateOnScroll from './AnimateOnScroll'

export default function TechStackSection() {
  const techStack = {
    'Blockchain & Web3': [
      'TON FunC', 'Solidity', 'Web3.js', 'Ethers.js', 'Hardhat', 'Blueprint'
    ],
    'Mobile Development': [
      'React Native', 'iOS', 'Android', 'Firebase', 'Redux', 'Native Modules'
    ],
    'Frontend': [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'
    ],
    'Backend': [
      'Node.js', 'NestJS', 'Python', 'RabbitMQ', 'REST APIs', 'GraphQL'
    ],
    'Database': [
      'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma'
    ],
    'Cloud & DevOps': [
      'AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'
    ]
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll className="text-center mb-16">
          <Badge className="mb-4 bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20">
            Technical Skills
          </Badge>
          <h2 className="mb-4">Tech Stack</h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Expertise across the full development stack
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <AnimateOnScroll key={category} delay={index * 0.1}>
              <motion.div 
                className="glass-card p-6 rounded-xl h-full"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="text-lg font-bold text-white mb-4 pb-2 border-b border-white/10">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-[#3B82F6]/30 transition-all cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
