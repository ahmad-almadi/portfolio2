import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SiteShell from "@/components/SiteShell";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Services | Ahmad Al-Madi",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <Services />
      <TechStack />
      <Projects />
      <CallToAction />
      <Footer />
    </SiteShell>
  );
}
