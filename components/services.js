import Image from "next/image";
import React from "react";

const ourServiceList = [
  { img: "graphic-design.webp", name: "Graphic Design" },
  { img: "social-media.webp", name: "Social Media Design" },
  { img: "logo-design.webp", name: "Logo Design" },
  { img: "clipping-path.webp", name: "Clipping Path" },
  { img: "motion-graphic.webp", name: "Motion Graphic" },
  { img: "video-editing.webp", name: "Video Editing" },
];

const Services = () => {
  return (
    <div id="services" className="">
      <section className="max-w-6xl mx-auto px-5">
        <div className="py-12 mx-auto">
          <div className="flex mb-5 flex-col items-center text-center">
            <h1 className="text-4xl text-orange-600 sm:text-5xl font-semibold uppercase tracking-wider">
              Our Services
            </h1>
            <h6 className="text-slate-600 mb-10">We provide good service by our skilled team of 5 creative people</h6>
          </div>
          <div className="justify-center items-center mx-auto gap-4 md:gap-8 lg:gap-16 grid sm:grid-cols-2 md:grid-cols-3 px-0 lg:px-10 xl:px-16">
            {ourServiceList.map((item, index) => {
              return (
                <div key={index} class="h-full p-4 mb-4 rounded-2xl shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)] bg-white border border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500">
                  <img
                    src={`./img/services/${item.img}`}
                    className="mx-auto h-32"
                    alt="service"
                  />
                  <h2 className="mt-3 mb-0 text-2xl text-center md:text-2xl font-medium">
                    {item.name}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
