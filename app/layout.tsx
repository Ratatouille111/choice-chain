import type { Metadata } from 'next'
import { Nunito, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito"
});

const fredoka = Fredoka({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka"
});

export const metadata: Metadata = {
  title: 'Choice Chain | The Big Decision Game for Kids!',
  description: 'An fun and educational decision-making game where kids explore big questions, earn stars, and learn to think like scientists and philosophers!',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="font-sans antialiased bg-[#1a1a3e]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
