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
          <Image src={slider2} alt=".." className="w-full object-fill object-center h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider3} alt=".." className=" w-full object-fill object-center h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slider4} alt=".." className=" w-full object-fill object-center h-full" />
        </SwiperSlide>
      </Swiper>
      <div class="flex absolute bottom-0  w-full translate-y-8 z-30">
        <svg viewBox="0 0 1440 319">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
