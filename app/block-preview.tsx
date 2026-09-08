"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/registry/default/page-header/page-header"
import { EmptyState } from "@/registry/default/empty-state/empty-state"

export function BlockPreview({ name }: { name: string }) {
  const [created, setCreated] = useState(false)
  return (
    <div className="rounded-lg border bg-card p-6">
      {name === "page-header" ? (
        <PageHeader
          eyebrow="Workspace"
          title="Projects"
          description={created ? "Project created." : "What I’m working on."}
          action={
            <Button onClick={() => setCreated(!created)}>
              {created ? "Reset" : "New project"}
            </Button>
          }
        />
      ) : (
        <EmptyState
          title={created ? "Project created" : "No projects yet"}
          description={
            created ? "Ready for your next idea." : "Create your first project."
          }
          actionLabel={created ? "Reset" : "New project"}
          onAction={() => setCreated(!created)}
        />
      )}
    </div>
  )
}
