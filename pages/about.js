import Company from "@/components/company";
import AboutUs from "@/components/aboutUs";
import Clients from "@/components/clients";
import slider2 from "../public/assets/about-us-2.webp";
import Image from "next/image";
export default function About() {
  return (
    <>
      {/* banner */}
      <div className="bg-white relative">
        <Image
          src={slider2}
          alt="banner"
          className="object-cover h-[15rem] sm:h-[35rem] md:h-[37rem] 2xl:h-[42rem] brightness-[0.3]"
        />
      </div>
      <AboutUs />
      <Company />
      <Clients />
    </>
  );
}
