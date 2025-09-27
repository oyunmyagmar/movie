import React from "react";
import { Skeleton } from "@/components/ui";
import { TbLoaderQuarter } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const HomePageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-full m-auto sm:mt-6 mt-0 sm:mb-[51px] mb-8">
      <Skeleton className="sm:w-[1440px] w-full sm:h-[600px] aspect-[125/82] rounded-none flex justify-center items-center">
        <TbLoaderQuarter size={200} className="animate-spin sm:block hidden" />
        <AiOutlineLoading3Quarters
          size={100}
          className="animate-spin sm:hidden block"
        />
      </Skeleton>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap"
        >
          <div className="w-full flex justify-between">
            <Skeleton className="w-[250px] h-8 rounded-full" />
            <Skeleton className="w-[165px] h-8 rounded-full" />
          </div>
          <div className="w-full flex flex-wrap gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="w-[230px] h-[439px] rounded-lg" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
