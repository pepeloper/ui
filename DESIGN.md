# pepeloper/ui Design

Shared guidance for applications that consume `pepeloper/ui`. This document
defines the decisions to preserve when an app composes its own screens with
registry components.

## Intent

`pepeloper/ui` uses a dark, restrained, content-first interface. It should feel
precise and calm: clear typographic hierarchy, a single action color, closely
related surfaces, and easily readable interactive states.

These rules are an app's starting point. Products may add their own needs, but
they must preserve the semantic tokens, hierarchy, and interaction states.

## Principles

1. **Content first.** Understand the structure, copy, and primary action before
   adding decoration.
2. **Controlled contrast.** Use few surfaces and subtle tone differences;
   reserve orange for action, focus, and selection.
3. **One primary decision.** Every view needs one visible primary action and
   secondary actions with less visual weight.
4. **Composition over customization.** Reuse registry primitives and
   compositions before creating a local variant.
5. **Explicit states.** Hover, focus, pressed, disabled, loading, error,
   selected, and expanded states must be visibly represented.
6. **Readable density.** The interface can be compact, but it must never rely
   on tiny text, oversized icons, or arbitrary spacing.

## Color tokens

Apps must consume semantic colors rather than repeat hexadecimal values in
components. The current implementation lives in `app/globals.css` and uses this
dark foundation:

| Token | Base value | Use |
| --- | --- | --- |
| `--background` | `#171717` | Application background |
| `--foreground` | `#fafafa` | Primary text |
| `--card` | `#1c1c1c` | Cards and raised surfaces |
| `--popover` | `#222` | Menus, popovers, and overlays |
| `--muted` | `#242424` | Subtle state and secondary surface |
| `--secondary` | `#292929` | Secondary action |
| `--accent` | `#2b2b2b` | Neutral hover and selection |
| `--border` | `#303030` | Dividers and visible borders |
| `--input` | `#383838` | Input controls |
| `--muted-foreground` | `#a3a3a3` | Supporting text |
| `--studio-accent` | `#e15829` | Brand action, focus, and selection |
| `--ring` | `#e15829` | Focus ring |

Rules:

- The application background is `--background`; do not introduce an additional
  black for every section.
- Use `--card`, `--popover`, `--muted`, and `--secondary` to create tonal
  depth. Avoid decorative gradients by default.
- Borders must be restrained. A `--border` line or low-opacity treatment is
  usually enough.
- Reserve `--studio-accent` for actions, focus, hovered links, progress, and
  selection. Do not use it as a general text color.
- If an app needs light mode, keep the same semantic names and redefine their
  values; do not change components to use fixed colors.

## Typography

- **Sans:** Geist Sans (`--font-geist-sans`) for interface and content.
- **Mono:** Geist Mono (`--font-geist-mono`) for code, metadata, counters, and
  technical labels.
- Use moderate weights: 400 for copy, 500 for component headings, and 600 for
  page headings.
- The reference hierarchy is:
  - page title: `clamp(45px, 8vw, 96px)`, negative tracking, and line-height
    close to `1.05`;
  - section title: `27–30px`;
  - component title: `15–16px`;
  - body text: `14–16px`;
  - supporting text and metadata: `11–13px`;
  - code: Geist Mono at `11–12px`.
- Do not use uppercase to compensate for weak hierarchy. Use mono and a
  supporting color for small technical labels.

## Spacing and layout

Use Tailwind's spacing scale and favor these steps: `4`, `8`, `12`, `16`, `24`,
`32`, `48`, and `64px`. Exceptions must serve composition, not isolated visual
tweaks.

- The desktop container is at most `1088px` wide.
- Reference horizontal padding is `32px`; it may drop to `30px` on mobile.
- The two catalog columns use roughly `190px` for navigation and the remainder
  for content, with `30–55px` between them.
- A view must have a clear reading column. Divide into columns only when both
  parts remain useful at the available width.
- Keep the header full width when it is sticky. Its inner content may retain the
  app's max-width.
- On mobile, turn two-column grids into a single column and make overlays with
  substantial content into drawers or scrollable surfaces.

## Radius, borders, and depth

- The base radius is `10px` (`--radius: 0.625rem`). The whole rectangular scale
  (`rounded-sm` through `rounded-3xl`) derives from that token; do not set
  component-level radii. Reserve `rounded-full` for pills and circles.
- Use small radii (`6–10px`) for inputs, code blocks, and dense elements.
- Use medium radii (`12–16px`) for cards and control groups.
- Use large radii (`24px`) only for primary surfaces or deliberately rounded
  action buttons.
- Express depth with color and borders first. Shadows must be minimal and
  justified by a floating layer.
- Do not turn every row into an independent card. For lists and detail lists,
  use a shared surface and internal dividers.

## Components and interaction

- Use registry primitives (`Button`, `Input`, `Field`, `Dialog`, `Drawer`,
  `Popover`, `Tabs`, `List`, `DetailList`, and so on), extending them with
  `className` only when composition requires it.
- Keep Base UI composition and the triggers' `render` pattern. Do not replace an
  accessible trigger with a `div` using `onClick`.
- Buttons must express hierarchy: `default` for the primary action,
  `secondary` or `outline` for alternatives, `ghost` for supporting actions,
  and `destructive` only for destructive consequences.
- A selected navigation item may use accent text and a side marker; it does not
  need an orange background.
- Controls have a visible `--ring` focus state. Never remove an outline without
  an equivalent replacement.
- Use Lucide icons. Use `16px` for controls, `14px` for supporting context, and
  `12px` only for compact elements. Every icon must add meaning or improve the
  action.
- Put icons on the left when they explain the action type, and on the right when
  they indicate navigation, expansion, or exit.
- For a popover with complex content, use a drawer on mobile. Preserve its
  content, state, and callbacks.

## Forms

- Each control needs a `Label`, a description or help text when needed, and a
  semantically associated error.
- A placeholder is a hint, not a field label.
- Keep a control's width aligned with the content it accepts; do not stretch a
  short field across the screen without a reason.
- Errors must use the destructive token and explain how to resolve them.
- Disabled and loading states must prevent interaction without losing context
  about what is happening.

## Lists and composition

- Use `List` for homogeneous rows, `DetailList` for label/value pairs, and
  `ResourceList` for navigable elements with identity and metadata.
- Rows must share consistent height and padding. Use internal dividers rather
  than alternating backgrounds unless grouping is needed.
- `SectionShell` structures a view with title, description, navigation, and
  panels. Navigation must not be coupled to business logic.
- `PageHeader` provides headings with context, title, description, and action.
- `EmptyState` must explain what is missing and offer the next step; it is not a
  generic error message.
- Demos and examples must be domain-agnostic: projects, documents, preferences,
  resources, or activity are better examples than tournament, client, or
  business-specific data.

## Responsive behavior and overlays

- Design the version that keeps the primary action in the viewport first.
- Below `1000px`, reduce columns and gaps before reducing typography.
- Below `760px`, use a single column for catalogs and content; the sidebar may
  become a navigable control.
- A drawer with long content needs an internally scrollable area, a visible
  gesture handle, and must avoid allowing the body to capture its scroll.
- A dialog or popover must never be clipped by the viewport. On mobile,
  prioritize a bottom sheet or full-screen surface.
- Respect `prefers-reduced-motion`: every transition must be reducible to a
  minimal duration without losing information.

## Minimum accessibility

- Use semantic HTML elements and add roles only when the native element is not
  enough.
- Every interactive control must work with a keyboard and show focus.
- Decorative icons use `aria-hidden="true"`; icons that replace text need an
  accessible label.
- Relevant state changes must be announced or exposed in the DOM.
- Check contrast, tab order, 200% zoom, and a mobile viewport before considering
  a screen finished.

## Implementation and validation

1. Install the component from the registry and keep its source in the app:

   ```bash
   npx shadcn@latest add <REGISTRY_ORIGIN>/r/<name>.json
   ```

2. Import from `@/components/ui` and use `cn` to combine classes.
3. Apply semantic tokens in `globals.css`; do not create a second parallel
   palette.
4. Connect demo or screen actions to real handlers.
5. Validate every change with the consuming project's flow:

   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

Before integrating a component, review its preview, keyboard behavior, states,
mobile viewport, and behavior with long content. Installed source belongs to the
consuming app and may evolve, but any shared visual change must return to this
document and the semantic tokens.

## Avoid

- Do not mix in another typeface or icon library without an explicit product
  decision.
- Do not copy arbitrary color values into every component.
- Do not use strong shadows, glassmorphism, or gradients as default decoration.
- Do not represent every state with a solid background.
- Do not create examples or names that make a primitive look tied to one domain.
- Do not hide important content behind a hover state or a gesture without a
  keyboard equivalent.
