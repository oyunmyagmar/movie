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
import { MovieType } from "@/types";

type NavigationMenuDemo = {
  movies: MovieType[];
};

export const NavigationMenuDemo = ({ movies }: NavigationMenuDemo) => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex gap-2 items-center border border-[#E4E4E7]-foreground text-[#18181B]-foreground">
            Genre
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-5">
            <h3 className="text-2xl leading-8 font-semibold text-foreground">
              Genres
            </h3>
            <p className="text-base leading-6 text-foreground">
              See lists of movies by genre
            </p>
            <Separator className="my-4 border-border" />
            <ul className="w-[577px] flex gap-4 flex-wrap">
              {movies.map((movie) => (
                <ListItem
                  key={movie.id}
                  title={movie.genre_ids}
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
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex gap-2 py-0.5 pl-2.5 pr-1 border border-[foreground] rounded-full items-center">
            <div className="text-xs leading-4 font-semibold text-[#09090B]-[foreground]"></div>
            <ChevronRight width={16} height={16} color="foreground" />
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
