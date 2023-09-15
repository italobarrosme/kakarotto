import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  label?: string
  className?: string
  icon?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  label,
  className,
  type,
  icon = '',
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        'flex items-center gap-4 whitespace-nowrap rounded bg-brand-primary px-4 py-2 font-bold text-white hover:bg-brand-secondary disabled:bg-brand-light disabled:text-brand-dark',
        className
      )}
    >
      {icon ? <Icon icon={icon} width={24} /> : null}
      <p>{label}</p>
    </button>
  )
}
