import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type HeroCardProps = {
  image: string;
  label: string;
  title: string;
  score: number;
  description: string;
  btnName: string;
};

export const HeroCard = ({
  image,
  label,
  title,
  score,
  description,
  btnName,
}: HeroCardProps) => {
  return (
    <Card className="w-1440px h-150 relative">
      <Image src={image} alt="" fill unoptimized objectFit="cover" />
      <div className="absolute top-[178px] left-[140px] flex flex-col gap-4">
        <CardHeader>
          <p className="text-base leading-6 text-white">{label}</p>
          <CardTitle className="text-4xl leading-10 font-bold text-white">
            {title}
          </CardTitle>
          <div className="flex gap-1 items-center">
            <FaStar className="w-7 h-7" color="#FDE047" />
            <p className="text-lg leading-7 font-semibold text-[#FAFAFA]">
              {score}
              <span className="text-base leading-6 font-normal text-[#71717A]">
                /10
              </span>
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="w-[302px] text-xs leaging-4 text-[#FAFAFA]">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/genre">
            <Button variant="secondary">
              <FiPlay />
              {btnName}
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};
