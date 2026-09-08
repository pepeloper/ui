"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { CommandDialog } from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export type CommandPaletteItem = {
  value: string
  label: React.ReactNode
  group?: string
  description?: React.ReactNode
  keywords?: string[]
  shortcut?: string
  icon?: React.ReactNode
  disabled?: boolean
  onSelect?: () => void
}

type CommandPaletteProps = {
  items: CommandPaletteItem[]
  trigger?: React.ReactElement
  placeholder?: string
  emptyLabel?: string
  title?: string
  description?: string
  shortcut?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function CommandPalette({
  items,
  trigger,
  placeholder = "Search commands…",
  emptyLabel = "No results found.",
  title = "Command palette",
  description = "Search and run a command.",
  shortcut = "k",
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: CommandPaletteProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (controlledOpen === undefined) setUncontrolledOpen(nextOpen)
      onOpenChange?.(nextOpen)
    },
    [controlledOpen, onOpenChange]
  )

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === shortcut.toLowerCase()) {
        event.preventDefault()
        setOpen(!open)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, setOpen, shortcut])

  const groups = React.useMemo(() => {
    const grouped = new Map<string, CommandPaletteItem[]>()
    for (const item of items) {
      const group = item.group ?? "Commands"
      grouped.set(group, [...(grouped.get(group) ?? []), item])
    }
    return grouped
  }, [items])

  const triggerNode = trigger ?? (
    <Button variant="outline" className="justify-between gap-6">
      <span className="inline-flex items-center gap-2">
        <SearchIcon className="size-4" />
        Search
      </span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>{shortcut.toUpperCase()}</Kbd>
      </KbdGroup>
    </Button>
  )

  const triggerWithHandler = React.isValidElement(triggerNode)
    ? (() => {
        const triggerElement = triggerNode as React.ReactElement<{
          onClick?: (event: React.MouseEvent<HTMLElement>) => void
        }>
        return React.cloneElement(triggerElement, {
          onClick: (event) => {
            triggerElement.props.onClick?.(event)
            setOpen(true)
          },
        })
      })()
    : (
        <Button variant="outline" onClick={() => setOpen(true)}>
          {triggerNode}
        </Button>
      )

  return (
    <>
      {triggerWithHandler}
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        showCloseButton
      >
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyLabel}</CommandEmpty>
            {[...groups.entries()].map(([group, groupItems]) => (
              <CommandGroup key={group} heading={group}>
                {groupItems.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={[item.value, item.keywords?.join(" ")].filter(Boolean).join(" ")}
                    disabled={item.disabled}
                    onSelect={() => {
                      item.onSelect?.()
                      setOpen(false)
                    }}
                  >
                    {item.icon}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate">{item.label}</span>
                      {item.description && (
                        <span className="block truncate text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      )}
                    </span>
                    {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

export { CommandPalette }
