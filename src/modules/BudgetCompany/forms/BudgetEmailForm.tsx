'use client'

import { useForm } from 'react-hook-form'
import { BudgetEmailSchema } from './schema/BudgetEmailSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  InputText,
  Button,
  InputNumber,
} from '@coqueirodigital/react-components'

export const BudgetEmailForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isValid },
  } = useForm<BudgetEmailSchema>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(BudgetEmailSchema),
  })

  const { push } = useRouter()

  const sendToService = (data: BudgetEmailSchema) => {
    clearErrors()
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendToService(data)

        push('/budget-questions')
      })}
      className="flex flex-wrap items-center gap-4 md:max-w-md md:flex-nowrap md:justify-center lg:max-w-lg"
    >
      {/* <InputText
        label="Insira seu email para orçamento"
        type="email"
        placeholder="cliente@email.com"
        error={errors.email?.message}
        name="email"
      /> */}

      {/* <Button
        type="submit"
        variant="fit/ghost"
        className="md:mt-7"
        disabled={!isValid}
      >
        Enviar
      </Button> */}
    </form>
  )
}
