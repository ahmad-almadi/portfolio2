"use client";

import type { MouseEvent } from "react";
import Link from "next/link";

export default function Navbar() {
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();

    const nav = document.querySelector<HTMLElement>(".nav_fixed");
    const navOffset = nav?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 24;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  };

  return (
    <nav className="nav_fixed">
      <div
        data-w-id="396176c6-906a-9f74-c6d0-8a4663dfdea9"
        data-animation="default"
        data-collapse="small"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="nav_component w-nav"
      >
        <div className="padding-global">
          <div className="nav_container">
            <Link href="#hero" className="nav_brand w-nav-brand">
              <div className="nav_logo">
                <div className="nav_logo-custom">
                  <span className="nav_logo-mark" aria-hidden="true">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6198 1H0.246826V11.357L8.28657 6.9194L9.50026 8.66868L1.61699 13.3803L8.28657 16.8814H11.6198L25.7182 8.66868L11.6198 1Z"
                        fill="url(#billo-mark-a)"
                      />
                      <path
                        d="M8.28657 18.3093V26.5359L0.246826 21.8243V14.2732L8.28657 18.3093Z"
                        fill="url(#billo-mark-b)"
                      />
                      <path
                        d="M32 13.9156L0 33H12.5969L32 22.1087V13.9156Z"
                        fill="url(#billo-mark-c)"
                      />
                      <path
                        d="M19.8403 11.9942L28.0341 16.3511L32 13.8824V11.4596L25.7182 8.66868L19.8403 11.9942Z"
                        fill="url(#billo-mark-d)"
                      />
                      <path d="M0 22.6641V33L8.19401 27.8035L0 22.6641Z" fill="url(#billo-mark-e)" />
                      <defs>
                        <radialGradient
                          id="billo-mark-a"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(13.8574 17.2926) rotate(54.1416) scale(18.8996 21.5675)"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="#046273" />
                        </radialGradient>
                        <radialGradient
                          id="billo-mark-b"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(13.8574 17.2926) rotate(54.1416) scale(18.8996 21.5675)"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="#046273" />
                        </radialGradient>
                        <radialGradient
                          id="billo-mark-c"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(13.8574 17.2926) rotate(54.1416) scale(18.8996 21.5675)"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="#046273" />
                        </radialGradient>
                        <radialGradient
                          id="billo-mark-d"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(17.5067 20.7614) rotate(144.36) scale(19.7817 22.6597)"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="#252525" />
                        </radialGradient>
                        <radialGradient
                          id="billo-mark-e"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(17.5067 20.7614) rotate(144.36) scale(19.7817 22.6597)"
                        >
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="#252525" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="nav_logo-wordmark">Ahmad Al-Madi</span>
                </div>
              </div>
            </Link>
            <nav role="navigation" className="nav_menu w-nav-menu">
              <a href="#services" data-click="" className="nav_menu_link w-nav-link" onClick={handleSectionClick}>
                Services
              </a>
              <a href="#portfolio" data-click="" className="nav_menu_link w-nav-link" onClick={handleSectionClick}>
                Portfolio
              </a>
              <a href="#about-me" data-click="" className="nav_menu_link w-nav-link" onClick={handleSectionClick}>
                About me
              </a>
              <a href="#contact" data-click="" className="nav_menu_link w-nav-link" onClick={handleSectionClick}>
                Contact
              </a>
            </nav>
            <div className="nav_button w-nav-button">
              <div className="bar is-top" />
              <div className="bar is-middle" />
              <div className="bar is-buttom" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
