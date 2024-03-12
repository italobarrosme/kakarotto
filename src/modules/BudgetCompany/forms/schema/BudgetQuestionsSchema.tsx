import { z } from 'zod'

export const BudgetQuestionsSchema = z.object({
  fullName: z.string(),
  projectName: z.string(),
  features: z.string(),
  targetAudience: z.string(),
  tecnologies: z.string(),
  isMobile: z.boolean(),
  integrationsApi: z.string(),
  deadline: z.string(),
  availableBudget: z.string(),
  isCreateDesign: z.boolean(),
  isHosting: z.boolean(),
  isSuport: z.boolean(),
  isSocialMedia: z.boolean(),
})

export type BudgetQuestionsSchema = z.infer<typeof BudgetQuestionsSchema>
