import Image from "next/image";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";
import { LuPlay } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroTrailerDialog } from "@/components/home";
import { MovieTrailerType } from "@/types";

type HeroCardProps = {
  image: string;
  label: string;
  title: string;
  score: number;
  description: string;
  //  trailer: MovieTrailerType | undefined;
};

export const HeroCard = ({
  image,
  label,
  title,
  score,
  description,
}: // trailer,
HeroCardProps) => {
  return (
    <Card className="w-1440px h-150 relative p-0 border-0">
      <Image src={image} alt="" fill unoptimized priority />
      <div className="absolute top-[178px] left-29 flex flex-col gap-4">
        <CardHeader className="gap-0">
          <p className="text-base leading-6 text-white">{label}</p>
          <CardTitle className="text-4xl leading-10 font-bold text-white">
            {title}
          </CardTitle>
          <div className="flex gap-1 items-center">
            <GoStarFill className="w-7 h-7" color="#FDE047" />
            <p className="text-lg leading-7 font-semibold text-[#FAFAFA] py-2.5">
              {score.toFixed(1)}
              <span className="text-base leading-6 font-normal text-muted-foreground">
                /10
              </span>
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="w-[302px] text-xs leaging-4 text-[#FAFAFA]">
            {description}
          </CardDescription>
          <div className="mt-20">
            <HeroTrailerDialog trailer={undefined} />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
{
  /* <Button asChild variant="secondary">
            <Link href={href}>
              Watch Trailer <LuPlay />
            </Link>
          </Button> */
}
