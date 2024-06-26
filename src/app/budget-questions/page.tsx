import { BudgetQuestionsForm } from '@/modules/BudgetCompany/forms'

export default function Home() {
  return (
    <section className="flex w-screen flex-col items-center justify-center gap-8 overflow-y-auto p-6 py-24">
      <h1 className="text-3xl font-bold text-primary-regular lg:text-4xl">
        Solicitação de Orçamento
      </h1>
      <BudgetQuestionsForm />
    </section>
  )
}
