import '@/styles/globals.scss'
import '@/styles/main.scss'

import { ReactNode } from 'react'
import { NextAuthProvider } from '@/providers/auth'
import { Metadata } from 'next'
import { ToastProvider } from '@/providers/toast'
import { NavigationTemplate } from '@/modules/Navigation'
import { FooterTemplate } from '@/modules/Footer'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Orangescreen',
  description: 'Orangescreen site',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <ToastProvider>
            <NavigationTemplate />
            <main className="min-h-screen">{children}</main>
          </ToastProvider>
        </NextAuthProvider>
        <FooterTemplate />
      </body>
    </html>
  )
}
