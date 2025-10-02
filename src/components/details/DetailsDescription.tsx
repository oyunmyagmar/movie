import React from "react";
import { Badge, Separator } from "@/components/ui";
import { MovieDetailsType, movieCreditsResponseType } from "@/types";
import { Dot } from "lucide-react";
import { DetailsImgComp } from "./DetailsImgComp";

type DetailsDescriptionProps = {
  movieDetails: MovieDetailsType;
  movieCredits: movieCreditsResponseType;
};

export const DetailsDescription = ({
  movieDetails,
  movieCredits,
}: DetailsDescriptionProps) => {
  return (
    <div className="sm:px-0 px-5 my-8">
      <div className="flex gap-[34px]">
        <div className="sm:hidden inline-block">
          <DetailsImgComp movieDetails={movieDetails} />
        </div>
        <div>
          <div className="flex gap-3 sm:flex-nowrap flex-wrap">
            {movieDetails.genres.map((movDetail) => (
              <Badge
                key={movDetail.id}
                variant="outline"
                className="rounded-full leading-4 font-semibold px-2.5"
              >
                {movDetail.name}
              </Badge>
            ))}
          </div>
          <p className="mt-5 text-base leading-6 text-foreground line-clamp-10">
            {movieDetails.overview}
          </p>
        </div>
      </div>
      <div className="mt-5 text-base leading-7 font-bold text-foreground flex gap-[53px] items-center">
        <p className="min-w-16">Director</p>
        <div className="flex flex-wrap">
          {movieCredits.crew.map(
            (movCrew) =>
              movCrew.job === "Director" && (
                <p key={movCrew.name} className="leading-6 font-normal flex">
                  <Dot className="sm:w-7 w-5 sm:h-7 h-5" /> {movCrew.name}
                </p>
              )
          )}
        </div>
      </div>
      <Separator className="h-[1px] mt-2 mb-1" />
      <div className="mt-5 text-base leading-7 font-bold text-foreground flex gap-[53px] items-center">
        <p className="min-w-16">Writers</p>
        <div className="flex flex-wrap">
          {movieCredits.crew.filter(
            (el) =>
              el.job === "Writer" ||
              el.job === "Original Story" ||
              el.job === "Story" ||
              el.job === "Characters" ||
              el.job === "Comic Book" ||
              el.job === "Screenplay"
          ).map!((el) => el.name)
            .filter((el, i, arr) => arr.indexOf(el) === i)
            .map((el, i) => (
              <p key={i} className="leading-6 font-normal flex">
                <Dot className="sm:w-7 w-5 sm:h-7 h-5" /> {el}
              </p>
            ))}
        </div>
      </div>
      <Separator className="h-[1px] mt-2 mb-1" />
      <div className="mt-5 text-base leading-7 font-bold text-foreground flex gap-[53px] items-center ">
        <p className="min-w-16">Stars</p>
        <div className="flex flex-wrap">
          {movieCredits.cast.map(
            (movCast) =>
              movCast.order < 4 && (
                <p key={movCast.order} className="leading-6 font-normal flex">
                  <Dot className="sm:w-7 w-5 sm:h-7 h-5" /> {movCast.name}
                </p>
              )
          )}
        </div>
      </div>
      <Separator className="h-[1px] mt-2 mb-1" />
    </div>
  );
};
