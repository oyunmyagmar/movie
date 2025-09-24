"use client";
import React from "react";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const NavResponseSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="w-4 h-4 border" onClick={() => setIsOpen(true)}>
        <IoSearchOutline />
      </div>
    </div>
  );
};
