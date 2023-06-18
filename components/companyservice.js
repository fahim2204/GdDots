import React from "react";
import CountUp from "react-countup";

const CompanyService = () => {
  return (
    <section id="company" className="max-w-6xl mx-auto px-5">
      <div className="my-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 bg-gradient-to-l from-orange-400 to-orange-600 px-2 py-8 rounded-2xl text-white text-center">
          <div className="">
            <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
              <CountUp
                duration={2}
                enableScrollSpy={true}
                decimal=","
                start={20}
                end={330}
              />
              +
            </h2>
            <p className="md:text-sm lg:text-base uppercase mb-0">
              Active clients
            </p>
          </div>
          <div className="">
            <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
              <CountUp
                duration={2}
                enableScrollSpy={true}
                decimal=","
                start={10}
                end={550}
              />
              +
            </h2>
            <p className="md:text-sm lg:text-base uppercase mb-0">
              Project Done
            </p>
          </div>
          <div className="">
            <h2 className="font-semibold mb-2 text-3xl md:text-4xl lg:text-5xl">
              <CountUp
                duration={2}
                enableScrollSpy={true}
                decimal=","
                start={1}
                end={15}
              />
              +
            </h2>
            <p className="md:text-sm lg:text-base uppercase mb-0">
              Team Advisor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyService;
