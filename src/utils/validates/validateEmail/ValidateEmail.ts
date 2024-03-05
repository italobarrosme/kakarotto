export const ValidateEmail = (email: string | null): boolean => {
  if (!email) return false

  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
