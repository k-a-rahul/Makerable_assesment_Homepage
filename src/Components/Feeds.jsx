import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";

import Card from "./Card";
import UniversalModal from "./UniversalModal";

function Feeds() {
  const cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [currentpage, setCurrentpage] = useState(1);
  const [showcard, setShowcard] = useState(false);
  const [heading, setHeading] = useState("");
  const [btnheading, setBtnHeading] = useState("");
  const [input,setInput] = useState('')
  const handleclick = (e) => {
    setShowcard(true);
    setHeading(e.target.innerHTML);
    setBtnHeading(e.target.innerHTML);
  };

  const perpage = 5;
  const totalPage = cards.length / perpage;

  const startIndex = (currentpage - 1) * perpage;
  const currentCards = cards.slice(startIndex, startIndex + perpage);
  const handleClick=()=>{  
    input.length < 5 ? "":'' 
    
    setInput('')
  }
  
  const handlechange = (e)=>{
    e.preventDefault()
    setInput(e.target.value)
  }
  return (
    <>
      {showcard && (
        <div className="absolute top-[13%] backdrop-blur-sm w-full h-full flex justify-center z-50">
          <UniversalModal
           
            heading={heading}
            btnheading={btnheading}
            close={() => setShowcard(false)}
          />
        </div>
      )}
      <div className="w-full h-full p-1 flex flex-col justify-center gap-0 items-center ">
        {/*side navbar here */}
        <div
        
          className={`text-center h-full rounded-lg`}
        >
          <ul className=" flex gap-1 justify-center items-center p-1">
            <li
              onClick={handleclick}
              
              className="w-[90%] text-center text-xs md:text-sm font-semibold rounded-md cursor-pointer text-white bg-lightblue px-6 hover:opacity-80"
            >
              Boards
            </li>
            <li
              onClick={handleclick}
              className="w-[90%] text-center text-xs md:text-sm font-semibold rounded-md cursor-pointer text-white bg-lightblue px-6 hover:opacity-80"
            >
              Progress
            </li>
            <li
              onClick={handleclick}
              className="w-[90%] text-center text-xs md:text-sm font-semibold rounded-md cursor-pointer text-white bg-lightblue px-6 hover:opacity-80"
            >
              Tasks
            </li>
          </ul>
        </div>
        {/* feeds here */}

        <div className=" w-full h-full rounded-lg grid grid-cols-1 items-center justify-center p-">
          <div className="w-full mx-auto text-2xl font-semibold text-slate-600 top-0 text-center">
            Newsfeeds
          </div>
          <div className="w-full flex justify-center gap-1">
            <input
            value={input}
            onChange={handlechange}
              placeholder="Share some Progress "
              type="text"
              className="md:w-[50%] bg-white border text-xs px-1 rounded-md h-8 focus-visible:bg-slate-100 resize "
            />
            <button onClick={handleClick} className="bg-lightblue flex justify-evenly items-center gap-1 text-white px-4 hover:opacity-80 rounded-md group active:bg-green-600 ">
              Post
              <span className="group-hover:translate-x-10 transition-all ">
                <FaCircleArrowRight />
              </span>
            </button>
          </div>

          <div className=" transition-all grid grid-cols-1 md:grid-cols-1 p-1 justify-items-center items-center my-2">
            <>
              {currentCards.map((card) => (
                <Card key={card} />
              ))}
            </>
          </div>
          <div className="flex justify-between gap-10 items-center bg-card mx-auto p-4 rounded-lg">
            <button
              onClick={
                currentpage == 1 ? "" : () => setCurrentpage((prev) => prev - 1)
              }
              className={`bg-blue text-white px-2 ${
                currentpage == 1 ? "cursor-not-allowed" : "cursor-pointer"
              } rounded-lg hover:opacity-80`}
            >
              PREV
            </button>
            <span>Page:{currentpage}</span>
            <button
              onClick={
                currentpage == 4 ? "" : () => setCurrentpage((prev) => prev + 1)
              }
              className={`bg-blue text-white px-2 ${
                currentpage == 4 ? "cursor-not-allowed" : "cursor-pointer"
              } rounded-lg hover:bg-opacity-80`}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
