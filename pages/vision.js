import Company from "@/components/company";
import Image from "next/image";
import slider2 from "../public/assets/vision.webp";
import { RiSendPlaneFill } from "react-icons/ri";
export default function Vision() {
  return (
    <>
      <div className="bg-white relative">
        <Image
          src={slider2}
          alt="banner"
          className="object-cover h-[15rem] sm:h-[50rem] brightness-[0.3]"
        />
      </div>
      <section className="max-w-6xl mx-auto px-5">
        <div className="my-12  item-center">
          <h1 className="font-semibold text-xl md:text-4xl text-center mb-3">
            Our Vision
          </h1>
          <div className="rounded-lg overflow-hidden mb-4 sm:mt-0 order-first md:order-last h-100 flex items-center justify-center">
            <Image
              className="p-2 md:p-4 lg:p-8 object-center w-100"
              src="./img/Our-Vision.webp"
              height={350}
              width={530}
              alt="stats"
            />
          </div>
          <div className="text-slate-800">
            <p className="m-0">
              Welcome to our company! We are a team of skilled designers and
              animators specialisina in various services, in- cluding Graphic
              Desian, Motion graphics, Video Editing, Clipping Path, IJI/UX
              Design, and 3D Animation. With years ot experience in the industry
              and a passion for creativity, we are committed to delivering
              top-notch results for our clients.
              <br />
              Our Graphic Design services include logo desian, branding, print
              design, and marketing materials. We have a team of talented
              araphic desianers who are proficient in various design software,
              including Adobe Creative Suite. No matter your design needs, we
              have the skills and experience to bring your vision to life.{" "}
              <br /> Our Motion Graphics team specialises in creating dynamic
              and eye-catching animations for a wide range of media, including
              commercials, music videos and corporate videos. We use the latest
              software, such as After Ef- fects and Cinema 4D, to bring your
              ideas to life with stunning visual effects.
              <br />
              In addition to our design services, we also offer professional
              Video Editing services. Our editors are experts at piecing
              together footage, adding transitions and effects, and creating a
              cohesive final product. Whether vou need a short promotional video
              or a feature-length film, we have the tools and expertise to bring
              your projto the next level.
            </p>
          </div>
        </div>
      </section>
      {/* company */}
      <Company />
      {/* send message */}
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <h3 className=" text-xl md:text-3xl font-bold text-center tracking-tight uppercase mb-4">
            send us a message
          </h3>
          <form className="flex flex-col">
            <input
              type="text"
              className="bg-white text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg w-full py-3 px-7 text-sm sm:text-base mb-4"
              placeholder="Name"
            />
            <input
              type="email"
              className="bg-white text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-7 text-sm sm:text-base mb-4"
              placeholder="Email"
            />
            <textarea
              className="bg-white text-start border shadow-[0_2px_10px_1px_fa4562] border-gray-300 text-gray-900 rounded-lg w-full py-3 px-7 text-sm sm:text-base mb-4"
              name="body"
              id="body"
              cols="10"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button
              type="button"
              className="rounded-full px-6 py-2 w-32 bg-orange-500 hover:scale-105 hover:shadow-[0_2px_10px_1px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="text-white mr-2">Send</div>
                <RiSendPlaneFill className="text-2xl text-white" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
