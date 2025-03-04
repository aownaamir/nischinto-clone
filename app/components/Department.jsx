"use client";
import { departments } from "@/data/data";
import Dept from "./Dept";
import { useState } from "react";
import Image from "next/image";

// import Brain from "@/public/brain.svg";
const Department = () => {
  const [currDept, setCurrDept] = useState(0);
  const dept = departments[currDept];
  return (
    <div id="department" className="px-3 lg:px-10">
      <div className="mt-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Our Department</h1>
        <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div>
        <p className="text-center w-[90vw] md:w-[60vw]  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry&apos;s standard dummy text.
        </p>
      </div>
      <div className="h-[165px] flex gap-4 mt-5 justify-center items-center w-[95vw] overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden">
        {departments.map((item, i) => (
          <Dept
            identity={i}
            key={i}
            item={item}
            currDept={currDept}
            onClick={() => setCurrDept(i)}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[50%]">
          <Image src={dept.img} alt="dept" />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-5">
          <h1 className="w-full md:w-[95%] text-left text-2xl md:text-4xl font-semibold">
            Welcome to our{" "}
            <span className="text-appointment-blue">{dept.name}</span>
          </h1>
          <p className="w-full md:w-[95%] text-left text-xl font-medium">
            {dept.description}
          </p>
          <p className="w-full md:w-[95%] text-left text-slate-700">
            {dept.details}
          </p>
          <button className="w-32 h-12 text-white bg-appointment-blue rounded-lg font-semibold">
            Read More
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Department;
