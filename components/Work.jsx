import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/logo.png";
import slider2 from "../public/assets/banner.png";
import slider3 from "../public/assets/the.png";
const Work = () => {
  return (
    <div id="work" className="max-w-6xl mx-auto px-5">
      <div className="py-8">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl sm:text-5xl mb-10 font-semibold text-center uppercase tracking-widest font-poppin">
            <span className="text-orange-600">Our </span> Work
          </h3>
        </div>
        <div className="justify-center text-center items-center mx-auto gap-4 md:gap-8 grid sm:grid-cols-2 md:grid-cols-3">
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
          <div class="h-full text-center rounded-3xl drop-shadow-md border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
            <Image src={slider} className="object-fill object-center" alt=".." />
          </div>
        </div>

        <div className="flex justify-center mt-3 py-5">
          <button
            type="button"
            class="text-white text-xl font-medium rounded-lg shadow-xl hover:scale-105 px-5 py-3 text-center bg-gradient-to-l from-orange-600 to-orange-400 hover:bg-gradient-to-br transition-all duration-300"
          >
            View All Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
