import React from "react";
import Link from "next/link";
import { Label } from "@/components/ui";
import { MovieCard, PaginationComp } from "@/components/general";
import { SearchListCard } from "@/components/search";
import { MovieType } from "@/types";

type SearchMobileComp = {
  resultNumber: number;
  value: string;
  totalPages: number;
  filteredMovies: MovieType[];
  url: string;
  page: string;
  genreId: string;
};

export const SearchMobileComp = ({
  resultNumber,
  value,
  totalPages,
  filteredMovies,
  url,
  page,
  genreId,
}: SearchMobileComp) => {
  return (
    <div>
      <div className="sm:hidden block">
        <div className="flex flex-col gap-8 mb-8">
          <h4 className="text-xl leading-7 font-semibold text-foreground">
            {resultNumber.toLocaleString("en")} results for "{value}"
          </h4>
          {resultNumber > 0 && totalPages !== 0 ? (
            <div className="flex flex-wrap gap-5">
              {filteredMovies.slice(0, 18).map((movSearched) => (
                <Link key={movSearched.id} href={`/details/${movSearched.id}`}>
                  <MovieCard
                    title={movSearched.title}
                    score={movSearched.vote_average}
                    image={movSearched.poster_path}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <Label className="w-full h-[95px] justify-center border border-border rounded-lg">
              No results found.
            </Label>
          )}
          <PaginationComp url={url} page={page} totalPages={totalPages} />
        </div>
        <SearchListCard page={page} searchValue={value} genreId={genreId} />
      </div>
    </div>
  );
};
