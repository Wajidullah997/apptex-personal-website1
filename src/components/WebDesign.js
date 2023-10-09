import React from 'react'
import Web1 from './images/web1.png'
import Web2 from "./images/web2.png";

const WebDesign = () => {
  return (
    <section className="w-[100%] mx-auto flex">
      <div className="w-[80%] mt-[100px] h-[500px] rounded-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-9 items-center">
            
          <div className="md:w-[55%] w-full shadow-md shadow-gray-400">
              <img
                src={Web1}
                alt="web1"
                className="relative w-full rounded-2xl h-[350px] shadow-lg shadow-blue-100"
              />
              <img
                src={Web2}
                alt="web2"
                className="absolute ml-[50px] h-[350px] shadow-lg shadow-gray-300 rounded-2xl mt-[-310px]"
              />
            </div>
          <div className="md:w-[45%] w-full md:py-0 py-7">
            <h3 className="font-bold text-lg">Web UI/UX Design Services</h3>
            <p className="text-gray-500 mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              maiores ab, recusandae asperiores ad libero velit veritatis,
              excepturi hic provident cumque temporibus quaerat reprehenderit
              nemo optio, corrupti o fficia veniam consectetur adipisci error?
              Mollitia, repellat quo? Molestias architecto quia, soluta pariatur
              beatae quo provident at mollitia fuga consectetur id, quod nam
              deserunt dolorem officia facere illum? Maiores architecto tenetur
              eos distinctio?
            </p>
            <div className="grid md:grid-cols-2 grid-rows-2 gap-5 mt-6 md:pl-0 pr-6 text-center whitespace-nowrap text-red-400">
              <p>
                <span className="font-bold text-2xl">+</span> Mobile App UI/UX
                Design
              </p>
              <p>
                <span className="font-bold text-2xl">+</span> Mobile App UI/UX
                Design
              </p>
              <p>
                <span className="font-bold text-2xl">+</span> Mobile App UI/UX
                Design
              </p>
              <p>
                <span className="font-bold text-2xl">+</span> Mobile App UI/UX
                Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDesign
