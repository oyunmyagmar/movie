import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export const NowPlayingCard = () => {
  return (
    <Carousel>
      <Card className="w-full h-150 bg-amber-400">
        <CardContent>
          <CardHeader>Now Playing:</CardHeader>
          <CardTitle>Wicked</CardTitle>

          <CardDescription>
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.{" "}
          </CardDescription>
          <Button>Watch Trailer</Button>
        </CardContent>
      </Card>
    </Carousel>
  );
};
