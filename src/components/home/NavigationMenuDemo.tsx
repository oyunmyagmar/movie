"use client";
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

type MovieGenres = {
  id: number;
  name: string;
};

export const NavigationMenuDemo = () => {
  const [genres, setGenres] = React.useState<MovieGenres[]>([]);
  console.log(genres);

  React.useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=75d880915800e2d2a9928e5fe720c261&language=en";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setGenres(json.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex gap-2 items-center border border-[#E4E4E7]-foreground text-[#18181B]-foreground">
            Genres
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <p>Genres</p>
            <p>See lists of movies by genre</p>
            <ul className="w-[577px] flex gap-4 flex-wrap">
              {/* {movGenres?.map((genre) => (
                <ListItem
                  key={genre.id}
                  title={genre.name}
                  href="/genre"
                ></ListItem>
              ))} */}
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
