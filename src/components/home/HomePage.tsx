import * as React from "react";
import { MoviesContainer } from "@/components/home";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { movieResponseType } from "@/types";
import { getMoviesList } from "@/utils/get-data";

export const HomePage = async () => {
  const upComingMovies: movieResponseType = await getMoviesList("upcoming");
  const popularMovies: movieResponseType = await getMoviesList("popular");
  const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );
  // console.log(topRatedMovies, "topRatedMovies");
  return (
    <div className="w-screen flex flex-col items-center">
      <HeroCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer movies={upComingMovies.results} label="Upcoming" />
      <MoviesContainer movies={popularMovies.results} label="Popular" />
      <MoviesContainer movies={topRatedMovies.results} label="Top Rated" />
    </div>
  );
};
