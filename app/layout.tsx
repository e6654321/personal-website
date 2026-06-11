import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elram Espra - AI Platform Engineer',
  description: 'Personal portfolio of Elram Espra, an AI platform engineer and senior full-stack developer specializing in TypeScript, NestJS, Next.js, fintech, healthcare, and production mobile apps.',
  keywords: 'AI platform engineer, developer, portfolio, react native, nextjs, node.js, nestjs, typescript, mobile engineer, full-stack engineer',
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
