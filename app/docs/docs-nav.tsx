"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react"
import { catalogCategories, componentCatalog } from "../catalog-data"

export function DocsNav({ current }: { current?: string }) {
  const [query, setQuery] = useState("")
  const normalizedQuery = query.trim().toLowerCase()
  const matches = (name: string, label: string) =>
    `${name} ${label}`.toLowerCase().includes(normalizedQuery)

  return (
    <aside className="docs-nav">
      <Link href="/#components">
        <ArrowLeftIcon aria-hidden="true" />
        <span>All components</span>
      </Link>
      <Link href="/docs" aria-current={!current ? "page" : undefined}>
        Quick setup
      </Link>
      <label className="search-box">
        <SearchIcon size={14} aria-hidden="true" />
        <input
          aria-label="Search components"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search components…"
        />
      </label>
      <nav aria-label="Component documentation">
        {catalogCategories.map((category) => {
          const categoryComponents = componentCatalog.filter(
            (c) => c.category === category
          )
          const visibleComponents = categoryComponents.filter((c) =>
            matches(c.name, c.label)
          )
          if (normalizedQuery && !visibleComponents.length) return null

          return (
            <details
              key={category}
              open={normalizedQuery
                ? true
                : categoryComponents.some(
                    (c) => c.name === current && c.category === category
                  )}
            >
              <summary>
                <ChevronRightIcon aria-hidden="true" />
                <span>{category}</span>
              </summary>
              {visibleComponents.map((c) => (
                <Link
                  key={c.name}
                  href={`/docs/${c.name}`}
                  aria-current={current === c.name ? "page" : undefined}
                >
                  {c.label}
                </Link>
              ))}
            </details>
          )
        })}
        {(!normalizedQuery ||
          matches("page-header", "Page header") ||
          matches("empty-state", "Empty state")) && (
          <details
            open={
              Boolean(normalizedQuery) ||
              current === "page-header" ||
              current === "empty-state"
            }
          >
            <summary>
              <ChevronRightIcon aria-hidden="true" />
              <span>Blocks</span>
            </summary>
            {matches("page-header", "Page header") && (
              <Link
                href="/docs/page-header"
                aria-current={current === "page-header" ? "page" : undefined}
              >
                Page header
              </Link>
            )}
            {matches("empty-state", "Empty state") && (
              <Link
                href="/docs/empty-state"
                aria-current={current === "empty-state" ? "page" : undefined}
              >
                Empty state
              </Link>
            )}
          </details>
        )}
      </nav>
    </aside>
  )
}
