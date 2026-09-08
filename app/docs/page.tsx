import type { Metadata } from "next"
import Link from "next/link"
import { CodeBlock, InstallCommand } from "../code-block"
import { DocsNav } from "./docs-nav"

export const metadata: Metadata = { title: "Quick setup — pepeloper/ui" }

export default function DocsPage() {
  return (
    <main id="main" className="docs-shell">
      <DocsNav />
      <article className="docs-content">
        <p className="eyebrow">DOCS</p>
        <h1>Quick setup</h1>
        <p className="docs-intro">The same starting point for my projects.</p>
        <section>
          <h2>1. Initialize</h2>
          <CodeBlock code="npx shadcn@latest init --preset b7PcNrWanY --template next --pointer" />
          <p>React, Base UI, Tailwind 4 and TypeScript.</p>
        </section>
        <section>
          <h2>2. Add a component</h2>
          <InstallCommand name="button" />
        </section>
        <section>
          <h2>3. Use it</h2>
          <CodeBlock
            label="example.tsx"
            code={
              'import { Button } from "@/components/ui/button"\n\nexport function Example() {\n  return <Button variant="outline">Save draft</Button>\n}'
            }
          />
        </section>
        <section>
          <h2>Customize</h2>
          <p>
            Edit the installed source. Set colors and radius through the
            semantic tokens in your global CSS.
          </p>
          <CodeBlock
            label="globals.css"
            code={
              ":root {\n  --primary: #e15829;\n  --primary-foreground: #171717;\n  --radius: 0.625rem;\n}"
            }
          />
        </section>
        <div className="doc-pager">
          <Link href="/#components">← Components</Link>
          <Link href="/docs/button">Button →</Link>
        </div>
      </article>
    </main>
  )
}
