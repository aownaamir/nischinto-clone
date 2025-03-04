import { testimonials } from "@/data/data";
import Image from "next/image";
import React from "react";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  return (
    <div className="mt-32 px-3 lg:px-10">
      <div className="my-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">What peoble say?</h1>
        <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div>
        <p className="text-center w-[90vw] md:w-[60vw]  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry&apos;s standard dummy text.
        </p>
      </div>
      <div className="custom-scrollbar w-full md:w-[1150px] m-auto h-full gap-5 md:gap-8  md flex  whitespace-nowrap  items-center justify-center overflow-x-scroll overflow-y-hidden scroll-m-2">
        {testimonials.map((item, i) => (
          <ReviewCard key={i} item={item} ind={i} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
