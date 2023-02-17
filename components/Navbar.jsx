import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavBanner from "./NavBanner";
import NavLogo from "../public/assets/GD-Dots.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#ffffff");
  const [navBanner, setNavBanner] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 40) {
        setShadow(true);
        setNavBg("#000000");
        setNavBanner(false);
        setLinkColor("#fffff");
      } else {
        setShadow(false);
        setNavBg("transparent");
        setNavBanner(true);
        setLinkColor("#ffffff");
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div className={navBanner ? "w-full z-10" : "fixed w-full -top-96"}>
        <NavBanner />
      </div>

      <div
        style={{ backgroundColor: `${navBg}` }}
        className={`fixed w-full h-20 z-[100] ease-in-out duration-300 ${
          shadow ? "shadow-gray-400" : ""
        } `}
      >
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-full">
          <Link href="/">
            <Image src={NavLogo} alt="/" width={140} height={40} />
          </Link>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex space-x-8">
              <li className="uppercase hover:scale-110 hover:-translate-y-1 transition-all ease-in duration-400">
                <Link href="/">Home</Link>
              </li>
              <li className="uppercase hover:scale-110 hover:-translate-y-1 transition-all ease-in duration-400">
                <Link href="/#company">Company</Link>
              </li>
              <li className="uppercase hover:scale-110 hover:-translate-y-1 transition-all ease-in duration-400">
                <Link href="/#services">Services</Link>
              </li>
              <li className="uppercase hover:scale-110 hover:-translate-y-1 transition-all ease-in duration-400">
                <Link href="/#blogs">Blogs</Link>
              </li>
              <li className="uppercase hover:scale-110 hover:-translate-y-1 transition-all ease-in duration-400">
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
            {/* Hamburger Icon */}
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden rounded-full bg-gray-600 p-2"
            >
              <AiOutlineMenu size={25} className="text-white" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in transition duration-500"
                : "fixed left-[-100%] top-0 px-6 py-10 ease-in transition duration-500"
            }
          >
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="140" height="40" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full bg-white shadow-sm shadow-gray-400 p-3 cursor-pointer "
              >
                <AiOutlineClose className="text-black font-bold" />
              </div>
            </div>
            <ul className="flex flex-col uppercase text-white mt-8">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4">
                  Home
                </li>
              </Link>
              <Link href="/#company">
                <li onClick={() => setNav(false)} className="py-4">
                  Company
                </li>
              </Link>
              <Link href="/#services">
                <li onClick={() => setNav(false)} className="py-4">
                  Services
                </li>
              </Link>
              <Link href="/#blogs">
                <li onClick={() => setNav(false)} className="py-4">
                  Blogs
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
