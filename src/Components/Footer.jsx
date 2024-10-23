import React from "react";
import { LOGO, MARKBLE, PIC } from "../../exports";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="w-full bg-slate-100 grid grid-cols-2 gap-2 md:grid-cols-5 md:justify-items-start items-start px-2">
        <div className="flex flex-col justify-end items-start ">
          <ul>
            <img src={LOGO} alt="" className="w-24 cursor-pointer" />
            <li className="text-xs md:text-base">About Us</li>
            <li className="text-xs md:text-base">Terms and Conditions</li>
            <li className="text-xs md:text-base">Privacy & Cookies</li>
          </ul>
        </div>
        <div className="flex flex-col justify-end items-start">
          <ul>
            <li className="text-base font-semibold">Organizations</li>
            <li className="text-xs md:text-base">Control Panel</li>
            <li className="text-xs md:text-base">Discover Marketplace</li>
            <li className="text-xs md:text-base">Create Organization Account</li>
          </ul>
        </div>
        <div className="flex flex-col justify-end items-start">
          <ul>
            <li className="text-base font-semibold">Your Account</li>
            <li className="text-xs md:text-base">Library</li>
            <li className="text-xs md:text-base">Profile</li>
            <li className="text-xs md:text-base">Projects</li>
            <li className="text-xs md:text-base">Help</li>
          </ul>
        </div>
        <div className="flex flex-col justify-end items-start">
          <ul>
            <li className="text-base font-semibold">Explore</li>
            <li className="text-xs md:text-base">Metrics</li>
            <li className="text-xs md:text-base">Networks</li>
            <li className="text-xs md:text-base">Strategies</li>
            <li className="text-xs md:text-base">Projects</li>
            <li className="text-xs md:text-base">Studies</li>
            <li className="text-xs md:text-base">Surveys</li>
            <li className="text-xs md:text-base">Tips</li>
            <li className="text-xs md:text-base">Vouchers</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start ">
          <span className="text-xs md:text-base font-semibold text-center">
            FOLLOW THE MAKERBLE STORY
          </span>
          <ul className="flex justify-between gap-2 items-center">
            <button className="text-4xl text-blue hover:opacity-70">
              <CiLinkedin />
            </button>
            <button className="text-4xl text-red-500 hover:opacity-70">
              <CiYoutube />
            </button>
            <button className="text-4xl text-red-300 hover:opacity-70">
              <FaInstagram />
            </button>
            <button className="text-4xl text-lightblue hover:opacity-70">
              <FaSquareXTwitter />
            </button>
            <button className="text-4xl text-lightblue hover:opacity-70">
              <FaFacebookSquare />
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
