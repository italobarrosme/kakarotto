import { z } from 'zod'
import { ValidateEmail } from '@/utils/validates/validateEmail'

export const BudgetEmailSchema = z.object({
  email: z.string().refine(ValidateEmail, {
    message: 'Email inválido',
  }),
})

export type BudgetEmailSchema = z.infer<typeof BudgetEmailSchema>
