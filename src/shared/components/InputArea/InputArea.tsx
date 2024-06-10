import { cn } from '@/utils'
import { TextareaHTMLAttributes, forwardRef } from 'react'

type TextareaProps = {
  label: string
  className?: string
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const InputArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <>
        <div className="relative flex w-80 flex-col gap-2 lg:min-w-full">
          <label className="relative text-xs font-semibold text-neutral-white">
            {label}
          </label>
          <div className="flex gap-2">
            <textarea
              className={cn(
                'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border-2 bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
                className
              )}
              ref={ref}
              {...props}
            />
          </div>
          <span className="absolute -bottom-6 text-xs text-red-500">
            {error}
          </span>
        </div>
      </>
    )
  }
)
InputArea.displayName = 'InputArea'

export { InputArea }
