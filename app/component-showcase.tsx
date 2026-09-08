"use client"

import * as React from "react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { enUS } from "date-fns/locale/en-US"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Clock3Icon,
  FolderOpenIcon,
  Layers3Icon,
  MoreHorizontalIcon,
  SearchIcon,
  SparklesIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Attachment,
  AttachmentAction,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import {
  Avatar,
  AvatarFallback,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import { CommandPalette } from "@/components/ui/command-palette"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { DateInput } from "@/components/ui/date-input"
import { DatePicker } from "@/components/ui/date-picker"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DirectionProvider } from "@/components/ui/direction"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  FormField,
  FormFieldControl,
  FormFieldDescription,
  FormFieldError,
  FormFieldLabel,
} from "@/components/ui/form-field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
  List,
  ListItem,
  ListItemContent,
  ListItemLabel,
  ListItemMedia,
  ListItemValue,
} from "@/components/ui/list"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { PasswordInput } from "@/components/ui/password-input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress, ProgressLabel } from "@/components/ui/progress"
import { DetailList, DetailListItem, DetailListLabel, DetailListValue } from "@/components/ui/detail-list"
import { ResourceList, ResourceRow } from "@/components/ui/resource-list"
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogDescription,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
  ResponsiveDialogTrigger,
} from "@/components/ui/responsive-dialog"
import {
  ResponsiveSheet,
  ResponsiveSheetContent,
  ResponsiveSheetDescription,
  ResponsiveSheetHeader,
  ResponsiveSheetTitle,
  ResponsiveSheetTrigger,
} from "@/components/ui/responsive-sheet"
import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnaireProgress,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  SectionShell,
  SectionShellContent,
  SectionShellDescription,
  SectionShellHeader,
  SectionShellNav,
  SectionShellNavItem,
  SectionShellPanel,
  SectionShellTitle,
} from "@/components/ui/section-shell"
import {
  SettingsCard,
  SettingsCardContent,
  SettingsCardDescription,
  SettingsCardHeader,
  SettingsCardTitle,
  SettingsRow,
  SettingsRowControl,
  SettingsRowDescription,
  SettingsRowLabel,
  SettingsRowTitle,
} from "@/components/ui/settings-card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { StateBadge } from "@/components/ui/state-badge"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toaster, createToastManager } from "@/components/ui/toast"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  catalogCategories,
  componentCatalog,
  type ComponentCategory,
  type ComponentDefinition,
} from "./catalog-data"

const categoryLabels: Record<ComponentCategory, string> = {
  Forms: "Form",
  Layout: "Layout",
  Navigation: "Nav",
  Overlay: "Overlay",
  Feedback: "Feedback",
  Content: "Content",
}

const showcaseToastManager = createToastManager()
const chartData = [
  { month: "Jan", usage: 38 },
  { month: "Feb", usage: 56 },
  { month: "Mar", usage: 68 },
  { month: "Apr", usage: 82 },
]
const chartConfig = {
  usage: { label: "Usage", color: "var(--color-primary)" },
}

const SpecimenVisibilityContext = React.createContext<Set<string> | null>(null)

function PreviewCard({
  component,
  children,
}: {
  component: ComponentDefinition
  children: React.ReactNode
}) {
  const visibleNames = React.useContext(SpecimenVisibilityContext)

  if (visibleNames && !visibleNames.has(component.name)) return null

  return (
    <article
      id={component.name}
      className="specimen scroll-mt-24 overflow-hidden rounded-xl border bg-card"
    >
      <div className="flex items-start justify-between gap-4 border-b px-5 py-4">
        <div>
          <h3 className="font-mono text-sm font-medium">{component.label}</h3>
          <p className="mt-1 max-w-sm text-xs leading-5 text-muted-foreground">
            {component.description}
          </p>
        </div>
        <Badge variant="outline" className="shrink-0 font-mono text-[10px]">
          {categoryLabels[component.category]}
        </Badge>
      </div>
      <div className="specimen-stage flex min-h-48 items-center justify-center p-5">
        {children}
      </div>
      <div className="border-t bg-muted/30 px-5 py-2.5">
        <Link
          href={`/docs/${component.name}`}
          className="flex items-center justify-between text-xs font-medium"
        >
          View component <ChevronRightIcon className="size-3" />
        </Link>
      </div>
    </article>
  )
}

function getComponent(name: string) {
  return componentCatalog.find((component) => component.name === name)
}

export function LiveSpecimens({
  visibleNames,
  showSidebarDemo = false,
}: {
  visibleNames: Set<string>
  showSidebarDemo?: boolean
}) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [checked, setChecked] = useState(true)
  const [switchOn, setSwitchOn] = useState(false)
  const [progress, setProgress] = useState(68)
  const [collapsed, setCollapsed] = useState(false)
  const [sectionTab, setSectionTab] = useState("general")

  const component = (name: string) => {
    const result = getComponent(name)
    if (!result) throw new Error(`Missing component metadata: ${name}`)
    return result
  }

  return (
    <SpecimenVisibilityContext.Provider value={visibleNames}>
      <div className="specimen-grid grid gap-5 md:grid-cols-2">
        <PreviewCard component={component("button")}>
          <div className="w-full max-w-xl space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 border-t pt-3">
              <Button size="xs">XS</Button>
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button variant="outline" size="icon" aria-label="Add">
                <SparklesIcon />
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </PreviewCard>

        <PreviewCard component={component("badge")}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </PreviewCard>

        <PreviewCard component={component("card")}>
          <Card className="w-full max-w-xs shadow-none">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Team workspace</CardTitle>
              <CardDescription>Reusable compound surface.</CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-4 text-sm text-muted-foreground">
              Content, header and footer stay composable.
            </CardContent>
          </Card>
        </PreviewCard>

        <PreviewCard component={component("input")}>
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="showcase-input">Project name</Label>
            <Input id="showcase-input" placeholder="e.g. pepeloper/ui" />
          </div>
        </PreviewCard>

        <PreviewCard component={component("password-input")}>
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="showcase-password">Access key</Label>
            <PasswordInput id="showcase-password" defaultValue="source-first" />
          </div>
        </PreviewCard>

        <PreviewCard component={component("date-input")}>
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="showcase-date">Review date</Label>
            <DateInput
              id="showcase-date"
              defaultValue="2026-09-08"
              aria-label="Review date"
            />
          </div>
        </PreviewCard>

        <PreviewCard component={component("date-picker")}>
          <DatePicker
            defaultValue={new Date(2026, 8, 8)}
            locale={enUS}
            className="w-56"
          />
        </PreviewCard>

        <PreviewCard component={component("input-group")}>
          <InputGroup className="max-w-xs">
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="studio.example.com" />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </PreviewCard>

        <PreviewCard component={component("textarea")}>
          <Textarea
            className="max-w-xs"
            placeholder="Add a short description…"
          />
        </PreviewCard>

        <PreviewCard component={component("checkbox")}>
          <div className="flex items-start gap-3">
            <Checkbox
              id="showcase-checkbox"
              checked={checked}
              onCheckedChange={(value) => setChecked(value === true)}
            />
            <div className="grid gap-1">
              <Label htmlFor="showcase-checkbox">Enable notifications</Label>
              <p className="text-xs text-muted-foreground">
                Receive updates about this project.
              </p>
            </div>
          </div>
        </PreviewCard>

        <PreviewCard component={component("radio-group")}>
          <RadioGroup defaultValue="comfortable" className="w-full max-w-xs">
            {[
              ["compact", "Compact"],
              ["comfortable", "Comfortable"],
              ["spacious", "Spacious"],
            ].map(([value, label]) => (
              <div key={value} className="flex items-center gap-2">
                <RadioGroupItem value={value} id={`radio-${value}`} />
                <Label htmlFor={`radio-${value}`}>{label}</Label>
              </div>
            ))}
          </RadioGroup>
        </PreviewCard>

        <PreviewCard component={component("switch")}>
          <div className="flex w-full max-w-xs items-center justify-between gap-4 rounded-xl border p-3">
            <div>
              <Label htmlFor="showcase-switch">Public profile</Label>
              <p className="mt-1 text-xs text-muted-foreground">
                Visible to your team.
              </p>
            </div>
            <Switch
              id="showcase-switch"
              checked={switchOn}
              onCheckedChange={setSwitchOn}
            />
          </div>
        </PreviewCard>

        <PreviewCard component={component("slider")}>
          <div className="w-full max-w-xs space-y-3">
            <div className="flex justify-between text-xs">
              <span>Density</span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Slider
              value={[progress]}
              onValueChange={(value) =>
                setProgress(Array.isArray(value) ? (value[0] ?? 0) : value)
              }
              max={100}
            />
          </div>
        </PreviewCard>

        <PreviewCard component={component("progress")}>
          <div className="w-full max-w-xs space-y-2">
            <Progress value={progress} locale="en-US">
              <div className="flex items-center">
                <ProgressLabel>Uploading assets</ProgressLabel>
                <span className="ml-auto text-sm text-muted-foreground tabular-nums">
                  {progress}%
                </span>
              </div>
            </Progress>
          </div>
        </PreviewCard>

        <PreviewCard component={component("accordion")}>
          <Accordion className="w-full max-w-xs" defaultValue={["item-1"]}>
            <AccordionItem value="item-1">
              <AccordionTrigger>Why source-first?</AccordionTrigger>
              <AccordionContent>
                Consumers own the code and can evolve it with their product.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is shared?</AccordionTrigger>
              <AccordionContent>
                Tokens, accessible behavior and proven composition patterns.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PreviewCard>

        <PreviewCard component={component("tabs")}>
          <Tabs defaultValue="preview" className="w-full max-w-xs">
            <TabsList className="w-full">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <TabsContent value="preview" className="pt-3">
              <div className="rounded-lg border bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                Live preview content
              </div>
            </TabsContent>
            <TabsContent
              value="code"
              className="pt-3 font-mono text-xs text-muted-foreground"
            >
              &lt;Tabs defaultValue=&quot;preview&quot; /&gt;
            </TabsContent>
          </Tabs>
        </PreviewCard>

        <PreviewCard component={component("alert")}>
          <Alert className="max-w-xs">
            <AlertTitle>Registry ready</AlertTitle>
            <AlertDescription>
              Install the source into your app and keep ownership of the code.
            </AlertDescription>
          </Alert>
        </PreviewCard>

        <PreviewCard component={component("avatar")}>
          <div className="flex items-center gap-4">
            <Avatar size="lg">
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1">
              <Avatar className="after:hidden">
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
              <Avatar className="after:hidden">
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <AvatarGroupCount className="border-2 border-background ring-0">
                +4
              </AvatarGroupCount>
            </div>
          </div>
        </PreviewCard>

        <PreviewCard component={component("breadcrumb")}>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">pepeloper/ui</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <MoreHorizontalIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Button</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </PreviewCard>

        <PreviewCard component={component("dialog")}>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger render={<Button variant="outline" />}>
              Open dialog
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share component</DialogTitle>
                <DialogDescription>
                  Copy the install command into your next project.
                </DialogDescription>
              </DialogHeader>
              <code className="rounded-lg bg-muted p-3 text-xs">
                npx shadcn@latest add button
              </code>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => setDialogOpen(false)}>Done</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </PreviewCard>

        <PreviewCard component={component("responsive-dialog")}>
          <ResponsiveDialog>
            <ResponsiveDialogTrigger render={<Button variant="outline" />}>
              Open responsive dialog
            </ResponsiveDialogTrigger>
            <ResponsiveDialogContent>
              <ResponsiveDialogHeader>
                <ResponsiveDialogTitle>Review changes</ResponsiveDialogTitle>
                <ResponsiveDialogDescription>
                  The same API uses a dialog on desktop and a swipeable drawer on mobile.
                </ResponsiveDialogDescription>
              </ResponsiveDialogHeader>
              <p className="px-4 pb-4 text-sm text-muted-foreground">
                Content stays scrollable when the surface grows.
              </p>
            </ResponsiveDialogContent>
          </ResponsiveDialog>
        </PreviewCard>

        <PreviewCard component={component("dropdown-menu")}>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Move to…</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </PreviewCard>

        <PreviewCard component={component("popover")}>
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              View details
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <PopoverHeader>
                <PopoverTitle>Popover content</PopoverTitle>
                <PopoverDescription>
                  Anchored context without a full modal.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </PreviewCard>

        <PreviewCard component={component("responsive-sheet")}>
          <ResponsiveSheet>
            <ResponsiveSheetTrigger render={<Button variant="outline" />}>
              Open responsive sheet
            </ResponsiveSheetTrigger>
            <ResponsiveSheetContent>
              <ResponsiveSheetHeader>
                <ResponsiveSheetTitle>Inspector</ResponsiveSheetTitle>
                <ResponsiveSheetDescription>
                  A side panel that becomes a bottom drawer on mobile.
                </ResponsiveSheetDescription>
              </ResponsiveSheetHeader>
              <div className="px-6 pb-6 text-sm text-muted-foreground">
                Useful for contextual settings and detail views.
              </div>
            </ResponsiveSheetContent>
          </ResponsiveSheet>
        </PreviewCard>

        <PreviewCard component={component("command-palette")}>
          <CommandPalette
            items={[
              { value: "components", label: "Browse components", group: "Navigate" },
              { value: "registry", label: "Open registry", group: "Navigate" },
              { value: "copy", label: "Copy install command", group: "Actions" },
            ]}
          />
        </PreviewCard>

        <PreviewCard component={component("tooltip")}>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="sm" />}>
              Hover or focus me
            </TooltipTrigger>
            <TooltipContent>Helpful context, on demand.</TooltipContent>
          </Tooltip>
        </PreviewCard>

        <PreviewCard component={component("empty")}>
          <Empty className="min-h-28 border p-4">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon />
              </EmptyMedia>
              <EmptyTitle>No results</EmptyTitle>
              <EmptyDescription>Try another search term.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm" variant="outline">
                Clear search
              </Button>
            </EmptyContent>
          </Empty>
        </PreviewCard>

        <PreviewCard component={component("table")}>
          <Table className="min-w-72 text-xs">
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono">button</TableCell>
                <TableCell>
                  <Badge variant="secondary">Ready</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono">dialog</TableCell>
                <TableCell>
                  <Badge variant="secondary">Ready</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </PreviewCard>

        <PreviewCard component={component("pagination")}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </PreviewCard>

        <PreviewCard component={component("skeleton")}>
          <div className="flex w-full max-w-xs items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        </PreviewCard>

        <PreviewCard component={component("spinner")}>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Spinner /> Syncing registry…
          </div>
        </PreviewCard>

        <PreviewCard component={component("toggle")}>
          <Toggle
            variant="outline"
            aria-label="Toggle favourite"
            className="aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground"
          >
            <SparklesIcon /> Favourite
          </Toggle>
        </PreviewCard>

        <PreviewCard component={component("toggle-group")}>
          <ToggleGroup
            defaultValue={["center"]}
            variant="outline"
            aria-label="Text alignment"
          >
            <ToggleGroupItem
              value="left"
              className="aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground"
            >
              Left
            </ToggleGroupItem>
            <ToggleGroupItem
              value="center"
              className="aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground"
            >
              Center
            </ToggleGroupItem>
            <ToggleGroupItem
              value="right"
              className="aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground"
            >
              Right
            </ToggleGroupItem>
          </ToggleGroup>
        </PreviewCard>

        <PreviewCard component={component("select")}>
          <div className="flex min-h-60 w-full items-center justify-center">
            <Select defaultValue="system">
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent alignItemWithTrigger={false} sideOffset={8}>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </PreviewCard>

        <PreviewCard component={component("native-select")}>
          <NativeSelect defaultValue="system" className="w-44">
            <NativeSelectOption value="system">System</NativeSelectOption>
            <NativeSelectOption value="light">Light</NativeSelectOption>
            <NativeSelectOption value="dark">Dark</NativeSelectOption>
          </NativeSelect>
        </PreviewCard>

        <PreviewCard component={component("input-otp")}>
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </PreviewCard>

        <PreviewCard component={component("field")}>
          <FieldSet className="w-full max-w-xs">
            <Field>
              <FieldLabel htmlFor="field-email">Email</FieldLabel>
              <Input id="field-email" placeholder="you@example.com" />
              <FieldDescription>
                We only use this for account updates.
              </FieldDescription>
            </Field>
          </FieldSet>
        </PreviewCard>

        <PreviewCard component={component("form-field")}>
          <FormField id="showcase-form-field" invalid className="w-full max-w-xs">
            <FormFieldLabel>Project name</FormFieldLabel>
            <FormFieldControl>
              <Input defaultValue="pepeloper/ui" />
            </FormFieldControl>
            <FormFieldDescription>Shown in your workspace navigation.</FormFieldDescription>
            <FormFieldError>Choose a name with at least three characters.</FormFieldError>
          </FormField>
        </PreviewCard>

        <PreviewCard component={component("item")}>
          <Item variant="outline" className="w-full max-w-xs">
            <ItemMedia variant="icon">
              <CheckIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Verified workspace</ItemTitle>
              <ItemDescription>All checks are passing.</ItemDescription>
            </ItemContent>
            <Badge variant="secondary">Ready</Badge>
          </Item>
        </PreviewCard>

        <PreviewCard component={component("kbd")}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Open search{" "}
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
        </PreviewCard>

        <PreviewCard component={component("marker")}>
          <Marker>
            <MarkerIcon>
              <SparklesIcon />
            </MarkerIcon>
            <MarkerContent>Source-first by default.</MarkerContent>
          </Marker>
        </PreviewCard>

        <PreviewCard component={component("message")}>
          <Message className="w-full max-w-xs flex-col gap-2 rounded-xl border p-3">
            <MessageHeader className="w-full justify-between px-0">
              <span className="font-medium">Studio assistant</span>
              <span className="text-muted-foreground">now</span>
            </MessageHeader>
            <MessageContent className="w-full">
              Every component is visible in its own context.
            </MessageContent>
            <MessageFooter className="w-full px-0">
              <span>Source-first</span>
            </MessageFooter>
          </Message>
        </PreviewCard>

        <PreviewCard component={component("collapsible")}>
          <Collapsible
            open={!collapsed}
            onOpenChange={(open) => setCollapsed(!open)}
            className="w-full max-w-xs space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Advanced settings</span>
              <CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>
                {collapsed ? "Show" : "Hide"}
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="rounded-lg border p-3 text-xs text-muted-foreground">
              Additional options stay close without taking over the screen.
            </CollapsibleContent>
          </Collapsible>
        </PreviewCard>

        <PreviewCard component={component("hover-card")}>
          <HoverCard>
            <HoverCardTrigger render={<Button variant="link" />}>
              @studio
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm font-medium">pepeloper/ui</p>
              <p className="mt-1 text-xs text-muted-foreground">
                A source-first component registry.
              </p>
            </HoverCardContent>
          </HoverCard>
        </PreviewCard>

        <PreviewCard component={component("scroll-area")}>
          <ScrollArea className="h-24 w-full max-w-xs rounded-lg border p-3">
            <div className="space-y-3 text-xs text-muted-foreground">
              <p>Scroll Area keeps long content inside a deliberate surface.</p>
              <Separator />
              <p>It works for lists, side panels and dense settings.</p>
              <Separator />
              <p>The scrollbar stays part of the component contract.</p>
            </div>
          </ScrollArea>
        </PreviewCard>

        <PreviewCard component={component("aspect-ratio")}>
          <AspectRatio
            ratio={16 / 9}
            className="w-full max-w-xs overflow-hidden rounded-xl bg-muted"
          >
            <div className="flex size-full items-center justify-center text-xs text-muted-foreground">
              16 / 9 surface
            </div>
          </AspectRatio>
        </PreviewCard>

        <PreviewCard component={component("separator")}>
          <div className="w-full max-w-xs space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Tokens</span>
              <span className="text-muted-foreground">Semantic</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Source</span>
              <span className="text-muted-foreground">Owned</span>
            </div>
          </div>
        </PreviewCard>
        <PreviewCard component={component("alert-dialog")}>
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              Delete workspace
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete workspace?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action is reversible for 30 days.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </PreviewCard>

        <PreviewCard component={component("attachment")}>
          <Attachment state="done" className="max-w-xs">
            <AttachmentMedia>
              <span className="font-mono text-xs">PDF</span>
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>product-brief.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB · Ready</AttachmentDescription>
            </AttachmentContent>
            <AttachmentAction aria-label="Remove attachment">
              ×
            </AttachmentAction>
          </Attachment>
        </PreviewCard>

        <PreviewCard component={component("bubble")}>
          <BubbleGroup className="w-full max-w-xs">
            <Bubble>
              <BubbleContent>
                Source-first keeps the API in your hands.
              </BubbleContent>
            </Bubble>
            <Bubble align="end" variant="secondary">
              <BubbleContent>That is the point.</BubbleContent>
            </Bubble>
          </BubbleGroup>
        </PreviewCard>

        <PreviewCard component={component("button-group")}>
          <ButtonGroup>
            <Button variant="outline">Back</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Continue</Button>
            <ButtonGroupText>⌘↵</ButtonGroupText>
          </ButtonGroup>
        </PreviewCard>

        <PreviewCard component={component("calendar")}>
          <Calendar
            mode="single"
            locale={enUS}
            selected={new Date(2026, 8, 7)}
            className="rounded-xl border"
          />
        </PreviewCard>

        <PreviewCard component={component("carousel")}>
          <Carousel opts={{ loop: true }} className="w-full max-w-xs">
            <CarouselContent>
              {["Tokens", "Behavior", "Ownership"].map((label) => (
                <CarouselItem key={label}>
                  <div className="rounded-xl border bg-muted/40 p-6 text-center text-sm font-medium">
                    {label}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </PreviewCard>

        <PreviewCard component={component("chart")}>
          <ChartContainer config={chartConfig} className="h-36 w-full max-w-xs">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="usage" fill="var(--color-usage)" radius={6} />
            </BarChart>
          </ChartContainer>
        </PreviewCard>

        <PreviewCard component={component("combobox")}>
          <Combobox items={["Design", "Engineering", "Research"]}>
            <ComboboxInput placeholder="Assign a team…" className="w-64" />
            <ComboboxContent>
              <ComboboxEmpty>No team found.</ComboboxEmpty>
              <ComboboxList>
                {["Design", "Engineering", "Research"].map((team) => (
                  <ComboboxItem key={team} value={team}>
                    {team}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </PreviewCard>

        <PreviewCard component={component("command")}>
          <Command className="w-full max-w-xs border">
            <CommandInput placeholder="Search actions…" />
            <CommandList>
              <CommandEmpty>No action found.</CommandEmpty>
              <CommandGroup heading="Workspace">
                <CommandItem value="components">
                  Components <CommandShortcut>⌘1</CommandShortcut>
                </CommandItem>
                <CommandItem value="registry">
                  Registry <CommandShortcut>⌘2</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PreviewCard>

        <PreviewCard component={component("context-menu")}>
          <ContextMenu>
            <ContextMenuTrigger className="flex h-20 w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
              Right click this surface
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                Open preview<ContextMenuShortcut>↵</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Copy install command</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </PreviewCard>

        <PreviewCard component={component("direction")}>
          <DirectionProvider direction="ltr">
            <div className="rounded-xl border px-4 py-3 text-sm">
              Direction-aware primitives
            </div>
          </DirectionProvider>
        </PreviewCard>

        <PreviewCard component={component("drawer")}>
          <Drawer showSwipeHandle>
            <DrawerTrigger render={<Button variant="outline" />}>
              Open drawer
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Quick settings</DrawerTitle>
                <DrawerDescription>Focused mobile surface.</DrawerDescription>
              </DrawerHeader>
              <div className="flex flex-col gap-3 px-4 py-4 text-sm text-muted-foreground">
                {Array.from({ length: 20 }, (_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <span>Preference {index + 1}</span>
                    <span className="text-xs">Ready</span>
                  </div>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose render={<Button />}>Save changes</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </PreviewCard>

        <PreviewCard component={component("label")}>
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="standalone-label">Workspace name</Label>
            <Input id="standalone-label" defaultValue="pepeloper/ui" />
          </div>
        </PreviewCard>

        <PreviewCard component={component("list")}>
          <List className="max-w-xl">
            <ListItem>
              <ListItemMedia>
                <FolderOpenIcon />
              </ListItemMedia>
              <ListItemContent>
                <ListItemLabel>Open projects</ListItemLabel>
                <ListItemValue>12 active projects</ListItemValue>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemMedia>
                <Clock3Icon />
              </ListItemMedia>
              <ListItemContent>
                <ListItemLabel>Last updated</ListItemLabel>
                <ListItemValue>Today, 9:42 AM</ListItemValue>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemMedia>
                <Layers3Icon />
              </ListItemMedia>
              <ListItemContent>
                <ListItemLabel>Workspace type</ListItemLabel>
                <ListItemValue>Personal workspace</ListItemValue>
              </ListItemContent>
            </ListItem>
          </List>
        </PreviewCard>

        <PreviewCard component={component("resource-list")}>
          <ResourceList className="w-full max-w-md">
            <ResourceRow title="Design system" subtitle="Updated 2 minutes ago" fallback="DS" href="#" />
            <ResourceRow title="Marketing site" subtitle="Updated yesterday" fallback="MS" href="#" />
          </ResourceList>
        </PreviewCard>

        <PreviewCard component={component("detail-list")}>
          <DetailList className="w-full max-w-md">
            <DetailListItem>
              <DetailListLabel>Environment</DetailListLabel>
              <DetailListValue>Production</DetailListValue>
            </DetailListItem>
            <DetailListItem>
              <DetailListLabel>Last deployment</DetailListLabel>
              <DetailListValue>Today at 09:42</DetailListValue>
            </DetailListItem>
          </DetailList>
        </PreviewCard>

        <PreviewCard component={component("settings-card")}>
          <SettingsCard className="w-full max-w-md">
            <SettingsCardHeader>
              <div>
                <SettingsCardTitle>Preferences</SettingsCardTitle>
                <SettingsCardDescription>Keep the workspace focused.</SettingsCardDescription>
              </div>
            </SettingsCardHeader>
            <SettingsCardContent>
              <SettingsRow>
                <SettingsRowLabel>
                  <SettingsRowTitle>Email updates</SettingsRowTitle>
                  <SettingsRowDescription>Occasional product notes.</SettingsRowDescription>
                </SettingsRowLabel>
                <SettingsRowControl><Switch defaultChecked /></SettingsRowControl>
              </SettingsRow>
            </SettingsCardContent>
          </SettingsCard>
        </PreviewCard>

        <PreviewCard component={component("section-shell")}>
          <SectionShell
            className="w-full max-w-md"
            value={sectionTab}
            onValueChange={setSectionTab}
          >
            <SectionShellHeader>
              <div>
                <SectionShellTitle>Project settings</SectionShellTitle>
                <SectionShellDescription>Organize related views without coupling navigation.</SectionShellDescription>
              </div>
            </SectionShellHeader>
            <SectionShellNav aria-label="Project settings sections">
              <SectionShellNavItem value="general">General</SectionShellNavItem>
              <SectionShellNavItem value="members">Members</SectionShellNavItem>
              <SectionShellNavItem value="billing">Billing</SectionShellNavItem>
            </SectionShellNav>
            <SectionShellContent className="rounded-xl border p-3 text-sm text-muted-foreground">
              <SectionShellPanel value="general">General settings content</SectionShellPanel>
              <SectionShellPanel value="members">Members settings content</SectionShellPanel>
              <SectionShellPanel value="billing">Billing settings content</SectionShellPanel>
            </SectionShellContent>
          </SectionShell>
        </PreviewCard>

        <PreviewCard component={component("state-badge")}>
          <div className="flex flex-wrap items-center gap-2">
            <StateBadge state="Ready" />
            <StateBadge state="Pending" />
            <StateBadge state="Failed" />
          </div>
        </PreviewCard>

        <PreviewCard component={component("menubar")}>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New project</MenubarItem>
                <MenubarItem>Export registry</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Components</MenubarItem>
                <MenubarItem>Blocks</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </PreviewCard>

        <PreviewCard component={component("message-scroller")}>
          <MessageScrollerProvider>
            <MessageScroller className="h-32 w-full max-w-xs rounded-xl border p-3">
              <MessageScrollerViewport aria-label="Messages">
                <MessageScrollerContent>
                  <MessageScrollerItem messageId="one">
                    <div className="rounded-lg bg-muted p-2 text-xs">
                      Design review is ready.
                    </div>
                  </MessageScrollerItem>
                  <MessageScrollerItem messageId="two">
                    <div className="rounded-lg bg-primary p-2 text-xs text-primary-foreground">
                      Ship the source.
                    </div>
                  </MessageScrollerItem>
                </MessageScrollerContent>
              </MessageScrollerViewport>
            </MessageScroller>
          </MessageScrollerProvider>
        </PreviewCard>

        <PreviewCard component={component("navigation-menu")}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="/#components">
                    Components
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/#blocks">
                    Blocks
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/r/registry.json">
                  Registry
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </PreviewCard>

        <PreviewCard component={component("questionnaire")}>
          <Questionnaire
            className="w-full max-w-xs"
            items={[
              {
                name: "intent",
                choices: [{ value: "ship" }, { value: "explore" }],
              },
            ]}
          >
            <QuestionnaireProgress />
            <QuestionnaireItem name="intent">
              <QuestionnaireTitle>What are you shipping?</QuestionnaireTitle>
              <QuestionnaireDescription>
                Choose the closest fit.
              </QuestionnaireDescription>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="ship">
                  A product surface
                </QuestionnaireChoice>
                <QuestionnaireChoice value="explore">
                  An experiment
                </QuestionnaireChoice>
              </QuestionnaireChoices>
            </QuestionnaireItem>
            <div className="flex justify-end">
              <QuestionnaireNext size="sm">Next</QuestionnaireNext>
            </div>
          </Questionnaire>
        </PreviewCard>

        <PreviewCard component={component("resizable")}>
          <ResizablePanelGroup
            orientation="horizontal"
            className="h-24 w-full max-w-xs overflow-hidden rounded-xl border"
          >
            <ResizablePanel defaultSize={45}>
              <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                Canvas
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={55}>
              <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                Inspector
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </PreviewCard>

        <PreviewCard component={component("sheet")}>
          <Sheet>
            <SheetTrigger render={<Button variant="outline" />}>
              Open sheet
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Registry details</SheetTitle>
                <SheetDescription>
                  A secondary surface for contextual work.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </PreviewCard>

        {showSidebarDemo ? (
          <PreviewCard component={component("sidebar")}>
            <SidebarProvider className="min-h-48 w-full max-w-md overflow-hidden rounded-xl border">
              <Sidebar collapsible="none" className="w-48">
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            Overview
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>Components</SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </SidebarProvider>
          </PreviewCard>
        ) : null}

        <PreviewCard component={component("toast")}>
          <Toaster toastManager={showcaseToastManager}>
            <Button
              variant="outline"
              onClick={() =>
                showcaseToastManager.add({
                  title: "Registry ready",
                  description: "The source is ready to install.",
                  type: "success",
                })
              }
            >
              Show toast
            </Button>
          </Toaster>
        </PreviewCard>
      </div>
    </SpecimenVisibilityContext.Provider>
  )
}

export function ComponentPreview({ name }: { name: string }) {
  return (
    <div className="single-preview">
      <LiveSpecimens
        visibleNames={new Set([name])}
        showSidebarDemo={name === "sidebar"}
      />
    </div>
  )
}

export function ComponentShowcase() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<ComponentCategory | "All">("All")
  const filteredComponents = useMemo(
    () =>
      componentCatalog.filter(
        (component) =>
          (category === "All" || component.category === category) &&
          `${component.name} ${component.description}`
            .toLowerCase()
            .includes(query.trim().toLowerCase())
      ),
    [category, query]
  )
  const visibleNames = useMemo(
    () => new Set(filteredComponents.map((c) => c.name)),
    [filteredComponents]
  )

  return (
    <main id="main">
      <section className="hero section-shell">
        <h1>
          My UI toolbox<span>.</span>
        </h1>
        <p>
          Components I use to <span>build my projects.</span>
        </p>
        <div className="hero-actions">
          <Link className="solid-link" href="/#components">
            Components <ChevronDownIcon aria-hidden="true" className="size-4" />
          </Link>
          <Link href="/docs" className="text-link">
            Quick setup
          </Link>
        </div>
      </section>
      <section id="components" className="library section-shell">
        <div className="section-heading">
          <h2>Components</h2>
          <span>{componentCatalog.length} pieces</span>
        </div>
        <div className="library-layout">
          <aside className="catalog-sidebar">
            <label className="search-box">
              <SearchIcon size={16} />
              <input
                aria-label="Search components"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search components…"
              />
            </label>
            <nav aria-label="Component categories">
              {(["All", ...catalogCategories] as const).map((item) => (
                <button
                  key={item}
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>
                  <span>
                    {item === "All"
                      ? componentCatalog.length
                      : componentCatalog.filter((c) => c.category === item)
                          .length}
                  </span>
                </button>
              ))}
            </nav>
          </aside>
          <div className="library-content">
            <div className="results-heading">
              <span>{category === "All" ? "All components" : category}</span>
              <span aria-live="polite">
                {filteredComponents.length} results
              </span>
            </div>
            {filteredComponents.length ? (
              <LiveSpecimens visibleNames={visibleNames} />
            ) : (
              <div className="search-empty">
                <h3>No components found.</h3>
                <Button
                  onClick={() => {
                    setQuery("")
                    setCategory("All")
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="blocks" className="blocks-section section-shell">
        <div className="section-heading">
          <h2>Blocks</h2>
          <span>02 compositions</span>
        </div>
        <div className="block-links">
          <Link href="/docs/page-header">
            <div className="block-preview-header">
              <div>
                <small>WORKSPACE</small>
                <strong>Projects</strong>
                <span>What I’m working on.</span>
              </div>
              <span className="mini-action">+ New project</span>
            </div>
            <h3>
              Page header <ChevronRightIcon aria-hidden="true" />
            </h3>
          </Link>
          <Link href="/docs/empty-state">
            <div className="block-preview-empty">
              <span className="empty-glyph">＋</span>
              <strong>No projects yet.</strong>
              <small>Create your first project.</small>
            </div>
            <h3>
              Empty state <ChevronRightIcon aria-hidden="true" />
            </h3>
          </Link>
        </div>
      </section>
    </main>
  )
}
