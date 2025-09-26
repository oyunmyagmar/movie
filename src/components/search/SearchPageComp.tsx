import React from "react";
import Link from "next/link";
import { SearchListCard } from "@/components/search";
import { MedMovieCard, MovieCard, PaginationComp } from "@/components/general";
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
  const searchedMovies: movieResponseType = await getMoviesBySearch(
    value,
    page
  );
  const filteredMovies = genreId
    ? searchedMovies.results.filter((movie) =>
        movie.genre_ids.includes(Number(genreId))
      )
    : searchedMovies.results;
  const url = `/search?value=${value}&`;

  console.log(searchedMovies, "searchedMovies");

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:px-20 px-5 flex flex-col gap-8 sm:mt-13 sm:mb-[344px] my-8">
        <h2 className="w-full sm:text-3xl text-2xl sm:leading-9 leading-8 font-semibold text-foreground">
          Search results
        </h2>
        <div className="sm:block hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel collapsible>
              <div className="flex flex-col gap-8">
                <h4 className="text-xl leading-7 font-semibold text-foreground">
                  {searchedMovies.total_results} results for “{value}”
                </h4>
                {searchedMovies.results.length ? (
                  <div className="flex flex-wrap gap-y-8 gap-x-12">
                    {filteredMovies.slice(0, 18).map((movSearched) => (
                      <Link
                        key={movSearched.id}
                        href={`/details/${movSearched.id}`}
                      >
                        <MedMovieCard
                          title={movSearched.title}
                          score={movSearched.vote_average}
                          image={movSearched.poster_path}
                        />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="border border-border text-sm font-medium pt-[44.5px] pb-[36.5px] flex justify-center">
                    No results found.
                  </div>
                )}
                <PaginationComp url={url} page={page} />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle className="mx-11" />
            <ResizablePanel>
              <SearchListCard
                page={page}
                searchValue={value}
                genreId={genreId}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <div className="sm:hidden block">
          <div className="flex flex-col gap-8 mb-8">
            <h4 className="text-xl leading-7 font-semibold text-foreground">
              {searchedMovies.total_results} results for “{value}”
            </h4>
            <div className="flex flex-wrap gap-5">
              {filteredMovies.slice(0, 18).map((movSearched) => (
                <Link key={movSearched.id} href={`/details/${movSearched.id}`}>
                  <MovieCard
                    title={movSearched.title}
                    score={movSearched.vote_average}
                    image={`https://image.tmdb.org/t/p/w500${movSearched.poster_path}`}
                  />
                </Link>
              ))}
            </div>
            <PaginationComp url={url} page={page} />
          </div>
          <SearchListCard page={page} searchValue={value} genreId={genreId} />
        </div>
      </div>
    </div>
  );
};
