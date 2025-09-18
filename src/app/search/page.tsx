import React from "react";
import Link from "next/link";
import { MedMovieCard, SearchListCard } from "@/components/home";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { genreResponseType, movieResponseType } from "@/types";
import {
  getGenresList,
  getMoviesByGenreId,
  getMoviesBySearch,
} from "@/utils/get-data";

type SearchPageProps = {
  searchParams: Promise<{ value: string; genreId: string }>;
};
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const value = params.value;
  const genreId = params.genreId;
  const searchedMovies: movieResponseType = await getMoviesBySearch(value);
  console.log(searchedMovies, "searchedMovies");

  const filteredMovies = genreId
    ? searchedMovies.results.filter((movie) =>
        movie.genre_ids.includes(Number(genreId))
      )
    : searchedMovies.results;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8 pb-[344px]">
        <h2 className="w-full text-3xl leading-9 font-semibold text-foreground mt-13">
          Search results
        </h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div className="flex flex-col gap-8">
              <h4 className="text-xl leading-7 font-semibold text-foreground">
                {searchedMovies.total_results} results for “{value}”
              </h4>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                {filteredMovies.slice(0, 12).map((movSearched) => (
                  <Link
                    key={movSearched.id}
                    href={`/details/${movSearched.id}`}
                  >
                    <MedMovieCard
                      id={movSearched.id}
                      title={movSearched.title}
                      score={movSearched.vote_average}
                      image={`https://image.tmdb.org/t/p/w500${movSearched.poster_path}`}
                    />
                  </Link>
                ))}
              </div>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-11" />
          <ResizablePanel>
            <SearchListCard searchValue={value} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
export default SearchPage;
