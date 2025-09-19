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
  id: number;
};

export const MovieCard = ({ title, score, image, id }: MovieCardProps) => {
  return (
    <Card className="w-[230px] p-0 overflow-hidden bg-secondary flex flex-col gap-1">
      <CardContent className="p-0">
        <div className="w-full h-85 relative">
          <Image src={image} alt={title} fill unoptimized />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill className="w-4 h-4" color="#FDE047" />
          <p className="text-foreground text-sm leading-5 font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs leading-4">/10</span>
          </p>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-foreground">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
