import React from "react";
import { GenreMovies, GenresList } from "@/components/home";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { genreResponseType, GenreType } from "@/types";
import { getGenresList, getMoviesDetails } from "@/utils/get-data";

const GenrePage = async () => {
  const movieGenres: genreResponseType = await getGenresList();
  const movieDetails = await getMoviesDetails();
  console.log(movieDetails);

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
            <GenreMovies />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
export default GenrePage;
