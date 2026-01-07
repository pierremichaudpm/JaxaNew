import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'JAXA Production',
  description: 'Nous créons des expériences immersives où culture, humain et créativité rayonnent.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
