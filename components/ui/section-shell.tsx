import * as React from "react"
import { cn } from "cn"

type SectionShellContextValue = {
  activeValue?: string
  setActiveValue: (value: string) => void
}

const SectionShellContext = React.createContext<SectionShellContextValue | null>(null)

function SectionShell({
  className,
  value,
  defaultValue,
  onValueChange,
  ...props
}: React.ComponentProps<"section"> & {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const activeValue = value ?? uncontrolledValue
  const setActiveValue = React.useCallback(
    (nextValue: string) => {
      if (value === undefined) setUncontrolledValue(nextValue)
      onValueChange?.(nextValue)
    },
    [onValueChange, value]
  )

  const context = React.useMemo(
    () => ({ activeValue, setActiveValue }),
    [activeValue, setActiveValue]
  )

  return (
    <SectionShellContext.Provider value={context}>
      <section data-slot="section-shell" className={cn("space-y-6", className)} {...props} />
    </SectionShellContext.Provider>
  )
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

function SectionShellPanel({
  className,
  value,
  ...props
}: React.ComponentProps<"div"> & { value?: string }) {
  const context = React.useContext(SectionShellContext)
  if (value && context?.activeValue && value !== context.activeValue) return null

  return (
    <div
      role={value ? "tabpanel" : undefined}
      data-slot="section-shell-panel"
      data-value={value}
      className={cn("min-w-0", className)}
      {...props}
    />
  )
}

function SectionShellNav({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav data-slot="section-shell-nav" className={cn("flex gap-1 overflow-x-auto border-b", className)} {...props} />
}

function SectionShellNavItem({
  className,
  active = false,
  href,
  value,
  onClick,
  ...props
}: React.ComponentProps<"button"> & {
  active?: boolean
  href?: string
  value?: string
}) {
  const context = React.useContext(SectionShellContext)
  const isActive = active || Boolean(value && context?.activeValue === value)
  const Component = (href ? "a" : "button") as React.ElementType
  return (
    <Component
      {...(!href ? { type: "button" } : { href })}
      data-slot="section-shell-nav-item"
      data-active={isActive ? "true" : undefined}
      role="tab"
      aria-selected={isActive}
      className={cn(
        "border-b-2 border-transparent px-1 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        "data-[active=true]:border-foreground data-[active=true]:text-foreground",
        className
      )}
      {...props}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (value && !href) context?.setActiveValue(value)
        onClick?.(event as React.MouseEvent<HTMLButtonElement>)
      }}
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
  SectionShellPanel,
  SectionShellTitle,
}
