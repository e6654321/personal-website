'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Ram Elram</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#resume" className="hover:text-blue-600">Resume</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
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
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <a href="#about" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#resume" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Resume</a>
              <a href="#contact" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m Ram 👋</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8">
            Full-stack & blockchain developer with 5+ years building scalable web and mobile apps.
            Specialized in React Native, Next.js, and Web3.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-center">
              View My Work
            </a>
            <a href="#contact" className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 text-center">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p className="text-lg">
              I&apos;m a full-stack developer with a passion for building products that make a difference.
              Over the past 5+ years, I&apos;ve worked on everything from blockchain smart contracts to 
              large-scale web applications and mobile apps.
            </p>
            <p className="text-lg">
              Currently specializing in React, React Native, Next.js, and Node.js, with recent experience 
              in Web3 development (TON FunC, Solidity). I love tackling complex problems and shipping 
              features that users love.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you&apos;ll find me on the badminton or tennis court, or tinkering 
              with home automation projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* TokenTable */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">TokenTable</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Web3 equity management platform with smart contract vesting on TON blockchain.
                Led smart contract development and cross-team audits.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">TON FunC</span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Web3</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">AWS</span>
              </div>
              <a href="https://www.tokentable.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                View Live →
              </a>
            </div>

            {/* AI/ML Platform (NDA) */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">AI/ML Platform</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Enterprise AI platform integrating OpenAI API and LangChain for intelligent document processing
                and data visualization. Led POC development and architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">OpenAI API</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">LangChain</span>
                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">Firebase</span>
              </div>
            </div>

            {/* M Lhuillier */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">M Lhuillier Website</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Corporate website for one of the Philippines&apos; largest financial services companies.
                Led full development cycle including architecture and deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">11ty</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">JavaScript</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">Netlify</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">Contentful</span>
              </div>
              <a href="https://mlhuillier.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                View Live →
              </a>
            </div>

            {/* PAO Connect */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">PAO Connect</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Mobile app and admin web platform for the Philippine Academy of Ophthalmology.
                Led web development with cross-platform coordination.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Flutter</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">Firebase</span>
              </div>
              <a href="https://apps.apple.com/ph/app/pao-connect/id1536090108" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                View on App Store →
              </a>
            </div>

            {/* Mwell MPH */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">Mwell Healthcare Platform</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Healthcare management system built with Nx monorepo architecture. Full-stack development
                with Next.js frontend and NestJS backend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">NestJS</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">Nx</span>
                <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">MySQL</span>
              </div>
            </div>

            {/* Stanible */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">Stanible</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                React Native mobile app with blockchain integration. Led full-stack development
                including Ethereum smart contracts and cloud infrastructure.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React Native</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Go-Ethereum</span>
                <span className="text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">Firebase</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">GCloud</span>
              </div>
            </div>

            {/* Fiscal Admin */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">Fiscal Admin</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Task risk management system with i18n support. Built frontend and deployment pipeline
                on Google Cloud Platform.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">GCP</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">Material UI</span>
              </div>
            </div>

            {/* Castille Resources */}
            <div className="border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold mb-2">Castille Resources</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Real estate development platform with full-stack implementation. Built frontend and backend
                with modern React architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">GCP</span>
                <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">Ant Design</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          <div className="space-y-8">
            
            {/* EthSign */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold">Full-Stack & Blockchain Developer</h4>
                  <p className="text-blue-600">EthSign</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-right">2022 - Present</p>
              </div>
              <ul className="text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                <li>Led smart contract development for TokenTable on TON blockchain</li>
                <li>Built full-stack Web3 applications with React, TypeScript, and AWS</li>
                <li>Cross-team audit coordination and security reviews</li>
                <li>Integrated PDFTron for document signing workflows</li>
              </ul>
            </div>

            {/* Symph */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold">Full-Stack Developer</h4>
                  <p className="text-blue-600">Symph</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-right">2020 - Present</p>
              </div>
              <ul className="text-slate-700 dark:text-slate-300 space-y-2 list-disc list-inside">
                <li>Led development of multiple large-scale web applications</li>
                <li>Built AI/ML platforms with OpenAI API and LangChain integration</li>
                <li>Developed React Native mobile apps with Firebase backend</li>
                <li>Architected and deployed solutions on GCP and AWS</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            {/* Skills */}
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium mb-2 text-slate-700 dark:text-slate-300">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">React</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">React Native</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">Next.js</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm">TypeScript</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-slate-700 dark:text-slate-300">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">Node.js</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">NestJS</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">Python</span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-sm">PostgreSQL</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-slate-700 dark:text-slate-300">Blockchain</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-sm">TON FunC</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-sm">Solidity</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-sm">Web3</span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-sm">Ethers.js</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2 text-slate-700 dark:text-slate-300">Cloud & DevOps</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded text-sm">AWS</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded text-sm">GCP</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded text-sm">Firebase</span>
                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded text-sm">Netlify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">
            Interested in working together? Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/e6654321" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/elram-espra/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="mailto:enespra@gmail.com" className="text-blue-600 hover:underline">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Ram Elram. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </main>
  );
}
