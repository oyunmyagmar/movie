"use client";
import React, { useEffect, useState } from "react";
import { HeroCard, HeroTrailerDialog } from "@/components/home";
import { CarouselItem } from "@/components/ui";
import { MovieType, movieTrailerResponseType } from "@/types";
import { getMovieTrailer } from "@/utils/get-data";
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
    <CarouselItem key={movie.id} className="basis-none">
      <HeroCard
        image={movie.backdrop_path}
        label="Now Playing:"
        title={movie.title}
        score={movie.vote_average}
        description={movie.overview}
        trailerKey={trailerKey}
        href={`/details/${movie.id}`}
      />
      {/* responsive */}
      <div className="sm:hidden block p-5">
        <div className="flex justify-between">
          <div>
            <div className="text-sm leading-5 text-foreground">
              Now Playing:
            </div>
            <div className="text-2xl leading-8 font-semibold text-foreground line-clamp-2">
              {movie.title}
            </div>
          </div>
          <div className="flex gap-1 mt-2.5 mb-3.5">
            <GoStarFill size={28} color="#FDE047" />
            <p className="text-lg leading-7 font-semibold text-foreground">
              {movie.vote_average.toFixed(1)}
              <span className="text-base leading-6 font-normal text-muted-foreground">
                /10
              </span>
            </p>
          </div>
        </div>
        <p className="text-sm leading-5 text-foreground mt-4 line-clamp-2">
          {movie.overview}
        </p>
        <div className="mt-4">
          <HeroTrailerDialog trailerKey={trailerKey} />
        </div>
      </div>
    </CarouselItem>
  );
};
