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

// type MiniMovieCardProps = {
//   title: string;
//   score: number;
//   image: string;
// };

export const MedMovieCard = () => {
  return (
    <Card className="w-[165px] p-0 overflow-hidden bg-secondary flex gap-0">
      <CardContent className="p-0">
        <div className="w-full h-61 relative">
          <Image
            src="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start px-2 py-1">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill className="w-4 h-4" color="#FDE047" />
          <p className="text-foreground text-sm leading-5 font-medium">
            6.9
            <span className="text-muted-foreground text-xs leading-4 font-normal">
              /10
            </span>
          </p>
        </CardDescription>
        <CardTitle className="text-base leading-7 text-foreground">
          Solo Leveling: ReAwakening
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
