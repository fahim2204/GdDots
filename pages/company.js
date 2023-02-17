import Image from "next/image";
import React from "react";
import Static from "../public/assets/1.jpg";

const Company = () => {
  return (
    <div id="company" className="">
      <section className="max-w-6xl mx-auto px-5">
        <div className="my-12 grid md:grid-cols-2 item-center">
          <div className="mt-auto mb-auto grid sm:grid-cols-2 gap-3 md:gap-4 lg:gap-8">
            <div class="px-6 py-10 bg-white-800 text-center mb-4 rounded-3xl shadow-md border-2 border-gray-200 ">
              <h2 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl text-orange-500">10,000+</h2>
              <p className="md:text-xl lg:text-2xl text-orange-500 uppercase mb-0">Design <br /> completed</p>
            </div>
            <div class="px-6 py-10 bg-white-800 text-center mb-4 rounded-3xl shadow-md border-2 border-gray-200">
              <h2 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl text-orange-500">50+</h2>
              <p className="md:text-xl lg:text-2xl text-orange-500 uppercase mb-0">Brand Services</p>
            </div>
            <div class="px-6 py-10 bg-white-800 text-center mb-4 rounded-3xl shadow-md border-2 border-gray-200">
              <h2 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl text-orange-500">100+</h2>
              <p className="md:text-xl lg:text-2xl text-orange-500 uppercase mb-0">Happy Client</p>
            </div>
            <div class="px-6 py-10 bg-white-800 text-center mb-4 rounded-3xl shadow-md border-2 border-gray-200">
              <h2 className="font-bold sm:text-2xl md:text-4xl lg:text-5xl text-orange-500">100%</h2>
              <p className="md:text-xl lg:text-2xl text-orange-500 uppercase mb-0">Satisfaction</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mb-4 sm:mt-0 order-first md:order-last h-100 flex items-center">
            <Image
              className="p-2 md:p-4 lg:p-8 object-center w-100"
              src={Static}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
