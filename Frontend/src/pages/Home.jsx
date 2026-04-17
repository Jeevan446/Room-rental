import Navbar from "../components/Navbar";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Featured from "../components/Featured";
import img from '../assets/images/right.png'
import NeedHelp from "../components/NeedHelp";
import Footer from "../components/Footer";
function Home() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  return (
    <div className=" flex flex-col items-center ">
      <Navbar />
      <div className="flex flex-col gap-14 items-center max-w-[900px] w-[90vw] h-[280px] mt-[70px] bg-gradient-to-b from-[#2B0990] to-[#0C032A]  rounded-[50px] pt-7">
        {/* heroSection */}
        <div className="flex flex-col items-center ">
          {/* text div */}
          <p className=" text-[42px] font-semibold font-albert text-white ">
            Connecting Renters With the
          </p>
          <p className=" text-[42px] font-semibold font-albert text-white leading-tight">
            Perfect Rooms.
          </p>
        </div>
        <div className=" w-[80%] max-w-[520px] h-11 bg-white rounded-full relative">
          {/* searchBar  */}
          <input
            type="text"
            className=" w-full h-full outline-0 pl-3 opacity-50"
            onFocus={() => setIsInputFocus(true)}
          />
          <button className=" flex items-center justify-center w-[27%] h-9.5 rounded-full absolute right-1 top-[50%] transform -translate-y-1/2 bg-[#DF7914] font-semibold font-albert cursor-pointer">
            Find Your Room
          </button>
          {!isInputFocus && (
            <CiSearch className=" text-black absolute left-2 top-1/2 transform -translate-y-1/2 text-2xl opacity-50" />
          )}
        </div>
      </div>

    <Featured style='mt-22 '/>

    <div className=" w-[80%] h-[400px] mt-19 bg-amber-200 mb-10 rounded-t-4xl flex">
      {/* comfort section  main container*/}
       <div className="w-[50%] h-full bg-[#EFEFEF] flex flex-col  gap-14 items-center pt-24 rounded-tl-4xl"> 
       {/* left subdiv */}
     <p className=" text-4xl  font-semibold font-albert text-black/70 w-[89%] font-albert text-center relative left-[3%]">Find best and comfortable Rooms best for you and your family</p>
     <button className="w-[180px] h-[70px] text-white font-barlow rounded-[200px] bg-blue-900 cursor-pointer text-2xl font-semibold">Find Now</button>
       </div>

       <div className=" w-[50%] h-full rounded-tr-4xl">
        {/* right subdiv */}
        <img src={img} className=" w-full h-full rounded-tr-4xl "></img>
       </div>
        
    </div> 
    <div className=" w-[82%]">
      {/* faq div */}
      <NeedHelp/>
    </div>
    <Footer/>
    </div>

  );
}
export default Home;
