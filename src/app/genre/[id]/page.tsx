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

type GenreDynamicPageProps = {
  params: Promise<{ id: string; page: string; name: string }>;
};

const GenreDynamicPage = async ({ params }: GenreDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const page = dynamicParams.page || "1";
  const name = dynamicParams.name;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  console.log(filteredMoviesResponse, "filtered movies");

  const movieGenresResponse: genreResponseType = await getGenresList();

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8 pb-8">
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
                {filteredMoviesResponse.total_results} titles in "{name}"
              </h4>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                {filteredMoviesResponse.results.map((movie) => (
                  <Link key={movie.id} href={`/details/${movie.id}`}>
                    <MedMovieCard
                      id={movie.id}
                      title={movie.title}
                      score={movie.vote_average}
                      image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
                    <PaginationLink href="">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                    // href={`/genre?id=${genre.id}&name=${genre.name}&page=${genre.page}`}
                    />
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
export default GenreDynamicPage;
