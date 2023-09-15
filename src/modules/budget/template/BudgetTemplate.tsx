import { useStoreSphere } from '@/modules/3ds/models/Sphere/store'
import { Button } from '@/shared/pieces/Button'
import { Input } from '@/shared/pieces/Input'
import { useState, MouseEvent } from 'react'

export const BudgetTemplate = () => {
  const [emailData, setEmailData] = useState<string>('')
  const { setColorCurrent } = useStoreSphere()

  const onSubmit = (evt: MouseEvent) => {
    evt.preventDefault()
    setColorCurrent('#00FF00')

    setTimeout(() => {
      setColorCurrent('#F27141')
      setEmailData('')
    }, 1900)
  }

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  return (
    <form className="mt-10 flex items-end gap-2">
      <Input
        label="Deixe seu email de contato para orçamentos"
        type="email"
        placeholder="ex: contato@gmail.com"
        className="font-bold"
        name="email"
        onChange={(evt) => {
          setEmailData(evt.target.value)
        }}
        value={emailData}
      />
      <Button
        type="button"
        label="Enviar"
        disabled={!validateEmail(emailData)}
        className="h-8"
        onClick={(event) => onSubmit(event)}
      ></Button>
    </form>
  )
}
