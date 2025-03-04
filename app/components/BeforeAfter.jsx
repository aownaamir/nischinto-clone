"use client";
import one from "@/public/one.jpg";
import three from "@/public/three.jpg";
import Image from "next/image";
import { useState } from "react";
import { ResizableBox } from "react-resizable";
import { Rnd } from "react-rnd";
import ImageComparison from "./ImageComparison";

const BeforeAfter = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div className="my-32 px-3 lg:px-10">
      <div className="mt-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">
          Before and after procedures
        </h1>
        <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div>
        <p className="text-center w-[90vw] md:w-[60vw]  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry&apos;s standard dummy text.
        </p>
      </div>
      <div className="w-full p-2 md:w-[673px] m-auto border border-white shadow-custom-dark mt-10">
        <ImageComparison />
      </div>
    </div>
  );
};

export default BeforeAfter;
