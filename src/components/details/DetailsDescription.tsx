import React from "react";
import { Badge, Separator } from "@/components/ui";
import { MovieDetailsType, movieCreditsResponseType } from "@/types";
import { Dot } from "lucide-react";

type DetailsDescriptionProps = {
  movieDetails: MovieDetailsType;
  movieCredits: movieCreditsResponseType;
};
export const DetailsDescription = ({
  movieDetails,
  movieCredits,
}: DetailsDescriptionProps) => {
  return (
    <div className="my-8">
      {movieDetails.genres.map((movDetail) => (
        <Badge
          key={movDetail.id}
          variant="outline"
          className="rounded-full leading-4 font-semibold mr-3 px-2.5"
        >
          {movDetail.name}
        </Badge>
      ))}
      <p className="mt-5 text-base leading-6 text-foreground">
        {movieDetails.overview}
      </p>
      <div className="mt-5 text-base leading-7 font-bold text-foreground flex items-center">
        <p className="w-[117px]">Director</p>
        {movieCredits.crew.map(
          (movCrew) =>
            movCrew.job === "Director" && (
              <p key={movCrew.name} className="leading-6 font-normal flex">
                <Dot /> {movCrew.name}
              </p>
            )
        )}
      </div>
      <Separator className="h-[1px] mt-2 mb-1" />
      <div className="mt-5 text-base leading-7 font-bold text-foreground flex items-center">
        <p className="w-[117px]">Writers</p>
        {movieCredits.crew.map(
          (movCrew) =>
            (movCrew.job === "Original Story" ||
              movCrew.job === "Writer" ||
              movCrew.job === "Story") && (
              <p key={movCrew.credit_id} className="leading-6 font-normal flex">
                <Dot /> {movCrew.name}
              </p>
            )
        )}
      </div>
      <Separator className="h-[1px] mt-2 mb-1" />
      <div className="mt-5 text-base leading-7 font-bold text-foreground flex items-center">
        <p className="w-[117px]">Stars</p>
        {movieCredits.cast.map(
          (movCast) =>
            movCast.order < 4 && (
              <p key={movCast.order} className="leading-6 font-normal flex">
                <Dot /> {movCast.name}
              </p>
            )
        )}
      </div>
      <Separator className="h-[1px] mt-2 mb-1" />
    </div>
  );
};
