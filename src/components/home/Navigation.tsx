import Link from "next/link";
import { Film } from "lucide-react";
import {
  NavInputSearch,
  NavMenuItem,
  NavResponseSearch,
  ThemeToggler,
} from "@/components/home";

export const Navigation = async () => {
  return (
    <header className="w-screen">
      <div className="sm:w-[1440px] w-full flex justify-between items-center sm:px-20 px-5 py-[11.5px] m-auto">
        <Link
          href="http://localhost:3000/"
          className="flex gap-2 text-indigo-700 text-base leading-5 italic font-bold items-center"
        >
          <Film size={20} color="#4338CA" />
          Movie Z
        </Link>
        <div className="sm:flex gap-6 hidden">
          <NavMenuItem />
          <NavInputSearch />
        </div>
        <NavResponseSearch />
        <ThemeToggler />
      </div>
    </header>
  );
};
