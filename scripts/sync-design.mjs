import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const sourcePath = path.join(root, "DESIGN.md")
const publicPath = path.join(root, "public", "DESIGN.md")
const source = await readFile(sourcePath, "utf8")

await writeFile(publicPath, source)
console.log("Synced DESIGN.md to public/DESIGN.md")
