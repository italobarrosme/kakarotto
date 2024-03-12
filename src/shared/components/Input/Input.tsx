import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/utils'
import { Icon } from '@iconify/react'

export type InputProps = {
  label: string
  className?: string
  icon?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, icon, error, ...rest }, ref) => {
    return (
      <>
        <div className="relative flex w-80 flex-col gap-2 lg:min-w-full">
          <label
            htmlFor={rest.id}
            className="text-sm font-semibold text-brand-light"
          >
            {label}
          </label>
          <div className="flex gap-2">
            {!!icon && <Icon icon={icon} className="h-5 w-5" />}
            <input
              ref={ref} // Adiciona a referência para o input
              className={cn(
                'w-full h-8 outline-none bg-brand-dark border-brand-light border-2 rounded-md px-2 py-1 placeholder:text-brand-grey',
                className
              )}
              {...rest}
            />
          </div>
          <span className="absolute -bottom-6  text-xs text-red-500">
            {error}
          </span>
        </div>
      </>
    )
  }
)

Input.displayName = 'Input'