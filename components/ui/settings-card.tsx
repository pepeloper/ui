import * as React from "react"
import { cn } from "cn"

function SettingsCard({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="settings-card"
      className={cn("overflow-hidden rounded-2xl border bg-card text-card-foreground", className)}
      {...props}
    />
  )
}

function SettingsCardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="settings-card-header"
      className={cn("flex items-start justify-between gap-4 border-b px-4 py-4", className)}
      {...props}
    />
  )
}

function SettingsCardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="settings-card-title" className={cn("text-sm font-medium", className)} {...props} />
}

function SettingsCardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="settings-card-description"
      className={cn("mt-1 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function SettingsCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="settings-card-content" className={cn("divide-y", className)} {...props} />
}

function SettingsRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="settings-row"
      className={cn("flex items-center justify-between gap-6 px-4 py-4", className)}
      {...props}
    />
  )
}

function SettingsRowLabel({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="settings-row-label" className={cn("min-w-0", className)} {...props} />
}

function SettingsRowTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="settings-row-title" className={cn("text-sm font-medium", className)} {...props} />
}

function SettingsRowDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p data-slot="settings-row-description" className={cn("mt-1 text-sm text-muted-foreground", className)} {...props} />
  )
}

function SettingsRowControl({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="settings-row-control" className={cn("shrink-0", className)} {...props} />
}

export {
  SettingsCard,
  SettingsCardContent,
  SettingsCardDescription,
  SettingsCardHeader,
  SettingsCardTitle,
  SettingsRow,
  SettingsRowControl,
  SettingsRowDescription,
  SettingsRowLabel,
  SettingsRowTitle,
}
