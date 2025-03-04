import React from "react";
import Input from "./Input";
import Hexa1 from "../svgs/Hexa1";

const Appointment = () => {
  return (
    <div id="appointment" className={`px-3 lg:px-10 relative`}>
      <div className="absolute -z-10 -top-5 right-0">
        <Hexa1 />
      </div>
      <div className="mt-36 mb-8 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Make an Appointment</h1>
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
                  label="Phone Number"
                  placeholder="+92 *** *******"
                />
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="">Department</label>
                  <select
                    defaultValue={0}
                    className="w-[420px] border border-slate-500 rounded-md px-3 py-2"
                  >
                    <option value={0}>Select Department</option>
                    <option value={1}>Dental Care</option>
                    <option value={2}> Neurology</option>
                    <option value={3}>Crutches</option>
                    <option value={4}>Cardiology</option>
                    <option value={5}>Pulmonary</option>
                    <option value={6}>Xray</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-7 justify-center items-center">
                <Input
                  type="text"
                  label="Email Address"
                  placeholder="example@gmail.com"
                />
                <Input
                  type="date"
                  label="Booking Date"
                  placeholder="dd/mm/yy"
                />
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="">Doctor</label>
                  <select
                    defaultValue={0}
                    className="w-[420px] border border-slate-500 rounded-md px-3 py-2"
                  >
                    <option value={0}>Select Doctor</option>
                    <option value={0}>Dr. Ali</option>
                    <option value={1}>Dr. Ahmed</option>
                    <option value={2}>Dr. Abubakr</option>
                    <option value={3}>Dr. Abbas</option>
                    <option value={4}>Dr. Adil</option>
                    <option value={5}>Dr. Imran</option>
                    <option value={6}>Dr. Awais</option>
                  </select>
                </div>
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

export default Appointment;
