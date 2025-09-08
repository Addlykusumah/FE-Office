import BenefitSection from "@/components/BenefitsSection";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import CitiesSection from "@/features/cities/sections/CitiesSection";
import Freshspace from "@/features/offices/sections/FreshSpaceSection";



export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <CitiesSection />
      <BenefitSection />
      <Freshspace />
    </>
  );
}


