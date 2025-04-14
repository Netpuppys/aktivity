import React from "react";
import activity from "../../../assets/activity.png";
import activityMobile from "../../../assets/activityMobile.png";
function ActivityWorks() {
  return (
    <div className="my-8 md:my-[3%] flex flex-col items-center w-[90%] mx-auto h-full p-8 md:p-[1.5%] bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] rounded-3xl">
      <h5 className="leading-snug text-center text-white">
        How <strong className="border-b border-white">Aktivity</strong> works
      </h5>
      <div className="w-full md:w-fit flex flex-wrap gap-6 pt-4 md:pt-[2%] pb-4 md:pb-[1%]">
        <button className="w-[calc(50%-0.75rem)] md:w-fit text-[#383838] bg-white font-medium">
          Engage
        </button>
        <button className="w-[calc(50%-0.75rem)] md:w-fit text-[#383838] bg-white font-medium">
          Track
        </button>
        <button className="w-[calc(50%-0.75rem)] md:w-fit text-[#383838] bg-white font-medium">
          Optimize
        </button>
        <button className="w-[calc(50%-0.75rem)] md:w-fit text-[#383838] bg-white font-medium">
          Drive ROI
        </button>
      </div>
      <img
        src={activity}
        alt="aktivity"
        title="Aktivity"
        className="w-full hidden md:flex"
      />
      <img
        src={activityMobile}
        alt="aktivity"
        title="Aktivity"
        className="w-full flex md:hidden"
      />
      <button className="mt-[1%] bg-black text-white font-medium px-8 md:px-[4%] hover:bg-white hover:text-black transition-all duration-300 ease-linear">
        See It in Action
      </button>
    </div>
  );
}

export default ActivityWorks;
