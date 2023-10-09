import React, {useState} from "react";
// import TestCard from "./TestCard";
import ReactStars from "react-rating-stars-component";
import menu from './Menu'
const Testimonials = () => {
  const [items, setItems] = useState(menu);

  return (
    <section className="bg-blue-50">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-5">
          Testimonials
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
          porro, velit alias consectetur voluptate?
        </p>
        <div className="flex flex-wrap justify-center -mx-4">
          {items.map((elem) => {
            const { id, image, title, name } = elem;
            return (
              <div key={id} className="w-full  md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white border-2 hover:border-blue-400 p-4 bor rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ">
                  <div className="flex items-center">
                    <img
                      src={image}
                      className="w-20 h-20 rounded-full"
                      alt=""
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{title}</h4>
                      <p className="text-sm text-gray-400">{name}</p>
                      <div className="mt-2">
                        <ReactStars
                          edit={false}
                          count={5}
                          size={24}
                          value={5}
                          activeColor="#ffd700"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, delectus ab assumenda mollitia dignissimos voluptate
                    officia nesciunt voluptatum nobis cupiditate. Repellendus
                    illo voluptatibus quis dolorum.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
    </section>
  );
};

export default Testimonials;
