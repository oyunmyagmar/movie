import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Skeleton,
} from "@/components/ui";

export const GenrePageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-full m-auto sm:mt-13 mt-8 mb-8 sm:pl-20 sm:pr-32 px-5">
      <Skeleton className="sm:w-48 w-40 sm:h-9 h-8 rounded-full mb-8" />
      <div className="sm:block hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <Skeleton className="w-27 h-8 rounded-full mb-1" />
            <Skeleton className="w-54 h-6 rounded-full mb-5" />
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 19 }).map((_, i) => (
                <Skeleton key={i} className="h-[22px] w-21 rounded-full" />
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-5" />
          <ResizablePanel>
            <Skeleton className="w-74 h-7 mb-8 rounded-full" />
            <div className="flex flex-wrap gap-y-8 gap-x-12">
              {Array.from({ length: 18 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[165px] h-[331px] rounded-md"
                />
              ))}
            </div>
            <Skeleton className="w-84 h-9 mt-8 justify-self-end" />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="sm:hidden block">
        <Skeleton className="w-43 h-7 mb-1 rounded-full" />
        <Skeleton className="w-[213px] h-6 rounded-full" />
        <div className="mt-5 flex flex-wrap gap-4">
          {Array.from({ length: 19 }).map((_, i) => (
            <Skeleton key={i} className="h-[22px] w-22 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-7 w-52 mt-8 rounded-full" />
        <div className="flex flex-wrap gap-5 mt-8">
          {Array.from({ length: 18 }).map((_, i) => (
            <Skeleton key={i} className="w-[157.5px] h-[309.1px] rounded-md" />
          ))}
        </div>
        <Skeleton className="w-50 h-9 mt-8 justify-self-end" />
      </div>
    </div>
  );
};
