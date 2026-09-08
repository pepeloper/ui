"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

export function CodeBlock({
  code,
  label = "Terminal",
}: {
  code: string
  label?: string
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle")
  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setStatus("copied")
    } catch {
      setStatus("error")
    }
  }
  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>{label}</span>
        <button onClick={copy} aria-label={`Copy ${label}`}>
          {status === "copied" ? (
            <CheckIcon size={14} />
          ) : (
            <CopyIcon size={14} />
          )}
          <span aria-live="polite">
            {status === "copied"
              ? "Copied"
              : status === "error"
                ? "Select the code to copy"
                : "Copy"}
          </span>
        </button>
      </div>
      <pre tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function InstallCommand({ name }: { name: string }) {
  const [origin, setOrigin] = useState(
    process.env.NEXT_PUBLIC_REGISTRY_URL?.replace(/\/$/, "") ?? ""
  )
  // Resolve the actual demo host after hydration, without guessing a public domain.
  return (
    <div
      ref={(node) => {
        if (node && !origin) setOrigin(window.location.origin)
      }}
    >
      <CodeBlock
        label="Install"
        code={`npx shadcn@latest add ${origin || "http://localhost:3000"}/r/${name}.json`}
      />
    </div>
  )
}
