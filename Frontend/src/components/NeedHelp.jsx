import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function NeedHelp() {

const [questionans, setQuestionans] = useState([
    {
      que: "How do i book the rooms?",
      ans: "arkjfndjsn dsjfkdsnfkj kjdsnfkjndfs kjndsfjksd...",
      isOpen: false,
    },
    {
      que: "What are the payment options?",
      ans: "Esewa is the payment option",
      isOpen: false,
    },
    {
      que: "How can we list room?",
      ans: "Listing a room ...",
      isOpen: false,
    },
  ]);

const toggleFAQ = (index) => {
    setQuestionans((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  }

return(
    <div className=" w-[100%] flex justify-center items-center gap-10 flex-col pt-10 pb-10 mt-9">
    {/* full container */}
    <div className=" flex justify-center items-center flex-col">
        {/* upper section other than faq */}
        <h1 className=" font-inter text-5xl font-semibold text-orange-500">Need Help?</h1>
        <p className=" text-xl mt-5 text-center font-inter text-green-900">We're here to help you to find the perfect room or resolve any
        <br></br> renting issues quickly.</p>
    </div>
    <div className=" w-[75%]">
        {/* faq question ans container lower div */}
      {
        questionans&&questionans.map((m,index)=>(
         <div className="flex flex-col mt-1" key={index} >
            {/* question ans both container  one by one*/}
            <div className=" w-[100%] flex items-center px-5 relative rounded-md shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] py-3 "  onClick={() => toggleFAQ(index)} >
            {/* question div */}
           <p className=" font-semibold font-inter"> {m.que}</p><FaChevronUp className={`absolute right-5 ${m.isOpen?' rotate-180':''}`}/></div>
           <div className={` px-5 flex text-sm mt-2 mb-2  ${m.isOpen?'block':'hidden'}`}>
            {/* ans div */}
            {m.ans}
           </div>
         </div>
        ))
      }
    </div>
</div>
)
}

export default NeedHelp;