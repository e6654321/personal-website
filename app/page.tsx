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
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View My Work
            </button>
            <button className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900">
              Contact Me
            </button>
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
