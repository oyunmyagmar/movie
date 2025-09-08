import { MovieCard, Navigation, NowPlayingCard } from "@/components/home";

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <Navigation></Navigation>
      <NowPlayingCard></NowPlayingCard>
      <div className="pt-8 px-20 flex gap-8 flex-wrap">
        <MovieCard
          title="Dear Santa"
          score={6.9}
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5LufXuKTxUHK3QRI-MUZXyFsHAv-FVZJcRGi-G2fzdYPkqxAsV1nh4SNVWr5F09P6v928"
        ></MovieCard>
        <MovieCard
          title="How To Train Your Dragon Live Action"
          score={6.9}
          image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-"
        ></MovieCard>
        <MovieCard
          title="Alien Romulus"
          score={6.9}
          image="https://upload.wikimedia.org/wikipedia/en/c/cb/Alien_Romulus_2024_%28poster%29.jpg"
        ></MovieCard>
        <MovieCard
          title="From the Ashes"
          score={6.9}
          image="https://m.media-amazon.com/images/M/MV5BNzg2Mzc2OTEtZGNlZS00NTk5LThlMjYtZjM5MDZiOWZiM2RiXkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg"
        ></MovieCard>
      </div>
    </div>
  );
};
export default Home;
