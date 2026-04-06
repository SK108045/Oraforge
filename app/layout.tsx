import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OraforgeTechnologies | Innovative Technology Solutions',
  description: 'OraforgeTechnologies specializes in custom software, mobile and web development, AI, and digital transformation, delivering innovative IT solutions.',
  keywords: 'Custom software, software development, IT services, digital transformation, AI solutions',
  openGraph: {
    title: 'OraforgeTechnologies | Innovative Technology Solutions',
    description: 'OraforgeTechnologies specializes in technology solutions, creating software that drives innovation and success for businesses worldwide.',
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
