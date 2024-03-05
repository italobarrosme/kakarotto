import { vi } from 'vitest'
import { Button, ButtonProps } from './Button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

vi.mock('@iconify/react', () => ({
  Icon: () => <svg data-testid="icon" />,
}))

const renderComponent = ({ children, className, icon }: ButtonProps) => {
  render(
    <Button className={className} icon={icon}>
      {children}
    </Button>
  )
}

describe('Button', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should render component', () => {
    renderComponent({
      children: 'test',
    })

    const labelButton = screen.getByRole('button', {
      name: 'test',
    })

    expect(labelButton).toBeInTheDocument()
  })

  it('should perform an action when the button is clicked', async () => {
    const onClickStub = vi.fn()

    renderComponent({
      children: 'test',
      onClick: onClickStub(), // Atribua onClickStub diretamente aqui
    })

    const button = screen.getByRole('button', {
      name: 'test',
    })

    // Simule um clique no botão
    await userEvent.click(button)

    // Verifique se onClickStub foi chamado
    expect(onClickStub).toHaveBeenCalled()
  })

  it('should render an icon', () => {
    renderComponent({
      children: 'test',
      icon: 'test',
    })

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })

  it('should render a custom class', () => {
    renderComponent({
      children: 'test',
      className: 'bg-red-500',
    })

    const button = screen.getByRole('button', {
      name: 'test',
    })

    expect(button).toHaveClass('bg-red-500')
  })
})
