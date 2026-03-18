'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState<'professional' | 'other'>('professional');

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

  // Professional projects from employment
  const professionalProjects = [
    {
      title: 'AI/ML Platform',
      company: 'Symph',
      category: 'AI',
      categoryColor: 'green',
      description: 'Enterprise AI platform integrating OpenAI API and LangChain for intelligent document processing and data visualization. Led POC development.',
      tags: ['React', 'OpenAI', 'LangChain', 'Python'],
      linkType: 'enterprise'
    },
    {
      title: 'M Lhuillier',
      company: 'Symph',
      category: 'Fintech',
      categoryColor: 'blue',
      description: 'Corporate website for one of the Philippines\' largest financial services companies. Led full development cycle including architecture.',
      tags: ['11ty', 'Netlify', 'Contentful', 'JavaScript'],
      link: 'https://mlhuillier.com/',
      linkType: 'live'
    },
    {
      title: 'PAO Connect',
      company: 'Symph',
      category: 'Healthcare',
      categoryColor: 'orange',
      description: 'Mobile app and admin web platform for the Philippine Academy of Ophthalmology. Led web development with cross-platform coordination.',
      tags: ['React', 'Flutter', 'Firebase', 'TypeScript'],
      link: 'https://apps.apple.com/ph/app/pao-connect/id1536090108',
      linkType: 'live'
    },
    {
      title: 'Mwell Healthcare',
      company: 'Symph',
      category: 'Healthcare',
      categoryColor: 'teal',
      description: 'Healthcare management system built with Nx monorepo architecture. Full-stack development with Next.js frontend and NestJS backend.',
      tags: ['Next.js', 'NestJS', 'Nx', 'PostgreSQL'],
      linkType: 'enterprise'
    },
    {
      title: 'Stanible',
      company: 'Symph',
      category: 'Web3',
      categoryColor: 'purple',
      description: 'React Native mobile app with blockchain integration. Led full-stack development including Ethereum smart contracts and cloud infrastructure.',
      tags: ['React Native', 'Ethereum', 'Firebase', 'Solidity'],
      linkType: 'mobile'
    },
    {
      title: 'TokenTable',
      company: 'EthSign',
      category: 'Blockchain',
      categoryColor: 'purple',
      description: 'Web3 equity management platform with smart contract vesting on TON blockchain. Led smart contract development and cross-team audits.',
      tags: ['React', 'TypeScript', 'TON FunC', 'AWS'],
      link: 'https://www.tokentable.xyz/',
      linkType: 'live'
    }
  ];

  // Student & Personal projects
  const otherProjects = [
    {
      title: 'Personal Portfolio Website',
      category: 'Personal',
      categoryColor: 'blue',
      description: 'Modern developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features project categorization, responsive design, and smooth animations.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://github.com/e6654321/personal-website',
      linkType: 'live'
    },
    {
      title: 'TutorMe',
      category: 'University',
      categoryColor: 'green',
      description: 'Online tutoring platform built for CSIT321 course project. Features real-time scheduling, student-tutor matching, and session management.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://github.com/e6654321/TutorMe',
      linkType: 'live'
    },
    {
      title: 'Programming Language Interpreter',
      category: 'Student',
      categoryColor: 'purple',
      description: 'Custom interpreter for Perly-Shell programming language. Built from scratch with lexical analysis, parsing, and runtime execution.',
      tags: ['TypeScript', 'Compiler Design', 'Interpreter'],
      link: 'https://github.com/e6654321/proglang-perly-shell',
      linkType: 'live'
    },
    {
      title: 'Hopfield Neural Network',
      category: 'Student',
      categoryColor: 'orange',
      description: 'Implementation of Hopfield Neural Network for pattern recognition. Demonstrates associative memory and energy minimization concepts.',
      tags: ['C#', 'Neural Networks', 'AI'],
      link: 'https://github.com/e6654321/IS2Hopfield',
      linkType: 'live'
    },
    {
      title: 'Friendly Chat',
      category: 'Learning',
      categoryColor: 'teal',
      description: 'Firebase-powered real-time chat application. Extended the official Firebase tutorial with custom features and UI enhancements.',
      tags: ['JavaScript', 'Firebase', 'Real-time'],
      link: 'https://github.com/e6654321/Friendly-Chat',
      linkType: 'live'
    },
    {
      title: 'TON Wallet Generator',
      category: 'Personal',
      categoryColor: 'purple',
      description: 'TypeScript utility for generating TON blockchain wallets. Features secure key generation and wallet management for development.',
      tags: ['TypeScript', 'TON', 'Blockchain', 'CLI'],
      link: 'https://github.com/e6654321/tvm-wallet-generator',
      linkType: 'live'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                RE
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ram Elram Espra
              </h1>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="#professional" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Work</a>
              <a href="#experience" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Experience</a>
              <a 
                href="#contact" 
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all font-medium"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden mt-6 pb-4 space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4"
            >
              <a href="#about" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#professional" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Work</a>
              <a href="#experience" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Experience</a>
              <a href="#contact" className="block py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            {/* Animated badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 dark:border-purple-600/20 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Building digital
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer specializing in{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">blockchain</span>,{' '}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">AI platforms</span>, and{' '}
              <span className="text-pink-600 dark:text-pink-400 font-semibold">scalable web applications</span>
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-500 mb-10">
              React · React Native · Next.js · TypeScript · Node.js · Blockchain
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="#professional" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all text-lg font-semibold flex items-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all text-lg font-semibold"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              className="mt-20 flex flex-col items-center gap-2 text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.svg 
                className="w-6 h-6"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Refined */}
      <section id="about" className="py-28 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                About Me
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Passionate developer with 5+ years building production-ready applications across web, mobile, and blockchain
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Left column */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl">
                    💻
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Full-Stack Expertise</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Specialized in building scalable applications with React, TypeScript, Node.js, and modern cloud infrastructure. 
                      From concept to deployment, I handle the entire development lifecycle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl">
                    🔗
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Blockchain Development</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Led smart contract development on TON blockchain for TokenTable&apos;s equity management platform. 
                      Experience with Solidity, Web3 integration, and decentralized application architecture.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right column */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white text-2xl">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400">AI/ML Platforms</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Built enterprise AI platforms integrating OpenAI API and LangChain for intelligent document processing. 
                      Experience with prompt engineering, vector databases, and RAG architecture.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white text-2xl">
                    📱
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Mobile Development</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Developed React Native applications for healthcare and fintech sectors. 
                      Proficient in building cross-platform mobile apps with Firebase, GraphQL, and native integrations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Delivered' },
                { value: '15+', label: 'Technologies' },
                { value: '2', label: 'Companies' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700"
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Professional Projects Section - NEW CATEGORIZATION */}
      <section id="professional" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">Projects</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12">
                From blockchain smart contracts to AI platforms, here&apos;s my work across different domains
              </p>

              {/* Tab Switcher */}
              <div className="inline-flex gap-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                <button
                  onClick={() => setActiveProjectTab('professional')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    activeProjectTab === 'professional'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  Professional Work
                </button>
                <button
                  onClick={() => setActiveProjectTab('other')}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${
                    activeProjectTab === 'other'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  Other Projects
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div 
              key={activeProjectTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeProjectTab === 'professional' ? professionalProjects : otherProjects).map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Timeline */}
      <section id="experience" className="py-28 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6">Experience</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Building impactful solutions across industries
              </p>
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              {/* Symph */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
                <div className="ml-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 border-4 border-white dark:border-slate-900 shadow-lg"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Full-Stack Developer</h3>
                      <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold">Symph</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mt-2 sm:mt-0">
                      2020 - Present
                    </span>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">▸</span>
                      <span>Led development of multiple large-scale web applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 mt-1">▸</span>
                      <span>Built AI/ML platforms with OpenAI API and LangChain integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">▸</span>
                      <span>Developed React Native mobile apps with Firebase backend</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 mt-1">▸</span>
                      <span>Architected and deployed solutions on GCP and AWS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">▸</span>
                      <span>Mentored junior developers and conducted code reviews</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* EthSign */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
                <div className="ml-12 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-white dark:border-slate-900 shadow-lg"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Full-Stack & Blockchain Developer</h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">EthSign</p>
                    </div>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold mt-2 sm:mt-0">
                      2022 - 2025
                    </span>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Led smart contract development for TokenTable on TON blockchain</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">▸</span>
                      <span>Built full-stack Web3 applications with React, TypeScript, and AWS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">▸</span>
                      <span>Cross-team audit coordination and security reviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 mt-1">▸</span>
                      <span>Integrated PDFTron for document signing workflows</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="mt-24">
              <h3 className="text-4xl font-bold mb-12 text-center">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    title: 'Frontend', 
                    icon: '🎨',
                    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'], 
                    gradient: 'from-blue-600 to-cyan-600' 
                  },
                  { 
                    title: 'Backend', 
                    icon: '⚙️',
                    skills: ['Node.js', 'NestJS', 'Python', 'PostgreSQL'], 
                    gradient: 'from-green-600 to-teal-600' 
                  },
                  { 
                    title: 'Blockchain', 
                    icon: '🔗',
                    skills: ['TON FunC', 'Solidity', 'Web3', 'Smart Contracts'], 
                    gradient: 'from-purple-600 to-pink-600' 
                  },
                  { 
                    title: 'Cloud & DevOps', 
                    icon: '☁️',
                    skills: ['AWS', 'GCP', 'Firebase', 'Docker'], 
                    gradient: 'from-orange-600 to-red-600' 
                  }
                ].map((category, i) => (
                  <motion.div 
                    key={i}
                    className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ 
                      y: -8, 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      scale: 1.02
                    }}
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h4 className={`font-bold mb-4 text-xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.title}
                    </h4>
                    <div className="space-y-2">
                      {category.skills.map((skill, j) => (
                        <div 
                          key={j} 
                          className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2"
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-28 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl shadow-2xl"
            >
              ✉️
            </motion.div>
            <h2 className="text-5xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Interested in collaboration, have a project in mind, or just want to chat about tech? 
              I&apos;m always open to new opportunities and conversations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="mailto:enespra@gmail.com" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all text-lg font-semibold inline-flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://github.com/e6654321" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="font-semibold">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/elram-espra/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 group"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>

            <p className="mt-12 text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <span>📍 Cebu City, Philippines</span>
              <span>•</span>
              <span>🌏 Open to Remote Work</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                RE
              </div>
              <div>
                <p className="text-slate-700 dark:text-slate-300 font-semibold">Ram Elram Espra</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Full-Stack Developer</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-600 dark:text-slate-400">
                © 2026 All rights reserved
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
    green: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', border: 'border-green-200 dark:border-green-800' },
    blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800' },
    teal: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-700 dark:text-teal-300', border: 'border-teal-200 dark:border-teal-800' },
    slate: { bg: 'bg-slate-100 dark:bg-slate-700', text: 'text-slate-700 dark:text-slate-300', border: 'border-slate-200 dark:border-slate-600' }
  };

  const colors = categoryColors[project.categoryColor] || categoryColors.blue;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group h-full"
    >
      <motion.div 
        className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all relative overflow-hidden flex flex-col"
        whileHover={{ 
          y: -8, 
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          scale: 1.02
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Gradient background on hover */}
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${colors.bg} opacity-30 rounded-bl-full transform translate-x-20 -translate-y-20 group-hover:translate-x-16 group-hover:-translate-y-16 transition-transform`}></div>
        
        <div className="relative flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              {project.company && (
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{project.company}</p>
              )}
            </div>
            <span className={`flex-shrink-0 px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold ${colors.border} border`}>
              {project.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string, i: number) => (
              <span 
                key={i} 
                className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link/Status */}
          {project.linkType === 'live' && project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 dark:text-blue-400 dark:hover:text-purple-400 font-semibold transition-colors group/link"
            >
              View Live
              <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          )}
          {project.linkType === 'enterprise' && (
            <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Enterprise Project
            </span>
          )}
          {project.linkType === 'mobile' && (
            <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile App
            </span>
          )}
          {project.linkType === 'placeholder' && (
            <span className="text-slate-400 dark:text-slate-500 font-medium italic">
              Coming soon...
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

