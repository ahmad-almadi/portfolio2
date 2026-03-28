import type { Metadata } from "next";
import LegacyScripts from "@/components/LegacyScripts";
import "@/styles/globals.css";

const siteTitle = "Ahmad Al-Madi | Full Stack Engineer & Web Developer";
const siteDescription =
  "Portfolio of Ahmad Al-Madi, a full stack engineer and web developer building scalable, high-performance websites and digital products.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Ahmad Al-Madi Portfolio",
  description: siteDescription,
  url: "/",
  inLanguage: "en",
  about: {
    "@type": "Person",
    name: "Ahmad Al-Madi",
    description: siteDescription,
    jobTitle: "Full Stack Engineer & Web Developer",
  },
};

const landingRefreshGuard = `
(() => {
  try {
    if (window.location.pathname !== "/") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    document.documentElement.classList.add("landing-scroll-lock");

    const resetToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      if (document.body) {
        document.body.classList.add("landing-scroll-lock");
        document.body.scrollTop = 0;
      }
    };

    resetToTop();
    window.addEventListener("pageshow", resetToTop);
    document.addEventListener("DOMContentLoaded", resetToTop, { once: true });
  } catch (error) {
    console.error("landing refresh guard failed", error);
  }
})();
`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f7bccfd55ea4adf458a5d1_Favicon.png",
    apple: "https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f7bcd54923c93323d8a533_Webclip.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className="w-mod-js"
      lang="en"
      data-wf-domain="billodesign.webflow.io"
      data-wf-page="68f39e1bb125f14f6cb2246e"
      data-wf-site="68f3884d9e35f473a885d321"
      data-wf-status="1"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wubflow-shield.nocodexport.dev" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://d3e54v103j8qbb.cloudfront.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Yellowtail&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script dangerouslySetInnerHTML={{ __html: landingRefreshGuard }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <LegacyScripts />
      </body>
    </html>
  );
}
