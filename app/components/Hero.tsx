'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: '6+ Years', sub: 'Experience' },
  { label: '6 Apps', sub: 'React Native' },
  { label: 'NestJS', sub: 'Microservices' },
  { label: 'Fintech', sub: 'Healthcare' },
]

export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 relative overflow-hidden">
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Available badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10"
          style={{
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.25)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
            Elram Espra
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-snug">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Platform Engineer
            </span>
            {' & '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Senior Full-Stack Developer
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Building AI-assisted TypeScript platforms with Next.js and NestJS, shipping
          React Native apps, and delivering fintech and healthcare products.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="#mobile-apps"
            className="px-8 py-4 rounded-full text-white font-semibold text-base flex items-center gap-2 transition-shadow hover:shadow-2xl hover:shadow-blue-500/30"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-base text-slate-300 transition-colors hover:text-white hover:border-blue-500/50"
            style={{
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.04)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center py-4 px-3 rounded-2xl cursor-default transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1 hover:bg-blue-500/10 hover:border-blue-500/30"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            >
              <span className="text-xl font-bold text-white">{stat.label}</span>
              <span className="text-xs text-slate-500 mt-1">{stat.sub}</span>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div 
            className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}
