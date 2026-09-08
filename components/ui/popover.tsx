"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "cn"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useIsMobile } from "@/components/ui/use-is-mobile"

type PopoverContextValue = { isMobile: boolean }
const PopoverContext = React.createContext<PopoverContextValue | null>(null)

function usePopover() {
  const context = React.useContext(PopoverContext)
  if (!context) throw new Error("Popover parts must be used inside Popover.")
  return context
}

function Popover({ children, ...props }: PopoverPrimitive.Root.Props) {
  const isMobile = useIsMobile()
  const context = React.useMemo(() => ({ isMobile }), [isMobile])

  return (
    <PopoverContext.Provider value={context}>
      {isMobile ? (
        <Drawer showSwipeHandle {...(props as React.ComponentProps<typeof Drawer>)}>
          {children}
        </Drawer>
      ) : (
        <PopoverPrimitive.Root data-slot="popover" {...props}>
          {children}
        </PopoverPrimitive.Root>
      )}
    </PopoverContext.Provider>
  )
}

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props) {
  const { isMobile } = usePopover()
  return isMobile ? (
    <DrawerTrigger data-slot="popover-trigger" {...(props as React.ComponentProps<typeof DrawerTrigger>)} />
  ) : (
    <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
  )
}

function PopoverContent({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  const { isMobile } = usePopover()

  if (isMobile) {
    return (
      <DrawerContent
        data-slot="popover-content"
        className={cn("max-h-[90dvh] w-full rounded-t-3xl p-4", className)}
        {...(props as React.ComponentProps<typeof DrawerContent>)}
      />
    )
  }

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "z-50 flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:ring-foreground/10 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1 text-sm", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  const { isMobile } = usePopover()

  if (isMobile) {
    return (
      <DrawerTitle
        data-slot="popover-title"
        className={cn("text-base font-medium", className)}
        {...props}
      />
    )
  }

  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("text-base font-medium", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  const { isMobile } = usePopover()

  if (isMobile) {
    return (
      <DrawerDescription
        data-slot="popover-description"
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    )
  }

  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
