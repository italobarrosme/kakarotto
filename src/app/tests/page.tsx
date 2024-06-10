import { Text } from '@coqueirodigital/react-components'

export default async function Tests() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Text tag="h1" variant="2xl/bold" className="text-primary-regular">
          Coqueiro Digital
        </Text>
      </div>
    </>
  )
}
