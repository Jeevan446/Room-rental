import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react';
import { MdClear } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
function Navbar() {
  const tl=useRef(gsap.timeline({paused:true}))
  const containerRef=useRef()
  const buttonRef=useRef()
  const crossDivRef=useRef()
  const crossRef=useRef()
  useGSAP(()=>{
    tl.current.to(containerRef.current,{
     right:0,
     duration:0.8
    })

    tl.current.from('li',{
      y:10,
      x:-17,
      stagger:0.3,
      duration:0.7,
      opacity:0
    })
    
    tl.current.from(buttonRef.current,{
     opacity:0,
     duration:1 
    },'-=2')

    tl.current.from(crossDivRef.current,{
      opacity:0,
      duration:0.2
    },'-=1')
  })

  function menuClicked(){
    tl.current.play()
  }

  function crossClicked(){
    tl.current.reverse()
  }
  return (
    <>
      <div className=" h-[80px] bg-[#F2F2F2] w-full flex items-center vsm:px-[30px]  md:px-[77px]  justify-between vsm:overflow-x-hidden ">
        {/* main navbar div */}

        <div>
          {/* left div for logo */}
          <p className=" font-julius text-3xl text-[#31188E]">GHR</p>
        </div>
<div className=' md:hidden ' onClick={menuClicked}> <CiMenuFries className="  text-2xl cursor-pointer " /></div>
        <div ref={containerRef} className=" md:flex gap-15 items-center vsm:rounded-l-md vsm:bg-[#6B6969]/95 vsm:pr-8 vsm:pl-10 vsm:py-2 md:p-0  md:p-0  vsm:mt-30 md:mt-0  md:bg-[#F2F2F2] absolute -right-100  md:static">{/* right div for other than logo */}
       
        <div className=" ">
            {/* page links div */}
          <ul className=" list-none md:flex font-albert gap-5 font-semibold" >
            <li className=' cursor-pointer vsm:mt-5 md:mt-0 '>Home</li>
           <li className=' cursor-pointer vsm:mt-1   md:mt-0 ' >List Room</li>
            <li className=' cursor-pointer vsm: mt-1  md:mt-0'>Find Room</li>
            <li className=' cursor-pointer vsm:mt-1  md:mt-0'>Contact Us</li>
          </ul>

        </div>

        <div ref={buttonRef} className="mt-5 md:mt-0 text-center text-white font-semibold cursor-pointer hover:text-green-500 hover:duration-200  font-albert px-3 py-2 rounded-xl  bg-gradient-to-r from-[#1E1A81] to-[#080723]">
            Login
        </div>
       <div  onClick={crossClicked} ref={crossDivRef} className=' md:hidden vsm:bg-white/70 vsm:text-[#6B6969]  vsm:rounded-full vsm:text-xl vsm:absolute vsm:right-2 vsm:top-2'> <MdClear  ref={crossRef} className='  ' /></div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
