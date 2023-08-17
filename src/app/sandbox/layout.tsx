import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SandBox 3d',
  description: 'SandBox 3d',
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
  return <>{children}</>
}
