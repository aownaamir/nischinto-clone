"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={`sticky top-0 w-full z-50  flex flex-col bg-nav-blue2`}>
      <div className="flex justify-between px-3 lg:px-10 py-5">
        <div className="w-">
          <Image src={logo} alt="logo" width={150} height={120} />
        </div>
        <div
          className="w-7 h-7 lg:hidden"
          onClick={() => setOpened((pV) => !pV)}
        >
          <div className="border-2 border-gray-400 my-1"></div>
          <div className="border-2 border-gray-400 my-1"></div>
          <div className="border-2 border-gray-400 my-1"></div>
        </div>
        <div className="hidden lg:flex w-auto  flex-col lg:flex-row justify-center items-center gap-10">
          {["Home", "About", "Department", "Doctors", "Gallery", "Contact"].map(
            (item, i) => (
              <a key={i} href={`#${item.toLocaleLowerCase()}`}>
                <div>
                  <p className="text-sm active:text-appointment-blue font-semibold">
                    {item}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
        {opened ? (
          <div className="w-full  flex flex-col absolute top-[5.4rem] left-0 bg-slate-100 justify-center items-left gap-5 pt-3 pl-7">
            {[
              "Home",
              "About",
              "Department",
              "Doctors",
              "Gallery",
              "Contact",
            ].map((item, i) => (
              <a key={i} href={`#${item.toLocaleLowerCase()}`}>
                <div key={i} className="text-left">
                  <p className=" text-sm active:text-appointment-blue font-semibold mb-4">
                    {item}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
