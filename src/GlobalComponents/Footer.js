import React from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/icons/linkedin.png";
import youtube from "../assets/icons/youtube.png";
import facebook from "../assets/icons/facebook.png";

function Footer() {
  const links = [
    {
      title: "Company",
      subItems: [
        { title: "About Us", linkTo: "" },
        { title: "Customers", linkTo: "" },
        { title: "Newsroom", linkTo: "" },
        { title: "Events", linkTo: "" },
      ],
    },
    {
      title: "Industries",
      subItems: [
        { title: "Precision Metalforming", linkTo: "" },
        { title: "Industrial Manufacturing", linkTo: "" },
        { title: "High Tech & Electronics", linkTo: "" },
        { title: "Aerospace", linkTo: "" },
      ],
    },
    {
      title: "Products",
      subItems: [
        { title: "Manufacturing system", linkTo: "" },
        { title: "Enterprise Planning", linkTo: "" },
        { title: "Quality Management", linkTo: "" },
        { title: "Supply Chain Planning", linkTo: "" },
      ],
    },
  ];
  return (
    <div className="pb-[2%] w-[83%] mx-auto ">
      <div className="w-full pt-[6%] pb-[2%] flex justify-center items-center border-b border-[#F12D0B] border-opacity-70">
        <div className="w-fit max-w-[18vw]">
          <img
            onClick={() => (window.location.href = "/")}
            src={logo}
            alt=""
            className="w-[250px] mb-[2%] cursor-pointer"
          />
          <h2 className="text-[#121212] font-extralight leading-snug">
            Our Solutions make production faster and cheaper. Contact us for
            more information
          </h2>
        </div>
        <div className="w-[calc(90%-18vw)] ml-auto flex justify-between gap-2">
          {links.map((item, index) => (
            <div key={index} className="w-fit flex flex-col gap-2">
              <h3 className="bg-gradient-to-r mb-1 from-[#F6AB12] via-[#F12D0B] to-[#800437] text-transparent bg-clip-text">
                {item.title}
              </h3>
              {item.subItems.map((item, index) => (
                <a
                  href={item.linkTo}
                  key={index}
                  className="text-[#6B6B6B] font-normal hover:bg-gradient-to-r hover:from-[#F6AB12] hover:via-[#F12D0B] hover:to-[#800437] hover:text-transparent hover:bg-clip-text transition-all duration-300 ease-linear"
                >
                  {item.title}
                </a>
              ))}
            </div>
          ))}
          <div className="w-fit flex flex-col gap-2">
            <h3 className="bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] text-transparent bg-clip-text">
              Get In Touch
            </h3>
            <div className="w-full">
              <a
                href="mailto:Hallo@aktivity.com"
                className="text-[#6B6B6B] font-normal hover:bg-gradient-to-r hover:from-[#F6AB12] hover:via-[#F12D0B] hover:to-[#800437] hover:text-transparent hover:bg-clip-text transition-all duration-300 ease-linear"
              >
                Hallo@aktivity.com
              </a>
              <div className="flex justify-between mt-[10%]">
                <div className="w-[clamp(10px,2.2vw,50px)] p-[3%] bg-[#F5F5F5] border border-[#F12D0B] rounded-lg mb-[2%]">
                  <img src={linkedin} alt="" className="w-full" />
                </div>
                <div className="w-[clamp(10px,2.2vw,50px)] p-[3%] bg-[#F5F5F5] border border-[#F12D0B] rounded-lg mb-[2%]">
                  <img src={youtube} alt="" className="w-full" />
                </div>
                <div className="w-[clamp(10px,2.2vw,50px)] p-[3%] bg-[#F5F5F5] border border-[#F12D0B] rounded-lg mb-[2%]">
                  <img src={facebook} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[1%] w-full flex justify-between">
        <h2 className="w-fit">© 2024 Aktivity. All rights reserved</h2>
        <div className="w-fit flex gap-[30px]">
          <a
            href="/terms-and-condition"
            className="hover:bg-gradient-to-r hover:from-[#F6AB12] hover:via-[#F12D0B] hover:to-[#800437] hover:text-transparent hover:bg-clip-text transition-all duration-300 ease-linear"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy-policy"
            className="hover:bg-gradient-to-r hover:from-[#F6AB12] hover:via-[#F12D0B] hover:to-[#800437] hover:text-transparent hover:bg-clip-text transition-all duration-300 ease-linear"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
