'use client'

const techCategories = [
  {
    title: 'Mobile Development',
    icon: '📱',
    color: 'from-purple-600 to-pink-600',
    technologies: [
      { name: 'React Native', level: 'Expert' },
      { name: 'iOS/Android', level: 'Expert' },
      { name: 'Firebase', level: 'Expert' },
      { name: 'Sentry', level: 'Advanced' },
      { name: 'Fastlane', level: 'Intermediate' }
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-600 to-cyan-600',
    technologies: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Redux', level: 'Advanced' }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-green-600 to-teal-600',
    technologies: [
      { name: 'Node.js', level: 'Expert' },
      { name: 'NestJS', level: 'Expert' },
      { name: 'Python', level: 'Advanced' },
      { name: 'RabbitMQ', level: 'Advanced' },
      { name: 'WebSocket', level: 'Intermediate' }
    ]
  },
  {
    title: 'Blockchain/Web3',
    icon: '⛓️',
    color: 'from-indigo-600 to-purple-600',
    technologies: [
      { name: 'TON FunC', level: 'Advanced' },
      { name: 'Solidity', level: 'Intermediate' },
      { name: 'Web3 React', level: 'Advanced' },
      { name: 'Ethers.js', level: 'Advanced' },
      { name: 'Go-Ethereum', level: 'Intermediate' }
    ]
  },
  {
    title: 'Databases',
    icon: '💾',
    color: 'from-orange-600 to-red-600',
    technologies: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Firebase Firestore', level: 'Expert' },
      { name: 'Redis', level: 'Intermediate' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-cyan-600 to-blue-600',
    technologies: [
      { name: 'GCP', level: 'Advanced' },
      { name: 'AWS', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'CI/CD', level: 'Advanced' },
      { name: 'Vercel', level: 'Expert' }
    ]
  }
]

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="px-4 py-16 md:py-24 bg-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl md:text-6xl">🛠️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Full-stack expertise across mobile, web, blockchain, and cloud technologies
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              {/* Category Header */}
              <div className={`h-24 bg-gradient-to-r ${category.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative z-10 text-center">
                  <span className="text-4xl mb-2 block">{category.icon}</span>
                  <h3 className="text-white font-bold text-lg">{category.title}</h3>
                </div>
              </div>

              {/* Technologies List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.technologies.map((tech) => (
                    <li key={tech.name} className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        {tech.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium border ${
                        tech.level === 'Expert' 
                          ? 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                          : tech.level === 'Advanced'
                          ? 'bg-blue-500/15 text-blue-300 border-blue-500/25'
                          : 'bg-white/10 text-white/70 border-white/20'
                      }`}>
                        {tech.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Highlights */}
        <div className="mt-12 glass-card rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">6+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">3+</div>
              <div className="text-sm text-white/70">Years Blockchain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">2+</div>
              <div className="text-sm text-white/70">Years React Native</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">5</div>
              <div className="text-sm text-white/70">Mobile Apps Shipped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
