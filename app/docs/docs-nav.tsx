import Link from "next/link"
import { ArrowLeftIcon, ChevronRightIcon } from "lucide-react"
import { catalogCategories, componentCatalog } from "../catalog-data"

export function DocsNav({ current }: { current?: string }) {
  return (
    <aside className="docs-nav">
      <Link href="/#components">
        <ArrowLeftIcon aria-hidden="true" />
        <span>All components</span>
      </Link>
      <Link href="/docs" aria-current={!current ? "page" : undefined}>
        Quick setup
      </Link>
      <nav aria-label="Component documentation">
        {catalogCategories.map((category) => (
          <details
            key={category}
            open={componentCatalog.some(
              (c) => c.name === current && c.category === category
            )}
          >
            <summary>
              <ChevronRightIcon aria-hidden="true" />
              <span>{category}</span>
            </summary>
            {componentCatalog
              .filter((c) => c.category === category)
              .map((c) => (
                <Link
                  key={c.name}
                  href={`/docs/${c.name}`}
                  aria-current={current === c.name ? "page" : undefined}
                >
                  {c.label}
                </Link>
              ))}
          </details>
        ))}
        <details open={current === "page-header" || current === "empty-state"}>
          <summary>
            <ChevronRightIcon aria-hidden="true" />
            <span>Blocks</span>
          </summary>
          <Link
            href="/docs/page-header"
            aria-current={current === "page-header" ? "page" : undefined}
          >
            Page header
          </Link>
          <Link
            href="/docs/empty-state"
            aria-current={current === "empty-state" ? "page" : undefined}
          >
            Empty state
          </Link>
        </details>
      </nav>
    </aside>
  )
}
