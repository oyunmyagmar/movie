import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { getGenresList } from "@/utils/get-data";

export const NavMenuItem = async () => {
  const movieGenresResponse = await getGenresList();
  console.log(movieGenresResponse, "movieGenres");

  return (
    <NavigationMenu viewport={true} className="object-none">
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
            <div className="w-[577px] flex gap-4 flex-wrap">
              {movieGenresResponse.genres.map((genre) => (
                <Link key={genre.id} href={`/genre?id=${genre.id}`}>
                  <Badge
                    variant="outline"
                    className="font-semibold rounded-full pl-2.5 gap-2 pr-1 text-center text-foreground"
                  >
                    {genre.name}
                    <ChevronRight width={16} height={16} />
                  </Badge>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
