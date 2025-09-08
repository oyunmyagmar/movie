import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="w-[230px] p-0 overflow-hidden bg-[#F4F4F5] flex gap-1">
      <CardContent className="p-0">
        <Image
          src={image}
          alt=""
          width={230}
          height={340}
          unoptimized
          layout="responsive"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2">
        <CardDescription className="flex gap-1 items-center text-sm leading-[23px] font-medium">
          <FaStar className="w-4 h-4" color="#FDE047" />
          <span className="text-[#09090B]">{score}</span>
          <span className="text-[#71717A]">/10</span>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-[#09090B] font-sans">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
