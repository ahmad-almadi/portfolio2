import type { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";
import ContactModal from "@/components/ContactModal";
import Navbar from "@/components/Navbar";
import OrbScene from "@/components/OrbScene";
import SoundToggle from "@/components/SoundToggle";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <div id="startSound" className="page-wrapper" data-activate-sound="" data-bgsound="">
        <ContactModal />
        <Navbar />
        <OrbScene />
        <SoundToggle />
        <main className="main-wrapper">
          {children}
        </main>
      </div>
      <Chatbot />
    </>
  );
}
