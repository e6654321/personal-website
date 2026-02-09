export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Ram Elram</h1>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#resume" className="hover:text-blue-600">Resume</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Hi, I&apos;m Ram 👋</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Full-stack developer specializing in React Native, Next.js, and Node.js.
            Building products that matter.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
              View My Work
            </a>
            <a href="/resume.pdf" download className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block">
              Download Resume
            </a>
            <a href="#contact" className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 inline-block">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            I&apos;m a developer with experience building scalable applications using modern tech stacks.
            Currently working on React Native, Next.js, and Node.js projects.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            When I&apos;m not coding, you can find me playing badminton or tennis.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Projects</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Projects coming soon...
          </p>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Resume</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Experience</h4>
              <div className="mb-4">
                <p className="font-medium">Full-Stack Developer</p>
                <p className="text-slate-600 dark:text-slate-400">Current Role | 5+ years</p>
                <p className="text-slate-700 dark:text-slate-300 mt-2">
                  Specializing in React Native, Next.js, Node.js, and cloud services (Firebase, GCP, AWS)
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">React</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">React Native</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">Next.js</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">Node.js</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">TypeScript</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">NestJS</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">Firebase</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">GCP</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded">AWS</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded">Python</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded">PostgreSQL</span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded">MySQL</span>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                download 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Full Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/e6654321" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>© 2026 Ram Elram. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
