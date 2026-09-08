import fs from "node:fs"
import path from "node:path"
import ts from "typescript"

const examples = JSON.parse(fs.readFileSync("app/docs/examples.json", "utf8"))
const config = ts.readConfigFile("tsconfig.json", ts.sys.readFile)
const { options } = ts.parseJsonConfigFileContent(
  config.config,
  ts.sys,
  process.cwd()
)
const files = new Map(
  Object.entries(examples).map(([name, code]) => [
    path.join(process.cwd(), "__doc_examples__", `${name}.tsx`),
    code,
  ])
)
const host = ts.createCompilerHost(options)
const originalGetSourceFile = host.getSourceFile.bind(host)
host.getSourceFile = (
  filename,
  languageVersion,
  onError,
  shouldCreateNewSourceFile
) =>
  files.has(filename)
    ? ts.createSourceFile(
        filename,
        files.get(filename),
        languageVersion,
        true,
        ts.ScriptKind.TSX
      )
    : originalGetSourceFile(
        filename,
        languageVersion,
        onError,
        shouldCreateNewSourceFile
      )
const program = ts.createProgram(
  [...files.keys()],
  { ...options, noEmit: true, incremental: false },
  host
)
const errors = ts.getPreEmitDiagnostics(program)
if (errors.length) {
  console.error(
    ts.formatDiagnosticsWithColorAndContext(errors, {
      getCurrentDirectory: ts.sys.getCurrentDirectory,
      getCanonicalFileName: (f) => f,
      getNewLine: () => "\n",
    })
  )
  process.exit(1)
}
console.log(`${files.size} documentation examples pass TypeScript.`)
