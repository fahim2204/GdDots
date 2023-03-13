import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import slider from "../public/assets/11.png";
import slider2 from "../public/assets/1212.png";
import slider3 from "../public/assets/sera.png";
import slider4 from "../public/assets/the.png";

const ourClients = [
  "BBQUEEN-16.webp",
  "Brain-Capita.webp",
  "Daraz.webp",
  "hai-education.webp",
  "Land-Mark.webp",
  "mega-marchndising-company-ltd.webp",
  "mega-pace.webp",
  "megastar-technology.webp",
  "Nogod.webp",
  "Printing-Bangla.webp",
  "Rokomari.webp",
  "Socitydeal24.com.webp",
  "Softopark.com.webp",
  "The-Movers.webp",
];

const Clients = () => {
  return (
    <section id="work" className="">
      <div className="max-w-6xl mx-auto px-5 pb-8 pt-5">
        <div className="flex mb-5 flex-col items-center">
          <h3 className="text-4xl sm:text-5xl mb-5 text-center font-semibold uppercase tracking-widest">
            <span className="text-orange-600">Our </span> Clients
          </h3>
        </div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
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
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          centeredSlides={false}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {ourClients.map((client, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={`./img/clients/${client}`} alt=".." className="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
