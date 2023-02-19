import Image from "next/image";
import React from "react";
import Img from "../public/assets/33.png";
import Img2 from "../public/assets/2.png";
import Img3 from "../public/assets/3.png";
import Img4 from "../public/assets/4.png";
import Img5 from "../public/assets/5.png";
import Img6 from "../public/assets/6.png";

const Services = () => {
  return (
    <div id="services" className="bg-pink-50">
      <section className="max-w-6xl mx-auto px-5">
        <div className="py-12 mx-auto">
          <div className="flex mb-5 flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl mb-10 text-gray-900 font-semibold uppercase tracking-wider">
              Our <span className="text-orange-600">Services</span>
            </h1>
          </div>
          <div className="justify-center text-center items-center mx-auto gap-4 md:gap-8 lg:gap-16 grid sm:grid-cols-2 md:grid-cols-3">
            <div class="h-full p-0 overflow-hidden text-center mb-4 rounded-xl drop-shadow-md bg-blue-50 border border-gray-200 hover:bg-white text-gray-900 cursor-pointer hover:scale-105 transition ease-in duration-500">
              <Image
                src="./img/Graphic-Design.webp"
                className="object-fill object-center"
                height={400}
                width={650}
                alt=".."
              />
              <h2 className="text-3xl font-medium mt-5">
                Graphics <br /> Design
              </h2>
            </div>
            <div class="h-full p-0 overflow-hidden text-center mb-4 rounded-xl drop-shadow-md bg-blue-50 border border-gray-200 hover:bg-white text-gray-900 cursor-pointer hover:scale-105 transition ease-in duration-500">
              <Image
                src="./img/Motion-Graphic.webp"
                className="object-fill object-center"
                height={400}
                width={650}
                alt=".."
              />
              <h2 className="text-3xl font-medium mt-5">
                Motion <br /> Graphics
              </h2>
            </div>

            <div class="h-full p-0 overflow-hidden text-center mb-4 rounded-xl drop-shadow-md bg-blue-50 border border-gray-200 hover:bg-white text-gray-900 cursor-pointer hover:scale-105 transition ease-in duration-500">
              <Image
                src="./img/3D-Animation.webp"
                className="object-fill object-center"
                height={400}
                width={650}
                alt=".."
              />
              <h2 className="text-3xl font-medium mt-5">
                3D <br /> Animation
              </h2>
            </div>

            <div class="h-full p-0 overflow-hidden text-center mb-4 rounded-xl drop-shadow-md bg-blue-50 border border-gray-200 hover:bg-white text-gray-900 cursor-pointer hover:scale-105 transition ease-in duration-500">
              <Image
                src="./img/web-development.webp"
                className="object-fill object-center"
                height={400}
                width={650}
                alt=".."
              />
              <h2 className="text-3xl font-medium mt-5">
                Web <br /> Development
              </h2>
            </div>

            <div class="h-full p-0 overflow-hidden text-center mb-4 rounded-xl drop-shadow-md bg-blue-50 border border-gray-200 hover:bg-white text-gray-900 cursor-pointer hover:scale-105 transition ease-in duration-500">
              <Image
                src="./img/Clipping-Path-Services.webp"
                className="object-fill object-center"
                height={400}
                width={650}
                alt=".."
              />
              <h2 className="text-3xl font-medium mt-5">
                Clipping
                <br /> Path
              </h2>
            </div>

            <div class="h-full p-0 overflow-hidden text-center mb-4 rounded-xl drop-shadow-md bg-blue-50 border border-gray-200 hover:bg-white text-gray-900 cursor-pointer hover:scale-105 transition ease-in duration-500">
              <Image
                src="./img/Video-Editing.webp"
                className="object-fill object-center"
                height={400}
                width={650}
                alt=".."
              />
              <h2 className="text-3xl font-medium mt-5">
                Video <br /> Editing
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
