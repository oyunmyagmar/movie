import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export const DetailsDynamicPageSkeleton = () => {
  return (
    <div className="w-[1440px] m-auto pl-45 pr-[178px] mt-13 mb-[112.62px]">
      <div className="flex justify-between mb-6">
        <div>
          <Skeleton className="w-78 h-10 rounded-full mb-1" />
          <Skeleton className="w-[237px] h-7 rounded-full" />
        </div>
        <div>
          <Skeleton className="w-[83px] h-4 rounded-full mb-0.5" />
          <div className="flex gap-1 items-center">
            <Skeleton className="w-7 h-7 rounded-full" />
            <div>
              <Skeleton className="w-[51px] h-7 rounded-full" />
              <Skeleton className="w-[51px] h-4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Skeleton className="w-[290px] h-107 rounded-lg" />
        <Skeleton className="w-190 h-107 rounded-lg" />
      </div>
      <div className="flex gap-3 mt-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-18 h-5 rounded-full" />
        ))}
      </div>
      <Skeleton className="w-full mt-5 h-6 rounded-full" />
      <Skeleton className="w-[699px] mt-1 h-6 rounded-full" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i}>
          <div className="mt-5 flex gap-[53px]">
            <Skeleton className="w-14 h-7 rounded-full" />
            <Skeleton className="w-90 h-7 rounded-full" />
          </div>
          <Separator className="mt-2 mb-1" />
        </div>
      ))}
      <div className="flex justify-between my-8">
        <Skeleton className="w-[250px] h-8 rounded-full" />
        <Skeleton className="w-[165px] h-8 rounded-full" />
      </div>
      <div className="flex gap-9">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-[190px] h-93 rounded-lg" />
        ))}
      </div>
    </div>
  );
};
