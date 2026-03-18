import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ram Elram - Full Stack Developer',
  description: 'Personal portfolio of Ram Elram, a full-stack developer specializing in React Native, Node.js, and modern web technologies.',
  keywords: 'developer, portfolio, react native, nextjs, node.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  )
}

