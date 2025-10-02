"use client";
import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { movieResponseType } from "@/types";
import { getMoviesBySearch } from "@/utils/get-data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Separator,
  Button,
} from "@/components/ui";
import { TinyMovieCard } from "@/components/general";

export const NavInputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // setIsLoading(true);
    const { value } = e.target;
    value.length > 0 ? setIsOpen(true) : setIsOpen(false);
    setSearchValue(value);

    const searchedMovies = await getMoviesBySearch(value, "1");
    setFoundMovies(searchedMovies);
    // setIsLoading(false);
  };

  function handleSeeAllResults() {
    setIsOpen(false);
    setSearchValue("");
  }
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div className="flex items-center">
          <IoSearchOutline size={16} className="-mr-7" color="#71717A" />
          <Input
            value={searchValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Search.."
            className="sm:w-[379px] w-[251px] px-3 sm:py-2 py-3 pl-[38px] sm:border border-border-foreground border-0 rounded-lg text-foreground text-sm leading-5 flex items-center sm:shadow shadow-none"
            onKeyDown={(e) =>
              (e.key === "ArrowDown" || e.key === "ArrowUp") && alert()
            }
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        side="bottom"
        align="center"
        alignOffset={-100}
        className="sm:w-[577px] w-[calc(80vw-25px)] sm:mt-[4.5px] mt-[11.5px] p-3 rounded-lg"
      >
        {/* {isLoading ? ( */}
        <div>
          {foundMovies?.results.slice(0, 5).map((movSearched) => (
            <div key={movSearched.id}>
              <TinyMovieCard
                image={movSearched.poster_path}
                title={movSearched.title}
                score={movSearched.vote_average}
                year={movSearched.release_date}
                href={`/details/${movSearched.id}`}
              />
              <Separator className="my-2" />
            </div>
          ))}
          <Button asChild variant="link" onClick={handleSeeAllResults}>
            <Link href={`/search?value=${searchValue}`}>
              See all results for "{searchValue}"
            </Link>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
