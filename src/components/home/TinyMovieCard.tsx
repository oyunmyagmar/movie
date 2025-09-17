import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoStarFill } from "react-icons/go";
import { ArrowRight } from "lucide-react";

type TinyMovieCardProps = {
  title: string;
  score: number;
  image: string;
  year: string;
};
export const TinyMovieCard = ({
  title,
  score,
  image,
  year,
}: TinyMovieCardProps) => {
  return (
    <Card className="w-[573px] h-29 p-2 shadow-none flex flex-row gap-4">
      <CardContent className="p-0">
        <div className="w-[67px] h-25 bg-amber-400 rounded-md">
          <Image src={image} alt="" />
        </div>
      </CardContent>
      <CardHeader className="bg-amber-800">
        <CardTitle className="text-xl leading-7 font-semibold text-foreground">
          title
        </CardTitle>
        <CardDescription className="flex justify-between">
          <div>
            <div className="flex gap-1">
              <GoStarFill width={16} height={16} color="#FDE047" />
              <p className="text-sm leading-5 font-medium text-foreground">
                score
                <span className="text-xs leading-4 font-normal text-muted-foreground">
                  /10
                </span>
              </p>
            </div>
            <p className="text-sm leading-5 font-medium text-foreground">
              2024
            </p>
          </div>

          <Button variant="link">
            <Link href="">
              See more
              <ArrowRight />
            </Link>
          </Button>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
