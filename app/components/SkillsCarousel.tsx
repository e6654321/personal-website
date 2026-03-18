'use client'

export default function SkillsCarousel() {
  const skills = [
    'Blockchain projects & smart contracts',
    'TokenTable contracts',
    'Crypto apps & DeFi platforms',
    'Mobile development (React Native)',
    'Full-stack web applications',
    'Cloud-native architectures',
  ]

  return (
    <section 
      id="skills"
      className="w-full py-5 relative"
      style={{ 
        background: '#1A2332'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Skills text items */}
          <div className="flex items-center gap-12 overflow-x-auto scrollbar-hide flex-1">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="text-white/90 text-sm font-medium whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="hidden lg:flex items-center gap-2 ml-8">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
