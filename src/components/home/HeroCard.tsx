import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { LuPlay } from "react-icons/lu";
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
    <Card className="w-1440px h-150 relative p-0 border-0">
      <Image src={image} alt="" fill unoptimized objectFit="cover" />
      <div className="absolute top-[178px] left-29 flex flex-col gap-4">
        <CardHeader className="gap-0">
          <p className="text-base leading-6 text-white">{label}</p>
          <CardTitle className="text-4xl leading-10 font-bold text-white">
            {title}
          </CardTitle>
          <div className="flex gap-1 items-center">
            <IoIosStar className="w-7 h-7" color="#FDE047"/>
            <p className="text-lg leading-7 font-semibold text-[#FAFAFA] py-2.5">
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
            <Button variant="secondary" >
              <LuPlay />
              {btnName}
            </Button>
          </Link>
        </CardFooter>
      </div> 
    </Card>
  );
};
