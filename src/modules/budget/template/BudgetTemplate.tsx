import { useStoreSphere } from '@/modules/3ds/models/Sphere/store'
import { Button } from '@/shared/pieces/Button'
import { Input } from '@/shared/pieces/Input'
import { useState, MouseEvent } from 'react'
import { ValidateEmail } from '../functions'
import { serviceBudget } from '../service'
import { delay } from '@/utils'

export const BudgetTemplate = () => {
  const [emailData, setEmailData] = useState<string>('')
  const { setColorCurrent } = useStoreSphere()

  const { createBudget } = serviceBudget()

  const onSubmit = async (evt: MouseEvent) => {
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
      setEmailData('')

      delay(2000).then(() => {
        setColorCurrent('#F27141')
      })
    }
  }

  return (
    <form className="mt-10 flex items-end gap-2">
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
        type="button"
        label="Enviar"
        disabled={!ValidateEmail(emailData)}
        className="h-8"
        onClick={(event) => onSubmit(event)}
      ></Button>
    </form>
  )
}
