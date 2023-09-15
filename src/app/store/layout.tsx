import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store simulation',
  description: 'Store simulation',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
  themeColor: '#000',
}

export default function SandboxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="min-h-screen px-8 pt-24">{children}</section>
}
