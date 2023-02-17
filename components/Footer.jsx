import Image from "next/image";
import React from "react";
import Link from "next/link";
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
            GD Dots is an graphic design company specializing in graphic design, motion graphics, video editing, and 3D services. We prioritize customer satisfaction and have been providing excellent service for the past 5 years.
          </p>
        </div>

        <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
          <div className="px-8">
            <h3 className="font-semibold text-lg text-white tracking-widest mb-5">
              Privacy & Terms
            </h3>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300">
                  Payment Systems
                </a>
              </li>
            </nav>
          </div>
        </div>
        <div className="mt-5 justify-center items-center text-center md:mt-0  md:text-left">
          <div className="px-8">
            <h3 className="font-semibold text-lg text-white tracking-widest mb-5">
              Quick Links
            </h3>
            <nav className="list-none mb-10">
              <Link href={"/contact"}>
                <li>
                  <div className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300">
                    Contact Us
                  </div>
                </li>
              </Link>
              <li>
                <a className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white cursor-pointer transition-all duration-300">
                  Return Policy
                </a>
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
