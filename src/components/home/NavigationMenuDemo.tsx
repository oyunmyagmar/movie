"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { GoChevronRight } from "react-icons/go";

const components: { title: string; href: string }[] = [
  {
    title: "Action",
    href: "/genre",
  },
  {
    title: "Adventure",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Animation",
    href: "/docs/primitives/progress",
  },
  {
    title: "Biography",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Comedy",
    href: "/docs/primitives/tabs",
  },
  {
    title: "Crime",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Documentary",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Drama",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Family",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Fantasy",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Film-Noir",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Game-Show",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "History",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Horror",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Music",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Musical",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Mystery",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "News",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Reality-TV",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Romance",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Sci-Fi",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Short",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Sport",
    href: "/docs/primitives/tooltip",
  },

  {
    title: "Talk-Show",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Thriller",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "War",
    href: "/docs/primitives/tooltip",
  },
  {
    title: "Western",
    href: "/docs/primitives/tooltip",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[577px] flex gap-4 flex-wrap">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex gap-2 py-0.5 pl-2.5 border border-[#E4E4E7] rounded-full">
            <div className="text-xs leading-4 font-semibold text-[#09090B]">
              {title}
            </div>
            <GoChevronRight width={16} height={16} color="#09090B" />
          </div>

          {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p> */}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
