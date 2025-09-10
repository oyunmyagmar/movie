import * as React from "react";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  title: string;
  vote_average: number;
  poster_path: string;
};

export const MovieCard = ({ title, vote_average, poster_path }: MovieCardProps) => {

  return (
    <Card className="w-[230px] p-0 overflow-hidden bg-[#F4F4F5] flex flex-col gap-1">
      <CardContent className="p-0">
        <div className="w-full h-[340px] relative">
          <Image
            src={poster_path}
            alt={title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill className="w-4 h-4" color="#FDE047" />
          <div>
            <p className="text-[#09090B] text-sm leading-5 font-medium">
              {vote_average} <span className="text-[#71717A] text-xs leading-4">/10</span>
            </p>
          </div>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-[#09090B] font-sans">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
