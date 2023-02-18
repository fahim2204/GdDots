import Image from "next/image";
import React from "react";
import Static from "../public/assets/1.jpg";
import CountUp from "react-countup";

const Company = () => {
  return (
    <div id="company" className="">
      <section className="max-w-6xl mx-auto px-5">
        <div className="my-12 grid md:grid-cols-2 item-center">
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 lg:gap-8 text-slate-800">
            <div class="px-6 py-10 bg-white-800 hover:bg-gradient-to-l hover:from-orange-600 hover:to-orange-400 hover:text-white flex flex-col justify-center text-center rounded-xl shadow-md border cursor-default select-none hover:scale-110 transition-all duration-300">
              <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
                <CountUp duration={2} enableScrollSpy={true} decimal="," start={3900} end={3991} />+
              </h2>
              <p className="md:text-xl lg:text-2xl uppercase mb-0">
                Design <br /> completed
              </p>
            </div>
            <div class="px-6 py-10 bg-white-800 hover:bg-gradient-to-l hover:from-orange-600 hover:to-orange-400 hover:text-white flex flex-col justify-center text-center rounded-xl shadow-md border cursor-default select-none hover:scale-110 transition-all duration-300">
              <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
                <CountUp duration={2} enableScrollSpy={true} decimal="," start={10} end={40} />+
              </h2>
              <p className="md:text-xl lg:text-2xl uppercase mb-0">Brand Services</p>
            </div>
            <div class="px-6 py-10 bg-white-800 hover:bg-gradient-to-l hover:from-orange-600 hover:to-orange-400 hover:text-white flex flex-col justify-center text-center rounded-xl shadow-md border cursor-default select-none hover:scale-110 transition-all duration-300">
              <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
                <CountUp duration={2} enableScrollSpy={true} decimal="," start={50} end={100} />+
              </h2>
              <p className="md:text-xl lg:text-2xl uppercase mb-0">Happy Client</p>
            </div>
            <div class="px-6 py-10 bg-white-800 hover:bg-gradient-to-l hover:from-orange-600 hover:to-orange-400 hover:text-white flex flex-col justify-center text-center rounded-xl shadow-md border cursor-default select-none hover:scale-110 transition-all duration-300">
              <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
                <CountUp duration={2} enableScrollSpy={true} decimal="," start={95} end={100} />%
              </h2>
              <p className="md:text-xl lg:text-2xl uppercase mb-0">Satisfaction</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden mb-4 sm:mt-0 order-first md:order-last h-100 flex items-center">
            <Image className="p-2 md:p-4 lg:p-8 object-center w-100" src={Static} alt="stats" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
