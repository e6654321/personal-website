export default function About() {
  return (
    <section id="about" className="section glass">
      <h2 className="section-title">About Me</h2>
      
      <div className="space-y-8 text-lg leading-relaxed">
        <p className="mb-6">
          I'm a <strong>Senior Full-Stack Software Engineer</strong> with 5+ years of experience building high-performance 
          web applications using React, Node.js, and TypeScript. I specialize in real-time, data-driven interfaces 
          and backend systems optimized for low latency and high throughput.
        </p>
        
        <p className="mb-6">
          Currently working at <strong>Symph</strong> (Philippines) as a remote developer, building production applications 
          that serve 10,000+ daily users. I'm passionate about creating elegant user experiences, optimizing performance, 
          and solving complex technical challenges.
        </p>
        
        <p className="mb-8">
          Beyond code, I'm interested in AI automation, home automation systems, and building tools that make life easier. 
          I believe in continuous learning and staying curious about new technologies and approaches.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a 
            href="mailto:enespra@gmail.com"
            className="glass px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            📧 Email
          </a>
          <a 
            href="https://github.com/e6654321"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            💻 GitHub
          </a>
          <a 
            href="https://linkedin.com/in/elram-espra/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
