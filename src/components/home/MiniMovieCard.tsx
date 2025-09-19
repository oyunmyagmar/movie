import React from "react";
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

type MiniMovieCardProps = {
  title: string;
  score: number;
  image: string;
  id: number;
};

export const MiniMovieCard = ({
  title,
  score,
  image,
  id,
}: MiniMovieCardProps) => {
  return (
    <Card className="w-[190px] p-0 overflow-hidden bg-secondary flex flex-col gap-1">
      <CardContent className="p-0">
        <div className="w-full h-[281.3px] relative">
          <Image src={image} alt={title} fill unoptimized />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start px-2 py-1">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill className="w-4 h-4" color="#FDE047" />
          <p className="text-sm leading-5 font-medium text-foreground">
            {score}
            <span className="text-xs leading-4 font-normal text-muted-foreground-foreground">
              /10
            </span>
          </p>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-foreground">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
