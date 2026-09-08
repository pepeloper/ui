"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useIsMobile } from "@/components/ui/use-is-mobile"
import { cn } from "cn"

type ResponsiveDialogContextValue = { isMobile: boolean }

const ResponsiveDialogContext = React.createContext<ResponsiveDialogContextValue | null>(null)

function useResponsiveDialog() {
  const context = React.useContext(ResponsiveDialogContext)

  if (!context) {
    throw new Error("Responsive dialog parts must be used inside ResponsiveDialog.")
  }

  return context
}

function ResponsiveDialog({ children, ...props }: React.ComponentProps<typeof Dialog>) {
  const isMobile = useIsMobile()
  const context = React.useMemo(() => ({ isMobile }), [isMobile])

  return (
    <ResponsiveDialogContext.Provider value={context}>
      {isMobile ? (
        <Drawer showSwipeHandle {...(props as React.ComponentProps<typeof Drawer>)}>
          {children}
        </Drawer>
      ) : (
        <Dialog {...props}>{children}</Dialog>
      )}
    </ResponsiveDialogContext.Provider>
  )
}

function ResponsiveDialogTrigger(
  props: React.ComponentProps<typeof DialogTrigger>
) {
  const { isMobile } = useResponsiveDialog()
  return isMobile ? <DrawerTrigger {...(props as React.ComponentProps<typeof DrawerTrigger>)} /> : <DialogTrigger {...props} />
}

function ResponsiveDialogClose(props: React.ComponentProps<typeof DialogClose>) {
  const { isMobile } = useResponsiveDialog()
  return isMobile ? <DrawerClose {...(props as React.ComponentProps<typeof DrawerClose>)} /> : <DialogClose {...props} />
}

function ResponsiveDialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogContent> & {
  showCloseButton?: boolean
}) {
  const { isMobile } = useResponsiveDialog()

  if (isMobile) {
    return (
      <DrawerContent
        className={cn("max-h-[90dvh]", className)}
        {...(props as React.ComponentProps<typeof DrawerContent>)}
      >
        {children}
        {showCloseButton && (
          <DrawerClose
            render={
              <Button
                variant="ghost"
                className="absolute top-3 right-3 bg-secondary"
                size="icon-sm"
              />
            }
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DrawerClose>
        )}
      </DrawerContent>
    )
  }

  return (
    <DialogContent className={className} showCloseButton={showCloseButton} {...props}>
      {children}
    </DialogContent>
  )
}

function ResponsiveDialogHeader(props: React.ComponentProps<"div">) {
  const { isMobile } = useResponsiveDialog()
  return isMobile ? <DrawerHeader {...props} /> : <DialogHeader {...props} />
}

function ResponsiveDialogFooter(props: React.ComponentProps<"div">) {
  const { isMobile } = useResponsiveDialog()
  return isMobile ? <DrawerFooter {...props} /> : <DialogFooter {...props} />
}

function ResponsiveDialogTitle(props: React.ComponentProps<typeof DialogTitle>) {
  const { isMobile } = useResponsiveDialog()
  return isMobile ? <DrawerTitle {...props} /> : <DialogTitle {...props} />
}

function ResponsiveDialogDescription(
  props: React.ComponentProps<typeof DialogDescription>
) {
  const { isMobile } = useResponsiveDialog()
  return isMobile ? <DrawerDescription {...props} /> : <DialogDescription {...props} />
}

export {
  ResponsiveDialog,
  ResponsiveDialogClose,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
}
