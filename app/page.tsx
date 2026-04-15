import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Features />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
