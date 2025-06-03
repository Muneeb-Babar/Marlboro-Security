import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PromotionBanner from "@/components/PromotionBanner";
import OurServices from "./OurService/page";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <OurServices/>
    <PromotionBanner/>
    <Footer/>
    </>
  );
}
