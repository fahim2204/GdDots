import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import slider from "../public/assets/11.png";
import slider2 from "../public/assets/1212.png";
import slider3 from "../public/assets/sera.png";
import slider4 from "../public/assets/the.png";

const Clients = () => {
  return (
    <section id="work" className="">
      <div className="max-w-6xl mx-auto px-5 pb-8 pt-5">
        <div className="flex mb-5 flex-col items-center">
          <h3 className="text-4xl sm:text-5xl mb-10 text-center uppercase tracking-widest border-b-4 border-orange-500">
            <span className="text-orange-600">Our </span> Clients
          </h3>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={slider}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider4}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt=".."
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Clients