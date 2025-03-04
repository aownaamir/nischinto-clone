import React from "react";
import Hexa2 from "../svgs/Hexa2";
import Input from "./Input";

const Contact = () => {
  return (
    <div id="contact" className={`px-3 lg:px-10 relative my-36`}>
      <div className="w-full absolute -z-10 -top-[80px] left-0 overflow-hidden">
        <Hexa2 />
      </div>
      <div className="mb-8 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Stay connect with us</h1>
        <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div>
        <p className="text-center w-[90vw] md:w-[60vw]  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry&apos;s standard dummy text.
        </p>
      </div>
      <form action="">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-7 items-start">
            <div className="flex flex-col gap-7 md:gap-5 md:flex-row justify-center items-center">
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input type="text" label="Full Name" placeholder="Ahmed" />
                <Input
                  type="text"
                  label="Subject"
                  placeholder="Write subject"
                />
              </div>
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input
                  type="text"
                  label="Email Address"
                  placeholder="example@gmail.com"
                />
                <Input
                  type="text"
                  label="Phone"
                  placeholder="+92 300 1234562"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="">Message</label>
              <textarea
                type="text/area"
                className="w-full md:w-[860px] border border-slate-500 rounded-md px-3 py-2"
                placeholder="Write something here..."
              />
            </div>
            <button className="w-32 h-12 text-white bg-appointment-blue rounded-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
