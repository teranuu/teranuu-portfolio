import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-full border font-mono text-[0.72rem] leading-none uppercase',
  {
    variants: {
      variant: {
        default: 'border-accent/50 bg-accent/15 text-foreground',
        muted: 'border-border bg-surface/70 text-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
