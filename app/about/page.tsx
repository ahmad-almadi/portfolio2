import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SiteShell from "@/components/SiteShell";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About | Ahmad Al-Madi",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </SiteShell>
  );
}
