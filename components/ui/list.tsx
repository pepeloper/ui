import * as React from "react"
import { cn } from "cn"

function List({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="list"
      className={cn(
        "w-full overflow-hidden rounded-xl border bg-card font-sans text-card-foreground",
        className
      )}
      {...props}
    />
  )
}

function ListItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="list-item"
      className={cn(
        "group/list-item flex min-h-16 items-center gap-3 border-b px-4 py-3 last:border-b-0",
        "transition-colors hover:bg-muted/40",
        className
      )}
      {...props}
    />
  )
}

function ListItemMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-media"
      className={cn(
        "flex shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-5 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function ListItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-content"
      className={cn("flex min-w-0 flex-1 flex-col gap-0.5", className)}
      {...props}
    />
  )
}

function ListItemLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-label"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function ListItemValue({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-value"
      className={cn("text-sm leading-snug font-medium", className)}
      {...props}
    />
  )
}

function ListItemAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-item-action"
      className={cn("ml-auto flex shrink-0 items-center gap-2", className)}
      {...props}
    />
  )
}

export {
  List,
  ListItem,
  ListItemAction,
  ListItemContent,
  ListItemLabel,
  ListItemMedia,
  ListItemValue,
}
