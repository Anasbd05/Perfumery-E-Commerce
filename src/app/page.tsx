import Banner from "@/components/Banner";
import BestSeller from "@/components/BestSeller";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maps from "@/components/Maps";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <BestSeller />
      <Categories />
      <Maps />
      <Footer />
    </>
  );
}
