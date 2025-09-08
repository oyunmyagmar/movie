import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { FiMoon } from "react-icons/fi";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-[1440px] px-20 py-[11.5px] flex justify-between items-center">
        <NavigationMenuLink asChild>
          <Link href="">
            <Image src="/Logo.png" alt="" width={92} height={20} />
          </Link>
        </NavigationMenuLink>
        <div className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-[97px] h-[36px] px-4 py-2 border border-[#E4E4E7] rounded-md box-border">
              Genre
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className="w-[537px] h-[293px] p-5 border border-[#E4E4E7] rounded-lg"
                //   className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
              >
                <li>Action</li>
                <li>Adventure</li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Input
            type="search"
            placeholder="Search.."
            className="w-[379px] px-3 border border-[#E4E4E7] rounded-lg text-[#71717A] text-sm leading-5 flex items-center"
          />
        </div>
        <Toggle>
          <FiMoon />
        </Toggle>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
