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
  searchParams: Promise<{
    id: string;
    page: string;
    name: string;
  }>;
};

const GenrePage = async ({ searchParams }: GenrePageProps) => {
  const movieGenresList: genreResponseType = await getGenresList();

  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const name = params.name;

  const filteredMoviesByGenreId: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  console.log(filteredMoviesByGenreId, "filteredMoviesByGenreId");

  const url = `/genre/?id=${id}&name=${name}`;
  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8 mt-13 mb-8">
        <h2 className="w-full text-3xl leading-9 font-semibold text-foreground">
          Search filter
        </h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <GenresListCard genres={movieGenresList.genres} />
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-5" />
          <ResizablePanel>
            <div className="flex flex-wrap gap-y-8 gap-x-12">
              <h4 className="w-full text-xl leading-7 font-semibold text-foreground">
                {filteredMoviesByGenreId.total_results} titles in "{name}"
              </h4>
              {filteredMoviesByGenreId.results.map((movie) => (
                <Link
                  key={movie.id}
                  href={`/details/${movie.id}&name=${movie.title}`}
                >
                  <MedMovieCard
                    title={movie.title}
                    score={movie.vote_average}
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                </Link>
              ))}

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`${url}&page=${Number(page) - 1}`}
                    />
                  </PaginationItem>
                  <>
                    {Array.from({
                      length: 5,
                    }).map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={i + 1 === Number(page)}
                          href={`${url}&page=${Number(page) + 1}`}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </>
                  {/* <PaginationItem>
                    <PaginationLink href="">{Number(page) - 1}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="" isActive>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="">{Number(page) + 1}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="">{Number(page) + 5}</PaginationLink>
                  </PaginationItem> */}
                  <PaginationItem>
                    <PaginationNext href={`${url}&page=${Number(page) + 1}`} />
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
//                     <PaginationNext href={`/genre/${id}&page=${page}`} />
