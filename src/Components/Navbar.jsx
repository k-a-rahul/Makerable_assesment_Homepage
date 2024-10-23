import React, { useState } from "react";
import { MARKBLE, PIC } from "../../exports";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBell, FaLeaf } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FaBolt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import UniversalModal from "./UniversalModal";

function Navbar() {
  const [showoptions, setShowoptions] = useState(false);
  const [options, setOptions] = useState(false);
  const [showcard, setShowcard] = useState(false);
  const [heading, setHeading] = useState("");
  const [btnheading, setBtnHeading] = useState("");
  const handleclick = (e) => {
    setShowcard(true);
    setHeading(e.target.innerHTML);
    setBtnHeading(e.target.innerHTML);
  };

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
      <nav className="  w-full overflow-hidden flex justify-center md:justify-between p-1">
        <div className="flex w-1/2 md:gap-6 justify-around items-center">
          <img
            src={MARKBLE}
            className=" w-8 md:w-10 cursor-pointer hover:scale-105 transition-all"
            alt="img"
          />
          <div className="flex justify-center gap-1  md:font-semibold cursor-pointer ">
            <button className=" p-1 text-xs md:text-sm hover:bg-blue hover:text-white rounded-md">
              Home
            </button>
            <button className=" p-1 text-xs md:text-sm hover:bg-blue hover:text-white rounded-md">
              Explore
            </button>
            <button className=" p-1 text-xs inline-flex md:text-sm  hover:bg-blue hover:text-white rounded-md ">
              Apps
            </button>
          </div>
          <div className="invisible md:visible md:mx-1">
            <input
              type="text"
              className="border text-base rounded-md px-0"
              placeholder="Search for Contact"
            />
          </div>
        </div>

        <div className="cursor-pointer w-1/2 flex justify-end items-center gap-1 z-50">
          <div className="flex justify-center items-center">
            <img
              src={PIC}
              className="rounded-full w-10 h-10 md:w-12 md:h-12 object-cover hover:opacity-80 p-1 bg-card"
              onClick={() => setShowoptions(true)}
              alt=""
            />
          </div>
          {showoptions && (
            <div className="p-4 top-[10%] right-[5%] absolute z-50 rounded-md w-auto h-auto bg-slate-100 flex justify-center items-center flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <span className="text-center text-xl">Lindsay Windson</span>
                <button
                  className=" text-2xl "
                  onClick={() => setShowoptions(false)}
                >
                  <RxCross2 />
                </button>
              </div>
              <img
                src={PIC}
                className="rounded-full w-20 h-20 object-cover"
                onMouseEnter={""}
                alt=""
              />
              <div className="flex justify-evenly items-center gap-1">
                <li className="bg-black list-none text-white rounded-md px-1 py-1 text-center hover:opacity-70">
                  <FaBell />
                  11
                </li>
                <li className="bg-black list-none text-white rounded-md px-1 py-1 text-center hover:opacity-70">
                  <IoMailOutline /> 10
                </li>
                <li className="bg-black list-none text-white rounded-md px-1 py-1 text-center hover:opacity-70">
                  <FaBolt />7
                </li>
              </div>
              <div className="flex justify-center items-center gap-1">
                <button className="bg-lightblue p-1 rounded-lg hover:opacity-80 inline-flex justify-center items-center gap-1">
                  <FaPlus />
                  Create
                </button>
                <button className="bg-blue p-1 rounded-lg hover:opacity-80 inline-flex justify-center items-center gap-1">
                  <CiStar className="text-xl" />
                  Upgrade
                </button>
                <button className="bg-pink p-1 rounded-lg hover:opacity-80 inline-flex justify-center items-center gap-1">
                  <IoGridOutline />
                  More
                </button>
              </div>
              <div>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-1 justify-center items-center px-4 ">
                  <li
                    onClick={handleclick}
                    className="w-full text-center text-base  bg-blue px-4 py-1 hover:opacity-80 rounded-md cursor-pointer  text-white "
                  >
                    Contacts
                  </li>
                  <li
                    onClick={handleclick}
                    className="w-full text-center text-base  bg-blue px-4 py-1 hover:opacity-80 rounded-md cursor-pointer text-white"
                  >
                    Projects
                  </li>
                  <li
                    onClick={handleclick}
                    className="w-full text-center text-base  bg-blue px-4 py-1 hover:opacity-80 rounded-md cursor-pointer text-white"
                  >
                    Albums
                  </li>
                  <li
                    onClick={handleclick}
                    className="w-full text-center text-base  bg-blue px-4 py-1 hover:opacity-80 rounded-md cursor-pointer text-white"
                  >
                    Organizations
                  </li>
                  <li
                    onClick={handleclick}
                    className="w-full text-center text-base  bg-blue px-4 py-1 hover:opacity-80 rounded-md cursor-pointer text-white"
                  >
                    Followers
                  </li>
                  <li
                    onClick={handleclick}
                    className="w-full text-center text-base  bg-blue px-4 py-1 hover:opacity-80 rounded-md cursor-pointer text-white"
                  >
                    You Follow
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
