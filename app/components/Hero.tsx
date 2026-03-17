'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24">
      <div className="max-w-4xl w-full">
        <div className="glass-hero rounded-3xl p-8 md:p-12 text-center">
          {/* Profile Image */}
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/portfolio-hero.png"
                alt="Elram Espra"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Elram Espra
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in delay-100">
            Senior Full-Stack Developer | Mobile Engineer | Blockchain Developer
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-6 animate-fade-in delay-150">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30">
              6+ Years Experience
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30">
              3 Years Blockchain
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30">
              5 Mobile Apps Shipped
            </span>
          </div>

          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            Building production blockchain platforms, mobile apps, and full-stack web applications.
            <br className="hidden md:inline" />
            Specializing in React Native, Web3, and cloud-native architectures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <a href="#blockchain" className="btn-primary px-8 py-4 rounded-xl text-lg">
              View My Work
            </a>
            <a href="mailto:enespra@gmail.com" className="btn-secondary px-8 py-4 rounded-xl text-lg">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 justify-center animate-fade-in delay-400">
            <a
              href="https://github.com/e6654321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/elram-espra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:enespra@gmail.com"
              className="text-white/80 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
