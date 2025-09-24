import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
  // id: number;
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="w-[230px] p-0 overflow-hidden bg-secondary gap-1 rounded-lg">
      <CardContent className="p-0 w-full h-85 relative">
        <Image src={image} alt={title} fill unoptimized />
      </CardContent>
      <CardFooter className="flex-col items-start p-2">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill size={16} color="#FDE047" />
          <p className="text-foreground text-sm leading-5 font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs leading-4 font-normal">
              /10
            </span>
          </p>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-foreground font-normal min-h-14 line-clamp-2">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
