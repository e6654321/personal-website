'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Ram Elram
            </motion.h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-4 pb-4 space-y-2"
            >
              <a href="#about" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#experience" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#contact" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Ram</span> 👋
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
              Full-Stack Developer | React Native • Next.js • Node.js • TypeScript
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl">
              I help teams ship faster with clean, maintainable code and scalable architectures. 
              Experienced in <span className="text-blue-600 font-semibold">AI/ML platforms</span>, <span className="text-purple-600 font-semibold">blockchain</span>, 
              fintech, and cloud infrastructure (AWS, GCP, Firebase).
            </p>
            <p className="text-md text-slate-500 dark:text-slate-500 mb-8">
              🌏 Available for remote work — especially Australia & international teams
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="#projects" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all text-center font-semibold"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border-2 border-slate-300 dark:border-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-blue-600 transition-all text-center font-semibold"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Built', value: '20+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Happy Clients', value: '10+' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="text-center p-6 rounded-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold mb-12 text-center">
              About Me
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-blue-600">The Developer Side 💻</h4>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  I&apos;ve been building full-stack applications for over 5 years, specializing in creating 
                  seamless experiences across web, mobile, and blockchain platforms. My approach? Clean, 
                  maintainable code that scales, coupled with a deep understanding of user needs.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  From <span className="font-semibold text-purple-600">blockchain smart contracts</span> to 
                  <span className="font-semibold text-blue-600"> AI-powered platforms</span>, I love tackling 
                  complex technical challenges and turning them into elegant solutions.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-purple-600">Recent Highlights 🚀</h4>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🔗</span>
                    <span><strong>Blockchain Development:</strong> Led smart contract development for TokenTable on TON blockchain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🤖</span>
                    <span><strong>AI/ML Platforms:</strong> Built enterprise AI platforms with OpenAI API and LangChain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">📱</span>
                    <span><strong>Mobile Apps:</strong> Developed React Native apps for healthcare and finance sectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">☁️</span>
                    <span><strong>Cloud Architecture:</strong> Deployed scalable solutions on AWS, GCP, and Firebase</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 border border-blue-200 dark:border-slate-700">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="text-2xl mr-2">🎾</span>
                <strong>Beyond the Code:</strong> When I&apos;m not debugging or architecting solutions, you&apos;ll 
                find me on the court — whether it&apos;s badminton, tennis, or pickleball. The strategic thinking 
                and quick decision-making in sports translates surprisingly well to solving complex technical challenges!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-4 text-center">Featured Projects</h3>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              From blockchain smart contracts to AI-powered platforms, here&apos;s a selection of projects I&apos;ve built
            </p>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              
              {/* TokenTable */}
              <motion.div 
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold">TokenTable</h4>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold">Blockchain</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    Web3 equity management platform with smart contract vesting on TON blockchain.
                    Led smart contract development and cross-team audits.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">TypeScript</span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">TON FunC</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">AWS</span>
                  </div>
                  <a href="https://www.tokentable.xyz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors">
                    View Live <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>

              {/* AI/ML Platform */}
              <motion.div 
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-600/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold">AI/ML Platform</h4>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">AI</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    Enterprise AI platform integrating OpenAI API and LangChain for intelligent document processing
                    and data visualization. Led POC development.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">OpenAI</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">LangChain</span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-sm">Enterprise Project</span>
                </div>
              </motion.div>

              {/* M Lhuillier */}
              <motion.div 
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold">M Lhuillier</h4>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold">Fintech</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    Corporate website for one of the Philippines&apos; largest financial services companies.
                    Led full development cycle including architecture.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded">11ty</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">Netlify</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">Contentful</span>
                  </div>
                  <a href="https://mlhuillier.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors">
                    View Live <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>

              {/* PAO Connect */}
              <motion.div 
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-600/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold">PAO Connect</h4>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-semibold">Healthcare</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    Mobile app and admin web platform for the Philippine Academy of Ophthalmology.
                    Led web development with cross-platform coordination.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">React</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Flutter</span>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Firebase</span>
                  </div>
                  <a href="https://apps.apple.com/ph/app/pao-connect/id1536090108" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors">
                    View on App Store <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>

              {/* Mwell MPH */}
              <motion.div 
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-600/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold">Mwell Healthcare</h4>
                    <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-semibold">Healthcare</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    Healthcare management system built with Nx monorepo architecture. Full-stack development
                    with Next.js frontend and NestJS backend.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Next.js</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">NestJS</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">Nx</span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-sm">Enterprise Project</span>
                </div>
              </motion.div>

              {/* Stanible */}
              <motion.div 
                variants={fadeInUp}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold">Stanible</h4>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-semibold">Web3</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    React Native mobile app with blockchain integration. Led full-stack development
                    including Ethereum smart contracts and cloud infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">React Native</span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Ethereum</span>
                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded">Firebase</span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-500 text-sm">Mobile App</span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-12 text-center">Experience</h3>
            <div className="space-y-8 max-w-4xl mx-auto">
              
              {/* EthSign */}
              <motion.div 
                className="relative pl-8 border-l-4 border-blue-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h4 className="text-2xl font-semibold">Full-Stack & Blockchain Developer</h4>
                      <p className="text-blue-600 font-medium">EthSign</p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-right mt-1">2022 - Present</p>
                  </div>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                    <li>Led smart contract development for TokenTable on TON blockchain</li>
                    <li>Built full-stack Web3 applications with React, TypeScript, and AWS</li>
                    <li>Cross-team audit coordination and security reviews</li>
                    <li>Integrated PDFTron for document signing workflows</li>
                  </ul>
                </div>
              </motion.div>

              {/* Symph */}
              <motion.div 
                className="relative pl-8 border-l-4 border-purple-600"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-white dark:border-slate-900"></div>
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <h4 className="text-2xl font-semibold">Full-Stack Developer</h4>
                      <p className="text-purple-600 font-medium">Symph</p>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-right mt-1">2020 - Present</p>
                  </div>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                    <li>Led development of multiple large-scale web applications</li>
                    <li>Built AI/ML platforms with OpenAI API and LangChain integration</li>
                    <li>Developed React Native mobile apps with Firebase backend</li>
                    <li>Architected and deployed solutions on GCP and AWS</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </motion.div>

            </div>

            {/* Skills */}
            <div className="mt-16">
              <h4 className="text-3xl font-semibold mb-8 text-center">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Frontend', skills: ['React', 'React Native', 'Next.js', 'TypeScript'], color: 'blue' },
                  { title: 'Backend', skills: ['Node.js', 'NestJS', 'Python', 'PostgreSQL'], color: 'green' },
                  { title: 'Blockchain', skills: ['TON FunC', 'Solidity', 'Web3', 'Ethers.js'], color: 'purple' },
                  { title: 'Cloud & DevOps', skills: ['AWS', 'GCP', 'Firebase', 'Docker'], color: 'slate' }
                ].map((category, i) => (
                  <motion.div 
                    key={i}
                    className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  >
                    <p className={`font-semibold mb-3 text-lg text-${category.color}-600`}>{category.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <span 
                          key={j} 
                          className={`bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-700 dark:text-${category.color}-300 px-3 py-1 rounded-full text-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Interested in collaborating or have a project in mind? I&apos;m always open to discussing 
              new opportunities, creative ideas, or partnerships.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a 
                href="https://github.com/e6654321" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/elram-espra/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a 
                href="mailto:enespra@gmail.com" 
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Me
              </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              📍 Based in Philippines • 🌏 Open to Remote Work Worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Ram Elram. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <p className="text-sm mt-2">Crafted with ❤️ and ☕</p>
        </div>
      </footer>
    </main>
  );
}
