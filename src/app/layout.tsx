import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'The Table — Curated Conversations. Exclusive Access.',
  description:
    'The Table is an invite-only dinner series for industry leaders, innovators, and tastemakers. Exclusive gatherings across major cities.',
  openGraph: {
    title: 'The Table (by BB)',
    description: 'A private room for exceptional individuals.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
