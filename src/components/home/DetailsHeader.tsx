import React from "react";
import { Dot } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import { MovieDetailsType } from "@/types";

type DetailsHeaderProps = {
  movieDetails: MovieDetailsType;
};
export const DetailsHeader = ({ movieDetails }: DetailsHeaderProps) => {
  return (
    <div className="flex justify-between mb-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl leading-10 font-bold text-foreground">
          {movieDetails.title}
        </h1>
        <p className="flex text-lg leading-7 text-foreground">
          {movieDetails.release_date} <Dot />
          {movieDetails.adult ? "R" : "G"} <Dot />
          {`${Math.floor(movieDetails.runtime / 60)}h ${
            movieDetails.runtime % 60
          }m`}
        </p>
      </div>
      <div className="py-1 pr-3">
        <p className="text-xs leading-4 font-medium text-foreground">Rating</p>
        <div className="flex items-center gap-1">
          <GoStarFill size={28} color="#FDE047" />
          <div className="flex flex-col py-0.5">
            <p className="text-lg leading-7 font-semibold text-foregro  und">
              {movieDetails.vote_average.toFixed(1)}
              <span className="text-base leading-6 font-normal text-muted-foreground">
                /10
              </span>
            </p>
            <div className="text-xs leading-4 text-muted-foreground">
              {movieDetails.vote_count >= 1000
                ? `${Math.floor(movieDetails.vote_count / 1000)}k`
                : movieDetails.vote_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
