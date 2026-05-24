import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elram Espra - Senior Full-Stack & React Native Engineer',
  description: 'Personal portfolio of Elram Espra, a senior full-stack and React Native engineer specializing in TypeScript, NestJS, Next.js, fintech, healthcare, and production mobile apps.',
  keywords: 'developer, portfolio, react native, nextjs, node.js, nestjs, typescript, mobile engineer, full-stack engineer',
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
