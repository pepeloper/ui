import * as React from "react"

import { Badge, badgeVariants } from "@/components/ui/badge"
import { cn } from "cn"
import type { VariantProps } from "class-variance-authority"

type StateBadgeProps = React.ComponentProps<typeof Badge> & {
  state: string
  dot?: boolean
  labels?: Record<string, React.ReactNode>
}

function StateBadge({ state, labels, dot = true, className, ...props }: StateBadgeProps) {
  const normalized = state.toLowerCase()
  const variant: VariantProps<typeof badgeVariants>["variant"] =
    normalized.includes("error") || normalized.includes("fail") || normalized.includes("danger")
      ? "destructive"
      : normalized.includes("success") || normalized.includes("ready") || normalized.includes("active")
        ? "secondary"
        : normalized.includes("warn") || normalized.includes("pending")
          ? "outline"
          : "ghost"

  return (
    <Badge variant={variant} className={cn("gap-1.5", className)} {...props}>
      {dot && <span aria-hidden="true" className="size-1.5 rounded-full bg-current opacity-70" />}
      {labels?.[state] ?? state}
    </Badge>
  )
}

export { StateBadge }
