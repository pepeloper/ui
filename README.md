# Studio UI

My personal collection of React components and blocks.

## Local development

```sh
npm install
npm run dev
```

- `/`: searchable previews.
- `/docs`: quick setup.
- `/docs/{name}`: usage, API and source.

## Install a component

```sh
npx shadcn@latest init --preset b7PcNrWanY --template next --pointer
npx shadcn@latest add http://localhost:3000/r/button.json
```

React, Base UI, Tailwind 4 and TypeScript. The CLI copies source into your project.

## Structure

- `components/ui/`: primitives.
- `registry/default/`: custom blocks.
- `app/catalog-data.ts`: catalog labels and descriptions.
- `app/component-showcase.tsx`: live examples.
- `app/docs/examples.json`: copyable, typechecked examples.
- `public/r/`: generated registry files.

Update examples when changing a component. Regenerate the registry after source changes.

```sh
npm run registry:build
npm run docs:check
npm run lint
npm run build
```

The build generates API signatures and static docs. Set `NEXT_PUBLIC_REGISTRY_URL` and the registry `homepage` when using a hosted origin.

## Publish the registry

Deploy the project to Vercel or another Next.js host. The public registry is the generated `public/r/registry.json` plus the individual `/r/{name}.json` items.

Set `NEXT_PUBLIC_REGISTRY_URL` to the canonical site origin before building so the docs copy the correct install commands. Update `homepage` in `registry.json` to the same origin, then run `npm run registry:build` and deploy again.

Consumers can install directly:

```sh
npx shadcn@latest add https://your-domain.example/r/button.json
npx shadcn@latest add https://your-domain.example/r/date-picker.json
```

For a reusable namespace, configure it once in each app:

```sh
npx shadcn@latest registry add @pepeui=https://your-domain.example/r/{name}.json
npx shadcn@latest add @pepeui/date-picker
```
