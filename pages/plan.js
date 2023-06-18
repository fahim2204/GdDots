import Company from "@/components/companyservice";
import Package from "@/components/package";
import Image from "next/image";
import slider2 from "../public/assets/slide2.jpg";
export default function Plan() {
  return (
    <>
      <div className="bg-white relative">
        <Image
          src={slider2}
          alt="banner"
          className="object-cover h-[30rem] sm:h-[35rem] md:h-[37rem] 2xl:h-[42rem]"
        />
        <div class="absolute bottom-0 w-full translate-y-4 md:translate-y-7 z-30">
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
            Graphics Design
          </div>
        </div>
      </div>
      {/* service  */}
      <section className="max-w-6xl mx-auto px-5">
        <div className="my-12 grid md:grid-cols-2 item-center">
          <div className="rounded-lg overflow-hidden mb-4 sm:mt-0 order-last md:order-first h-100 flex items-center justify-center">
            <Image
              className="p-2 md:p-4 lg:p-8 object-center w-100"
              src="./img/Graphic-Design-services.webp"
              height={450}
              width={630}
              alt="stats"
            />
          </div>
          <div className="text-slate-800 text-left">
            <h1 className="font-bold text-xl mb-3">
              <span className="border-b-[3px]">
                Graphic Design in Bangladesh
              </span>
            </h1>
            <p className="m-0">
              Welcome to our company! We are a team of skilled designers and
              animators specializing in various services, including Graphic
              Design, Motion graphics, Video Editing, Clipping Path, UI/UX
              Design, and 3D Animation. With years of experience in the industry
              and a passion for creativity, we are committed to delivering
              top-notch results for our clients.
              <br />
              Our Graphic Design services include logo design, branding, print
              design, and marketing materials. We have a team of talented
              graphic designers who are proficient in various design software,
              including Adobe Creative Suite. No matter your design needs, we
              have the skills and experience to bring your vision to life.
              <br />
              Our Motion Graphics team specializes in creating dynamic and
              eye-catching animations for a wide range of media, including
              commercials, music videos, and corporate videos. We use the latest
              software, such as After Effects and Cinema 4D, to bring your ideas
              to life with stunning visual effects.
              <br />
              In addition to our design services, we also offer professional
              Video Editing services. Our editors are experts at piecing
              together footage, adding transitions and effects, and creating a
              cohesive final product. Whether you need a short promotional video
              or a feature-length film, we have the tools and expertise to bring
              your project to the next level.
            </p>
          </div>
        </div>
      </section>
    {/* package */}
      <Package/>
      
    </>
  );
}
