'use client'

import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { useForm } from 'react-hook-form'
import { BudgetEmailSchema } from './schema/BudgetEmailSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/utils'
import { useRouter } from 'next/navigation'

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
    console.log(data, 'HEREEEEEEEEEEEEEEEE')

    clearErrors()
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendToService(data)

        // push('/budget-questions')
      })}
      className="flex flex-wrap items-center gap-4 md:max-w-md md:flex-nowrap md:justify-center lg:max-w-lg"
    >
      <Input
        label="Insira seu email para orçamento"
        type="email"
        placeholder="cliente@email.com"
        {...register('email')}
        error={errors.email?.message}
        className={cn(isValid ? 'border-green-500' : 'border-red-500 ')}
      />
      <Button type="submit" className="md:mt-7" disabled={!isValid}>
        Enviar
      </Button>
    </form>
  )
}
