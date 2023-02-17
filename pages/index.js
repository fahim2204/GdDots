import Company from "./company";
import Services from "./services";
import Banner from "@/components/Banner";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Testimonial from "@/components/Testimonial";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
    <>
      <Banner />
      <Company />
      <Services />
      <Work />
      <Clients />
      <Testimonial />
      <NewsLetter />
    </>
  );
}
