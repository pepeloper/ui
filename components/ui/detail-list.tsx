import * as React from "react"
import { cn } from "cn"

function DetailList({ className, ...props }: React.ComponentProps<"dl">) {
  return <dl data-slot="detail-list" className={cn("divide-y", className)} {...props} />
}

function DetailListItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="detail-list-item" className={cn("grid gap-1 py-3 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-6", className)} {...props} />
  )
}

function DetailListLabel({ className, ...props }: React.ComponentProps<"dt">) {
  return <dt data-slot="detail-list-label" className={cn("text-sm text-muted-foreground", className)} {...props} />
}

function DetailListValue({ className, ...props }: React.ComponentProps<"dd">) {
  return <dd data-slot="detail-list-value" className={cn("text-sm font-medium", className)} {...props} />
}

export { DetailList, DetailListItem, DetailListLabel, DetailListValue }
