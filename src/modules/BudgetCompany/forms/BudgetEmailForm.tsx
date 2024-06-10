'use client'

import { useForm } from 'react-hook-form'
import { BudgetEmailSchema } from './schema/BudgetEmailSchema'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useRouter } from 'next/navigation'
import { InputText, Button, Text } from '@coqueirodigital/react-components'

import { motion } from 'framer-motion'

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

  // const { push } = useRouter()

  const sendToService = (data: BudgetEmailSchema) => {
    console.log(data, 'send data')
    clearErrors()
    reset()
  }

  const variantsMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 4.5 },
  }

  return (
    <motion.div
      initial={variantsMotion.initial}
      animate={variantsMotion.animate}
      transition={variantsMotion.transition}
    >
      <Text
        tag="h1"
        variant="3xl/semibold"
        className="text-center text-4xl font-bold text-primary-regular"
      >
        Coqueiro Digital
      </Text>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data, '###############DATA')
          sendToService(data)

          // push('/budget-questions')
        })}
        className="flex h-36 flex-wrap items-center justify-center gap-4 md:max-w-md md:flex-nowrap lg:max-w-lg"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex h-20 justify-center"
        >
          <InputText
            label="Insira seu email para orçamento"
            type="email"
            placeholder="cliente@email.com"
            error={errors.email?.message}
            dark
            {...register('email')}
          />
        </motion.div>
        <div className="flex h-20 items-center justify-center">
          <Button
            variant="fit/outline"
            className=""
            disabled={!isValid}
            type="submit"
          >
            Enviar
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
