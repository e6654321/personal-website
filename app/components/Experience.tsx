const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  "Backend": ["Node.js", "NestJS", "Express", "PostgreSQL", "Redis"],
  "Performance": ["WebSockets", "Real-time optimization", "Code splitting", "Caching"],
  "Cloud & Tools": ["AWS", "GCP", "Docker", "Git", "CI/CD"]
}

export default function Experience() {
  return (
    <section id="experience" className="section glass">
      <h2 className="section-title">Experience & Skills</h2>
      
      {/* Experience */}
      <div className="mb-12">
        <div className="glass rounded-2xl p-8 mb-6 transition-all hover:-translate-y-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <h3 className="text-3xl font-bold gradient-text">Senior Full-Stack Developer</h3>
              <p className="text-xl font-semibold opacity-80">Symph</p>
            </div>
            <span className="text-lg font-semibold opacity-70 mt-2 md:mt-0">2019 - Present (5+ years)</span>
          </div>
          
          <ul className="space-y-3 opacity-90 list-disc list-inside">
            <li>Built production web applications handling <strong>10,000+ daily users</strong> with React, Node.js, and PostgreSQL</li>
            <li>Designed and implemented <strong>real-time features</strong> using WebSockets for multi-user collaboration</li>
            <li>Optimized frontend performance with code splitting and lazy loading, <strong>reducing load time by 40%</strong></li>
            <li>Developed low-latency RESTful APIs serving <strong>100,000+ requests/day</strong></li>
            <li>Led migration from JavaScript to TypeScript, <strong>reducing runtime errors by 35%</strong></li>
            <li>Mentored junior developers on React best practices and performance optimization</li>
          </ul>
        </div>
      </div>
      
      {/* Skills */}
      <div>
        <h3 className="text-3xl font-bold gradient-text mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="glass rounded-2xl p-6">
              <h4 className="text-xl font-bold gradient-text mb-4">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
