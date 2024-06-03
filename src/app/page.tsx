import { Overlay } from '@/modules/3ds/components'
import { GravityZero } from '@/modules/3ds/scenes/template'
import { getFindFile } from '@/modules/Blob/actions'
import { BudgetEmailForm } from '@/modules/BudgetCompany/forms'

import { Hero } from '@/shared/components/Hero'

import { Suspense } from 'react'

import { Text } from '@coqueirodigital/react-components'

export default async function Home() {
  const palm = await getFindFile('palm_leaf.glb')
  const environment = await getFindFile('4iaA-adams_place_bridge_1k.hdr')

  return (
    <Hero>
      <Overlay>
        <section className="flex h-full flex-col items-center justify-center gap-4 overflow-hidden p-4">
          <Text tag="h1" variant="2xl/bold" className="text-brand-primary">
            Coqueiro Digital
          </Text>

          <BudgetEmailForm />
        </section>
      </Overlay>
      <Suspense fallback={null}>
        {palm && environment && (
          <GravityZero model={palm} environment={environment} />
        )}
      </Suspense>
    </Hero>
  )
}
