import '@/styles/globals.scss'
import '@/styles/main.scss'

import { ReactNode } from 'react'
import { NextAuthProvider } from '@/providers/auth'
import { Metadata, Viewport } from 'next'
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
}

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className=" bg-brand-dark text-sm text-brand-light md:text-base">
        <NextAuthProvider>
          <ToastProvider>
            <NavigationTemplate />
            <main>{children}</main>
            <FooterTemplate />
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
