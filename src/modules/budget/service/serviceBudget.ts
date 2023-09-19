export type responseCreateBudget = {
  status: string
}

export type requestCreateBudget = {
  payload: {
    email: string
  }
}

export const serviceBudget = () => {
  const createBudget = (payload: requestCreateBudget): responseCreateBudget => {
    try {
      fetch('api/budget', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      return { status: 'success' }
    } catch (error) {
      return { status: 'error' }
    }
  }

  return {
    createBudget,
  }
}
