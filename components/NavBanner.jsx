import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {
  FaInstagramSquare,
  FaBehanceSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const NavBanner = () => {
  return (
    <div className="hidden md:block w-full text-white bg-gradient-to-l from-orange-600 to-orange-400 py-2">
      <div className="max-w-6xl mx-auto flex justify-between px-5 divide-x">
        <ul className="flex items-center divide-x">
          <li className="flex items-center space-x-2 pr-2">
            <a
              href="tel:+8801301253885"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:underline"
            >
              <BsFillTelephoneFill className="text-xl" />
              <span className="hidden md:block">+880 13012-53885</span>
            </a>
          </li>
          <li className="flex items-center space-x-2 pl-2">
            <a
              href="mailto:tarekrahim100@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 hover:underline"
            >
              <AiFillMail className="text-xl" />
              <span className="hidden md:block">tarekrahim100@gmail.com</span>
            </a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li className="ml-3 text-sm uppercase text-white">
            <a href="https://www.facebook.com/gddots" target="_blank" rel="noreferrer">
              <div className="text-xl  cursor-pointer hover:-translate-y-[2px] hover:scale-125 ease-in duration-500">
                <FaFacebookSquare />
              </div>
            </a>
          </li>
          <li className="ml-5 text-sm uppercase text-white">
            <a href="https://www.behance.net/tarekrahimkebria" target="_blank" rel="noreferrer">
              <div className="text-xl  cursor-pointer hover:-translate-y-[2px] hover:scale-125 ease-in duration-500">
                <FaBehanceSquare />
              </div>
            </a>
          </li>
          <li className="ml-5 text-sm uppercase text-white">
            <a href="http://linkedin.com/in/tarek-rahim-953857194" target="_blank" rel="noreferrer">
              <div className="text-xl  cursor-pointer hover:-translate-y-[2px] hover:scale-125 ease-in duration-500">
                <FaInstagramSquare />
              </div>
            </a>
          </li>
          <li className="ml-5 text-sm uppercase text-white">
            <a href="https://www.youtube.com/@gddots" target="_blank" rel="noreferrer">
              <div className="text-xl  cursor-pointer hover:-translate-y-[2px] hover:scale-125 ease-in duration-500">
                <FaYoutubeSquare />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBanner;
