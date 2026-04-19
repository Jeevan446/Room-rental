import gsap from 'gsap'
import {useGsap} from '@gsap/react'
import { useRef } from 'react';
function Navbar() {
  return (
    <>
      <div className=" h-[80px] bg-[#F2F2F2] w-full flex items-center px-[77px] justify-between">
        {/* main navbar div */}

        <div>
          {/* left div for logo */}
          <p className=" font-julius text-3xl text-[#31188E]">GHR</p>
        </div>

        <div className=" flex gap-15 items-center">{/* right div for other than logo */}
        
        <div className=" ">
            {/* page links div */}
          <ul className=" list-none flex font-albert gap-5 font-semibold" >
            <li className=' cursor-pointer'>Home</li>
           <li className=' cursor-pointer'>List Room</li>
            <li className=' cursor-pointer'>Find Room</li>
            <li className=' cursor-pointer'>Contact Us</li>
          </ul>
        </div>

        <div className=" text-white font-semibold cursor-pointer hover:text-green-500 hover:duration-200  font-albert px-3 py-2 rounded-xl  bg-gradient-to-r from-[#1E1A81] to-[#080723]">
            Login
        </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
