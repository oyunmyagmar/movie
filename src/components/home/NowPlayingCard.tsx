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

export function NowPlayingCard() {
  return (
    <Carousel className="w-[1440px] h-[600px] bg-amber-400 mt-6">
      <CarouselContent>
        <CarouselItem>
          <Card>
            <CardHeader>
              <p>Now Playing:</p>
              <CardTitle>Wicked</CardTitle>
              <p>6.9/10</p>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button>Watch Trailer</Button>
            </CardFooter>
          </Card>
        </CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
// export const NowPlayingCard = () => {
//   return (
//     <Carousel>
//       <Card className="w-full h-150 bg-amber-400">
//         <CardContent>
//           <CardHeader>Now Playing:</CardHeader>
//           <CardTitle>Wicked</CardTitle>
//           <CardDescription>
//             Elphaba, a misunderstood young woman because of her green skin, and
//             Glinda, a popular girl, become friends at Shiz University in the
//             Land of Oz. After an encounter with the Wonderful Wizard of Oz,
//             their friendship reaches a crossroads.
//           </CardDescription>
//           <Button>Watch Trailer</Button>
//         </CardContent>
//       </Card>
//     </Carousel>
//   );
// };
