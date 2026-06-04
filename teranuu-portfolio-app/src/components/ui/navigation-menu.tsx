import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '../../lib/utils'

export function NavigationMenu({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn('relative z-10 flex max-w-max flex-1 items-center', className)}
      {...props}
    />
  )
}

export function NavigationMenuList({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn('m-0 grid list-none gap-1 p-0', className)}
      {...props}
    />
  )
}

export function NavigationMenuItem({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      className={cn(className)}
      {...props}
    />
  )
}

export function NavigationMenuLink({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(
        'flex items-center gap-3 rounded-md border border-transparent px-3 py-2.5 text-[0.92rem] text-muted no-underline transition-colors hover:border-accent/50 hover:bg-accent/15 hover:text-foreground data-[active]:border-accent/50 data-[active]:bg-accent/15 data-[active]:text-foreground',
        className,
      )}
      {...props}
    />
  )
}
