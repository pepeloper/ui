"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { cn } from "cn"

type FormFieldContextValue = {
  controlId: string
  descriptionId: string
  errorId: string
  invalid: boolean
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

function useFormField() {
  const context = React.useContext(FormFieldContext)
  if (!context) throw new Error("Form field parts must be used inside FormField.")
  return context
}

function FormField({
  className,
  id,
  invalid = false,
  children,
  ...props
}: React.ComponentProps<"div"> & { id?: string; invalid?: boolean }) {
  const generatedId = React.useId()
  const controlId = id ?? `field-${generatedId}`
  const context = React.useMemo(
    () => ({
      controlId,
      descriptionId: `${controlId}-description`,
      errorId: `${controlId}-error`,
      invalid,
    }),
    [controlId, invalid]
  )

  return (
    <FormFieldContext.Provider value={context}>
      <div data-slot="form-field" className={cn("grid gap-2", className)} {...props}>
        {children}
      </div>
    </FormFieldContext.Provider>
  )
}

function FormFieldLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  const { controlId } = useFormField()
  return <Label htmlFor={controlId} className={className} {...props} />
}

function FormFieldControl({ children }: { children: React.ReactElement }) {
  const { controlId, descriptionId, errorId, invalid } = useFormField()
  const describedBy = `${descriptionId} ${errorId}`

  return React.cloneElement(children, {
    id: controlId,
    "aria-describedby": describedBy,
    "aria-invalid": invalid || undefined,
  } as React.HTMLAttributes<HTMLElement>)
}

function FormFieldDescription({ className, ...props }: React.ComponentProps<"p">) {
  const { descriptionId } = useFormField()
  return (
    <p
      id={descriptionId}
      data-slot="form-field-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function FormFieldError({ className, children, ...props }: React.ComponentProps<"p">) {
  const { errorId } = useFormField()
  if (!children) return null
  return (
    <p
      id={errorId}
      role="alert"
      data-slot="form-field-error"
      className={cn("text-sm text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export {
  FormField,
  FormFieldControl,
  FormFieldDescription,
  FormFieldError,
  FormFieldLabel,
  useFormField,
}
