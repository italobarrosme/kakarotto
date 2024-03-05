import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  className?: string
  icon?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  icon = '',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `flex items-center gap-4 whitespace-nowrap rounded bg-brand-primary px-4 py-2 font-bold text-white hover:bg-brand-secondary disabled:bg-brand-light disabled:text-brand-dark`,
        className
      )}
      {...rest}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      {children}
    </button>
  )
}
