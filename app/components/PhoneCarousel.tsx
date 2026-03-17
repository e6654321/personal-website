'use client'

import Image from 'next/image'

interface PhoneApp {
  name: string
  screenshot: string
  color: 'rose-gold' | 'space-gray' | 'silver'
}

const apps: PhoneApp[] = [
  { name: 'RentCircle', screenshot: '/apps/rentcircle.png', color: 'space-gray' },
  { name: 'MCash', screenshot: '/apps/mcash.png', color: 'silver' },
  { name: 'Ray Media', screenshot: '/apps/ray-media.png', color: 'rose-gold' }, // Center
  { name: 'mWell', screenshot: '/apps/mwell.png', color: 'space-gray' },
  { name: 'Kindred', screenshot: '/apps/kindred.png', color: 'silver' },
]

export default function PhoneCarousel() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-[2000px]">
      {/* Phone frames in 3D carousel */}
      <div className="relative flex items-center justify-center gap-4">
        {apps.map((app, index) => {
          // Calculate position and rotation for 3D fan effect
          const centerIndex = 2 // Ray Media is center
          const offset = index - centerIndex
          const rotation = offset * 15 // 15° rotation per position
          const scale = index === centerIndex ? 1 : 0.85 - Math.abs(offset) * 0.1
          const zIndex = 5 - Math.abs(offset)
          const translateX = offset * 180 // Spacing between phones
          
          return (
            <div
              key={app.name}
              className="absolute"
              style={{
                transform: `translateX(${translateX}px) rotateY(${rotation}deg) scale(${scale})`,
                transformStyle: 'preserve-3d',
                zIndex,
              }}
            >
              {/* iPhone Frame */}
              <div className={`
                relative w-[280px] h-[560px] rounded-[45px] p-3
                ${app.color === 'rose-gold' ? 'bg-gradient-to-br from-[#E8C4B8] to-[#D4A792]' : 
                  app.color === 'space-gray' ? 'bg-gradient-to-br from-[#3A3A3C] to-[#1C1C1E]' :
                  'bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0]'}
                shadow-2xl
              `}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[28px] bg-black rounded-b-[20px] z-10" />
                
                {/* Screen */}
                <div className="relative w-full h-full bg-black rounded-[38px] overflow-hidden">
                  {/* App Screenshot Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{app.name}</span>
                  </div>
                </div>

                {/* Drop Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 blur-xl rounded-full" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
