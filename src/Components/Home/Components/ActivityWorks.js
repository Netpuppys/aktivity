import React from "react";
import activity from "../../../assets/activity.png";
function ActivityWorks() {
  return (
    <div className="my-[3%] flex flex-col items-center w-[90%] mx-auto h-full p-[1.5%] bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] rounded-3xl">
      <h5 className="leading-snug text-center text-white">
        How <strong className="border-b border-white">Aktivity</strong> works
      </h5>
      <div className="w-fit flex gap-6 pt-[2%] pb-[1%]">
        <button className="text-[#383838] bg-white font-medium">Engage</button>
        <button className="text-[#383838] bg-white font-medium">Track</button>
        <button className="text-[#383838] bg-white font-medium">
          Optimize
        </button>
        <button className="text-[#383838] bg-white font-medium">
          Drive ROI
        </button>
      </div>
      <img src={activity}  alt="aktivity"
        title="Aktivity" className="w-full" />
      <button className="mt-[1%] bg-black text-white font-medium px-[4%] hover:bg-white hover:text-black transition-all duration-300 ease-linear">
        See It in Action
      </button>
    </div>
  );
}

export default ActivityWorks;
