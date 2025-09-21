import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { TbLoaderQuarter } from "react-icons/tb";

export const HomePageSkeleton = () => {
  return (
    <div className="w-[1440px] m-auto mt-6 mb-[51px]">
      <Skeleton className="w-[1440px] h-[600px] flex justify-center items-center">
        <TbLoaderQuarter size={200} className="animate-spin" />
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
