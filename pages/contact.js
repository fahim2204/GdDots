import Company from "@/components/company";
import Image from "next/image";
import slider2 from "../public/assets/Contact-1.webp";
import { RiSendPlaneFill } from "react-icons/ri";
export default function Contact() {
  return (
    <>
      {/* banner */}
      <div className="bg-white relative">
        <Image
          src={slider2}
          alt="banner"
          className="object-cover h-[30rem] sm:h-[35rem] md:h-[37rem] 2xl:h-[42rem]"
        />
        {/* <div class="absolute bottom-0 w-full translate-y-4 md:translate-y-7 z-30">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 300"
          >
            <path
              d="M1440,320h-48c-48,0-144,0-240,0s-192,0-288,0s-192,0-288,0s-192,0-288,0s-192,0-240,0H0l0-128l48-32
	        c48-32,144-96,240-112s192,16,288,58.7C672,149,768,203,864,224s192,11,288-32s192-117,240-154.7L1440,0V320z"
              fill="#e2e6f2"
            />
          </svg>
        </div>
        <div className="absolute w-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:-translate-y-20 z-30">
          <div className="px-3 text-4xl md:text-6xl lg:text-7xl text-white font-semibold text-center">
            contact us
          </div>
        </div> */}
      </div>
      {/* contact form */}
      <section className="max-w-6xl mx-auto px-5 mb-5">
        <div className="my-12  item-center">
          <div className="rounded-lg overflow-hidden mb-4 sm:mt-0 order-first md:order-last h-100 flex items-center justify-center">
            <Image
              className="p-2 md:p-4 lg:p-8 object-center w-100"
              src="./img/Contact.webp"
              height={350}
              width={530}
              alt="stats"
            />
          </div>
          <div className="text-slate-800">
            <h1 className="font-semibold text-xl md:text-3xl text-center mb-3">
              Have some question?
            </h1>
            <p className="m-0 text-center">
              Thank you for your interest in our service. Please fill out the
              below or e-mail us at tarekrahim100@gmail.com <br></br> and we
              will get back to youpromptly regarding your request.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-10 pb-2">
          <div className="mb-8">
            <h3 className=" text-xl md:text-3xl font-bold text-center tracking-tight uppercase mb-8">
              Drop Us a line
            </h3>
            <form className="flex flex-col items-center">
              <input
                type="text"
                className="bg-gray-100 text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg w-full py-3 px-7 text-sm sm:text-base mb-4"
                placeholder="First Name"
              />
              <input
                type="text"
                className="bg-gray-100 text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg w-full py-3 px-7 text-sm sm:text-base mb-4"
                placeholder="Last Name"
              />
              <input
                type="number"
                className="bg-gray-100 text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg w-full py-3 px-7 text-sm sm:text-base mb-4"
                placeholder="Phone"
              />
              <input
                type="email"
                className="bg-gray-100 text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-7 text-sm sm:text-base mb-4"
                placeholder="Email"
              />
              <textarea
                className="bg-gray-100 text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg w-full py-3 px-7 text-sm sm:text-base mb-8"
                name="body"
                id="body"
                cols="10"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button
                type="button"
                className="rounded-full px-12 py-3  bg-orange-500 hover:scale-105 hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                <div className="flex items-center justify-center">
                  <div className="text-white mr-2">Send Message</div>
                  <RiSendPlaneFill className="text-2xl text-white" />
                </div>
              </button>
            </form>
          </div>
        </div>
        {/* address */}
        <div className="text-slate-800 mt-16 mb-10">
          <div className="text-center mb-5">
            <h1 className="font-semibold text-xl md:text-3xl border-b-2 border-gray-400 inline-block">
              Get in touch
            </h1>
          </div>

          <p className=" text-center mb-8">
            We have worldclass, flexible support via live chat email and
            offline.we guarantee that you'll be <br></br> able to have any issue
            resolve within 24 hours.
          </p>
          <p className=" text-center">
            Address: House 40, Road 10, Block L, South Banasree, Dhaka-1219,
            Bangladesh
          </p>
          <p className=" text-center mb-4">
            Phone: +880 13012-53885, Email: tarekrahim100@gmail.com
          </p>
        </div>

        {/* location */}
        <div className="mb-8 mt-10">
          <div className="text-center mb-3">
            <h1 className="font-semibold text-xl md:text-3xl inline-block">
              Location
            </h1>
          </div>
          <div id="embed-ded-map-canvas" class="h-full w-full">
            <div class="border-t-4 border-black">
              <h2 class="bg-black text-white p-4">GD Dots Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.658834421681!2d90.44092187326483!3d23.759542478664123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72340dfa817%3A0x801237aad9014a74!2sGD%20Dots!5e0!3m2!1sbn!2sbd!4v1686996888785!5m2!1sbn!2sbd"
                width="100%"
                height="450"
                class="border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* newslwtter */}
        <div className="mb-12 mt-10">
          <div className="text-center mb-5">
            <h1 className="font-semibold text-xl md:text-3xl">
              Drop your email address
            </h1>
            <span>and recieve 25% discount on first project</span>
          </div>
          <form className="flex justify-center">
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
                <RiSendPlaneFill className="text-3xl text-white hover:scale-110 hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)]s rotate-45 fill-orange-500 hover:fill-orange-300 transition-all duration-300" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
