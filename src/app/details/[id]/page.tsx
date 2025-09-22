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
} from "@/components/home";

type DetailsDynamicPageProps = {
  params: Promise<{ id: string }>;
};

const DetailsDynamicPage = async ({ params }: DetailsDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);
  const movieCredits: movieCreditsResponseType = await getMovieCredits(id);
  const movieTrailer: movieTrailerResponseType = await getMovieTrailer(id);
  const similarMovies: movieResponseType = await getSimilarMovies(id);
  console.log(movieDetails, "movieDetails");
  console.log(movieCredits, "movieCredits");
  console.log(movieTrailer, "movieTrailer");
  console.log(similarMovies, "similarMovies");

  const trailer = movieTrailer.results.find(
    (trailer) => trailer.type === "Trailer"
  );

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] pl-45 pr-[178px] mt-13 mb-[112.62px]">
        <DetailsHeader movieDetails={movieDetails} />
        <div className="w-full flex justify-between">
          <div className="w-[290px] h-107 rounded-sm overflow-hidden relative ">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt={movieDetails.title}
              unoptimized
              fill
            />
          </div>
          <div className="w-190 h-107 rounded-sm overflow-hidden relative">
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

export default DetailsDynamicPage;
