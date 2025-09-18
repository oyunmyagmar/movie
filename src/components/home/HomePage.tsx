import * as React from "react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { MoviesContainer } from "@/components/home";
import { getMoviesList, getMovieTrailer } from "@/utils/get-data";
import {
  movieResponseType,
  movieTrailerResponseType,
  MovieTrailerType,
} from "@/types";

type HomePageProps = {
  // params: Promise<{ id: string }>;
};
export const HomePage = async () =>
  //{ params }: HomePageProps
  {
    // const dynamicParams = await params;
    // const id = dynamicParams.id;
    const upComingMovies: movieResponseType = await getMoviesList("upcoming");
    const popularMovies: movieResponseType = await getMoviesList("popular");
    const topRatedMovies: movieResponseType = await getMoviesList("top_rated");
    const nowPlayingMovies: movieResponseType = await getMoviesList(
      "now_playing"
    );
    // const movieTrailer: movieTrailerResponseType = await getMovieTrailer(id);
    // const trailer: MovieTrailerType | undefined = movieTrailer.results.find(
    //   (trailer) => trailer.type === "Trailer"
    // );
    // console.log(topRatedMovies, "topRatedMovies");
    return (
      <div className="w-screen flex flex-col items-center mb-[51px]">
        <HeroCarousel
          movies={nowPlayingMovies.results}
          // trailer={trailer}
        />
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
