import React from "react";
import Image from "next/image";
import { MovieDetailsType } from "@/types";

type DetailsImgCompProps = {
  movieDetails: MovieDetailsType;
};
export const DetailsImgComp = ({ movieDetails }: DetailsImgCompProps) => {
  return (
    <div>
      <div className="sm:w-[290px] w-25 sm:h-107 h-37 sm:rounded-sm rounded-none overflow-hidden relative">
        {movieDetails.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
            alt=""
            unoptimized
            fill
          />
        ) : (
          <Image
            src={
              "https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_incoming&w=740&q=80"
            }
            alt=""
            unoptimized
            fill
          />
        )}
      </div>
    </div>
  );
};
