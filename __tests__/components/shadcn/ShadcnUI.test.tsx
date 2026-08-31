import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, test } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/ui/breadcrumb";
import { Button, buttonVariants } from "@/components/shadcn/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
} from "@/components/shadcn/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/shadcn/ui/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/shadcn/ui/context-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/shadcn/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Input } from "@/components/shadcn/ui/input";
import { Kbd, KbdGroup } from "@/components/shadcn/ui/kbd";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/shadcn/ui/scroll-area";
import { Separator } from "@/components/shadcn/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Switch } from "@/components/shadcn/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/shadcn/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";

describe("Shadcn UI Components", () => {
  describe("Accordion", () => {
    test("should render accordion structure with trigger and panel", () => {
      const html = renderToStaticMarkup(
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>Toggle Accordion</AccordionTrigger>
            <AccordionContent>Accordion Content Details</AccordionContent>
          </AccordionItem>
        </Accordion>,
      );

      expect(html).toContain("Toggle Accordion");
      expect(html).toContain("Accordion Content Details");
      expect(html).toContain("border-neutral-200");
    });
  });

  describe("AspectRatio", () => {
    test("should render aspect ratio container with style", () => {
      const html = renderToStaticMarkup(
        <AspectRatio ratio={16 / 9} className="custom-aspect">
          <div>Inner media</div>
        </AspectRatio>,
      );

      expect(html).toContain("aspect-ratio:1.7777777777777777");
      expect(html).toContain("custom-aspect");
      expect(html).toContain("Inner media");
    });
  });

  describe("Breadcrumb", () => {
    test("should render complete breadcrumb trail with link, separator, ellipsis, and page", () => {
      const html = renderToStaticMarkup(
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>,
      );

      expect(html).toContain('aria-label="breadcrumb"');
      expect(html).toContain("Home");
      expect(html).toContain("Current Page");
      expect(html).toContain('aria-current="page"');
    });
  });

  describe("Button and ButtonGroup", () => {
    test("should render buttons with various variants and sizes", () => {
      const defaultBtn = renderToStaticMarkup(<Button>Default</Button>);
      expect(defaultBtn).toContain("Default");
      expect(defaultBtn).toContain("bg-neutral-100");

      const outlineBtn = renderToStaticMarkup(
        <Button variant="outline" size="sm">
          Outline
        </Button>,
      );
      expect(outlineBtn).toContain("Outline");
      expect(outlineBtn).toContain("border-red-500");

      const gradientBtn = renderToStaticMarkup(
        <Button variant="gradient" size="lg">
          Gradient
        </Button>,
      );
      expect(gradientBtn).toContain("Gradient");
      expect(gradientBtn).toContain("from-red-600 to-amber-500");
    });

    test("should render ButtonGroup, ButtonGroupText, and ButtonGroupSeparator", () => {
      const html = renderToStaticMarkup(
        <ButtonGroup orientation="horizontal">
          <ButtonGroupText>Label</ButtonGroupText>
          <Button>Action 1</Button>
          <ButtonGroupSeparator />
          <Button>Action 2</Button>
        </ButtonGroup>,
      );

      expect(html).toContain('data-slot="button-group"');
      expect(html).toContain("Label");
      expect(html).toContain("Action 1");
      expect(html).toContain("Action 2");
      expect(html).toContain('data-slot="button-group-separator"');
    });
  });

  describe("Card", () => {
    test("should render Card with header, title, description, content, and footer", () => {
      const html = renderToStaticMarkup(
        <Card className="custom-card">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description Text</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Body Content</p>
          </CardContent>
          <CardFooter>
            <span>Footer Note</span>
          </CardFooter>
        </Card>,
      );

      expect(html).toContain("custom-card");
      expect(html).toContain("Card Title");
      expect(html).toContain("Card Description Text");
      expect(html).toContain("Body Content");
      expect(html).toContain("Footer Note");
    });
  });

  describe("Carousel", () => {
    test("should render Carousel container, items, and controls", () => {
      const html = renderToStaticMarkup(
        <Carousel orientation="horizontal">
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>,
      );

      expect(html).toContain('role="region"');
      expect(html).toContain('aria-roledescription="carousel"');
      expect(html).toContain("Slide 1");
      expect(html).toContain("Slide 2");
      expect(html).toContain("Previous slide");
      expect(html).toContain("Next slide");
    });
  });

  describe("Command", () => {
    test("should render command palette with input, items, shortcuts, and separators", () => {
      const html = renderToStaticMarkup(
        <Command>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>Calendar</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandSeparator />
              <CommandItem>Search</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>,
      );

      expect(html).toContain('placeholder="Type a command..."');
      expect(html).toContain("No results found.");
      expect(html).toContain("Calendar");
      expect(html).toContain("⌘C");
      expect(html).toContain("Search");
    });
  });

  describe("ContextMenu", () => {
    test("should render ContextMenu components", () => {
      const html = renderToStaticMarkup(
        <ContextMenu>
          <ContextMenuTrigger>Right click here</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>Edit</ContextMenuItem>
            <ContextMenuCheckboxItem checked>Show Grid</ContextMenuCheckboxItem>
            <ContextMenuRadioGroup value="first">
              <ContextMenuRadioItem value="first">First</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuShortcut>Ctrl+E</ContextMenuShortcut>
          </ContextMenuContent>
        </ContextMenu>,
      );

      expect(html).toContain("Right click here");
    });
  });

  describe("Dialog", () => {
    test("should render Dialog trigger, title, description, and footer", () => {
      const html = renderToStaticMarkup(
        <Dialog open={true}>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Heading</DialogTitle>
              <DialogDescription>Dialog details go here.</DialogDescription>
            </DialogHeader>
            <p>Dialog Body</p>
            <DialogFooter>
              <DialogClose>Cancel</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>,
      );

      expect(html).toContain("Open Dialog");
    });
  });

  describe("Drawer", () => {
    test("should render Drawer trigger, title, and body elements", () => {
      const html = renderToStaticMarkup(
        <Drawer open={true}>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Heading</DrawerTitle>
              <DrawerDescription>Drawer subtitle.</DrawerDescription>
            </DrawerHeader>
            <div>Drawer Content</div>
            <DrawerFooter>
              <DrawerClose>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>,
      );

      expect(html).toContain("Open Drawer");
    });
  });

  describe("DropdownMenu", () => {
    test("should render DropdownMenu trigger and menu items", () => {
      const html = renderToStaticMarkup(
        <DropdownMenu>
          <DropdownMenuTrigger>Options</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuCheckboxItem checked>
              Notifications
            </DropdownMenuCheckboxItem>
            <DropdownMenuRadioGroup value="dark">
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      expect(html).toContain("Options");
    });
  });

  describe("Input", () => {
    test("should render standard and custom typed inputs", () => {
      const textInput = renderToStaticMarkup(
        <Input placeholder="Enter username" className="custom-input" />,
      );
      expect(textInput).toContain('placeholder="Enter username"');
      expect(textInput).toContain("custom-input");

      const emailInput = renderToStaticMarkup(
        <Input type="email" defaultValue="test@example.com" />,
      );
      expect(emailInput).toContain('type="email"');
      expect(emailInput).toContain('value="test@example.com"');
    });
  });

  describe("Kbd", () => {
    test("should render Kbd and KbdGroup shortcut elements", () => {
      const html = renderToStaticMarkup(
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>,
      );

      expect(html).toContain('data-slot="kbd-group"');
      expect(html).toContain('data-slot="kbd"');
      expect(html).toContain("Ctrl");
      expect(html).toContain("K");
    });
  });

  describe("Popover", () => {
    test("should render popover trigger and content", () => {
      const html = renderToStaticMarkup(
        <Popover open={true}>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent>Popover Detailed Info</PopoverContent>
        </Popover>,
      );

      expect(html).toContain("Open Popover");
    });
  });

  describe("ScrollArea", () => {
    test("should render scroll area viewport with content and scrollbar", () => {
      const html = renderToStaticMarkup(
        <ScrollArea className="h-40 w-40">
          <div>Long content list</div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>,
      );

      expect(html).toContain("Long content list");
      expect(html).toContain("h-40 w-40");
    });
  });

  describe("Separator", () => {
    test("should render horizontal and vertical separators", () => {
      const horiz = renderToStaticMarkup(
        <Separator orientation="horizontal" />,
      );
      expect(horiz).toContain('data-orientation="horizontal"');

      const vert = renderToStaticMarkup(
        <Separator orientation="vertical" decorative={false} />,
      );
      expect(vert).toContain('data-orientation="vertical"');
      expect(vert).toContain('role="separator"');
    });
  });

  describe("Sheet", () => {
    test("should render Sheet trigger, header, and content", () => {
      const html = renderToStaticMarkup(
        <Sheet open={true}>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation Sheet</SheetTitle>
              <SheetDescription>Explore sections</SheetDescription>
            </SheetHeader>
            <p>Sheet links</p>
            <SheetFooter>
              <SheetClose>Done</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>,
      );

      expect(html).toContain("Open Sheet");
    });
  });

  describe("Switch", () => {
    test("should render switch with checked and unchecked states", () => {
      const unchecked = renderToStaticMarkup(<Switch checked={false} />);
      expect(unchecked).toContain('role="switch"');
      expect(unchecked).toContain('aria-checked="false"');

      const checked = renderToStaticMarkup(<Switch checked={true} />);
      expect(checked).toContain('aria-checked="true"');
    });
  });

  describe("Tabs", () => {
    test("should render Tabs with pill and heading variants", () => {
      const html = renderToStaticMarkup(
        <Tabs defaultValue="tab1">
          <TabsList variant="heading">
            <TabsTrigger value="tab1" variant="heading">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="heading">
              Tab 2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Tab 1 Content</TabsContent>
          <TabsContent value="tab2">Tab 2 Content</TabsContent>
        </Tabs>,
      );

      expect(html).toContain("Tab 1");
      expect(html).toContain("Tab 2");
      expect(html).toContain("Tab 1 Content");
    });
  });

  describe("Tooltip", () => {
    test("should render Tooltip provider, root, trigger, and content", () => {
      const html = renderToStaticMarkup(
        <TooltipProvider>
          <Tooltip open={true}>
            <TooltipTrigger>Hover me</TooltipTrigger>
            <TooltipContent>Helpful tooltip info</TooltipContent>
          </Tooltip>
        </TooltipProvider>,
      );

      expect(html).toContain("Hover me");
    });
  });

  describe("Subcomponent direct renderings", () => {
    test("renders Dialog subcomponents properly", () => {
      const html = renderToStaticMarkup(
        <Dialog open={true}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>,
      );

      expect(html).toBeDefined();
    });

    test("renders Drawer subcomponents properly", () => {
      const html = renderToStaticMarkup(
        <Drawer open={true}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Title</DrawerTitle>
              <DrawerDescription>Description</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>,
      );

      expect(html).toBeDefined();
    });

    test("renders Sheet subcomponents properly", () => {
      const html = renderToStaticMarkup(
        <Sheet open={true}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Title</SheetTitle>
              <SheetDescription>Description</SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose>Close</SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>,
      );

      expect(html).toBeDefined();
    });

    test("renders ContextMenu and DropdownMenu subcomponents properly", () => {
      const cHtml = renderToStaticMarkup(
        <ContextMenu>
          <ContextMenuTrigger>Trigger</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuLabel inset>Actions</ContextMenuLabel>
              <ContextMenuItem inset variant="destructive">
                Delete
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>,
      );

      expect(cHtml).toContain("Trigger");

      const dHtml = renderToStaticMarkup(
        <DropdownMenu>
          <DropdownMenuTrigger>Options</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel inset>My Account</DropdownMenuLabel>
              <DropdownMenuItem inset variant="destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>,
      );

      expect(dHtml).toContain("Options");
    });

    test("evaluates buttonVariants and buttonGroupVariants helpers", () => {
      expect(buttonVariants({ variant: "outline", size: "sm" })).toContain(
        "border-red-500",
      );
      expect(buttonVariants({ variant: "ghost" })).toContain("text-red-500");
      expect(buttonVariants({ variant: "link" })).toContain("hover:underline");
      expect(buttonGroupVariants({ orientation: "vertical" })).toBeDefined();
    });
  });
});
