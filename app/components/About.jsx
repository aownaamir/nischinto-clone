import avatar from "@/public/avatar.png";
import call from "@/public/call.png";
import Image from "next/image";
function About() {
  return (
    <div id="about" className="px-3 lg:px-10">
      <div className="mt-10 flex flex-col gap-5 justify-center items-center">
        <h1 className="font-bold text-2xl md:text-4xl">Who We Are</h1>
        <div className="w-[200px] md:w-[110px] rounded-lg border-2 border-appointment-blue"></div>
        <p className="text-center w-[90vw] md:w-[60vw]  text-slate-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum the industry&apos;s standard dummy text.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-7 md:mt-10 gap-6 md:gap-12 justify-center">
        <div className="w-full md:w-[720px] flex flex-col justify-center items-start gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-semibold text-2xl md:text-4xl text-center md:text-left">
              A hospital is a health care institution providing patient
              treatment with specialized medical
            </h1>
            <p className="text-slate-700 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Commodo consequat.
            </p>
            <p className="text-slate-700 text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Commodo consequat. Sed do eiusmod tempor incidid unt
              labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <div className="rounded-full">
              <Image src={avatar} alt="avatar" width={70} />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl text-appointment-blue">
                David Ambrose
              </p>
              <p className="text-slate-700">Founder & Director</p>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="border border-appointment-blue-light py-7 md:p-4 bg-appointment-blue-light">
          <div className="w-[85%] md:w-[350px] m-auto md:m-0 border border-appointment-blue flex flex-col justify-center items-center gap-2 py-4 md:py-0">
            <h1 className="text-appointment-blue font-bold text-xl">
              Weekly Timetable
            </h1>
            <div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Monday</p>
                <p>8:00am-7:00pm</p>
              </div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Tuesday</p>
                <p>9:00am-6:00pm</p>
              </div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Wednesday</p>
                <p>9:00am-6:00pm</p>
              </div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Thursday</p>
                <p>8:00am-7:00pm</p>
              </div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Friday</p>
                <p>9:00am-6:00pm</p>
              </div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Saturday</p>
                <p>8:00am-7:00pm</p>
              </div>
              <div className="flex justify-between items-center p-[10px] w-[300px] md:w-[320px] border-b border-dashed border-slate-700">
                <p>Sunday</p>
                <p>9:00am-3:00pm</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <Image src={call} alt="call" width={30} />
              </div>
              <div className="flex flex-col text-slate-700">
                <p>Call Now</p>
                <h1 className="text-appointment-blue font-bold">
                  (+01) - 234 567 890
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
