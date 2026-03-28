import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact | Ahmad Al-Madi",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <CallToAction />
      <Footer />
    </SiteShell>
  );
}
