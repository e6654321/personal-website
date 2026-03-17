'use client'

interface BrowserWindow {
  title: string
  url: string
  screenshot: string
}

const projects: BrowserWindow[] = [
  { title: 'TokenTable', url: 'tokentable.xyz', screenshot: '/web/tokentable.png' },
  { title: 'EthSign', url: 'ethsign.xyz', screenshot: '/web/ethsign.png' },
  { title: 'ML Shop', url: 'mlhuillier.com/shop', screenshot: '/web/mlshop.png' },
]

export default function BrowserCascade() {
  return (
    <div className="relative w-full h-[700px] bg-black rounded-2xl flex items-center justify-center perspective-[1500px] overflow-hidden">
      {/* Browser windows stacked in 3D */}
      <div className="relative w-full h-full flex items-center justify-center">
        {projects.map((project, index) => {
          // Calculate 3D positioning for cascade effect
          const rotateY = 15 - index * 8
          const rotateX = -5 + index * 2
          const translateZ = -index * 100
          const translateX = -100 + index * 120
          const translateY = -80 + index * 100
          const scale = 1 - index * 0.05
          const zIndex = 3 - index
          
          return (
            <div
              key={project.title}
              className="absolute"
              style={{
                transform: `
                  translateX(${translateX}px) 
                  translateY(${translateY}px) 
                  translateZ(${translateZ}px) 
                  rotateY(${rotateY}deg) 
                  rotateX(${rotateX}deg)
                  scale(${scale})
                `,
                transformStyle: 'preserve-3d',
                zIndex,
              }}
            >
              {/* Chrome Browser Window */}
              <div className="w-[900px] bg-white rounded-t-xl shadow-2xl">
                {/* Browser Chrome (top bar) */}
                <div className="bg-[#DEE1E6] rounded-t-xl px-4 py-2 border-b border-gray-300">
                  {/* Traffic lights + Tab */}
                  <div className="flex items-center gap-2 mb-2">
                    {/* macOS window controls */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    
                    {/* Active tab */}
                    <div className="ml-4 bg-white px-4 py-1 rounded-t-lg text-sm text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
                      </svg>
                      {project.title}
                    </div>
                  </div>
                  
                  {/* Address bar */}
                  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 text-sm">
                    {/* Navigation buttons */}
                    <div className="flex gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <svg className="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    
                    {/* URL */}
                    <div className="flex-1 flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span className="text-gray-600">{project.url}</span>
                    </div>
                    
                    {/* Extension icons */}
                    <div className="flex gap-1">
                      <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                      <div className="w-5 h-5 bg-gray-300 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* Website content area */}
                <div className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">{project.title}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
