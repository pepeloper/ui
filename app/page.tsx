import type { Metadata } from "next"

import { ComponentShowcase } from "./component-showcase"

export const metadata: Metadata = {
  title: "Studio UI — My UI toolbox",
  description: "Components I use to build my projects.",
}

export default function Page() {
  return <ComponentShowcase />
}
