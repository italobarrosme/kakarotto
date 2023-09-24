import { cn } from '@/utils'
import { Icon } from '@iconify/react'
import { InputHTMLAttributes } from 'react'

export type InputProps = {
  label: string
  className?: string
  icon?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, className, icon, ...rest }: InputProps) => {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <label
          htmlFor={rest.id}
          className="text-sm font-semibold text-brand-light"
        >
          {label}
        </label>
        <div className="flex gap-2">
          {!!icon && <Icon icon={icon} className="h-5 w-5" />}
          <input
            className={cn(
              'w-full h-8 outline-none bg-brand-dark border-brand-light border-2 rounded-md px-2 py-1 placeholder:text-brand-grey invalid:border-brand-accent valid:border-green-500',
              className
            )}
            {...rest}
          />
        </div>
      </div>
    </>
  )
}
