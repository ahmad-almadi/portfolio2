import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SiteShell from "@/components/SiteShell";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Portfolio | Ahmad Al-Madi",
};

export default function HomePage() {
  return (
    <>
      <Preloader />
      <SiteShell>
        <Hero />
        <Features />
        <Services />
        <TechStack />
        <Projects />
        <Testimonials />
        <AboutSection />
        <CallToAction />
        <Footer />
      </SiteShell>
    </>
  );
}
