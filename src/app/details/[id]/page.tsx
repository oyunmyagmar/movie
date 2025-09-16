import React from "react";
import {
  MovieDetailsType,
  movieTrailerResponseType,
  movieCreditsResponseType,
  movieResponseType,
  MovieTrailerType,
} from "@/types";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieTrailer,
  getSimilarMovies,
} from "@/utils/get-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import { MiniMovieCard } from "@/components/home";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

  const trailer: MovieTrailerType | undefined = movieTrailer.results.find(
    (trailer) => trailer.type === "Trailer"
  );

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="w-[1440px] pl-45 pr-[178px] pb-[112.6]">
        <Card className="py-0 border-0 shadow-none mt-13">
          <CardHeader className="flex justify-between p-0">
            <div>
              <CardTitle className="text-4xl leading-10 font-bold text-foreground mb-1">
                {movieDetails.title}
              </CardTitle>
              <p className="flex text-lg leading-7 text-foreground">
                {movieDetails.release_date}
                <Dot />
                {movieDetails.adult ? "R" : "G"}
                <Dot />
                {`${Math.floor(movieDetails.runtime / 60)}h ${
                  movieDetails.runtime % 60
                }m`}
              </p>
            </div>
            <div className="py-1 pr-3">
              <p className="text-xs leading-4 font-medium text-foreground">
                Rating
              </p>
              <div className="flex items-center gap-1">
                <GoStarFill color="#FDE047" className="w-7 h-7" />
                <div className="flex flex-col py-0.5">
                  <p className="text-lg leading-7 font-semibold text-foreground">
                    {movieDetails.vote_average.toFixed(1)}
                    <span className="text-base leading-6 font-normal text-muted-foreground">
                      /10
                    </span>
                  </p>
                  <div className="text-xs leading-4 text-muted-foreground">
                    {{movieDetails.vote_count} >= 1000}
                    {`${movieDetails.vote_count} >= 1000 ? ${
                      Math.floor(movieDetails.vote_count) / 1000
                    }k : ${movieDetails.vote_count}`}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col gap-8">
            <div className="w-full flex justify-between">
              <div className="w-[290px] h-107 relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                  unoptimized
                  fill
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="rounded-sm overflow-hidden">
                <iframe
                  src={`//www.youtube-nocookie.com/embed/${trailer?.key}`}
                  allowFullScreen
                  width={760}
                  height={428}
                ></iframe>
              </div>
            </div>
            <CardDescription>
              {movieDetails.genres.map((movDet) => (
                <Badge
                  key={movDet.id}
                  variant="outline"
                  className="rounded-full leading-4 font-semibold border-border mr-3 py-0.5 px-2.5"
                >
                  {movDet.name}
                </Badge>
              ))}
              <p className="mt-4 text-base leading-6 text-foreground">
                {movieDetails.overview}
              </p>
              <div className="mt-5 text-base leading-7 font-bold text-foreground flex items-center">
                <p className="w-[117px]">Director</p>
                {movieCredits.crew.map(
                  (movCrew) =>
                    movCrew.job === "Director" && (
                      <span
                        key={movCrew.name}
                        className="leading-6 font-normal flex"
                      >
                        {movCrew.name}
                        <Dot />
                      </span>
                    )
                )}
              </div>
              <Separator className="mt-2 mb-1" />
              <div className="mt-5 text-base leading-7 font-bold text-foreground flex items-center">
                <p className="w-[117px]">Writers</p>
                {movieCredits.crew.map(
                  (movCrew) =>
                    (movCrew.job === "Original Story" ||
                      movCrew.job === "Writer" ||
                      movCrew.job === "Story") && (
                      <span
                        key={movCrew.name}
                        className="leading-6 font-normal flex"
                      >
                        {movCrew.name}
                        <Dot />
                      </span>
                    )
                )}
              </div>
              <Separator className="mt-2 mb-1" />
              <div className="mt-5 text-base leading-7 font-bold text-foreground flex items-center">
                <p className="w-[117px]">Stars</p>
                {movieCredits.cast.map(
                  (movCast) =>
                    movCast.order < 5 && (
                      <span className="leading-6 font-normal flex">
                        {movCast.name} <Dot />
                      </span>
                    )
                )}
              </div>
              <Separator className="mt-2 mb-1" />
            </CardDescription>
          </CardContent>
        </Card>
        <div className="mt-8 flex gap-8 flex-wrap overflow-hidden">
          <div className="w-full flex justify-between">
            <h3 className="text-2xl leading-8 font-semibold text-foreground">
              More like this
            </h3>
            <Button asChild variant="link">
              <Link href={`/moreLike/${id}`}>
                See more
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex gap-8">
            {similarMovies.results.slice(0, 5).map((simMov) => (
              <Link key={simMov.id} href={`/details/${simMov.id}`}>
                <MiniMovieCard
                  id={simMov.id}
                  title={simMov.title}
                  score={simMov.vote_average}
                  image={`https://image.tmdb.org/t/p/original${simMov.poster_path}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDynamicPage;
