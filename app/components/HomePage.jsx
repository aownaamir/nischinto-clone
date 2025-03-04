"use client";
import hero from "@/public/hero-img2.png";
import facebook from "@/public/facebook.png";
import twitter from "@/public/twitter.png";
import linkedin from "@/public/linkedin.png";
import whatsapp from "@/public/whatsapp.png";
import Image from "next/image";
import Doctors from "@/public/doctors.svg";
import Service from "@/public/service.svg";
import Emergency from "@/public/emergency.svg";
import photo from "@/public/hero-curve.png";

import msg from "@/public/msg.png";
import call from "@/public/call.png";
const HomePage = () => {
  return (
    <>
      <div className="md:bg-nav-blue2 border-y border-appointment-blue justify-between md:px-10 md:py-3 hidden md:flex">
        <div className="flex gap-4 justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <div className="w-7">
              <Image src={msg} alt="email" width={100} height={100} />
            </div>
            <p>info@nischinto.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-5">
              <Image src={call} alt="email" width={100} height={100} />
            </div>
            <p>+01 - 234 567 890</p>
          </div>
        </div>
        <div>
          <a href="#appointment">
            <p className="font-semibold text-appointment-blue">Appointment</p>
          </a>
        </div>
      </div>
      <div
        id="home"
        className="w-full flex relative justify-center h-[60vh] lg:h-[100vh]  px-3 lg:px-10 overflow-hidden"
      >
        <div className="w-full bg-appointment-blue-bright md:top-[110px] left-24 top-10 md:left-40 absolute -z-10 scale-150 overflow-hidden">
          <Image
            src={photo}
            alt="bg"
            className="w-full"
            width={"auto"}
            height={"auto"}
          />
        </div>
        <div className="mt-20 flex flex-col gap-7 items-start">
          <h1 className="lg:leading-tight lg:w-[750px] font-bold text-4xl lg:text-6xl ">
            Take best quality treatment for Laboratory
          </h1>
          <p className="lg:w-[750px] text-lg">
            The art of medicine consists in amusing the patient while nature
            cures the disease. Treatment without prevention is simply
            unsustainable.
          </p>
          <a href="#appointment">
            <button className="w-36 h-12 rounded-lg bg-appointment-blue">
              <span className="font-semibold text-white">Appointment</span>
            </button>
          </a>
          <div className="flex gap-2 mt-3 lg:mt-1">
            <div className="w-36 flex justify-center gap-4">
              <div className="p-2 flex justify-center items-center rounded-sm bg-appointment-blue"></div>
              <div className="p-2 flex justify-center items-center rounded-sm bg-appointment-blue"></div>
              <div className="p-2 flex justify-center items-center rounded-sm bg-appointment-blue"></div>
              <div className="p-2 flex justify-center items-center rounded-sm bg-appointment-blue"></div>
            </div>
          </div>
        </div>
        <Image
          src={hero}
          alt="hero"
          width={500}
          height={500}
          className="hidden lg:block"
        />
      </div>
      <div className="lg:h-[80vh] flex flex-col md:flex-row gap-3 md:gap-16 justify-center items-center ">
        <div className="w-[95vw] md:w-[26vw] h-[300px] border-[0.01px] border-slate-400 rounded-md shadow-mg transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center gap-3">
          <div className="w-20 h-20 rounded-full flex justify-center items-center bg-doctors opacity-50 -z-10">
            <div className="w-12 z-10">
              <Doctors />
            </div>
          </div>
          <h1 className="font-semibold">Qualified Doctors</h1>
          <p className="w-[230px] text-slate-700 text-center">
            Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
            inc ididunt utid labore.
          </p>
        </div>
        <div className="w-[95vw] md:w-[26vw] h-[300px] border-[0.01px] border-slate-400 rounded-md shadow-mg transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center gap-3">
          <div className="w-20 h-20 rounded-full flex justify-center items-center bg-service opacity-50 -z-10">
            <div className="w-12 z-10">
              <Service />
            </div>
          </div>
          <h1 className="font-semibold">24 Hours Service</h1>
          <p className="w-[230px] text-slate-700 text-center">
            Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
            inc ididunt utid labore.
          </p>
        </div>
        <div className="w-[95vw] md:w-[26vw] h-[300px] border-[0.01px] border-slate-400 rounded-md shadow-mg transition-all duration-300 hover:shadow-xl flex flex-col justify-center items-center gap-3">
          <div className="w-20 h-20 rounded-full flex justify-center items-center bg-emergency -z-10">
            <div className="w-12 z-10">
              <Emergency />
            </div>
          </div>
          <h1 className="font-semibold">Need Emergency</h1>
          <p className="w-[230px] text-slate-700 text-center">
            Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor
            inc ididunt utid labore.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
