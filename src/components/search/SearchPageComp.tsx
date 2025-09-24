import React from "react";
import Link from "next/link";
import { SearchListCard } from "@/components/search";
import { MedMovieCard, PaginationComp } from "@/components/general";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";
import { movieResponseType } from "@/types";
import { getMoviesBySearch } from "@/utils/get-data";

type SearchPageCompProps = {
  searchParams: Promise<{ value: string; genreId: string; page: string }>;
};
export const SearchPageComp = async ({ searchParams }: SearchPageCompProps) => {
  const { value, genreId, page = "1" } = await searchParams;
  console.log(genreId, "genreId");

  const searchedMovies: movieResponseType = await getMoviesBySearch(
    value,
    page
  );
  console.log(searchedMovies, "searchedMovies");

  const filteredMovies = genreId
    ? searchedMovies.results.filter((movie) =>
        movie.genre_ids.includes(Number(genreId))
      )
    : searchedMovies.results;
  // console.log(filteredMovies, "filteredMovies");

  const url = `/search?value=${value}&`;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8 mt-13 mb-[344px]">
        <h2 className="w-full text-3xl leading-9 font-semibold text-foreground">
          Search results
        </h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div className="flex flex-col gap-8">
              <h4 className="text-xl leading-7 font-semibold text-foreground">
                {searchedMovies.total_results} results for “{value}”
              </h4>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                {filteredMovies.slice(0, 18).map((movSearched) => (
                  <Link
                    key={movSearched.id}
                    href={`/details/${movSearched.id}`}
                  >
                    <MedMovieCard
                      title={movSearched.title}
                      score={movSearched.vote_average}
                      image={`https://image.tmdb.org/t/p/w500${movSearched.poster_path}`}
                    />
                  </Link>
                ))}
              </div>
              <PaginationComp url={url} page={page} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-11" />
          <ResizablePanel>
            <SearchListCard page={page} searchValue={value} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

// const params = await searchParams;
// const value = params.value;
// const genreId = params.genreId;
// const page = params.page || "1";
