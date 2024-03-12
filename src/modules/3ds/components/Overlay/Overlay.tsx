'use client'

import { cn } from '@/utils'
import { ReactNode } from 'react'

type OverlayProps = {
  children: ReactNode
  className?: string
}

export const Overlay = ({ children, className }: OverlayProps) => {
  return (
    <div
      className={cn(
        'absolute z-10 h-full w-full bg-effect-granula p-4',
        className
      )}
    >
      {children}
    </div>
  )
}
