import { testimonials } from "@/data/data";
import Image from "next/image";
import React from "react";

const ReviewCard = ({ item, ind }) => {
  return (
    <div
      className={`review w-[95%] py-8 px-6 rounded-md flex-none relative border border-slate-400 md:w-[360px] flex flex-col gap-1 items-center justify-center hover:shadow-2xl transition-all duration-300  ${
        ind === testimonials.length - 1 ? "mr-[2px]" : ""
      } translate-x-[1015px] md:translate-x-[588px] mb-3`}
    >
      <div>
        <Image src={item.img} alt={item.name} />
      </div>
      <h1 className="font-semibold">{item.name}</h1>
      <p className="text-slate-700">{item.role}</p>
      <p className="w-full mt-3 whitespace-normal text-center">{item.review}</p>
      <p className="commas opacity-0 transition-all duration-700 h-20 absolute text-[100px] text-appointment-blue right-1 bottom-0 font-extrabold">
        &quot;
      </p>
    </div>
  );
};

export default ReviewCard;
