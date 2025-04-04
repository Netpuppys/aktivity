import React from "react";
import { GiRoundStar } from "react-icons/gi";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import achieve from "../../../assets/icons/achieve.png";
import totalProject from "../../../assets/icons/totalProject.png";
import upArrow from "../../../assets/icons/upArrow.png";
import { Bounce, Fade } from "react-awesome-reveal";
function Banner() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Bounce triggerOnce>
        <h5 className="text-center font-semibold">
          Maximize Training ROI with Real Engagement & <br />
          <span className="bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] text-transparent bg-clip-text">
            Measurable Outcomes
          </span>
        </h5>
      </Bounce>
      <Fade triggerOnce delay={300}>
        <h1 className="text-center pt-[1%] text-[#707070]">
          Transform passive learning into interactive, high-impact
        </h1>
      </Fade>
      <div className="w-fit flex gap-6 pt-[2%] pb-[1%]">
        <button className="bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] text-white shadow-[0px_4px_10.1px_rgba(0,0,0,0.25)] hover:bg-white hover:text-transparent hover:bg-clip-text transition-all duration-300 ease-in-out font-medium">
          Get Started
        </button>
        <button className="bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] text-transparent bg-clip-text shadow-[0px_4px_10.1px_rgba(0,0,0,0.25)] font-medium hover:text-white hover:bg-clip-padding transition-all duration-300 ease-in-out">
          Book a Demo!
        </button>
      </div>
      <div className="flex items-center justify-center gap-1">
        <GiRoundStar size={24} color={"#FFC107"} />
        <GiRoundStar size={24} color={"#FFC107"} />
        <GiRoundStar size={24} color={"#FFC107"} />
        <GiRoundStar size={24} color={"#FFC107"} />
        <GiRoundStar size={24} color={"#FFC107"} />{" "}
        <h2 className="text-[#3F3F3F] font-normal">5.0</h2>
      </div>
      <h2 className="text-[#3F3F3F] font-normal">
        from 80+ <span className="underline font-medium">reviews</span>
      </h2>
      <div className="flex items-end pb-[2%] w-[90%] mx-auto gap-[40px]">
        <img
          src={image1}
          alt="aktivity"
          title="Aktivity"
          className="rounded-3xl w-full aspect-[0.72/1] hover:scale-105 transition-all duration-300 ease-in"
        />
        <div className="aspect-[0.65/1] bg-[#DC2B1B]  w-[70%] rounded-3xl flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in">
          <h4 className="font-semibold text-center px-8 text-white">100+</h4>
          <h3 className="text-center px-8 text-white leading-snug">
            Our Esteemed Clients and Partners
          </h3>
        </div>
        <div className="aspect-[1.25/1] bg-white shadow-[0px_4px_10.2px_rgba(0,0,0,0.25)] w-full rounded-3xl hover:scale-105 transition-all duration-300 ease-in">
          <div className="relative w-full h-full flex flex-col justify-center px-[8%]">
            <div className="w-[clamp(20px,3vw,50px)] p-[5%] bg-[#FFD173] rounded-md mb-[2%]">
              <img
                src={totalProject}
                alt="totalProject"
                title="Aktivity"
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <h2 className="leading-snug text-[#4F4F4F]">Total Projects</h2>
              <div className="w-[clamp(10px,2vw,35px)] p-[4%] bg-[#FFD173] rounded-full">
                <img
                  src={upArrow}
                  alt="arrow"
                  title="Aktivity"
                  className="w-full"
                />
              </div>
              <h2 className="leading-snug text-[#231801]">8%</h2>
            </div>
            <h4 className="font-semibold mt-[2%]">1951 +</h4>
            <h2 className="leading-snug text-[#4F4F4F] mt-[2%]">
              Increase of <span className="text-[#F6AB12]">126</span> this month
            </h2>
          </div>
        </div>
        <div className="aspect-[0.65/1] bg-[#F78F18] w-[70%] rounded-3xl flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in">
          <h4 className="font-semibold text-center px-8 text-white">6+</h4>
          <h3 className="text-center px-8 text-white leading-snug">
            Years of Dedicated Service
          </h3>
        </div>

        <div className="aspect-[0.72/1] relative w-full overflow-hidden rounded-3xl hover:scale-105 transition-all duration-300 ease-in">
          <img
            src={image2}
            alt="aktivity"
            title="Aktivity"
            className="absolute -z-10 object-cover w-full h-full"
          />
          <div className="relative w-full h-full flex flex-col justify-end px-8 py-8">
            <img
              src={achieve}
              alt="achieve"
              title="Aktivity"
              className="w-[53px]"
            />
            <h3 className="text-white leading-snug">
              Achieve Optimal Efficiency and Boost Productivity
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
