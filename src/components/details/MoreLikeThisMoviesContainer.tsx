import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { MiniMovieCard } from "@/components/general";
import { MovieType } from "@/types";

type MoreLikeThisMoviesContainerProps = {
  id: string;
  similarMovies: MovieType[];
};
export const MoreLikeThisMoviesContainer = ({
  id,
  similarMovies,
}: MoreLikeThisMoviesContainerProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <h3 className="text-2xl leading-8 font-semibold text-foreground">
          More like this
        </h3>
        <Button asChild variant="link">
          <Link href={`/moreLike/${id}`}>
            See more <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="flex gap-8">
        {similarMovies.slice(0, 5).map((simMov) => (
          <Link key={simMov.id} href={`/details/${simMov.id}`}>
            <MiniMovieCard
              title={simMov.title}
              score={simMov.vote_average}
              image={`https://image.tmdb.org/t/p/original${simMov.poster_path}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
