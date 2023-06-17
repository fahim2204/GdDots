import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import slider2 from "../public/assets/slide2.jpg";
import slider3 from "../public/assets/slide3.jpg";
import slider4 from "../public/assets/slide4.jpg";

const Banner = () => {
  return (
    <div className="bg-white relative">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={slider2} alt="slider" className="object-cover h-[30rem] sm:h-[35rem] md:h-[37rem] 2xl:h-[42rem] brightness-[0.1]" />
        </SwiperSlide>
      
      </Swiper>
      <div class="absolute bottom-0 w-full translate-y-4 md:translate-y-7 z-30">
        <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            d="M1440,320h-48c-48,0-144,0-240,0s-192,0-288,0s-192,0-288,0s-192,0-288,0s-192,0-240,0H0l0-128l48-32
	c48-32,144-96,240-112s192,16,288,58.7C672,149,768,203,864,224s192,11,288-32s192-117,240-154.7L1440,0V320z"
            fill="#e2e6f2"
          />
        </svg>
      </div>
      <div className="absolute w-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:-translate-y-20 z-30 ">
        <div className="px-3 text-4xl md:text-6xl lg:text-7xl text-white font-semibold text-center">Graphics Design</div>
      </div>
    </div>
  );
};

export default Banner;

