import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import Image from "next/image";
import slider4 from "../public/assets/1.jpg";


const ourReviewList = [
  {
    "client":"Kawser Chowdhuary",
    "clientImg":"Kawser-Chowdhuary.png",
    "reviewText":"Designers have a vocabulary all their own. If you’re getting design work done, knowing the right terminology will help you communicate with one another and get the results you envision.",
    "rating":5,
  },
  {
    "client":"MD Hasnain",
    "clientImg":"MD-Hasnain.png",
    "reviewText":"wonderful effort , I am very helpful by your video, Lots of thanks to you, best wishes for your future life",
    "rating":5,
  },
  {
    "client":"Nusrat",
    "clientImg":"Nusrat.png",
    "reviewText":"Its extremely helpful. The graphics class/work was clear and detailed. Thanks again for the great job. May Allah bless you.",
    "rating":5,
  },
  {
    "client":"Rony",
    "clientImg":"Rony.png",
    "reviewText":"I think he is the best designer.. I am very happy & satisfy for his great job Thanks a man....",
    "rating":5,
  },
]

const Testimonial = () => {
  return (
    <div id="testimonial" className="bg-gradient-to-l from-orange-600 to-orange-400">
      <section className="text-gray-600">
        <div className="px-8 py-16 pb-0 pt-5 rounded-lg  mx-auto">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            // modules={[Navigation, Autoplay, Pagination]}
            pagination={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
          >
            {ourReviewList.map((review,index)=>{
              return(
                <SwiperSlide key={index} className="mb-12">
                <div class="flex flex-col items-center p-6 pt-12 mt-12 rounded-3xl shadow-s mb-2 bg-white relative max-w-sm mx-auto">
                  <img
                    src={`./img/reviews/${review.clientImg}`}
                    alt=".."
                    className="w-24 h-24 rounded-full border-4 border-slate-900 mx-auto mb-0 -mt-24 hover:scale-105 hover:shadow-2xl hover:translate-y-1 transition-all duration-400"
                  />
                  <h5 class="text-lg text-black font-bold mt-2">{review.client}</h5>
                  <div class="flex items-center mb-2">
                    <svg
                      aria-hidden="true"
                      class="text-yellow-400 w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="text-yellow-400 w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="text-yellow-400 w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="text-yellow-400 w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="text-yellow-400 w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {/* <svg
                      aria-hidden="true"
                      class="text-gray-300 w-7 h-7 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg> */}
                  </div>
                  <p class="text-sm text-center text-black">
                    {review.reviewText}
                  </p>
                  <div class="bg-white absolute rounded-xl bottom-0 right-1/2 translate-x-1/2  transform -rotate-45 -z-10 w-32 h-32"></div>
                </div>
              </SwiperSlide>
              )
            })}
           
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
