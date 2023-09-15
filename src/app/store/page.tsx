'use client'

import { Button } from '@/shared/pieces/Button'
import { useRouter } from 'next/navigation'

export default function Store() {
  const { push } = useRouter()
  return (
    <div>
      <Button
        onClick={() => push(`store/KSOKAS7HNCJUSTXIP2KXJAOSYBAPOX832`)}
        label="Iphone 12"
      ></Button>
    </div>
  )
}
