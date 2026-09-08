import * as React from "react"
import { ChevronRightIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "cn"

function ResourceList({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="resource-list"
      className={cn("overflow-hidden rounded-2xl border bg-card text-card-foreground", className)}
      {...props}
    />
  )
}

type ResourceRowProps = React.ComponentProps<"div"> & {
  href?: string
  avatar?: string
  fallback?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  trailing?: React.ReactNode
  showChevron?: boolean
}

function ResourceRow({
  className,
  href,
  avatar,
  fallback,
  title,
  subtitle,
  trailing,
  showChevron = Boolean(href),
  ...props
}: ResourceRowProps) {
  const Component = (href ? "a" : "div") as React.ElementType
  return (
    <Component
      data-slot="resource-row"
      href={href}
      className={cn(
        "group/resource-row flex min-w-0 items-center gap-3 border-b px-4 py-3 last:border-b-0",
        "transition-colors hover:bg-muted/40",
        href && "focus-visible:bg-muted/40 focus-visible:outline-none",
        className
      )}
      {...props}
    >
      {(avatar || fallback) && (
        <Avatar size="sm" className="shrink-0">
          {avatar && <AvatarImage src={avatar} alt="" />}
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      )}
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium">{title}</div>
        {subtitle && <div className="truncate text-xs text-muted-foreground">{subtitle}</div>}
      </div>
      {trailing}
      {showChevron && <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />}
    </Component>
  )
}

export { ResourceList, ResourceRow }
