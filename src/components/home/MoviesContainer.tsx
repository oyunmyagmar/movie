import { MovieType } from "@/types";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "@/components/home";
import { Button } from "@/components/ui/button";

type MoviesContainerProps = {
  movies: MovieType[];
  label: string;
};
export const MoviesContainer = ({ movies, label }: MoviesContainerProps) => {
  return (
    <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
      <div className="w-full flex justify-between">
        <p className="text-2xl leading-8 font-semibold text-foreground">
          {label}
        </p>
        <Button asChild variant="link">
          <Link href="/genre">
            See more <ArrowRight />
          </Link>
        </Button>
      </div>
      {movies.slice(0, 10).map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          score={movie.vote_average}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        ></MovieCard>
      ))}
    </div>
  );
};
