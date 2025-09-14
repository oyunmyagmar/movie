"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const NavInputSearch = () => {
  //   const searchParams = useSearchParams();
  //   const searchValue = searchParams.get("searchValue");
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <div className="flex items-center">
      <Search className="w-4 h-4 -mr-7" color="#71717A" />

      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          console.log(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     <Link href="/search"></Link>;
        //   }
        //   console.log("working");
        // }}
        type="text"
        // onKeyDown={myFunction()}
        placeholder="Search.."
        className="w-[379px] px-3 py-[7px] pl-[38px] border border-[#E4E4E7]-foreground rounded-lg text-[#71717A]-foreground text-sm leading-5 flex items-center box-border"
      />
      <button className="border border-black">select</button>
    </div>
  );
};
