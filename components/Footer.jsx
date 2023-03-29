import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import {
  FaInstagramSquare,
  FaBehanceSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import Logo from "../public/assets/GD-Dots.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl px-5 pt-8 mx-auto gap-1 md:gap-4 lg:gap-8 grid md:grid-cols-3">
        <div className="text-center mx-auto mb-5 md:text-left max-w-md">
          <Link href={"/"}>
            <div className="flex justify-center cursor-pointer mb-5 md:justify-start hover:scale-105 transition-all duration-300">
              <Image src={Logo} alt=".." width={140} height={40} />
            </div>
          </Link>
          <p className="text-sm text-gray-300 text-justify">
            GD Dots is an graphic design company specializing in graphic design, motion graphics,
            video editing, and 3D services. We prioritize customer satisfaction and have been
            providing excellent service for the past 5 years.
          </p>
          <ul className="mt-4 flex items-start justify-center md:justify-start mb-4">
              <li className="text-sm uppercase text-white">
                <a href="https://www.facebook.com/gddots" target="_blank" rel="noreferrer">
                  <div className="text-xl  cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaFacebookSquare className="rounded-full hover:translate-x-0.5 hover:scale-110 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400" />
                  </div>
                </a>
              </li>
              <li className="ml-5 text-sm uppercase text-white">
                <a href="https://www.behance.net/tarekrahimkebria" target="_blank" rel="noreferrer">
                  <div className="text-xl  cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaBehanceSquare className="hover:translate-x-0.5 hover:scale-110 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400" />
                  </div>
                </a>
              </li>
              <li className="ml-5 text-sm uppercase text-white">
                <a
                  href="http://linkedin.com/in/tarek-rahim-953857194"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="text-xl  cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaInstagramSquare className="hover:translate-x-0.5 hover:scale-110 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400" />
                  </div>
                </a>
              </li>
              <li className="ml-5 text-sm uppercase text-white">
                <a href="https://www.youtube.com/@gddots" target="_blank" rel="noreferrer">
                  <div className="text-xl  cursor-pointer hover:scale-110 ease-in duration-500">
                    <FaYoutubeSquare className="hover:translate-x-0.5 hover:scale-110 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400" />
                  </div>
                </a>
              </li>
            </ul>
        </div>

        <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
          <div className="px-8">
            <h3 className="font-semibold text-lg text-white tracking-widest mb-5">
              Privacy & Terms
            </h3>
            <nav className="list-none mb-3">
              <li>
                <div className="text-gray-300 hover:scale-110 hover:translate-x-0.5 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">
                  Privacy Policy
                </div>
              </li>
              <li>
                <div className="text-gray-300 hover:scale-110 hover:translate-x-0.5 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">
                  Terms of Use
                </div>
              </li>
              <li>
                <div className="text-gray-300 hover:scale-110 hover:translate-x-0.5 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">
                  Payment Systems
                </div>
              </li>
            </nav>
            <ul className="flex flex-col items-center md:items-start mb-6">
              <li className="flex items-center space-x-2 mb-2">
                <a
                  href="tel:+8801301253885"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 group"
                >
                  <BsFillTelephoneFill className="text-xl group-hover:text-orange-600" />
                  <span className="hover:translate-x-0.5 group-hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">+880 13012-53885</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="mailto:tarekrahim100@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 group"
                >
                  <AiFillMail className="text-xl group-hover:text-orange-600" />
                  <span className="hover:translate-x-0.5 group-hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">tarekrahim100@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 justify-center items-center text-center md:mt-0  md:text-left">
          <div className="px-8">
            <h3 className="font-semibold text-lg text-white tracking-widest mb-5">Quick Links</h3>
            <nav className="list-none mb-4">
              <Link href={"/contact"}>
                <li>
                  <div className="text-gray-300 hover:scale-110 hover:translate-x-0.5 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">
                    Contact Us
                  </div>
                </li>
              </Link>
              <li>
                <div className="text-gray-300 hover:scale-110 hover:translate-x-0.5 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">
                  About Us
                </div>
              </li>
              <li>
                <div className="text-gray-300 hover:scale-110 hover:translate-x-0.5 hover:text-orange-600 cursor-pointer transition-all ease-in duration-400">
                  Return Policy
                </div>
              </li>
            </nav>
           
          </div>
        </div>
      </div>

      <hr className="text-white mx-20" />
      <div className="bg-black">
        <div className=" py-4 px-5 justify-center items-center flex flex-wrap flex-col sm:flex-row">
          <p className=" text-sm text-center tracking-widest  sm:text-left">
            © Copyright 2023 || GD Dots || All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
