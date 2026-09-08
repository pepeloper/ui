import * as React from "react"
import { cn } from "cn"

function SectionShell({ className, ...props }: React.ComponentProps<"section">) {
  return <section data-slot="section-shell" className={cn("space-y-6", className)} {...props} />
}

function SectionShellHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="section-shell-header" className={cn("flex items-start justify-between gap-4", className)} {...props} />
}

function SectionShellTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 data-slot="section-shell-title" className={cn("text-lg font-medium tracking-tight", className)} {...props} />
}

function SectionShellDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="section-shell-description" className={cn("mt-1 text-sm text-muted-foreground", className)} {...props} />
}

function SectionShellContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="section-shell-content" className={cn("min-w-0", className)} {...props} />
}

function SectionShellNav({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="section-shell-nav" className={cn("flex gap-1 overflow-x-auto border-b", className)} {...props} />
}

function SectionShellNavItem({
  className,
  active = false,
  href,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean; href?: string }) {
  const Component = (href ? "a" : "button") as React.ElementType
  return (
    <Component
      {...(!href ? { type: "button" } : { href })}
      data-slot="section-shell-nav-item"
      data-active={active ? "true" : undefined}
      className={cn(
        "border-b-2 border-transparent px-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        "data-[active=true]:border-foreground data-[active=true]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  SectionShell,
  SectionShellContent,
  SectionShellDescription,
  SectionShellHeader,
  SectionShellNav,
  SectionShellNavItem,
  SectionShellTitle,
}
