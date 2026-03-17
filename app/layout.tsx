import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Elram Espra | Full Stack Developer',
  description: 'Full Stack Developer & Product Builder. Crafting scalable web applications and AI-powered solutions. Specializing in React, Node.js, and cloud infrastructure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
