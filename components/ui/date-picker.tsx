"use client"

import * as React from "react"
import { format, type Locale } from "date-fns"
import { CalendarDaysIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "cn"

type DatePickerProps = {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  placeholder?: React.ReactNode
  dateFormat?: string
  locale?: Locale
  disabled?: boolean
  className?: string
  calendarClassName?: string
}

function DatePicker({
  value,
  defaultValue,
  onValueChange,
  placeholder = "Pick a date",
  dateFormat = "PPP",
  locale,
  disabled = false,
  className,
  calendarClassName,
}: DatePickerProps) {
  const [internalValue, setInternalValue] = React.useState<Date | undefined>(
    defaultValue
  )
  const [open, setOpen] = React.useState(false)
  const currentValue = value === undefined ? internalValue : value

  function handleSelect(date: Date | undefined) {
    if (value === undefined) {
      setInternalValue(date)
    }

    onValueChange?.(date)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            disabled={disabled}
            data-empty={!currentValue}
            className={cn(
              "justify-start text-left font-normal data-[empty=true]:text-muted-foreground",
              className
            )}
          />
        }
      >
        <CalendarDaysIcon aria-hidden="true" />
        {currentValue
          ? format(currentValue, dateFormat, { locale })
          : placeholder}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={currentValue}
          onSelect={handleSelect}
          locale={locale}
          className={calendarClassName}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
