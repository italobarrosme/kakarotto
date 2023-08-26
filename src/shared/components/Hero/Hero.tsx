export type HeroProps = {
  children: React.ReactNode
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <section className="h-screen w-screen">{children}</section>
    </>
  )
}
