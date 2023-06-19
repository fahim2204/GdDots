import Company from "@/components/company";
import Services from "@/components/services";
import Banner from "@/components/Banner";
import Portfolio from "@/components/portfolio";
import Clients from "@/components/clients";
import Testimonial from "@/components/Testimonial";
import NewsLetter from "@/components/NewsLetter";
import FAQ from "@/components/faq";
import Image from "next/image";
import slider2 from "../public/assets/Website-Home-page.webp";
export default function Home() {
  return (
    <>
      <Banner />
      <div className="max-w-6xl mx-auto px-5 mt-10">
        <h1 className="text-2xl md:text-4xl font-semibold  text-center">
          We connect brands with users to drive <br></br>engagement and growth
          by designing <br></br> elegant, user-centered and <br></br>
          purpose-built experiences.
        </h1>
        <p className="border-t-4 border-gray-400 mt-4 w-28 mx-auto "></p>
        <p className="text-center mt-4 mb-4">ArtVersion is an independent creative agency and design  consultancy comprised of web design,<br></br> UX/UI design and branding experts - an interdisciplinary design team working with brands worldwide.</p>
      </div>
     

      <Services />
      <section className="">
        <div className="">
          <Image
            src={slider2}
            alt="banner"
            className="object-cover h-[15rem] sm:h-[35rem] md:h-[37rem] 2xl:h-[42rem]"
          />
        </div>
      </section>

      <Company />
      <Portfolio />
      <Clients />
      <Testimonial />
      <NewsLetter />
      <FAQ />
    </>
  );
}
