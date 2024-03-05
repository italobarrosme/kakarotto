'use client'

export type HeroProps = {
  children: React.ReactNode
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <section className="h-[calc(100vh_-_60px)] w-screen">{children}</section>
    </>
  )
}
