"use client";

import { useEffect, useLayoutEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const resetScroll = () => {
      window.scrollTo(0, 0);
      html.scrollTop = 0;
      body.scrollTop = 0;
    };

    const lockScroll = () => {
      html.classList.add("landing-scroll-lock");
      body.classList.add("landing-scroll-lock");
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    };

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    resetScroll();
    lockScroll();

    const raf1 = window.requestAnimationFrame(resetScroll);
    const raf2 = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(resetScroll);
    });

    const onPageShow = () => resetScroll();
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  useEffect(() => {
    const billoWindow = window as Window & {
      __billoHeroSequenceStarted?: boolean;
      __billoHeroTypingCompleted?: boolean;
      __billoLenis?: {
        start: () => void;
      };
      ScrollTrigger?: {
        refresh: () => void;
      };
    };

    const scrollToHeroStart = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const forceUnlockScroll = () => {
      document.documentElement.classList.remove("landing-scroll-lock");
      document.documentElement.classList.remove("lenis-stopped");
      document.body.classList.remove("landing-scroll-lock");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("overflow");
      billoWindow.__billoLenis?.start();
    };

    const unlockScroll = () => {
      forceUnlockScroll();
      window.dispatchEvent(new CustomEvent("billo:hero-scroll-unlock"));
      window.setTimeout(forceUnlockScroll, 80);
      window.setTimeout(forceUnlockScroll, 240);
    };

    const finishHeroSequence = () => {
      if (billoWindow.__billoHeroTypingCompleted) {
        unlockScroll();
        return;
      }

      billoWindow.__billoHeroTypingCompleted = true;
      document.body.classList.add("hero-ready");
      scrollToHeroStart();
      unlockScroll();
      billoWindow.ScrollTrigger?.refresh();
    };

    const enforceTopWhileLocked = () => {
      if (!billoWindow.__billoHeroTypingCompleted) {
        scrollToHeroStart();
      }
    };

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    document.body.classList.remove("hero-ready");
    billoWindow.__billoHeroSequenceStarted = false;
    billoWindow.__billoHeroTypingCompleted = false;
    scrollToHeroStart();

    window.addEventListener("billo:hero-typing-complete", finishHeroSequence);
    window.addEventListener("scroll", enforceTopWhileLocked, { passive: true });

    const duration = 2400;
    let heroFallbackTimeout: number | undefined;
    let animationFrame = 0;
    let startedAt = 0;

    const animateProgress = (timestamp: number) => {
      if (!startedAt) {
        startedAt = timestamp;
      }

      const elapsed = timestamp - startedAt;
      const ratio = Math.min(elapsed / duration, 1);
      const easedRatio = 1 - Math.pow(1 - ratio, 1.25);

      setProgress(easedRatio * 100);

      if (ratio < 1) {
        animationFrame = window.requestAnimationFrame(animateProgress);
        return;
      }

      window.setTimeout(() => {
        scrollToHeroStart();
        billoWindow.__billoHeroSequenceStarted = true;
        setIsComplete(true);

        heroFallbackTimeout = window.setTimeout(() => {
          finishHeroSequence();
        }, 4500);

        window.setTimeout(() => {
          window.dispatchEvent(new CustomEvent("billo:hero-ready"));
        }, 60);
      }, 280);
    };

    animationFrame = window.requestAnimationFrame(animateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("billo:hero-typing-complete", finishHeroSequence);
      window.removeEventListener("scroll", enforceTopWhileLocked);
      if (heroFallbackTimeout) {
        window.clearTimeout(heroFallbackTimeout);
      }
    };
  }, []);

  if (isComplete) {
    return null;
  }

  const clampedProgress = Math.min(progress, 100);
  const progressScale = clampedProgress / 100;

  return (
    <div
      className="c-preloader"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.85rem",
            padding: "1.5rem 1.75rem",
            width: "100%",
            maxWidth: "20rem",
            transform: "translateY(-1.2rem)",
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f8a994f799d49c25c80c24_Recording2025-10-22105057-ezgif.com-video-to-gif-converter.gif"
            loading="eager"
            alt="Black glossy circular icon with two vertical light blue bars in the center."
            style={{
              width: "9.2rem",
              height: "9.2rem",
              objectFit: "contain",
              display: "block",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.55rem",
              width: "auto",
              marginTop: "0.08rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.55rem",
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/68f3884d9e35f473a885d321/68f7bccfd55ea4adf458a5d1_Favicon.avif"
                loading="eager"
                alt="Blue and black favicon mark."
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  flexShrink: 0,
                  display: "block",
                }}
              />
              <div
                style={{
                  color: "#fff",
                  fontFamily: "IBM Plex Mono, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.34rem",
                  whiteSpace: "nowrap",
                  lineHeight: 1,
                }}
              >
                WELCOME
              </div>
            </div>
            <div
              style={{
                width: "15rem",
                maxWidth: "72vw",
                height: "0.2rem",
                borderRadius: "999px",
                backgroundColor: "#272727",
                overflow: "hidden",
                marginTop: "0.05rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "999px",
                  backgroundColor: "#00c7ea",
                  transform: `scaleX(${progressScale})`,
                  transformOrigin: "left center",
                  willChange: "transform",
                  boxShadow: "0 0 8px rgba(0, 199, 234, 0.45)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
