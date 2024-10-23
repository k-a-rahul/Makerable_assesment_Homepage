import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

function UniversalModal({ heading, close, btnheading }) {
  return (
    <>
      <div className="bg-slate-100 w-[90%] h-[60%] md:w-[50%] md:h-[60%] flex flex-col justify-start items-end rounded-lg">
        <div className=" w-full flex justify-end items-start">
          <button className="text-3xl" onClick={close}>
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="grid grid-cols-1 justify-items-center items-start text-center p-1 gap-0 w-full h-[70%] ">
          <span className="md:text-4xl text-xl font-bold ">{heading}</span>
          <div className="w-full h-1 bg-blue"></div>
          <div className="w-full flex justify-around items-center text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem
            repellendus sapiente beatae repellat vel dolor, debitis temporibus
            ab dolores.
            <button className="text-xl">
              <IoSettingsSharp />
            </button>
          </div>
          <div className="w-full flex justify-around items-center text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam rem
            repellendus sapiente beatae repellat vel dolor, debitis temporibus
            ab dolores.
            <button className="text-xl">
              <IoSettingsSharp />
            </button>
          </div>
        </div>
        <div className=" flex justify-end items-start p-2 ">
          <button className="bg-lightblue text-white text-sm md:text-xl flex items-center gap-1 rounded-md p-1 hover:opacity-80 active:bg-green-500">
            <FaPlus />
            {btnheading}
          </button>
        </div>
      </div>
    </>
  );
}

export default UniversalModal;
