"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/components/ui/use-is-mobile"
import { cn } from "cn"

type ResponsiveSheetContextValue = { isMobile: boolean }
const ResponsiveSheetContext = React.createContext<ResponsiveSheetContextValue | null>(null)

function useResponsiveSheet() {
  const context = React.useContext(ResponsiveSheetContext)
  if (!context) throw new Error("Responsive sheet parts must be used inside ResponsiveSheet.")
  return context
}

function ResponsiveSheet({ children, ...props }: React.ComponentProps<typeof Sheet>) {
  const isMobile = useIsMobile()
  const context = React.useMemo(() => ({ isMobile }), [isMobile])

  return (
    <ResponsiveSheetContext.Provider value={context}>
      {isMobile ? (
        <Drawer showSwipeHandle {...(props as React.ComponentProps<typeof Drawer>)}>
          {children}
        </Drawer>
      ) : (
        <Sheet {...props}>{children}</Sheet>
      )}
    </ResponsiveSheetContext.Provider>
  )
}

function ResponsiveSheetTrigger(props: React.ComponentProps<typeof SheetTrigger>) {
  const { isMobile } = useResponsiveSheet()
  return isMobile ? <DrawerTrigger {...(props as React.ComponentProps<typeof DrawerTrigger>)} /> : <SheetTrigger {...props} />
}

function ResponsiveSheetClose(props: React.ComponentProps<typeof SheetClose>) {
  const { isMobile } = useResponsiveSheet()
  return isMobile ? <DrawerClose {...(props as React.ComponentProps<typeof DrawerClose>)} /> : <SheetClose {...props} />
}

function ResponsiveSheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetContent> & {
  showCloseButton?: boolean
}) {
  const { isMobile } = useResponsiveSheet()

  if (isMobile) {
    return (
      <DrawerContent className={cn("max-h-[90dvh]", className)} {...(props as React.ComponentProps<typeof DrawerContent>)}>
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
    <SheetContent
      className={className}
      side={side}
      showCloseButton={showCloseButton}
      {...props}
    >
      {children}
    </SheetContent>
  )
}

function ResponsiveSheetHeader(props: React.ComponentProps<"div">) {
  const { isMobile } = useResponsiveSheet()
  return isMobile ? <DrawerHeader {...props} /> : <SheetHeader {...props} />
}

function ResponsiveSheetFooter(props: React.ComponentProps<"div">) {
  const { isMobile } = useResponsiveSheet()
  return isMobile ? <DrawerFooter {...props} /> : <SheetFooter {...props} />
}

function ResponsiveSheetTitle(props: React.ComponentProps<typeof SheetTitle>) {
  const { isMobile } = useResponsiveSheet()
  return isMobile ? <DrawerTitle {...props} /> : <SheetTitle {...props} />
}

function ResponsiveSheetDescription(props: React.ComponentProps<typeof SheetDescription>) {
  const { isMobile } = useResponsiveSheet()
  return isMobile ? <DrawerDescription {...props} /> : <SheetDescription {...props} />
}

export {
  ResponsiveSheet,
  ResponsiveSheetClose,
  ResponsiveSheetContent,
  ResponsiveSheetDescription,
  ResponsiveSheetFooter,
  ResponsiveSheetHeader,
  ResponsiveSheetTitle,
  ResponsiveSheetTrigger,
}
