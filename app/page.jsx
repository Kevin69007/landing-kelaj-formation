import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Formations from "@/components/sections/Formations";
import SocialProof from "@/components/sections/SocialProof";
import Expertise from "@/components/sections/Expertise";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Formations />
        <SocialProof />
        <Expertise />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
