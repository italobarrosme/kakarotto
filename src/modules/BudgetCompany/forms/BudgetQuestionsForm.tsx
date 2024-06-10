'use client'

// import { Button } from '@/shared/components/Button'
import { Input } from '@/shared/components/Input'
import { useForm } from 'react-hook-form'
import { BudgetQuestionsSchema } from './schema/BudgetQuestionsSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputArea } from '@/shared/components/InputArea'
import { formatCurrencyToBRL } from '@/utils/'
import { maskFormatCurrencyToBRL } from '@/utils/'

export const BudgetQuestionsForm = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<BudgetQuestionsSchema>({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      projectName: '',
      availableBudget: '1000',
      features: '',
      targetAudience: '',
      tecnologies: '',
      integrationsApi: '',
      deadline: '',
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
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-4 text-lg font-semibold text-primary-regular">
          Informações contratuais
        </legend>
        <Input
          label="Seu nome completo"
          type="text"
          {...register('fullName')}
          error={errors.fullName?.message}
        />
        <Input
          label="Quanto você tem disponível para investir?"
          type="text"
          defaultValue={formatCurrencyToBRL(+getValues('availableBudget'))}
          onChange={(e) => {
            const value = e.target.value
            e.target.value = maskFormatCurrencyToBRL(value)
            setValue('availableBudget', value)
          }}
          error={errors.availableBudget?.message}
        />
        <Input
          label="Nome do projeto"
          type="text"
          {...register('projectName')}
          error={errors.projectName?.message}
        />
        <Input
          label="Prazo para entrega"
          type="date"
          {...register('deadline')}
          error={errors.deadline?.message}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-4 text-lg font-semibold text-primary-regular">
          Informações tecnicas
        </legend>
        <InputArea
          label="Quem é o seu público alvo para projeto?"
          {...register('targetAudience')}
          error={errors.targetAudience?.message}
        />
        <InputArea
          label="Me conte sobre o projeto, quais as funcionalidades e objetivos você tem em mente?"
          {...register('features')}
          error={errors.features?.message}
        />
        <InputArea
          label="Quais tecnologias você gostaria de usar?"
          {...register('tecnologies')}
          error={errors.tecnologies?.message}
        />
        <InputArea
          label="Tem integração com alguma API especifica que você gostaria de fazer?"
          {...register('integrationsApi')}
          error={errors.integrationsApi?.message}
        />
      </fieldset>
    </form>
  )
}
