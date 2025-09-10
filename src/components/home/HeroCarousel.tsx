"use client";
import * as React from "react";

import { HeroCard } from "@/components/home";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const HeroCarousel = () => {
  const heroCardData = [
    {
      image:
        "https://cdn2.nbcuni.com/NBCUniversal/styles/newsroom_stories_16_9_image_style/s3/2024-11/WKD_TVSlide_1920x1080pxH_Reach_8.jpg?VersionId=oZ2_V7nGiB8s1LNXgKNOMBkGktfvzSzy&h=d1cb525d&itok=SIZUx0XE",
      label: "Now Playing:",
      title: "Wicked",
      score: 6.9,
      description:
        "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
      btnName: "Watch Trailer",
    },
    {
      image:
        "https://i2.wp.com/pocculture.com/wp-content/uploads/2024/07/G2_DOM_Online_Teaser_1-Sheet_07_FIN4-min-e1720569522171.jpg?w=999&ssl=1",
      label: "Now Playing:",
      title: "Gladiator II",
      score: 6.9,
      description:
        "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
      btnName: "Watch Trailer",
    },
    {
      image: "https://sussex.ca/media/moana.jpg",
      label: "Now Playing:",
      title: "Moana 2",
      score: 6.9,
      description:
        "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
      btnName: "Watch Trailer",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
      <Carousel
        className="w-[1440px] h-[600px] mt-6 relative"
        plugins={[Autoplay({ delay: 2000 })]}
        setApi={setApi}
      >
        <CarouselContent>
          {heroCardData.map((el, index) => (
            <CarouselItem key={index}>
              <HeroCard
                image={el.image}
                label={el.label}
                title={el.title}
                score={el.score}
                description={el.description}
                btnName={el.btnName}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-11" />
        <CarouselNext className="right-11" />
        <div className="flex gap-2 absolute bottom-[37px] left-175">
          {Array.from({length: count}).map((_, index) => (
       <div onClick={()=>{api?.scrollTo(index)}} className={`w-2 h-2 rounded-full ${(index+1 === current) ? "bg-white" : "bg-white opacity-80"}`}/> ))}
        </div>
      </Carousel>
  );
};
