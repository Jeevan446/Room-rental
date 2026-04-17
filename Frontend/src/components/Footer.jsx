import { FaInstagramSquare ,FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
function Footer(){
return (
<div className=" w-full min-h-[300px] bg-[#EBE7F8] px-15 py-12 flex ">
    {/* footer full containter */}
<div className=" h-[100%] w-[33.33%]">
    {/* left section */}
   <p className="  font-julius text-4xl text-green-900 font-semibold">GHR</p>
   <p className=" font-barlow text-xl font-semibold mt-4">GHR-Get Home Rooms</p>
   <p className=" font-barlow text-xl mt-3">Connecting renters with the <br></br>perfect  rooms since 2010</p>
   <div className=" flex mt-5 gap-2  ">
    {/* icons */}
    <FaInstagramSquare  className=" text-2xl bg-[#723AE6] rounded text-white"/>
    <FaFacebook  className=" text-2xl bg-[#723AE6] rounded text-white"/>
    <AiFillTikTok className=" text-2xl bg-[#723AE6] rounded text-white" />
    <FaLinkedin  className=" text-2xl bg-[#723AE6] rounded text-white"/>
   </div>
</div>
<div className=" bg-amber-500 h-full w-[33.33%]">
    {/* middle section */}
    dsfds
</div>
<div className=" bg-amber-600 h-full w-[33.33%] ">
    {/* right section */}
    dfsdfs
</div>
</div>
)
}
export default Footer