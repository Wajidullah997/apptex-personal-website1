import Logo from "./images/logoh.png";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="w-[80%] py-[36px] mx-auto">
      <div className="flex justify-between items-center">
        <img className="cursor-pointer md:flex" src={Logo} alt="" width={60} />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => handleClick("menu")}
            className="text-blue-500 hover:text-blue-600"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg> */}
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-14 font-400">
          <ul className="flex text-white gap-8 font-semibold">
            <li
              onClick={() => handleClick("home")}
              className={`cursor-pointer mx-2  transition-transform hover:scale-110 ${
                activeItem === "home" ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </li>
            <li
              onClick={() => handleClick("Services")}
              className={`cursor-pointer mx-2  transition-transform hover:scale-110 ${
                activeItem === "Services" ? "border-b-2 border-white" : ""
              }`}
            >
              Services
            </li>
            <li
              onClick={() => handleClick("Portfolio")}
              className={`cursor-pointer mx-2  transition-transform hover:scale-110 ${
                activeItem === "Portfolio" ? "border-b-2 border-white" : ""
              }`}
            >
              Portfolio
            </li>
            <li
              onClick={() => handleClick("Testimonials")}
              className={`cursor-pointer mx-2 transition-transform hover:scale-110 ${
                activeItem === "Testimonials" ? "border-b-2 border-white" : ""
              }`}
            >
              Testimonials
            </li>
            <button className="text-white cursor-pointer whitespace-nowrap hover:scale-110 transform transition-all duration-300 ease-in p-2 -mt-2 bg-[#30A8FF] rounded-md shadow-md shadow-blue-500">
              <li>Get into touch</li>
            </button>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Visible on Mobile) */}
      <div
        className={`${
          activeItem === "menu" ? "block" : "hidden"
        } md:hidden mt-2`}
      >
        <ul className="flex flex-col gap-4 font-semibold">
          <li
            onClick={() => handleClick("home")}
            className={`cursor-pointer hover:text-blue-400 ${
              activeItem === "home" ? "border-b-2 border-blue-400" : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => handleClick("Services")}
            className={`cursor-pointer hover:text-blue-400 ${
              activeItem === "Services" ? "border-b-2 border-blue-400" : ""
            }`}
          >
            Services
          </li>
          <li
            onClick={() => handleClick("Portfolio")}
            className={`cursor-pointer hover:text-blue-400 ${
              activeItem === "Portfolio" ? "border-b-2 border-blue-400" : ""
            }`}
          >
            Portfolio
          </li>
          <li
            onClick={() => handleClick("Testimonials")}
            className={`cursor-pointer hover:text-blue-400 ${
              activeItem === "Testimonials" ? "border-b-2 border-blue-400" : ""
            }`}
          >
            Testimonials
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
