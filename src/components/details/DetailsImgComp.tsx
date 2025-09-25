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
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
          alt={movieDetails.title}
          unoptimized
          fill
        />
      </div>
    </div>
  );
};
