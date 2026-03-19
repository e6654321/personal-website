import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elram Espra - Full-Stack & Blockchain Developer',
  description: 'Personal portfolio of Elram Espra, a senior full-stack and blockchain developer specializing in React Native, Solidity, and modern web technologies.',
  keywords: 'developer, portfolio, react native, nextjs, node.js, blockchain, solidity, web3',
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

