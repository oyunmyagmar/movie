"use client";
import React, { useEffect, useState } from "react";
import { HeroCard } from "@/components/home";
import { CarouselItem, Button } from "@/components/ui";
import { MovieType, movieTrailerResponseType } from "@/types";
import { getMovieTrailer } from "@/utils/get-data";
import { LuPlay } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";

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

  useEffect(() => {
    getTrailerFunction();
  }, []);
  return (
    <CarouselItem key={movie.id}>
      <HeroCard
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        label="Now Playing:"
        title={movie.title}
        score={movie.vote_average}
        description={movie.overview}
        trailerKey={trailerKey}
        href={`/details/${movie.id}`}
      />
      <div className="p-5 sm:hidden block">
        <div className="flex justify-between">
          <div>
            <div className="text-sm leading-5 text-foreground">
              Now Playing:
            </div>
            <div className="text-2xl leading-8 font-semibold text-foreground">
              {movie.title}
            </div>
          </div>
          <div className="flex gap-1 mt-2.5 mb-3.5">
            <GoStarFill size={28} color="#FDE047" />
            <p className="text-lg leading-7 font-semibold text-foreground">
              {movie.vote_average}
              <span className="text-base leading-6 font-normal text-muted-foreground">
                /10
              </span>
            </p>
          </div>
        </div>
        <div className="text-sm leading-5 text-foreground mt-4">
          {movie.overview}
        </div>
        <Button className="mt-4">
          <LuPlay size={16} /> Watch Trailer
        </Button>
      </div>
    </CarouselItem>
  );
};
// const trailer: MovieTrailerType | undefined = movieTrailer.results.find((trailer) => trailer.type === "Trailer");
// const [movTrailer, setMovTrailer] = React.useState<MovieTrailerType>();
