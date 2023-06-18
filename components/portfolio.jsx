import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/logo.png";
import slider2 from "../public/assets/banner.png";
import slider3 from "../public/assets/the.png";

const ourWorkList = [
  "21-Febuary-Banner-Design.webp",
  "Bag-Design.webp",
  "Banner-Design.webp",
  "gadget-banner.webp",
  "Gift-Card-Design.webp",
  "Merry-Christmas-Day-Banner.webp",
  "21-Febuary-Banner-Design.webp",
  "T-Shirt-Design.webp",
  "Banner-Design.webp",
];

const Work = () => {
  return (
    <div id="work" className="max-w-6xl mx-auto px-5">
      <div className="py-8">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl sm:text-5xl font-semibold text-orange-600 text-center uppercase font-poppin">
            Our Portfolio
          </h3>
          <h6 className="mb-10 text-slate-600">A creative agency that believes in the power of creative ideas and great work.</h6>
        </div>
        <div className="justify-center text-center items-center mx-auto gap-4 md:gap-8 grid sm:grid-cols-2 md:grid-cols-3">
          {ourWorkList.map((work, index) => {
            return (
              <div
                key={index}
                class="h-full text-center rounded-xl overflow-hidden drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500"
              >
                <img
                  src={`./img/works/${work}`}
                  className="object-cover h-full"
                  alt=".."
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-3 py-5">
          <a
            href="https://www.behance.net/gddots1" target="_blank"
            class="text-white text-xl font-medium rounded-lg shadow-xl hover:scale-105 px-5 py-3 text-center bg-gradient-to-l from-orange-600 to-orange-400 hover:bg-gradient-to-br transition-all duration-1000"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
