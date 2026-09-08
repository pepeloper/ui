import fs from "node:fs"
import path from "node:path"
import ts from "typescript"

// Extract signatures from the installable source, rather than hand-copying prop contracts.
const api = {}
for (const filename of fs
  .readdirSync("public/r")
  .filter((name) => name.endsWith(".json") && name !== "registry.json")) {
  const item = JSON.parse(
    fs.readFileSync(path.join("public/r", filename), "utf8")
  )
  const signatures = []
  for (const file of item.files ?? []) {
    if (!file.content || !file.path.endsWith(".tsx")) continue
    const ast = ts.createSourceFile(
      file.path,
      file.content,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX
    )
    for (const node of ast.statements) {
      if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node))
        signatures.push(node.getText(ast))
      if (
        ts.isFunctionDeclaration(node) &&
        node.name &&
        /^[A-Z]/.test(node.name.text)
      ) {
        const generics = node.typeParameters?.length
          ? `<${node.typeParameters.map((p) => p.getText(ast)).join(", ")}>`
          : ""
        signatures.push(
          `function ${node.name.text}${generics}(${node.parameters.map((p, i) => `${ts.isIdentifier(p.name) ? p.name.text : `props${i || ""}`}${p.questionToken ? "?" : ""}: ${p.type?.getText(ast) ?? "unknown"}`).join(", ")})`
        )
      }
    }
  }
  api[item.name] = signatures.join("\n\n")
}
fs.writeFileSync("app/docs/api.json", JSON.stringify(api, null, 2) + "\n")
console.log(
  `Generated API signatures for ${Object.keys(api).length} registry items.`
)
