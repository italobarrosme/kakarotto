'use client'

import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { useForm } from 'react-hook-form'
import { BudgetQuestionsSchema } from './schema/BudgetQuestionsSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export const BudgetQuestionsForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isValid },
  } = useForm<BudgetQuestionsSchema>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      projectName: '',
      features: '',
      targetAudience: '',
      tecnologies: '',
      integrationsApi: '',
      deadline: '',
      availableBudget: '',
      isMobile: false,
      isCreateDesign: false,
      isHosting: false,
      isSuport: false,
      isSocialMedia: false,
    },
    resolver: zodResolver(BudgetQuestionsSchema),
  })

  const sendToService = (data: BudgetQuestionsSchema) => {
    console.log(data, 'HEREEEEEEEEEEEEEEEE')

    clearErrors()
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendToService(data)
      })}
      className="flex h-full max-w-lg flex-wrap items-center justify-center gap-4 p-4"
    >
      <Input label="Seu nome completo" type="text" {...register('fullName')} />
      <Input label="Nome do projeto" type="text" {...register('projectName')} />
    </form>
  )
}
