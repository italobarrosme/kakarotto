import {
  Text,
  Tooltip,
  Button,
  InputNumber,
} from '@coqueirodigital/react-components'

export default async function Tests() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <Text tag="h1" variant="2xl/bold" className="text-brand-primary">
          Coqueiro Digital
        </Text>
        {/* <Text tag="p" variant="2xl/light" className="text-brand-light">
          Desenvolvemos sites, sistemas e aplicativos web que atendem às
          necessidades do seu negócio.
        </Text> */}
        {/* <Tooltip content="Tooltip" trigger="click">
          <Text tag="p" variant="md/bold" className="text-brand-light">
            Hover me
          </Text>
        </Tooltip> */}

        {/* <Button variant="large/regular">Teste</Button> */}

        {/* <InputNumber label="teste-number" name="number" /> */}
      </div>
    </>
  )
}
