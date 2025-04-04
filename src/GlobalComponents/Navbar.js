import React from "react";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
function Navbar() {
  const navbarItem = [
    {
      title: "Home",
      linkTo: "/",
    },
    {
      title: "About",
      linkTo: "/about",
    },
    {
      title: "Services",
      linkTo: "/services",
    },
    {
      title: "Contact",
      linkTo: "/contact",
    },
  ];
  const location = useLocation();
  return (
    <div className="w-[85%] mx-auto py-[3%] flex justify-between items-center">
      <img
        onClick={() => (window.location.href = "/")}
        src={logo}
        alt=""
        className="w-[250px] cursor-pointer"
      />
      <div className="w-[60%] flex justify-between items-center">
        <div className="w-fit flex gap-[50px]">
          {navbarItem.map((item, index) => (
            <a
              key={index}
              href={item.linkTo}
              className={`cursor-pointer ${
                location.pathname === item.linkTo
                  ? "bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] text-transparent bg-clip-text font-semibold"
                  : "font-normal hover:bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] hover:text-transparent hover:bg-clip-text"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <button
          onClick={() => (window.location.href = "/sign-up")}
          className="bg-gradient-to-r from-[#F6AB12] via-[#F12D0B] to-[#800437] text-white font-medium hover:bg-white hover:text-transparent hover:bg-clip-text transition-all duration-300 ease-in-out shadow-[0px_4px_10.2px_rgba(0,0,0,0.25)]"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
