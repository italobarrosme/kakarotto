import { Overlay } from '@/modules/3ds/components'
import { GravityZero } from '@/modules/3ds/scenes/template'
import { getFindFile } from '@/modules/Blob/actions'
import { BudgetEmailForm } from '@/modules/BudgetCompany/forms'

import { Hero } from '@/shared/components/Hero'

export default async function Home() {
  const palm = await getFindFile('palms1.glb')
  const environment = await getFindFile('4iaA-adams_place_bridge_1k.hdr')

  return (
    <Hero>
      <Overlay>
        <section className="flex h-full flex-col items-center justify-center gap-4 overflow-hidden p-4">
          <h1 className="text-7xl font-bold text-brand-primary lg:text-6xl">
            Coqueiro Digital
          </h1>
          <p className="text-xl text-brand-light lg:text-2xl">
            Transformando Ideias em Soluções Web
          </p>
          <BudgetEmailForm />
        </section>
      </Overlay>
      {palm && environment ? (
        <GravityZero environment={environment} model={palm} />
      ) : null}
    </Hero>
  )
}
