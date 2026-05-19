import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Formations from "@/components/sections/Formations";
import SocialProof from "@/components/sections/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Formations />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
