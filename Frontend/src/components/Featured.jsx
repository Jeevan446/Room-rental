import { FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Featured(props) {
  return (
    <div className={` w-[86%] flex flex-col gap-8 ${props.style} pb-10 `}>
      {/* main container */}
      <h1 className=" sm:text-4xl font-semibold  font-barlow md:ml-14 ">Featured Rooms</h1>
      <div className="flex overflow-x-auto sm:overflow-visible sm:flex-wrap gap-8 sm:gap-5  sm:justify-center" >
        {/* card container */}
        <div className=" w-[215px] h-[265px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] rounded-md ">
          {/* card */}
          <div className="w[100%] h-[144px] rounded-t-md flex items-center justify-center">
            {/* image container */}
            <img
              className="w-[232px] h-[142px] rounded-t-md"
              src="https://imgs.search.brave.com/mIGFB67Ehdxxy6glIqmAkBHrhJ_OtF39RWgtLYl5srI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wOC8yMC8xNC9r/aXRjaGVuLWxpdmlu/Zy1yb29tLTQwNDMw/OTFfNjQwLmpwZw"
            ></img>
          </div>

          <div className=" px-2 flex flex-col items-center">
            {/* other than image */}
            <p className=" font-barlow font-semibold mt-1 ">
              3 Bhk Apartment
            </p>
            <div
              className=" mt-2 flex gap-2
"
            >
              {/* price and location container */}
              <div className=" flex relative">
                {/* price */}
                <FaRupeeSign className=" font-light opacity-50 text-sm" />
                <p className=" text-[17px] font-semibold text-orange-500 relative bottom-[4px]">
                  {" "}
                  3000
                </p>
                <p className=" font-barlow relative top-[6px] font-semibold opacity-50 text-[10px]">
                  month
                </p>
              </div>
              <div className=" mt-1 flex relative">
                {/* location */}
                <FaLocationDot className=" text-sm opacity-50" />
                <p className=" text-sm font-barlow font-semibold opacity-55 relative bottom-[2px] w-[92px]  overflow-clip">
                  Kathmandusadfdsfsgtftddsfsddsfsdfsx
                </p>
              </div>
            </div>

            <button className=" border-1 w-[50%] h-[30px] mt-3 rounded-xl bg-blue-950 text-white font-barlow font-semibold text-sm cursor-pointer">View details</button>
          </div>
        </div>
        <div className=" w-[215px] h-[265px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] rounded-md ">
          {/* card */}
          <div className="w[100%] h-[144px] rounded-t-md flex items-center justify-center">
            {/* image container */}
            <img
              className="w-[232px] h-[142px] rounded-t-md"
              src="https://imgs.search.brave.com/mIGFB67Ehdxxy6glIqmAkBHrhJ_OtF39RWgtLYl5srI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wOC8yMC8xNC9r/aXRjaGVuLWxpdmlu/Zy1yb29tLTQwNDMw/OTFfNjQwLmpwZw"
            ></img>
          </div>

          <div className=" px-2 flex flex-col items-center">
            {/* other than image */}
            <p className=" font-barlow font-semibold mt-1 ">
              3 Bhk Apartment
            </p>
            <div
              className=" mt-2 flex gap-2
"
            >
              {/* price and location container */}
              <div className=" flex relative">
                {/* price */}
                <FaRupeeSign className=" font-light opacity-50 text-sm" />
                <p className=" text-[17px] font-semibold text-orange-500 relative bottom-[4px]">
                  {" "}
                  3000
                </p>
                <p className=" font-barlow relative top-[6px] font-semibold opacity-50 text-[10px]">
                  month
                </p>
              </div>
              <div className=" mt-1 flex relative">
                {/* location */}
                <FaLocationDot className=" text-sm opacity-50" />
                <p className=" text-sm font-barlow font-semibold opacity-55 relative bottom-[2px] w-[92px]  overflow-clip">
                  Kathmandusadfdsfsgtftddsfsddsfsdfsx
                </p>
              </div>
            </div>

            <button className=" border-1 w-[50%] h-[30px] mt-3 rounded-xl bg-blue-950 text-white font-barlow font-semibold text-sm cursor-pointer">View details</button>
          </div>
        </div>
        <div className=" w-[215px] h-[265px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] rounded-md ">
          {/* card */}
          <div className="w[100%] h-[144px] rounded-t-md flex items-center justify-center">
            {/* image container */}
            <img
              className="w-[232px] h-[142px] rounded-t-md"
              src="https://imgs.search.brave.com/mIGFB67Ehdxxy6glIqmAkBHrhJ_OtF39RWgtLYl5srI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wOC8yMC8xNC9r/aXRjaGVuLWxpdmlu/Zy1yb29tLTQwNDMw/OTFfNjQwLmpwZw"
            ></img>
          </div>

          <div className=" px-2 flex flex-col items-center">
            {/* other than image */}
            <p className=" font-barlow font-semibold mt-1 ">
              3 Bhk Apartment
            </p>
            <div
              className=" mt-2 flex gap-2
"
            >
              {/* price and location container */}
              <div className=" flex relative">
                {/* price */}
                <FaRupeeSign className=" font-light opacity-50 text-sm" />
                <p className=" text-[17px] font-semibold text-orange-500 relative bottom-[4px]">
                  {" "}
                  3000
                </p>
                <p className=" font-barlow relative top-[6px] font-semibold opacity-50 text-[10px]">
                  month
                </p>
              </div>
              <div className=" mt-1 flex relative">
                {/* location */}
                <FaLocationDot className=" text-sm opacity-50" />
                <p className=" text-sm font-barlow font-semibold opacity-55 relative bottom-[2px] w-[92px]  overflow-clip">
                  Kathmandusadfdsfsgtftddsfsddsfsdfsx
                </p>
              </div>
            </div>

            <button className=" border-1 w-[50%] h-[30px] mt-3 rounded-xl bg-blue-950 text-white font-barlow font-semibold text-sm cursor-pointer">View details</button>
          </div>
        </div>
        <div className=" w-[215px] h-[265px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] rounded-md ">
          {/* card */}
          <div className="w[100%] h-[144px] rounded-t-md flex items-center justify-center">
            {/* image container */}
            <img
              className="w-[232px] h-[142px] rounded-t-md"
              src="https://imgs.search.brave.com/mIGFB67Ehdxxy6glIqmAkBHrhJ_OtF39RWgtLYl5srI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wOC8yMC8xNC9r/aXRjaGVuLWxpdmlu/Zy1yb29tLTQwNDMw/OTFfNjQwLmpwZw"
            ></img>
          </div>

          <div className=" px-2 flex flex-col items-center">
            {/* other than image */}
            <p className=" font-barlow font-semibold mt-1 ">
              3 Bhk Apartment
            </p>
            <div
              className=" mt-2 flex gap-2
"
            >
              {/* price and location container */}
              <div className=" flex relative">
                {/* price */}
                <FaRupeeSign className=" font-light opacity-50 text-sm" />
                <p className=" text-[17px] font-semibold text-orange-500 relative bottom-[4px]">
                  {" "}
                  3000
                </p>
                <p className=" font-barlow relative top-[6px] font-semibold opacity-50 text-[10px]">
                  month
                </p>
              </div>
              <div className=" mt-1 flex relative">
                {/* location */}
                <FaLocationDot className=" text-sm opacity-50" />
                <p className=" text-sm font-barlow font-semibold opacity-55 relative bottom-[2px] w-[92px]  overflow-clip">
                  Kathmandusadfdsfsgtftddsfsddsfsdfsx
                </p>
              </div>
            </div>

            <button className=" border-1 w-[50%] h-[30px] mt-3 rounded-xl bg-blue-950 text-white font-barlow font-semibold text-sm cursor-pointer">View details</button>
          </div>
        </div>
        <div className=" w-[215px] h-[265px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] rounded-md ">
          {/* card */}
          <div className="w[100%] h-[144px] rounded-t-md flex items-center justify-center">
            {/* image container */}
            <img
              className="w-[232px] h-[142px] rounded-t-md"
              src="https://imgs.search.brave.com/mIGFB67Ehdxxy6glIqmAkBHrhJ_OtF39RWgtLYl5srI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8wOC8yMC8xNC9r/aXRjaGVuLWxpdmlu/Zy1yb29tLTQwNDMw/OTFfNjQwLmpwZw"
            ></img>
          </div>

          <div className=" px-2 flex flex-col items-center">
            {/* other than image */}
            <p className=" font-barlow font-semibold mt-1 ">
              3 Bhk Apartment
            </p>
            <div
              className=" mt-2 flex gap-2
"
            >
              {/* price and location container */}
              <div className=" flex relative">
                {/* price */}
                <FaRupeeSign className=" font-light opacity-50 text-sm" />
                <p className=" text-[17px] font-semibold text-orange-500 relative bottom-[4px]">
                  {" "}
                  3000
                </p>
                <p className=" font-barlow relative top-[6px] font-semibold opacity-50 text-[10px]">
                  month
                </p>
              </div>
              <div className=" mt-1 flex relative">
                {/* location */}
                <FaLocationDot className=" text-sm opacity-50" />
                <p className=" text-sm font-barlow font-semibold opacity-55 relative bottom-[2px] w-[92px]  overflow-clip">
                  Kathmandusadfdsfsgtftddsfsddsfsdfsx
                </p>
              </div>
            </div>

            <button className=" border-1 w-[50%] h-[30px] mt-3 rounded-xl bg-blue-950 text-white font-barlow font-semibold text-sm cursor-pointer">View details</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Featured;
