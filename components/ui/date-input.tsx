"use client"

import * as React from "react"
import { CalendarDaysIcon } from "lucide-react"

import { cn } from "cn"

type DateInputProps = Omit<
  React.ComponentProps<"input">,
  "type" | "defaultValue" | "value"
> & {
  defaultValue?: string
  value?: string
  showIcon?: boolean
}

function DateInput({
  className,
  defaultValue = "",
  value,
  onChange,
  placeholder = "Select a date",
  showIcon = true,
  ...props
}: DateInputProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const openedOnPointerDown = React.useRef(false)
  const currentValue = value ?? internalValue

  return (
    <label
      className={cn(
        "relative flex h-8 w-full min-w-0 items-center overflow-hidden rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30 md:text-sm",
        props["aria-invalid"] &&
          "border-destructive focus-within:ring-destructive/20",
        showIcon && "pl-9",
        className
      )}
    >
      {showIcon && (
        <CalendarDaysIcon
          aria-hidden="true"
          className="pointer-events-none absolute left-2.5 size-4 text-muted-foreground"
        />
      )}
      <span
        className={cn(
          "pointer-events-none min-w-0 flex-1 truncate",
          currentValue ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {currentValue || placeholder}
      </span>
      <input
        {...props}
        ref={inputRef}
        type="date"
        value={currentValue}
        onPointerDown={(event) => {
          const input = event.currentTarget
          const pickerInput = input as HTMLInputElement & {
            showPicker?: () => void
          }

          if (!props.disabled && pickerInput.showPicker) {
            try {
              input.focus({ preventScroll: true })
              pickerInput.showPicker()
              openedOnPointerDown.current = true
              event.preventDefault()
            } catch {
              // The browser can reject programmatic picker opening after a
              // focus transition. The native click remains available.
            }
          }
        }}
        onClick={(event) => {
          const input = event.currentTarget
          const pickerInput = input as HTMLInputElement & {
            showPicker?: () => void
          }

          if (openedOnPointerDown.current) {
            openedOnPointerDown.current = false
            return
          }

          if (!props.disabled && pickerInput.showPicker) {
            try {
              pickerInput.showPicker()
            } catch {
              // Ignore browsers that reject programmatic picker opening.
            }
          }
        }}
        onChange={(event) => {
          if (value === undefined) {
            setInternalValue(event.target.value)
          }

          onChange?.(event)
        }}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
    </label>
  )
}

export { DateInput }
