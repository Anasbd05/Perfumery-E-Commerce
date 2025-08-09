import Banner from "@/components/Banner";
import BestSeller from "@/components/BestSeller";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <BestSeller />
      <Categories />
      <Contact />
      <Footer />
    </>
  );
}
