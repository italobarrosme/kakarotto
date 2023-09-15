import { render, screen } from '@testing-library/react'
import { Input, InputProps } from './Input'

vi.mock('@iconify/react', () => ({
  Icon: () => <svg data-testid="icon" />,
}))

const renderPiece = ({ label, className, ...props }: InputProps) => {
  render(<Input label={label} className={className} {...props} />)
}

describe('Input', () => {
  it('render piece', () => {
    renderPiece({ label: 'label' })
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('render piece with custom className', () => {
    renderPiece({ label: 'label', className: 'custom-class' })

    const input = screen.getByRole('textbox')

    expect(input).toHaveClass('custom-class')
  })

  it('render piece with icon', () => {
    renderPiece({ label: 'label', icon: 'test' })

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
  })
})
