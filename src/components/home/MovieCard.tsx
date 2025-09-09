import Image from "next/image";
import { FaStar } from "react-icons/fa";
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
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="w-[230px] p-0 overflow-hidden bg-[#F4F4F5] flex flex-col gap-1">
      <CardContent className="p-0">
        <div className="w-full h-[340px] relative">
          <Image src={image} alt="" fill unoptimized className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <FaStar className="w-4 h-4" color="#FDE047" />
          <div>
            <span className="text-[#09090B] text-sm leading-5 font-medium">
              {score}
            </span>
            <span className="text-[#71717A] text-xs leading-4">/10</span>
          </div>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-[#09090B] font-sans">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
