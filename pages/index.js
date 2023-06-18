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
     
      <Services />
      <div className="">
        <Image
          src={slider2}
          alt="banner"
          className="object-cover h-[15rem] sm:h-[35rem] md:h-[37rem] 2xl:h-[42rem]"
        />
      </div>
      <Company />
      <Portfolio />
      <Clients />
      <Testimonial />
      <NewsLetter />
      <FAQ/>
    </>
  );
}
