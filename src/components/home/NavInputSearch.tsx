"use client";
import React, { useState } from "react";
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

export const NavInputSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  console.log(foundMovies, "foundMovies");

  const handleInputChange = async (e: any) => {
    const { value } = e.target;
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setSearchValue(value);
    const searchedMovies = await getMoviesBySearch(value);

    setFoundMovies(searchedMovies);
  };

  return (
    <div className="flex items-center">
      <Search className="w-4 h-4 -mr-7" color="#71717A" />
      <Input
        value={searchValue}
        onChange={handleInputChange}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     <Link href="/search">
        //       <p>{searchValue}</p>
        //     </Link>;
        //   }
        // }}
        type="text"
        // onKeyDown={myFunction()}
        placeholder="Search.."
        className="w-[379px] px-3 py-[7px] pl-[38px] border border-[#E4E4E7]-foreground rounded-lg text-[#71717A]-foreground text-sm leading-5 flex items-center box-border"
      />
      <TinyMovieCard />
      {foundMovies?.results.slice(0, 5).map((movSearched) => (
        <TinyMovieCard
          key={movSearched.id}
          image={`https://image.tmdb.org/t/p/original${movSearched.poster_path}`}
          title={movSearched.title}
          score={movSearched.vote_average}
          year={movSearched.release_date}
        />
      ))}
      <div>
        <Popover open={isOpen} onOpenChange={() => setIsOpen(false)}>
          <PopoverTrigger className="hidden"></PopoverTrigger>
          <PopoverContent>
            ddfsdf
            {foundMovies?.results.slice(0, 5).map((movSearched) => (
              <TinyMovieCard
                image={`https://image.tmdb.org/t/p/original${movSearched.poster_path}`}
                title={movSearched.title}
                score={movSearched.vote_average}
                year={movSearched.release_date}
              />
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
