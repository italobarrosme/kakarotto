'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

type Menu = {
  name: string
  icon?: string
  href?: string
  onClick?: () => void
}

type NavbarProps = {
  logo: string
  menus?: Menu[]
  isMenuOpen?: boolean
  children?: ReactNode
}

export const Navbar = ({ logo, menus, children }: NavbarProps) => {
  return (
    <nav className="fixed top-0 z-40 flex h-20 w-full items-center justify-between bg-transparent px-4 shadow-sm backdrop-blur-sm">
      <Link href="/">
        <Image
          src={logo}
          alt="coqueiro digital logo"
          width={180}
          height={180}
        />
      </Link>
      {children}
    </nav>
  )
}
