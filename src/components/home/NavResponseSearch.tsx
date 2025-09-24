"use client";
import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const NavResponseSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      {isOpen && <Input />}
      <Button
        variant="outline"
        className="w-9 h-9"
        onClick={() => setIsOpen(true)}
      >
        <IoSearchOutline />
      </Button>
    </div>
  );
};
