import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

type MedMovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MedMovieCard = ({ title, score, image }: MedMovieCardProps) => {
  return (
    <Card className="w-[165px] p-0 overflow-hidden bg-secondary gap-0 rounded-md">
      <CardContent className="p-0">
        <div className="w-full h-61 relative">
          <Image src={image} alt={title} fill unoptimized />
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start px-2 py-1">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill size={16} color="#FDE047" />
          <p className="text-foreground text-sm leading-5 font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs leading-4 font-normal">
              /10
            </span>
          </p>
        </CardDescription>
        <CardTitle className="text-base leading-7 text-foreground font-normal">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
