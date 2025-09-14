import React from "react";
import Link from "next/link";
import { MedMovieCard, GenresListCard } from "@/components/home";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { genreResponseType, movieResponseType } from "@/types";
import { getGenresList, getMoviesByGenreId } from "@/utils/get-data";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type GenrePageProps = {
  searchParams: Promise<{ id: string }>;
};

const GenrePage = async ({ searchParams }: GenrePageProps) => {
  const movieGenresResponse: genreResponseType = await getGenresList();

  const params = await searchParams;
  const id = params.id;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  console.log(filteredMoviesResponse, "filteres movies");

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8">
        <h2 className="w-full text-3xl leading-9 font-semibold text-foreground mt-13">
          Search filter
        </h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <GenresListCard genres={movieGenresResponse.genres} />
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-5" />
          <ResizablePanel>
            <div className="pr-12 space-y-8">
              <h4 className="text-xl leading-7 font-semibold text-foreground">
                81 titles in {id}
              </h4>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                {filteredMoviesResponse.results.slice(0, 12).map((el) => (
                  <Link key={el.id} href={""}>
                    <MedMovieCard
                      title={el.title}
                      score={el.vote_average}
                      image={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
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
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
export default GenrePage;
