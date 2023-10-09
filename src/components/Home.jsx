import group from "./images/group.png";
import Header from "./Header";

const Home = () => {
  return (
    <div className=" md:h-screen h-[100%] w-full overflow-hidden">
      <div className="bg-[#0070C0] overflow-x-hidden overflow-y-hidden clipPat w-full h-full">
        <Header />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[80%]  flex flex-col text-white mx-auto py-1 md:py-[100px] w-full justify-center md:order-2 md:px-0 px-2">
            <h1 className="text-4xl flex flex-wrap font-bold">
              APPTEX SOFTWARE  SOLUTION
            </h1>
            <h3 className="font-bold mt-5 text-2xl">
              Your idea is our Passion
            </h3>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Id
              at suscipit atque sunt dolore accusamus?
            </p>
            <button className="text-white w-[130px] min:w-[200px] px-4 mt-8 whitespace-nowrap hover:scale-110 cursor-pointer transform transition-all duration-300 ease-in p-2 bg-[#30A8FF] rounded-md shadow-md">
              Get into touch
            </button>
          </div>

          <div className="md:absolute overflow-y-hidden md:order-1 md:top-[11.5%] top-[20%] md:right-0 flex justify-end">
            <img className="md:w-[48%] md:h-[70%] w-full" src={group} alt="group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
