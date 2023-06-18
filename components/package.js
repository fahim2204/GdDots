import React from "react";

const ourWorkList = [
  {
    title: "Basic",
    package: "1 Month package",
    packageTitle: "8 image design",
    packageDescription: "2 animation design",
    amount: "5000",
  },
  {
    title: "Standard",
    package: "1 Month package",
    packageTitle: "15 image design",
    packageDescription: "3 animation design",
    amount: "10000",
  },
  {
    title: "Premium",
    package: "1 Month package",
    packageTitle: "30 image design",
    packageDescription: "4 animation design",
    amount: "15000",
  },
  // Add more items as needed
];

const Package = () => {
  return (
    <div id="package" className="max-w-6xl mx-auto px-5">
      <div className="py-8">
        {/* <div className="flex flex-col items-center">
          <h3 className="text-4xl sm:text-5xl font-semibold text-orange-600 text-center uppercase font-poppin">
            Our Portfolio
          </h3>
          <h6 className="mb-10 text-slate-600">
            A creative agency that believes in the power of creative ideas and great work.
          </h6>
        </div> */}
        <div className="justify-center text-center items-center mx-auto gap-4 md:gap-8 grid sm:grid-cols-2 md:grid-cols-3">
          {ourWorkList.map((work, index) => {
            return (
              <div
                key={index}
                className="h-full text-center rounded-xl overflow-hidden drop-shadow-md border bg-white border-gray-200 cursor-pointer hover:scale-105 transition ease-in duration-500"
              >
                <div className="p-4">
                  <h4 className="text-xl md:text-2xl text-orange-600 font-bold">
                    {work.title}
                  </h4>
                  <p className="text-black font-semibold mt-2">
                    {work.package}
                  </p>
                  <p className="text-black font-semibold mt-2">
                    {work.packageTitle}
                  </p>
                  <p className="text-black font-semibold ">
                    {work.packageDescription}
                  </p>
                  <p className="mt-2">
                    <span className="text-white font-semibold bg-gradient-to-l from-orange-600 to-orange-400 px-5 py-1 rounded">
                      {work.amount}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Package;
