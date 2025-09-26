import React from "react";
import Image from "next/image";
import {
  MovieDetailsType,
  movieTrailerResponseType,
  movieCreditsResponseType,
  movieResponseType,
} from "@/types";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieTrailer,
  getSimilarMovies,
} from "@/utils/get-data";
import {
  DetailsHeader,
  DetailsDescription,
  MoreLikeThisMoviesContainer,
  TrailerDialog,
  DetailsImgComp,
} from "@/components/details";

type DetailsDynamicPageCompProps = {
  params: Promise<{ id: string }>;
};

export const DetailsDynamicPageComp = async ({
  params,
}: DetailsDynamicPageCompProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);
  const movieCredits: movieCreditsResponseType = await getMovieCredits(id);
  const movieTrailer: movieTrailerResponseType = await getMovieTrailer(id);
  // console.log({ id });
  const similarMovies: movieResponseType = await getSimilarMovies(id, "1");
  // console.log({ similarMovies });
  const trailer = movieTrailer.results.find(
    (trailer) => trailer.type === "Trailer"
  );

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:pl-45 pl-0 sm:pr-[178px] pr-0 sm:mt-13 sm:mb-[112.62px] my-8">
        <DetailsHeader movieDetails={movieDetails} />
        <div className="w-full sm:flex justify-between block">
          <div className="sm:block hidden">
            <DetailsImgComp movieDetails={movieDetails} />
          </div>
          <div className="sm:w-190 w-full sm:h-107 aspect-[16/9] sm:rounded-sm rounded-none overflow-hidden relative">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              alt={movieDetails.title}
              unoptimized
              fill
            />
            <TrailerDialog trailerKey={trailer?.key} />
          </div>
        </div>
        <DetailsDescription
          movieDetails={movieDetails}
          movieCredits={movieCredits}
        />
        <MoreLikeThisMoviesContainer
          similarMovies={similarMovies.results}
          id={id}
        />
      </div>
    </div>
  );
};
