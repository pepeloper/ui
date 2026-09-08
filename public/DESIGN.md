# pepeloper/ui Design

Guía compartida para las aplicaciones que consumen `pepeloper/ui`. Este documento define
las decisiones que deben mantenerse cuando una app compone sus propias pantallas
con los componentes del registry.

## Intención

`pepeloper/ui` usa una interfaz oscura, sobria y orientada al contenido. La interfaz debe
sentirse precisa y tranquila: una jerarquía tipográfica clara, un solo color de
acción, superficies cercanas entre sí y estados interactivos fáciles de leer.

Estas reglas son el punto de partida de una app. Los productos pueden añadir
necesidades propias, pero deben conservar los tokens semánticos, la jerarquía y
los estados de interacción.

## Principios

1. **Contenido primero.** La estructura, el texto y la acción principal deben
   entenderse antes de añadir decoración.
2. **Contraste contenido.** Usa pocas superficies y diferencias pequeñas de tono;
   reserva el naranja para acciones, foco y selección.
3. **Una decisión principal.** Cada vista debe tener una acción primaria visible y
   acciones secundarias con menos peso visual.
4. **Composición sobre personalización.** Reutiliza primitives y composiciones del
   registry antes de crear una variante local.
5. **Estados explícitos.** Hover, focus, pressed, disabled, loading, error,
   selected y expanded deben tener una representación visible.
6. **Densidad legible.** La interfaz puede ser compacta, pero nunca debe depender
   de texto diminuto, iconos enormes o espaciado arbitrario.

## Tokens de color

Las apps deben consumir colores semánticos, no repetir valores hexadecimales en
los componentes. La implementación actual vive en `app/globals.css` y usa esta
base oscura:

| Token | Valor base | Uso |
| --- | --- | --- |
| `--background` | `#171717` | Fondo de la aplicación |
| `--foreground` | `#fafafa` | Texto principal |
| `--card` | `#1c1c1c` | Cards y superficies elevadas |
| `--popover` | `#222` | Menús, popovers y overlays |
| `--muted` | `#242424` | Estado sutil y superficie secundaria |
| `--secondary` | `#292929` | Acción secundaria |
| `--accent` | `#2b2b2b` | Hover y selección neutra |
| `--border` | `#303030` | Separadores y bordes visibles |
| `--input` | `#383838` | Controles de entrada |
| `--muted-foreground` | `#a3a3a3` | Texto auxiliar |
| `--studio-accent` | `#e15829` | Acción, foco y selección de marca |
| `--ring` | `#e15829` | Anillo de foco |

Reglas:

- El fondo de la app es `--background`; no introduzcas un negro adicional para
  cada sección.
- Usa `--card`, `--popover`, `--muted` y `--secondary` para crear profundidad
  tonal. Evita gradientes decorativos por defecto.
- Los bordes deben ser discretos. Una línea de `--border` o una transparencia
  baja suele ser suficiente.
- `--studio-accent` se reserva para acciones, foco, enlaces en hover, progreso y
  selección. No lo uses como color general de texto.
- Si una app necesita modo claro, conserva los mismos nombres semánticos y
  redefine sus valores; no cambies los componentes para apuntar a colores fijos.

## Tipografía

- **Sans:** Geist Sans (`--font-geist-sans`) para interfaz y contenido.
- **Mono:** Geist Mono (`--font-geist-mono`) para código, metadatos, contadores y
  etiquetas técnicas.
- Usa pesos moderados: 400 para texto, 500 para títulos de componentes y 600 para
  títulos de página.
- La jerarquía de referencia es:
  - título de página: `clamp(45px, 8vw, 96px)`, tracking negativo y line-height
    cercano a `1.05`;
  - título de sección: `27–30px`;
  - título de componente: `15–16px`;
  - texto normal: `14–16px`;
  - ayuda y metadatos: `11–13px`;
  - código: Geist Mono a `11–12px`.
- No uses mayúsculas para compensar una jerarquía débil. Para etiquetas técnicas
  pequeñas, usa mono y un color auxiliar.

## Espaciado y layout

Usa la escala de spacing de Tailwind y prioriza estos pasos: `4`, `8`, `12`, `16`,
`24`, `32`, `48` y `64px`. Las excepciones deben responder a la composición, no a
ajustes visuales aislados.

- El contenedor de escritorio es `1088px` como máximo.
- El padding horizontal de referencia es `32px`; en móvil puede bajar a `30px`.
- Las dos columnas de catálogo usan aproximadamente `190px` para navegación y el
  resto para contenido, con `30–55px` de separación.
- Una vista debe tener una columna de lectura clara. Divide en columnas solo cuando
  ambas partes mantienen utilidad en el ancho disponible.
- Mantén el header a ancho completo cuando sea sticky. El contenido interior puede
  conservar el mismo max-width que el resto de la app.
- En móvil, pasa grids de dos columnas a una y convierte overlays con mucho
  contenido en drawers o superficies desplazables.

## Radios, bordes y profundidad

- El radio base es `10px` (`--radius: 0.625rem`).
- Usa radios pequeños (`6–10px`) para inputs, code blocks y elementos densos.
- Usa radios medios (`12–16px`) para cards y grupos de controles.
- Usa radios grandes (`24px`) solo en superficies principales o botones de acción
  claramente redondeados.
- La profundidad se expresa primero con color y borde. Las sombras deben ser
  mínimas y justificadas por una capa flotante.
- No conviertas cada fila en una card independiente. Para listas y detail lists,
  usa una superficie compartida y separadores internos.

## Componentes e interacción

- Usa los primitives del registry (`Button`, `Input`, `Field`, `Dialog`, `Drawer`,
  `Popover`, `Tabs`, `List`, `DetailList`, etc.) y extiéndelos con `className` solo
  cuando la composición lo necesite.
- Conserva la composición de Base UI y el patrón `render` de los triggers. No
  sustituyas un trigger accesible por un `div` con `onClick`.
- Los botones deben indicar jerarquía: `default` para la acción principal,
  `secondary` u `outline` para acciones alternativas, `ghost` para acciones
  auxiliares y `destructive` solo para consecuencias destructivas.
- Un elemento seleccionado de navegación puede usar texto de acento y una marca
  lateral; no necesita un fondo naranja.
- Los controles tienen un foco visible con `--ring`. Nunca elimines el outline sin
  proporcionar otro indicador equivalente.
- Los iconos son Lucide. Usa `16px` como tamaño de control, `14px` para contexto
  auxiliar y `12px` solo para elementos compactos. Cada icono debe aportar
  significado o mejorar la acción.
- Los iconos deben ir a la izquierda cuando explican el tipo de acción y a la
  derecha cuando indican navegación, expansión o salida.
- En un popover con contenido complejo, usa drawer en móvil. El cambio debe
  preservar el mismo contenido, estado y callbacks.

## Formularios

- Cada control debe tener `Label`, una descripción o ayuda cuando sea necesaria y
  un error asociado semánticamente.
- El placeholder es una sugerencia, no la etiqueta del campo.
- Mantén el ancho del control alineado con el contenido que acepta; no estires un
  campo corto a toda la pantalla sin motivo.
- Los errores deben usar el token destructivo y explicar cómo corregirlos.
- Los estados disabled y loading deben bloquear la interacción sin perder el
  contexto de lo que está ocurriendo.

## Listas y composición

- `List` sirve para filas homogéneas; `DetailList` para pares label/value; `ResourceList`
  para elementos navegables con identidad y metadatos.
- Las filas deben compartir una altura y un padding coherentes. Usa separadores
  internos, no fondos alternos salvo que exista una necesidad de agrupación.
- `SectionShell` estructura una vista con título, descripción, navegación y paneles.
  La navegación no debe acoplarse a la lógica de negocio.
- `PageHeader` resuelve encabezados con contexto, título, descripción y acción.
- `EmptyState` debe explicar qué falta y ofrecer el siguiente paso; no es un
  mensaje genérico de error.
- Las demos y ejemplos deben ser agnósticos del dominio: proyectos, documentos,
  preferencias, recursos o actividad son mejores ejemplos que datos de un torneo,
  cliente o negocio concreto.

## Responsive y overlays

- Diseña primero la versión que conserva la acción principal en el viewport.
- A partir de `1000px`, reduce columnas y gaps antes de reducir tipografía.
- A partir de `760px`, usa una sola columna para catálogos y contenido; el sidebar
  puede pasar a un control navegable.
- Un drawer con contenido largo debe tener un área interna desplazable, mantener el
  handler de gesto visible y evitar que el body capture el scroll.
- Un dialog o popover nunca debe quedar cortado por el viewport. En móvil, prioriza
  una superficie inferior o de pantalla completa.
- Respeta `prefers-reduced-motion`: todas las transiciones deben poder reducirse a
  una duración mínima sin perder información.

## Accesibilidad mínima

- Usa elementos HTML semánticos y roles solo cuando el elemento nativo no alcanza.
- Todos los controles interactivos deben poder usarse con teclado y mostrar foco.
- Los iconos decorativos llevan `aria-hidden="true"`; los iconos que sustituyen
  texto necesitan una etiqueta accesible.
- Los cambios de estado relevantes deben anunciarse o quedar expuestos en el DOM.
- Comprueba contraste, orden de tabulación, zoom al 200% y viewport móvil antes de
  dar una pantalla por terminada.

## Implementación y validación

1. Instala el componente desde el registry y conserva su fuente en la app:

   ```bash
   npx shadcn@latest add <REGISTRY_ORIGIN>/r/<name>.json
   ```

2. Importa desde `@/components/ui` y usa `cn` para combinar clases.
3. Aplica tokens semánticos en `globals.css`; no crees una segunda paleta paralela.
4. Conecta las acciones de la demo o de la pantalla a handlers reales.
5. Valida cada cambio con el flujo del proyecto consumidor:

   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

Antes de integrar un componente, revisa su preview, teclado, estados, viewport
móvil y comportamiento con contenido largo. La fuente instalada pertenece a la
app consumidora y puede evolucionar, pero cualquier cambio visual compartido debe
volver a este documento y a los tokens semánticos.

## Evitar

- No mezclar otra familia tipográfica o librería de iconos sin una decisión de
  producto explícita.
- No copiar valores de color arbitrarios en cada componente.
- No usar sombras fuertes, glassmorphism o gradientes como decoración por defecto.
- No representar todos los estados con un fondo lleno.
- No crear ejemplos o nombres que hagan que un primitive parezca ligado a un
  dominio concreto.
- No ocultar contenido importante detrás de un hover o de un gesto que no tenga
  equivalente con teclado.
