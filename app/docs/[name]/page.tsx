import { readFile } from "node:fs/promises"
import path from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { componentCatalog } from "../../catalog-data"
import { ComponentPreview } from "../../component-showcase"
import { BlockPreview } from "../../block-preview"
import { CodeBlock, InstallCommand } from "../../code-block"
import { DocsNav } from "../docs-nav"
import examples from "../examples.json"
import api from "../api.json"

const blocks = [
  {
    name: "page-header",
    label: "Page header",
    category: "Blocks",
    description: "A title, context and primary action.",
  },
  {
    name: "empty-state",
    label: "Empty state",
    category: "Blocks",
    description: "An empty view with a next step.",
  },
]
const catalog = [...componentCatalog, ...blocks]
export const dynamicParams = false
export function generateStaticParams() {
  return catalog.map(({ name }) => ({ name }))
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>
}): Promise<Metadata> {
  const { name } = await params
  const component = catalog.find((c) => c.name === name)
  return {
    title: `${component?.label ?? "Component"} — Studio UI`,
    description: component?.description,
  }
}
const blockProps: Record<string, string[][]> = {
  "page-header": [
    ["title", "string · required", "Page title (h1)."],
    ["eyebrow", "string", "Optional badge."],
    ["description", "string", "Supporting text."],
    [
      "action",
      "ReactNode",
      "Custom action. Defaults to an unbound Create new button.",
    ],
  ],
  "empty-state": [
    ["title", "string · required", "Empty state heading."],
    ["description", "string · required", "Supporting text."],
    ["actionLabel", "string", "Shows the action button."],
    ["onAction", "() => void", "Button callback."],
    ["icon", "ReactNode", "Optional icon."],
  ],
}
const blockExamples: Record<string, string> = {
  "page-header":
    'import { PageHeader } from "@/components/page-header"\nimport { Button } from "@/components/ui/button"\n\nexport function ProjectsHeader() {\n  return (\n    <PageHeader\n      eyebrow="Workspace"\n      title="Projects"\n      description="What I’m working on."\n      action={<Button render={<a href="/projects/new" />}>New project</Button>}\n    />\n  )\n}',
  "empty-state":
    '"use client"\n\nimport { EmptyState } from "@/components/empty-state"\n\nexport function ProjectsEmpty({ onCreate }: { onCreate: () => void }) {\n  return (\n    <EmptyState\n      title="No projects yet"\n      description="Create your first project."\n      actionLabel="New project"\n      onAction={onCreate}\n    />\n  )\n}',
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const index = catalog.findIndex((c) => c.name === name)
  if (index < 0) notFound()
  const component = catalog[index]
  const isBlock = component.category === "Blocks"
  const registry = JSON.parse(
    await readFile(
      path.join(process.cwd(), "public", "r", `${name}.json`),
      "utf8"
    )
  ) as {
    files: { path: string; content: string }[]
    dependencies?: string[]
    registryDependencies?: string[]
  }
  const source = registry.files.map((f) => f.content).join("\n")
  const exports = [...source.matchAll(/export\s*\{([^}]+)\}/g)]
    .flatMap((match) =>
      match[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    )
    .concat(
      [...source.matchAll(/export function (\w+)/g)].map((match) => match[1])
    )
  const example = isBlock
    ? blockExamples[name]
    : examples[name as keyof typeof examples]
  return (
    <main id="main" className="docs-shell">
      <DocsNav current={name} />
      <article className="docs-content">
        <p className="eyebrow">{component.category}</p>
        <h1>{component.label}</h1>
        <p className="docs-intro">{component.description}</p>
        <nav className="docs-toc" aria-label="On this page">
          <a href="#preview">Preview</a>
          <a href="#install">Install</a>
          <a href="#usage">Usage</a>
          <a href="#api">API</a>
          <a href="#source">Source</a>
        </nav>
        <section id="preview">
          {isBlock ? (
            <BlockPreview name={name} />
          ) : (
            <ComponentPreview name={name} />
          )}
        </section>
        <section id="install">
          <h2>Install</h2>
          <InstallCommand name={name} />
          {Boolean(
            registry.dependencies?.length ||
            registry.registryDependencies?.length
          ) && (
            <p>
              Dependencies:{" "}
              {[
                ...(registry.dependencies ?? []),
                ...(registry.registryDependencies ?? []),
              ].join(", ")}
            </p>
          )}
        </section>
        <section id="usage">
          <h2>Usage</h2>
          <CodeBlock label={`${name}-example.tsx`} code={example} />
        </section>
        <section id="api">
          <h2>API</h2>
          {isBlock ? (
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {blockProps[name].map(([prop, type, description]) => (
                  <tr key={prop}>
                    <td>
                      <code>{prop}</code>
                    </td>
                    <td>{type}</td>
                    <td>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <div className="export-list">
                {exports.map((value) => (
                  <code key={value}>{value}</code>
                ))}
              </div>
              {api[name as keyof typeof api] && (
                <CodeBlock
                  label="TypeScript"
                  code={api[name as keyof typeof api]}
                />
              )}
            </>
          )}
        </section>
        <section id="source">
          <details className="source-disclosure">
            <summary>
              Source code <span>+</span>
            </summary>
            {registry.files.map((file) => (
              <CodeBlock
                key={file.path}
                label={file.path}
                code={file.content}
              />
            ))}
          </details>
          <p>
            <a href={`/r/${name}.json`}>Registry JSON ↗</a>
          </p>
        </section>
        <div className="doc-pager">
          {index > 0 ? (
            <Link href={`/docs/${catalog[index - 1].name}`}>
              ← {catalog[index - 1].label}
            </Link>
          ) : (
            <Link href="/docs">← Setup</Link>
          )}
          {index < catalog.length - 1 && (
            <Link href={`/docs/${catalog[index + 1].name}`}>
              {catalog[index + 1].label} →
            </Link>
          )}
        </div>
      </article>
    </main>
  )
}
