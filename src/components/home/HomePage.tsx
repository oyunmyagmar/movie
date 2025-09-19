import * as React from "react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { MoviesContainer } from "@/components/home";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";

export const HomePage = async () => {
  const upComingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );

  return (
    <div className="w-screen flex flex-col items-center mb-[51px]">
      <HeroCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer
        movies={upComingMovies.results}
        label="Upcoming"
        link="upcoming"
      />
      <MoviesContainer
        movies={popularMovies.results}
        label="Popular"
        link="popular"
      />
      <MoviesContainer
        movies={topRatedMovies.results}
        label="Top Rated"
        link="top_rated"
      />
    </div>
  );
};
