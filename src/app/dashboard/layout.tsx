import '@/styles/globals.scss'
import '@/styles/main.scss'

import { ReactNode } from 'react'
import { Metadata } from 'next'
type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Orangescreen site',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function DashboardLayout({ children }: Props) {
  return <main className="min-h-screen px-8 pt-24">{children}</main>
}
