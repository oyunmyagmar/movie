import { Navigation, NowPlayingCard, MovieCard } from "@/components/home";
// import { CarouselDemo } from "@/components/home/CarouselDemo";
import { MovieCards } from "@/components/home/MovieCards";

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Navigation></Navigation>
      <NowPlayingCard></NowPlayingCard>
      {/* <CarouselDemo></CarouselDemo> */}
      <div className="pt-8 px-20 flex gap-8 flex-wrap">
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
