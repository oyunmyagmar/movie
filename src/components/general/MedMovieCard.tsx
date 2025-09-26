import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui";

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
          {image ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${image}`}
              alt=""
              fill
              unoptimized
            />
          ) : (
            <Image
              src={
                "https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?semt=ais_incoming&w=740&q=80"
              }
              alt=""
              fill
              unoptimized
            />
          )}
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
        <CardTitle className="text-base leading-7 text-foreground font-normal min-h-14 line-clamp-2">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
