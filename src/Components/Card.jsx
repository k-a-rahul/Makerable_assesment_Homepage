import React, { useState } from "react";
import { PIC } from "../../exports";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const data = [
  {
    name: "Username",
    activity: "Activity happened on 11 Dec 2024",
    Posted: "lorem456464sdsdsd654",
    Edited: "lorem456464sdsdsd654",
  },
];

function Card({
  name,
  posted,
  subtitle,
  content,
  image,
  width,
  height,
  likes,
  comment,
}) {
  const [expandCard, setExpandCard] = useState(false);
  return (
    <>
      <div className={`w-full m-1 flex justify-center items-center `}>
        <div
          onMouseEnter={() => setExpandCard(true)}
          onMouseLeave={() => setExpandCard(false)}
          className={`w-full bg-card hover:shadow-lg h-[420px] md:w-[60%] grid grid-cols-1 justify-items-start  group items-center gap-1 p-2 rounded-xl border text-black  transition-all `}
        >
          <button className="text-2xl text-red-500">
            <FaRegHeart />
          </button>
          <div className="grid grid-cols-2 justify-items-center items-center ">
            <img
              src={image ? image : PIC}
              alt=""
              className="w-16 h-16 object-cover rounded-full "
            />
            <div className=" flex flex-col justify-center">
              <h2 className=" text-sm tracking-tighter">
                {name ? name : "Vishnu Srinaidu"}
              </h2>
              <span className="text-xs tracking-tighter">
                {posted ? posted : "Posted On : 21 Dec 2021"}
              </span>
              <span className="text-xs tracking-tighter">
                Edited On : 21 Dec 2023
              </span>
              <span className="text-xs tracking-tighter">
                Visited On : 21 Dec 2021
              </span>
            </div>
          </div>
          <span className="w-full h-1 bg-blue"></span>

          <div className="w-full h-full text-center grid grid-cols-1 gap-2 justify-items-center items-center">
            <span className="w-[75%] text-xs md:text-sm font-light text-center">
              {content
                ? content
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestiae cumque unde explicabo quod impedit quos nesciunt ratione ab maiores.Est molestiae cumque unde explicabo quod impedit quos nesciunt ratione ab maiores.Est molestiae cumque unde explicabo quod impedit quos nesciunt ratione ab maiores."}
            </span>
            <div className="flex justify-center gap-2">
              <input
                type="text"
                className="bg-white px-2 rounded-md border"
                placeholder="Write a Comment"
              />
              <button className="bg-lightblue flex justify-evenly items-center gap-1 text-white px-4 hover:opacity-80 rounded-md group active:bg-green-600 ">
                Post
              </button>
            </div>
          </div>

          <div className={`w-full  gap-3 flex justify-center`}>
            <span className="text-xs">Comments:1</span>
            <span className="text-xs">Hearts:0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
