import { ReactNode } from 'react'

type OverlayProps = {
  children: ReactNode
}

export const Overlay = ({ children }: OverlayProps) => {
  return <div className="absolute z-10 h-full w-full">{children}</div>
}
