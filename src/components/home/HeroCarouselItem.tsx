"use client";
import React, { useState } from "react";
import { HeroCard } from "@/components/home";
import { CarouselItem } from "@/components/ui/carousel";
import { MovieType, movieTrailerResponseType } from "@/types";
import { getMovieTrailer } from "@/utils/get-data";

export const HeroCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = useState("");

  const getTrailerFunction = async () => {
    const movieTrailer: movieTrailerResponseType = await getMovieTrailer(
      movie.id.toString()
    );
    const trailer = movieTrailer.results.find(
      (trailer) => trailer.type === "Trailer"
    );
    setTrailerKey(trailer?.key || "");
  };

  getTrailerFunction();
  return (
    <CarouselItem key={movie.id}>
      <HeroCard
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        label="Now Playing:"
        title={movie.title}
        score={movie.vote_average}
        description={movie.overview}
        trailerKey={trailerKey}
      />
    </CarouselItem>
  );
};
// const trailer: MovieTrailerType | undefined = movieTrailer.results.find((trailer) => trailer.type === "Trailer");
// const [movTrailer, setMovTrailer] = React.useState<MovieTrailerType>();
