import { render, screen } from '@testing-library/react'
import { Hero, type HeroProps } from './Hero'

const renderComponent = ({ children }: HeroProps) => {
  render(<Hero>{children}</Hero>)
}

describe('Hero', () => {
  it('should render correctly with children', () => {
    renderComponent({ children: <div>Children div</div> })

    expect(screen.getByText('Children div')).toBeInTheDocument()
  })
})
