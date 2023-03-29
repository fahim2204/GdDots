import Company from "@/components/company";
import AboutUs from "@/components/aboutUs";
import Services from "@/components/services";
import Banner from "@/components/Banner";
import Portfolio from "@/components/portfolio";
import Clients from "@/components/clients";
import Testimonial from "@/components/Testimonial";
import NewsLetter from "@/components/NewsLetter";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Services />
      <Company />
      <Portfolio />
      <Clients />
      <Testimonial />
      <NewsLetter />
      <FAQ/>
    </>
  );
}
