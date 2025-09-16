import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MiniMovieCard } from "@/components/home";
import { MovieType } from "@/types";

type MoreLikeProps = {
  similarMovies: MovieType[];
};
export const MoreLike = ({ similarMovies }: MoreLikeProps) => {
  return (
    <div>
      <div className="mt-8 flex gap-8 flex-wrap overflow-hidden">
        <div className="w-full flex justify-between">
          <h3 className="text-2xl leading-8 font-semibold text-foreground">
            More like this
          </h3>
          <Button asChild variant="link">
            <Link href="">
              See more
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="flex gap-8">
          {similarMovies.map((simMov) => (
            <MiniMovieCard
              key={simMov.id}
              title={simMov.title}
              score={simMov.vote_average}
              image={`https://image.tmdb.org/t/p/w500${simMov.poster_path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
