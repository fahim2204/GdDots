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
        <div className="flex mb-5 flex-col items-center">
          <h3 className="text-4xl sm:text-5xl mb-10 text-center uppercase tracking-widest font-sans">
            <span className="text-orange-600">Our </span> Work
          </h3>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            }, 768: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper px-4 md:px-0"
        >
          <SwiperSlide>
            <Image src={slider} alt=".." className="rounded-2xl w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider2} alt=".." className="rounded-2xl w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider2} alt=".." className="rounded-2xl w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider3} alt=".." className="rounded-2xl w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider2} alt=".." className="rounded-2xl w-full h-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slider2} alt=".." className="rounded-2xl w-full h-full" />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center py-5">
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
