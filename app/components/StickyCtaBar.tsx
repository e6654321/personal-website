'use client'

import { useEffect, useRef } from 'react'

export default function StickyCtaBar() {
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroSection = document.getElementById('hero')
    if (!heroSection || !ctaRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (ctaRef.current) {
          if (!entry.isIntersecting) {
            ctaRef.current.classList.add('show')
          } else {
            ctaRef.current.classList.remove('show')
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ctaRef} className="sticky-cta">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-900 dark:text-gray-100 font-semibold text-center sm:text-left">
          Interested in working together?
        </p>
        <div className="flex gap-3 w-full sm:w-auto">
          <a href="#blockchain" className="flex-1 sm:flex-none btn-secondary px-6 py-3 rounded-lg">
            View Work
          </a>
          <a href="mailto:enespra@gmail.com" className="flex-1 sm:flex-none btn-primary px-6 py-3 rounded-lg">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
