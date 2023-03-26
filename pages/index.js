import Company from "@/components/company";
import AboutUs from "@/components/aboutUs";
import Services from "@/components/services";
import Banner from "@/components/Banner";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      {/* <Company /> */}
      <Services />
      <Work />
      <Clients />
      <Testimonial />
      <NewsLetter />
    </>
  );
}
