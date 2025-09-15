import React from "react";
import { MovieDetailsType } from "@/types";
import { getMovieDetails, getMovieCredits } from "@/utils/get-data";
import { Badge } from "@/components/ui/badge";

type DetailsPageProps = {
  searchParams: Promise<{ id: string }>;
};

const DetailsPage = async ({ searchParams }: DetailsPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);
  const movieCredits = await getMovieCredits(id);
  console.log(movieDetails, "movieDetails");
  console.log(movieCredits, "movieCredits");

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-1440px pr-45 pl-[178px]">
        <div>
          <div className="text-4xl leading-10 font-bold">
            {movieDetails.title}
          </div>
          <p>
            {movieDetails.release_date} * <span>{movieDetails.runtime}</span>
          </p>
        </div>
        <div className="flex gap-8">
          <img
            width={290}
            height={428}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          ></img>
          <img
            width={760}
            height={428}
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          ></img>
        </div>
        <div>
          {movieDetails.genres.map((el) => (
            <Badge></Badge>
          ))}
        </div>
        <div>More like this</div>
      </div>
    </div>
  );
};
export default DetailsPage;
