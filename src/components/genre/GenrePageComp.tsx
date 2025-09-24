import React from "react";
import Link from "next/link";
import { MedMovieCard, PaginationComp } from "@/components/general";
import { GenresListCard } from "@/components/genre";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";
import { genreResponseType, movieResponseType } from "@/types";
import { getGenresList, getMoviesByGenreId } from "@/utils/get-data";

type GenrePageCompProps = {
  searchParams: Promise<{
    id: string;
    page: string;
    name: string;
  }>;
};

export const GenrePageComp = async ({ searchParams }: GenrePageCompProps) => {
  const movieGenresList: genreResponseType = await getGenresList();

  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const name = params.name;
  // console.log(name, "name");
  const filteredMoviesByGenreId: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  // console.log({ filteredMoviesByGenreId });

  const url = `/genre/?id=${id}&name=${name}&`;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] pl-20 pr-32 flex flex-col gap-8 mt-13 mb-8">
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
              {filteredMoviesByGenreId.results.slice(0, 18).map((movie) => (
                <Link key={movie.id} href={`/details/${movie.id}`}>
                  <MedMovieCard
                    title={movie.title}
                    score={movie.vote_average}
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  />
                </Link>
              ))}
              <PaginationComp url={url} page={page} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
