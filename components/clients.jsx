// import React from "react";

// const ourClients = [
//   "BBQUEEN-16.webp",
//   "Printing-Bangla.webp",
//   "Daraz.webp",
//   "hai-education.webp",
//   "megastar-technology.webp",
//   "mega-marchndising-company-ltd.webp",
//   "mega-pace.webp",
//   "Nogod.webp",,
//   "Land-Mark.webp",
//   "The-Movers.webp",
//   "Rokomari.webp",
//   "Socitydeal24.com.webp",
//   "Softopark.com.webp",
//   "Brain-Capita.webp",
// ];

// const Clients = () => {
//   return (
//     <section id="work" className="">
//       <div className="max-w-6xl mx-auto px-5 pb-8 pt-5">
//         <div className="flex mb-5 flex-col items-center">
//           <h3 className="text-4xl text-slate-800 font-extralight underline-gd sm:text-5xl mb-5 text-center uppercase">
//             Our<span className="font-bold">Clients</span>
//           </h3>
//         </div>
//         <div className="grid grid-cols-4 gap-4">
//           {ourClients.map((client, index) => {
//             return (
//               <div key={index}>
//                 <img
//                   src={`./img/clients/${client}`}
//                   alt=".."
//                   className="w-full"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

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
          <h3 className="text-4xl text-slate-800 font-extralight underline-gd sm:text-5xl mb-5 text-center uppercase">
            Our<span className="font-bold">Clients</span>
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
            delay: 0,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          speed={3500}
          // loop={true} // add loop setting
          // freeMode={true} // add freeMode setting
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