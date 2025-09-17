"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { movieResponseType } from "@/types";
import { getMoviesBySearch } from "@/utils/get-data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TinyMovieCard } from "./TinyMovieCard";
import { Separator } from "@/components/ui/separator";

export const NavInputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  console.log(foundMovies, "foundMovies");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = async (e: any) => {
    const { value } = e.target;
    value.length > 0 ? setIsOpen(true) : setIsOpen(false);
    setSearchValue(value);
    const searchedMovies = await getMoviesBySearch(value);
    setFoundMovies(searchedMovies);
  };

  return (
    <Popover open={isOpen}>
      <PopoverTrigger>
        <div className="flex items-center">
          <Search size={11.7} className="-mr-7" color="#71717A" />
          <Input
            value={searchValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Search.."
            className="w-[379px] px-3 py-2 pl-[38px] border border-border-foreground rounded-lg text-foreground text-sm leading-5 flex items-center"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        sideOffset={4.5}
        align="center"
        alignOffset={-100}
        className="w-[577px] p-3 rounded-lg"
      >
        {foundMovies?.results.slice(0, 5).map((movSearched) => (
          <div key={movSearched.id}>
            <TinyMovieCard
              image={`https://image.tmdb.org/t/p/original${movSearched.poster_path}`}
              title={movSearched.title}
              score={movSearched.vote_average}
              year={movSearched.release_date}
              href="/details"
            />
            <Separator className="my-2" />
          </div>
        ))}
        <div className="py-2 px-8 text-sm leading-5 font-medium text-foreground">
          See all results for "{searchValue}"
        </div>
      </PopoverContent>
    </Popover>
  );
};
//<Popover open={isOpen} onOpenChange={() => setIsOpen(false)}>
// onKeyDown={(e) => {
//   if (e.key === "Enter") {
//     <Link href="/search">
//       <p>{searchValue}</p>
//     </Link>;
//   }
// }}        // onKeyDown={myFunction()}
