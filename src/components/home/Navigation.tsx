import Link from "next/link";
import Image from "next/image";
import { NavigationMenuDemo, ThemeToggler } from "@/components/home";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";

export const Navigation = async () => {
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing"
  );
  return (
    <header className="w-screen">
      <div className="w-[1440px] flex justify-between items-center px-20 py-[11.5px] m-auto">
        <Link href="">
          <Image
            src="/Logo.png"
            alt=""
            width={92}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="flex gap-6">
          <NavigationMenuDemo movies={nowPlayingMovies.results} />
          <div className="flex items-center">
            <Search className="w-4 h-4 -mr-7" color="#71717A" />
            <Input
              type="search"
              placeholder="Search.."
              className="w-[379px] px-3 py-[7px] pl-[38px] border border-[#E4E4E7]-foreground rounded-lg text-[#71717A]-foreground text-sm leading-5 flex items-center box-border"
            />
          </div>
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
};
