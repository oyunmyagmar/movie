import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from "@/components/ui";
import { GoStarFill } from "react-icons/go";
import { ArrowRight } from "lucide-react";

type TinyMovieCardProps = {
  title: string;
  score: number;
  image: string;
  year: string;
  href: string;
};
export const TinyMovieCard = ({
  title,
  score,
  image,
  year,
  href,
}: TinyMovieCardProps) => {
  return (
    <Card className="sm:w-[553px] w-[311px] p-2 border-none shadow-none flex flex-row gap-4">
      <CardContent className="p-0">
        <div className="w-[67px] h-25 rounded-md overflow-hidden relative">
          <Image src={image} alt={title} fill unoptimized />
        </div>
      </CardContent>
      <CardHeader className="sm:w-[454px] w-[212px] p-0 gap-0">
        <CardTitle className="text-xl leading-7 text-foreground line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription>
          <div className="flex gap-1 items-center mb-[3px]">
            <GoStarFill size={16} color="#FDE047" />
            <p className="text-sm leading-5 font-medium text-foreground">
              {score.toFixed(1)}
              <span className="text-xs leading-4 font-normal text-muted-foreground">
                /10
              </span>
            </p>
          </div>
          <div className="w-full flex justify-between mt-3">
            <p className="text-sm leading-5 font-medium text-foreground">
              {year.split("-")[0]}
            </p>
            <Button asChild variant="link">
              <Link href={href}>
                See more
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
//className="object-fill"
