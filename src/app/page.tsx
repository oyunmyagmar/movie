import { Navigation, NowPlayingCard, MovieCard } from "@/components/home";
// import { CarouselDemo } from "@/components/home/CarouselDemo";
import { MovieCards } from "@/components/home/MovieCards";
import { Button } from "@/components/ui/button";
import { LuArrowRight } from "react-icons/lu";
// import { Link } from "next/link";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Navigation></Navigation>
      <NowPlayingCard></NowPlayingCard>
      {/* <CarouselDemo></CarouselDemo> */}
      <div className="w-[1440px] mt-13 pt-8 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
            Upcoming
          </p>
          {/* <Link src=""> */}
          <Button variant="link">
            See more <LuArrowRight />
          </Button>
          {/* </Link> */}
        </div>
        {MovieCards.map((el, index) => (
          <MovieCard
            key={index}
            title={el.title}
            score={el.score}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
