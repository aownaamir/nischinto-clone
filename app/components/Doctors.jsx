"use client";
import { doctors } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
  const [currInd, setCurrInd] = useState(0);
  return (
    <div id="doctors" className="mt-32 px-3 lg:px-10">
      <div className="mt-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Meet Our Specialists</h1>
        <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div>
        <p className="text-center w-[90vw] md:w-[60vw]  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry&apos;s standard dummy text.
        </p>
      </div>

      <div className="mt-10 w-[386px] md:w-full m-auto whitespace-nowrap flex gap-7 transition-transform justify-center items-center overflow-x-scroll lg:overflow-x-hidden">
        {doctors.map((item, ind) => (
          <Doctor key={ind} item={item} ind={ind} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
