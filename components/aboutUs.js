import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div id="company" className="">
      <section className="max-w-6xl mx-auto px-5">
        <div className="my-12 grid md:grid-cols-2 item-center">
          <div className="text-slate-800">
            <h1 className="font-semibold text-xl mb-3">
              <span className="border-b-[3px]">ABOUT </span>US
            </h1>
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

          <div className="rounded-lg overflow-hidden mb-4 sm:mt-0 order-first md:order-last h-100 flex items-center justify-center">
            <Image
              className="p-2 md:p-4 lg:p-8 object-center w-100"
              src="./img/about-us.webp"
              height={450}
              width={630}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
