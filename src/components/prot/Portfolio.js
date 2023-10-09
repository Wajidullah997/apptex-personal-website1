import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(menu);
  return (
    <section className="md:w-[80%] w-full md:py-0 py-10 mx-auto flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-blue-400  text-2xl mb-2-3 font-bold">Portfolio</h1>
        <p className="w-[500px] flex text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
          porro, velit alias consectetur voluptate?
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-rows-1 gap-9 mx-auto">
        {items.map((elem) => {
          const { id, image, name, description } = elem;
          return (
            <div
              key={id}
              className="mt-10 border rounded-b-lg shadow-md hover:scale-110 transform transition-all duration-300 ease-in  border-gray-300"
            >
              <img src={image} alt="" />
              <div className="p-2">
                <p className="text-gray-400">{name}</p>
                <h3 className="font-bold text-blue-900">{description}</h3>
                <button className="border-[2px] mt-3 flex p-1 items-center gap-1 border-blue-400 text-blue-600 rounded-md min-w-[100px]">
                  <span className="flex items-center gap-3">
                    Case Study
                    <HiArrowRight />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button className="text-white mt-8 whitespace-nowrap md:mb-8 mb-0 md:w-[15%] hover:scale-110 transform transition-all duration-300 ease-in p-2 bg-[#30A8FF] rounded-md shadow-md shadow-blue-300">
        Get into touch
      </button>
    </section>
  );
};

export default Portfolio;
