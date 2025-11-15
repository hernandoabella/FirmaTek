import Image from "next/image";
import Header from "./landingPage/components/Header";
import Hero from "./landingPage/components/Hero";
import FeaturesGrid from "./landingPage/components/FeaturesGrid";
import WhoIsFor from "./landingPage/components/Whoisfor";
import Cases from "./landingPage/components/Cases";
import HowItWorks from "./landingPage/components/Howitworks";
import BenefitsGrid from "./landingPage/components/Beneficits";
import PricingSection from "./landingPage/components/Pricing";
import Security from "./landingPage/components/Security";
import Faq from "./landingPage/components/Faq";
import Footer from "./landingPage/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <FeaturesGrid />
      <WhoIsFor />
      <Cases/>
      <HowItWorks />
      <BenefitsGrid />
      <PricingSection />
      <Security />
      <Faq />
      <Footer />
    </div>
  );
}
