import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { NavigationMenuDemo, ThemeToggler } from "@/components/home";
import { IoSearchOutline } from "react-icons/io5";

export const Navigation = () => {
  return (
    <div className="w-[1440px] flex justify-between items-center px-20 py-[11.5px]">
      <Link href="">
        <Image src="/Logo.png" alt="" width={92} height={20} />
      </Link>
      <div className="flex gap-6">
        <NavigationMenuDemo />
        <div className="flex items-center">
          <IoSearchOutline className="-mr-7" color="#71717A" />
          <Input
            type="search"
            placeholder="Search.."
            className="w-[379px] px-3 pl-[38px] border border-[#E4E4E7] rounded-lg text-[#71717A] text-sm leading-5 flex items-center"
          />
        </div>
      </div>
      <ThemeToggler />
    </div>
  );
};

{
  /* <div className="w-[97px] h-[36px] px-4 py-2 border border-[#E4E4E7] rounded-md box-border">
  Genre
</div>; */
}
