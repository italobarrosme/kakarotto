import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import { NavigationTemplate } from '@/modules/Navigation'
import { FooterTemplate } from '@/modules/Footer'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Coqueiro Digital',
  description: 'Coqueiro digital site - Criação de sites e aplicativos',
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-secondary-dark text-sm text-neutral-white md:text-base">
        <NavigationTemplate />
        <main className="min-h-[calc(100vh_-_60px)]">{children}</main>
        <FooterTemplate />
      </body>
    </html>
  )
}
