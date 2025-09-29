"use client";
import React from "react";
import { useEffect } from "react";

export const SampleBackend = () => {
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>SampleBackend</div>;
};
