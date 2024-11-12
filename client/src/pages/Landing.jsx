import LandingNavbar from "../components/navbars/LandingNavbar";
import landingBackground from "../assets/images/dubmbellsImage.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import singleDumbelImage from "../assets/images/singleDumbellImage.png";
import weightLiftingImage from "../assets/images/Screenshot 2024-11-12 160936.png";
import trainer1 from "../assets/images/Screenshot 2024-11-12 162557.png";
import trainer2 from "../assets/images/Screenshot 2024-11-12 162637.png";
import trainer3 from "../assets/images/Screenshot 2024-11-12 162732.png";
import sendMessageBg from "../assets/images/Screenshot 2024-11-12 165858.png";
import RexFitLogo from "../components/common/RexFitLogo";

const Landing = () => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="relative h-[600px] w-full bg-black flex justify-center items-center">
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${landingBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          />
          <div className="absolute inset-0 bg-black opacity-10 dark:opacity-30 z-[-10px]"></div>
          <LandingNavbar />
        </div>
        <div className="w-full h-[600px] absolute top-0  flex items-center justify-center">
          <div className="w-[80%] h-[80%]  md:h-[50%] md:mt-24 mt-9 ">
            <div className="h-[50%] w-full  flex  justify-center items-center text-center ">
              <h1 className="font-michroma md:text-5xl leading-relaxed text-3xl text-white font-extrabold">
                Find Your Strength With{" "}
                <span className="text-rex-green">RexFit</span>, Train with
                Professionals
              </h1>
            </div>
            <div className="h-[50%] w-full  flex justify-around flex-col items-center ">
              <p className="w-[100%] md:w-[50%]  text-center text-neutral-500 font-michroma">
                Train under a professional trainer and gain strength by
                understanding your potential. Try out our personal training
                programs.
              </p>
              <div className="flex  gap-4 items-center ">
                <Link to={"/signup"}>
                  <button className="font-michroma bg-rex-green w-[150px] rounded-full h-[38px] text-[12px] font-bold text-black shadow-[0px_0px_27px_0px_#D6FD51]">
                    START NOW
                  </button>
                </Link>
                <p className="font-michroma font-semibold text-[12px] flex text-white  gap-1 cursor-pointer">
                  Learn More <ArrowRight size={18} className="mt-[2px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[55px] w-full bg-rex-green flex items-center justify-center overflow-auto scrollbar-custom">
          <h1 className="text-black font-bold font-michroma whitespace-nowrap">
            CONVENIENT LOCATION & SCHEDULES DRAWING UP AN INDIVIDUAL TRAINING
            PROGRAM BY BEST PROFESSIONAL TRAINER AVAILABLE
          </h1>
        </div>
        <div className="lg:h-[450px] h-[550px] w-full dark:bg-dark-bg flex justify-center items-center">
          <div className="lg:w-[70%] md:w-[90%] w-[95%] h-[90%] ">
            <div className="h-[30%] w-full  items-center flex px-5">
              <h1 className="font-michroma md:text-5xl text-2xl dark:text-white text-black font-extrabold">
                Why Choose Us
              </h1>
            </div>
            <div className="lg:h-[70%] h-max  w-full flex p-5 gap-5  overflow-auto">
              <div className="lg:h-full h-max lg:w-1/3 w-[300px]  px-8 rounded-xl dark:bg-neutral-900 bg-neutral-200 dark:hover:bg-rex-green hover:text-black transition duration-200 hover:bg-rex-green">
                <div className="h-[40%] w-full  flex items-center">
                  <img
                    className="w-[150px]  text-center transform rotate-[-20deg]"
                    src={singleDumbelImage}
                    alt=""
                  />
                </div>
                <div className="h-[60%] w-full  p-2 flex flex-col justify-between">
                  <h1 className="font-michroma text-lg  font-bold  ">
                    Quality Equipments
                  </h1>
                  <h1 className="font-michroma text-[10px]  ">
                    We Provide Quality Equipments and accessories,we give
                    importance to out clients and their needs.
                  </h1>
                  <p className="font-michroma font-semibold text-[12px] flex   gap-1 cursor-pointer ">
                    Learn More <ArrowRight size={18} className="mt-[2px]" />
                  </p>
                </div>
              </div>
              <div className="lg:h-full  lg:w-1/3 w-[300px]  px-8 rounded-xl dark:bg-neutral-900 bg-neutral-200 dark:hover:bg-rex-green hover:text-black  transition duration-200 hover:bg-rex-green">
                <div className="h-[40%] w-full  flex items-center">
                  <img
                    className="w-[150px]  text-center transform rotate-[-20deg]"
                    src={singleDumbelImage}
                    alt=""
                  />
                </div>
                <div className="h-[60%] w-full  p-2 flex flex-col justify-between">
                  <h1 className="font-michroma text-lg  font-bold  ">
                    Professional Trainers
                  </h1>
                  <h1 className="font-michroma text-[10px]  ">
                     Professional Trainers and their support,we give
                    importance to out clients and their needs.
                  </h1>
                  <p className="font-michroma font-semibold text-[12px] flex   gap-1 cursor-pointer hover:text-black">
                    Learn More <ArrowRight size={18} className="mt-[2px]" />
                  </p>
                </div>
              </div>
              <div className="lg:h-full lg:w-1/3 w-[300px] px-8 rounded-xl dark:bg-neutral-900 bg-neutral-200 dark:hover:bg-rex-green hover:text-black  transition duration-200 hover:bg-rex-green">
                <div className="h-[40%] w-full  flex items-center">
                  <img
                    className="w-[150px]  text-center transform rotate-[-20deg]"
                    src={singleDumbelImage}
                    alt=""
                  />
                </div>
                <div className="h-[60%] w-full   p-2 flex flex-col justify-between">
                  <h1 className="font-michroma text-lg  font-bold  ">
                    Extra Programms
                  </h1>
                  <h1 className="font-michroma text-[10px]  ">
                    We Provide Extra Programms to Encourage our Clients,Which
                    helps them to achieve their goals.
                  </h1>
                  <p className="font-michroma font-semibold text-[12px] flex   gap-1 cursor-pointer ">
                    Learn More <ArrowRight size={18} className="mt-[2px]" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-[400px] relative bg-red-400"
          style={{
            backgroundImage: `url(${weightLiftingImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-0 dark:opacity-50 z-[-10px]"></div>
        </div>
        <div className="lg:h-[700px] h-max w-full dark:bg-dark-bg flex justify-center items-center">
          <div className="lg:w-[70%] md:w-[90%] w-[95%] h-[90%] ">
            <div className="h-[20%] w-full  items-center flex px-5">
              <h1 className="font-michroma md:text-5xl mt-6 text-2xl dark:text-white  w-full flex justify-center text-black font-extrabold">
                Our Best Trainers
              </h1>
            </div>
            <div className=" items-center flex-col md:flex-row h-[1200px] md:h-[360px]  lg:h-[390px] w-full flex p-5 gap-7 md:gap-24  overflow-auto scrollbar-custom">
              <div
                className="h-full lg:w-1/3 w-[300px]  px-8 rounded-xl "
                style={{
                  backgroundImage: `url(${trainer1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h1 className="font-michroma font-bold ml-1 text-rex-green">Mar Spector</h1>
              </div>
              <div
                className="h-full  lg:w-1/3 w-[300px]  px-8 rounded-xl"
                style={{
                  backgroundImage: `url(${trainer2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h1 className="font-michroma font-bold ml-1 text-rex-green">Jake Lockley</h1>
              </div>
              <div
                className="h-full lg:w-1/3 w-[300px]  px-8 rounded-xl"
                style={{
                  backgroundImage: `url(${trainer3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h1 className="font-michroma font-bold ml-1 text-rex-green">Steven Grand</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-[400px] relative bg-red-400 p-4"
          style={{
            backgroundImage: `url(${sendMessageBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full  flex flex-col items-center justify-center gap-4">
            <h1 className="font-michroma md:text-5xl mb-14 mt-6 text-center text-2xl text-white w-full md:w-[70%] flex justify-center  font-extrabold">
              Get Your First Trial Visit
            </h1>
            <div className="relative w-full md:w-[50%]">
              <input
                type="text"
                placeholder="Send message..."
                className="w-full px-4 text-black  dark:bg-neutral-500/10 bg-neutral-100/10 backdrop-blur-lg py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-rex-green"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-0 flex items-center px-3  bg-rex-green  justify-center text-black rounded-full  shadow-[0px_0px_27px_0px_#D6FD51] w-[150px]"
              >
                submit
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60 z-[-10px]"></div>
        </div>
        <div className="h-[350px] w-full dark:bg-dark-bg  p-5">
          <div className="w-full h-full flex-col  flex items-end">
            <div className="w-full h-full   p-9">
              <div className="h-full w-full  flex">
                 <div className="w-full md:w-[40%] h-full ">
                   <RexFitLogo/>
                   <h1 className="font-michroma dark:text-neutral-400 text-neutral-800 text-base mt-5  ">
                     Professional Trainers and their support,we give
                    importance to out clients and their needs.
                  </h1>
                 </div>
                 <div  className="w-[60%] h-full  md:flex hidden dark:text-neutral-400 text-neutral-800" >
                     <div className="w-1/3 h-full flex items-center gap-6 p-3 flex-col">
                     <h1 className="font-michroma text-sm font-bold dark:text-rex-green text-neutral-800">About us</h1>
                     <div className="flex flex-col gap-1">

                     <h1 className=" text-base font-light ">About</h1>
                     <h1 className=" text-base font-light ">Blog</h1>
                     <h1 className=" text-base font-light ">Contact</h1>
                     <h1 className=" text-base font-light ">Vacancy</h1>
                     </div>
                     </div>
                     <div className="w-1/3 h-full flex items-center gap-6 p-3 flex-col">
                     <h1 className="font-michroma text-sm font-bold  dark:text-rex-green text-neutral-800">Services</h1>
                     <div className="flex flex-col gap-1">

                     <h1 className=" text-base font-light ">Attendance</h1>
                     <h1 className=" text-base font-light ">PT programs</h1>
                     <h1 className=" text-base font-light ">Explore</h1>
                     <h1 className=" text-base font-light ">Security</h1>
                     </div>
                     </div>
                     <div className="w-1/3 h-full flex items-center gap-6 p-3 flex-col">
                     <h1 className="font-michroma text-sm font-bold  dark:text-rex-green text-neutral-800">Support</h1>
                     <div className="flex flex-col gap-1">

                     <h1 className=" text-base font-light ">Contact us</h1>
                     <h1 className=" text-base font-light ">Instagram</h1>
                     <h1 className=" text-base font-light ">Telegram</h1>
                     <h1 className=" text-base font-light ">Whatsapp</h1>
                     </div>
                     </div>
                    
                 </div>
              </div>
            </div>
              <div className="h-[60px] bottom-0  w-full flex justify-center md:justify-start items-center md:pl-16  border-t dark:border-neutral-800 border-neutral-300">
           <h1>Copyright@2024 All Right reserved</h1>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
