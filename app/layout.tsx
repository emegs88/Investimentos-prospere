import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prospere - Parceria & Oportunidade',
  description: 'Ecossistema de crescimento inteligente com Emerson da Prospere',
  openGraph: {
    title: 'Prospere - Parceria & Oportunidade',
    description: 'Ecossistema de crescimento inteligente com Emerson da Prospere',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
