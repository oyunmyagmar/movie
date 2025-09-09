import Image from "next/image";
import Link from "next/link";
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
      <div className="absolute">
        <CardHeader>
          <p>{label}</p>
          <CardTitle>{title}</CardTitle>
          <p>{score}/10</p>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href="/genre">
            <Button variant="secondary">{btnName}</Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};
