import React from "react";
import Link from "next/link";
import { MedMovieCard, GenresListCard } from "@/components/home";
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
import { getGenresList, getMoviesByGenreId } from "@/utils/get-data";

const SearchPage = async () => {
  const movieGenresResponse: genreResponseType = await getGenresList();

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8">
        <h2 className="w-full text-3xl leading-9 font-semibold text-foreground mt-13">
          Search results
        </h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <div className="space-y-8">
              <h4 className="text-xl leading-7 font-semibold text-foreground">
                5 results for “Wicked”
              </h4>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                {/* {filteredMoviesResponse.results.slice(0, 12).map((el) => (
                  <Link href={""}>
                    <MedMovieCard
                      title={el.title}
                      score={el.vote_average}
                      image={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    />
                  </Link>
                ))} */}
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
            <GenresListCard genres={movieGenresResponse.genres} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
export default SearchPage;
