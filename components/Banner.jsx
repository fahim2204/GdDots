import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import slider2 from "../public/assets/slide2.jpg";
import slider3 from "../public/assets/slide3.jpg";
import slider4 from "../public/assets/slide4.jpg";

const Banner = () => {
  return (
    <div className=" text-4xl relative text-center  bg-white-400">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={slider4}
            alt=".."
            className=" w-full object-fill object-center h-full curved-slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider2}
            alt=".."
            className="w-full object-fill object-center  h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt=".."
            className=" w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            alt=".."
            className=" w-full object-fill object-center h-full"
          />
        </SwiperSlide>
      </Swiper>
      <div class="flex absolute bottom-0  w-full translate-y-8 z-30">
        <svg   class="w-full h-64">
          <path
            class="fill-current text-white"
            fill-opacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
      
        </svg>
        {/* <svg viewBox="0 0 1200 630" class="w-full">
          <path
            class="fill-current  text-white"
            d="M-835.8-1705.3c-485.2,191.6-784.1,150-969.6,72c-75.9-31.9-130.8-69.1-236.3-93.9
    c-276.1-65-536.1,39.5-714,139.3c0-303.1,0-606.3,0-909.4c640,0,1280,0,1920,0C-835.8-2233.3-835.8-1969.3-835.8-1705.3z"
          />
          <path
            class="fill-current  text-white"
            d="M1200,496c0,0-237.9,196.6-458.8,100.5c-35.5-10.5-69.7-27.5-104.3-40.6c-60-22.8-120.9-43.6-183.3-58.7
    C315,463.6,180.8,487,51.4,542.6c-17.5,7.5-34.8,15.8-51.4,25.2V0.7h1200V496z"
          />
        </svg> */}
     
      </div>
    </div>
  );
};

export default Banner;
