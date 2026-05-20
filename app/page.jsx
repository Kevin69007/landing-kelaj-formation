import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Formations from "@/components/sections/Formations";
import Methodologie from "@/components/sections/Methodologie";
import SocialProof from "@/components/sections/SocialProof";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Formations />
        <Methodologie />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
