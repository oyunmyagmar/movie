import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { GenreType } from "@/types";

type NavigationMenuDemoProps = {
  genres: GenreType[];
};

export const NavigationMenuDemo = ({ genres }: NavigationMenuDemoProps) => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex gap-2 items-center border border-input text-secondary-foreground">
            Genre
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-5">
            <h3 className="text-2xl leading-8 font-semibold text-foreground pb-1">
              Genres
            </h3>
            <p className="text-base leading-6 text-foreground">
              See lists of movies by genre
            </p>
            <Separator className="my-4 border-border" />
            <ul className="w-[577px] flex gap-4 flex-wrap">
              {genres.map((genre) => (
                <ListItem
                  key={genre.id}
                  title={genre.name}
                  href="/genre"
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({
  key,
  title,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="p-0">
        <Link href={href}>
          <Badge
            variant="outline"
            className="rounded-full font-semibold pl-2.5 pr-1"
          >
            {title}
            <ChevronRight width={16} height={16} className="py-0.5" />
          </Badge>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
