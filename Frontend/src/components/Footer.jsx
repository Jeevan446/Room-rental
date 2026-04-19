import { FaInstagramSquare ,FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
function Footer(){
return (
<div className=" w-full min-h-[300px] bg-[#EBE7F8] px-15 py-12 flex mt-13">
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
<div className="  h-full w-[33.33%]">
    {/* middle section */}
    <h1 className=" font-albert text-xl font-semibold">Quick Links</h1>
    <ul className="mt-3 flex flex-col gap-1 ">
        <li className=""><a href="./home">Home</a></li>
        <li><a href="./list ">List Room</a></li>
        <li><a>Find Room</a></li>
        <li><a>Contact Us</a></li>
        <li><a>Privicy Policy</a></li>
    </ul>
</div>
<div className="  h-full w-[33.33%] ">
    {/* right section */}
    <h1 className=" text-xl font-albert font-semibold">Contact Us</h1>
    <p>Bharatpur-10 Campuschowk</p>
    <p>ghr.support@gmail.com</p>
    <p>Mon-Fri: 9 AM- 6PM</p>
</div>
</div>
)
}
export default Footer