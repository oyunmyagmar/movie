"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const NavInputSearch = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="flex items-center">
      <Search className="w-4 h-4 -mr-7" color="#71717A" />

      <Input
        value={searchValue}
        onChange={handleInputChange}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter") {
        //     <Link href="/search">
        //       <p>{searchValue}</p>
        //     </Link>;
        //   }
        // }}
        type="text"
        // onKeyDown={myFunction()}
        placeholder="Search.."
        className="w-[379px] px-3 py-[7px] pl-[38px] border border-[#E4E4E7]-foreground rounded-lg text-[#71717A]-foreground text-sm leading-5 flex items-center box-border"
      />
      <button className="border border-black">{searchValue}</button>
    </div>
  );
};
