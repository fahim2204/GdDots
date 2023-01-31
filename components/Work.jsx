import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/logo.png";
import slider2 from "../public/assets/banner.png";
import slider3 from "../public/assets/the.png";
import slider4 from "../public/assets/cover.jpg";
const Work = () => {
  return (
    <div id="work" className="">
      <div className="px-8 py-8  mx-auto">
        <div className="flex mb-5 flex-col items-center">
          <h3 className="text-5xl text-center uppercase tracking-widest">
            <span className="text-orange-600">Our </span> Work
          </h3>
        </div>
        <Swiper
        breakpoints={{
          // 576: {
          //   slidesPerView: 2,
          // },
          768: {
            slidesPerView: 3,
          },
        }}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={slider}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              // className="object-fill object-center h-52 md:h-96"
              className=" rounded-2xl  w-full h-full mt-5"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center py-5">
          <button
            type="button"
            class="text-white text-xl px-5 py-3 text-center  bg-gradient-to-l from-orange-600 to-orange-400 hover:bg-gradient-to-br font-medium "
          >
            View All Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
