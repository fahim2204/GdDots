import { AiOutlineSend } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";

const NewsLetter = () => {
  return (
    <div id="newsletter" className="max-w-6xl mx-auto px-5 py-12">
      <div className="grid grid-cols-2 gap-x-16">
        <div className="mb-8">
          <h3 className="text-3xl font-semibold tracking-tight uppercase mb-4">
            get our newsletter
          </h3>
          <form className="flex justify-start">
            <div className="w-96 relative">
              <input
                type="email"
                className="bg-white text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-7 text-sm sm:text-base"
                placeholder="Your Email Address"
              />
              <button
                type="button"
                className="absolute top-1/2 right-5 -translate-y-1/2"
              >
                <RiSendPlaneFill className="text-4xl text-white hover:scale-110 hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)]s rotate-45 fill-orange-500 hover:fill-orange-300 transition-all duration-300" />
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm text-justify">
            GD Dots is an graphic design company specializing in graphic design,
            motion graphics, video editing, and 3D services. We prioritize
            customer satisfaction and have been providing excellent service for
            the past 5 years.
            <br />
            We understand that in today's fast-paced and competitive market,
            having visually stunning and engaging content is crucial to standing
            out and capturing the attention of your audience. That's why we use
            the latest industry-standard software and technology to deliver
            top-quality design solutions that are both aesthetically pleasing
            and functional.
            <br />
            Whether you need a new brand identity, a promotional video, an
            animated explainer video, or a product visualization in 3D, we've
            got you covered. Our team is passionate about what we do, and we
            strive to exceed our clients' expectations with every project we
            take on.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-3xl font-semibold tracking-tight uppercase mb-4">
            send us a message
          </h3>
          <form className="flex justify-start">
            <div className="w-96 relative">
              <input
                type="text"
                className="bg-white text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-7 text-sm sm:text-base"
                placeholder="Name"
              />
              <input
                type="email"
                className="bg-white text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-7 text-sm sm:text-base"
                placeholder="Email"
              />
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button
                type="button"
                className="absolute top-1/2 right-5 -translate-y-1/2"
              >
                <RiSendPlaneFill className="text-4xl text-white hover:scale-110 hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)]s rotate-45 fill-orange-500 hover:fill-orange-300 transition-all duration-300" />
              </button>
            </div>
          </form>
          <p className="mt-6 text-sm text-justify">
            GD Dots is an graphic design company specializing in graphic design,
            motion graphics, video editing, and 3D services. We prioritize
            customer satisfaction and have been providing excellent service for
            the past 5 years.
            <br />
            We understand that in today's fast-paced and competitive market,
            having visually stunning and engaging content is crucial to standing
            out and capturing the attention of your audience. That's why we use
            the latest industry-standard software and technology to deliver
            top-quality design solutions that are both aesthetically pleasing
            and functional.
            <br />
            Whether you need a new brand identity, a promotional video, an
            animated explainer video, or a product visualization in 3D, we've
            got you covered. Our team is passionate about what we do, and we
            strive to exceed our clients' expectations with every project we
            take on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
