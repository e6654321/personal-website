'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import AnimateOnScroll from './AnimateOnScroll'

const contactMethods = [
  {
    icon: '📧',
    title: 'Email',
    value: 'enespra@gmail.com',
    link: 'mailto:enespra@gmail.com',
    description: 'Best for formal inquiries'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/elram-espra',
    link: 'https://linkedin.com/in/elram-espra',
    description: 'Professional networking'
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: 'github.com/e6654321',
    link: 'https://github.com/e6654321',
    description: 'View my code'
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Cebu City, Philippines',
    link: null,
    description: 'UTC+8 timezone'
  }
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Available for freelance projects and full-time opportunities
          </p>
          <p className="text-lg text-blue-400 mt-2">
            Available immediately
          </p>
        </AnimateOnScroll>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="glass-card group h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="text-5xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {method.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{method.description}</p>
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-400 hover:text-blue-300 transition-colors break-all text-sm"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm">{method.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={0.2}>
          <motion.div 
            className="text-center glass-card p-12"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Let&apos;s Build Something Amazing
            </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Best fit: senior TypeScript, NestJS, Next.js, and React Native roles for remote-first teams building fintech, healthcare, or product platforms.
          </p>
            <motion.a
              href="mailto:enespra@gmail.com"
              className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Me a Message
            </motion.a>
          </motion.div>
        </AnimateOnScroll>

        {/* Footer */}
        <AnimateOnScroll delay={0.3} className="text-center mt-16 text-gray-500">
          <p>© 2026 Elram Espra. Built with Next.js & Tailwind CSS.</p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
