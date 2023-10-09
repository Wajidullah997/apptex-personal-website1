import React from 'react'
import Mobile1 from './images/mob1.png'
import Mobile2 from "./images/mob2.png";
import Mobile3 from "./images/mob3.png";

const MobileDesign = () => {
  return (
    <section className="w-[100%] mt-[200px] md:mt-[-56px] mx-auto flex">
      <div className="w-[80%] mt-[220px] md:mt-[20px] md:h-[500px] rounded-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-9 items-center">
          <div className="md:w-[46%] w-full">
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
          <div className="flex flex-col md:flex-row w-full md:w-[55%] gap-5">
            <img
              src={Mobile1}
              alt="web1"
              className="relative  rounded-2xl h-[400px] mt-6 md:mt-[-25px] shadow-lg shadow-blue-100"
            />
            <img
              src={Mobile2}
              alt="web2"
              className="h-[380px]  md:mt-[-15px] shadow-lg shadow-gray-300 rounded-2xl"
            />
            <img
              src={Mobile3}
              alt="web2"
              className="h-[350px] shadow-lg shadow-gray-300 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileDesign
