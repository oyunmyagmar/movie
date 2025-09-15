import React from "react";
import { MovieDetailsType, movieTrailerResponseType } from "@/types";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieTrailer,
} from "@/utils/get-data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dot } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import Image from "next/image";
import YouTube from "react-youtube";

type DetailsPageProps = {
  searchParams: Promise<{ id: string }>;
};

const DetailsPage = async ({ searchParams }: DetailsPageProps) => {
  const params = await searchParams;
  const id = params.id;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);
  const movieCredits = await getMovieCredits(id);
  const movieTrailer: movieTrailerResponseType = await getMovieTrailer(id);
  console.log(movieDetails, "movieDetails");
  console.log(movieCredits, "movieCredits");
  console.log(movieTrailer, "movieTrailer");

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Card className="w-[1440px] pl-45 pr-[178px] py-0 border-0 shadow-none mt-13">
        <CardHeader className="flex justify-between p-0">
          <div>
            <CardTitle className="text-4xl leading-10 font-bold text-foreground mb-1">
              {movieDetails.title}
            </CardTitle>
            <p className="flex text-lg leading-7 text-foreground">
              {movieDetails.release_date}
              <Dot />
              {`label oruulah`}
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
                <p className="text-xs leading-4 text-muted-foreground">
                  37k gadnas
                </p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="w-full flex justify-between">
            <div className="w-[290px] h-107 relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt=""
                unoptimized
                fill
                className="rounded-sm object-cover"
              ></Image>
            </div>
            <div className="w-[760px] h-[428px]">
              <YouTube
                videoId={`https://www.youtube.com/watch?v=${movieTrailer.results[0].key}`}
              ></YouTube>
            </div>
          </div>
        </CardContent>
        <div>
          {/* {movieDetails.genres.map((el) => (
            <Badge></Badge>
          ))} */}
        </div>
      </Card>
      <div>More like this</div>
    </div>
  );
};
export default DetailsPage;
