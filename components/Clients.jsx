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
      <div className="px-8 pb-8 mx-auto">
        <div className="flex mb-5 flex-col items-center">
          <h3 className="text-5xl text-center uppercase tracking-widest border-b-2 border-orange-500 mb-2">
          <span className="text-orange-600">Our </span> Clients
          </h3>
        </div>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
         
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider4}
              alt=".."
              className="object-fill object-center  h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
       
            <Image
              src={slider2}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
          
            <Image
              src={slider2}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
          
            <Image
              src={slider2}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
          
            <Image
              src={slider2}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
          <SwiperSlide>
         
            <Image
              src={slider2}
              alt=".."
              className="object-fill object-center h-12 md:h-32"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Clients