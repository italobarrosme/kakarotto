import { useStoreSphere } from '@/modules/3ds/models/Sphere/store'
import { Button } from '@/shared/pieces/Button'
import { Input } from '@/shared/pieces/Input'
import { useState, FormEvent } from 'react'
import { ValidateEmail } from '../functions'
import { serviceBudget } from '../service'
import { delay } from '@/utils'

export const BudgetTemplate = () => {
  const [emailData, setEmailData] = useState<string>('')
  const { setColorCurrent } = useStoreSphere()
  const { createBudget } = serviceBudget()

  const onSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    try {
      createBudget({
        payload: {
          email: emailData,
        },
      })
      setColorCurrent('#00FF9C')
    } catch (error) {
      setColorCurrent('#BF2188')
    } finally {
      delay(2000).then(() => {
        setEmailData('')
        setColorCurrent('#F27141')
      })
    }
  }

  return (
    <form
      className="mt-10 flex items-end gap-2"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <Input
        label="Deixe seu email de contato para orçamentos"
        type="email"
        placeholder="ex: contato@gmail.com"
        className="font-bold"
        name="email"
        required
        onChange={(evt) => {
          setEmailData(evt.target.value)
        }}
        value={emailData}
      />
      <Button
        type="submit"
        disabled={!ValidateEmail(emailData)}
        className="h-8"
      >
        Enviar
      </Button>
    </form>
  )
}
