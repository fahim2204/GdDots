import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../public/assets/GD-Dots.png";

const Footer = () => {
  return (
    <section>
      <footer className=" bg-black text-white shadow-lg">
        <div className="container px-5 pt-12 mx-auto gap-1 md:gap-20 grid md:grid-cols-3  md:items-center  ">
          <div className="text-center mb-10 md:text-left">
            <Link href={"/"}>
              <div className="flex font-medium  justify-center  cursor-pointer mb-5 md:justify-start">
                <Image src={Logo} alt=".." width={140} height={40} />
              </div>
            </Link>
            <p className="text-sm text-gray-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              alias, placeat ut consectetur ducimus architecto tenetur suscipit
              exercitationem corporis excepturi.
            </p>
          </div>

          <div className="mt-5 justify-center text-center items-center md:mt-0 md:text-left">
            <div className=" px-8 ">
              <h3 className="font-bold text-white tracking-widest  mb-5">
                Privacy & Terms
              </h3>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    Payment Systems
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="mt-5 justify-center items-center text-center md:mt-0  md:text-left">
            <div className=" px-8 ">
              <h3 className="font-bold text-white tracking-widest mb-5">
                Quick Links
              </h3>
              <nav className="list-none mb-10">
                <Link href={"/contact"}>
                  <li>
                    <div className="text-gray-300 text-sm hover:text-gray-800 cursor-pointer">
                      Contact Us
                    </div>
                  </li>
                </Link>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-300 text-sm hover:text-gray-800">
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
    </section>
  );
};

export default Footer;
