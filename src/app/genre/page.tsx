import React from "react";
import { MedMovieCard, GenresList } from "@/components/home";
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
  const params = await searchParams;
  const id = params.id;
  const filteredMoviesResponse: movieResponseType = await getMoviesByGenreId(
    id
  );
  console.log(filteredMoviesResponse, "filteres movies");

  const movieGenres: genreResponseType = await getGenresList();

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-[1440px] px-20 flex flex-col gap-8">
        <h2 className="w-full text-3xl leading-9 font-semibold text-foreground mt-13">
          Search filter
        </h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <GenresList genres={movieGenres.genres} />
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-5" />
          <ResizablePanel>
            <div className="pr-12 flex flex-col gap-8">
              <h4 className="text-xl leading-7 font-semibold text-foreground">
                81 titles in {id}
              </h4>
              <div>{filteredMoviesResponse}</div>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
                <MedMovieCard
                  title="Solo Leveling: ReAwakening"
                  score={6.9}
                  image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                />
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
