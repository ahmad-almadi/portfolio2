"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaNodeJs, FaReact, FaDatabase, FaGithub } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiGsap } from "react-icons/si";

const techIcons = [
  { Icon: SiGsap, angle: -90 },
  { Icon: FaDatabase, angle: -45 },
  { Icon: SiPrisma, angle: 0 },
  { Icon: SiTailwindcss, angle: 45 },
  { Icon: SiNextdotjs, angle: 90 },
  { Icon: FaReact, angle: 135 },
  { Icon: FaGithub, angle: 180 },
  { Icon: FaNodeJs, angle: 225 }
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      }
    });

    tl.to(".orbiting-tree-layer", {
      rotation: 360,
      ease: "none",
      duration: 1
    }, 0);

    tl.to(".orbiting-icon-node", {
      rotation: -360,
      ease: "none",
      duration: 1
    }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="section_home-tech-stack" ref={containerRef}>
      <style>{`
        .orbit-system {
          position: relative;
          width: 500px;
          height: 500px;
          margin: 60px auto;
          max-width: 90vw;
          max-height: 90vw;
        }
        @media (max-width: 768px) {
          .orbit-system {
            width: 300px;
            height: 300px;
            margin: 30px auto;
          }
        }
        .orbiting-tree-layer {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          transform-origin: center center;
        }
        .orbiting-icon-wrapper {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          margin-left: -30px;
          margin-top: -30px;
          border: 1px solid rgba(0, 175, 205, 0.4);
          background-color: #040a0f;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 175, 205, 0.3);
          pointer-events: auto;
        }
        .orbiting-icon-node {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: 28px;
          color: white;
          transform-origin: center center;
        }
        @media (max-width: 768px) {
          .orbiting-icon-wrapper {
            width: 40px;
            height: 40px;
            margin-left: -20px;
            margin-top: -20px;
            border-radius: 8px;
          }
          .orbiting-icon-node {
            font-size: 20px;
          }
        }
        .orbiting-center-box {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 140px;
          height: 140px;
          margin-left: -70px;
          margin-top: -70px;
          border: 1px solid rgba(0, 175, 205, 0.6);
          background-color: #040a0f;
          box-shadow: 0 0 30px rgba(0, 175, 205, 0.4);
          pointer-events: auto;
          z-index: 10;
        }
        .orbiting-center-box .icon-code {
          font-family: monospace;
          font-weight: bold;
          font-size: 40px;
          color: white;
          line-height: 1;
        }
        .orbiting-center-box .icon-text {
          font-family: sans-serif;
          font-weight: 700;
          font-size: 10px;
          color: white;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 5px;
          text-align: center;
        }
        @media (max-width: 768px) {
          .orbiting-center-box {
            width: 90px;
            height: 90px;
            margin-left: -45px;
            margin-top: -45px;
          }
          .orbiting-center-box .icon-code {
            font-size: 28px;
          }
          .orbiting-center-box .icon-text {
            font-size: 6px;
            letter-spacing: 1px;
            margin-top: 2px;
          }
        }
        .orbiting-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 400px;
          height: 400px;
          margin-left: -200px;
          margin-top: -200px;
          background-color: rgba(0, 175, 205, 0.15);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .orbiting-glow {
            width: 250px;
            height: 250px;
            margin-left: -125px;
            margin-top: -125px;
          }
        }
      `}</style>

      <div className="padding-global" style={{ overflow: 'hidden' }}>
        <div className="container-large">
          <div className="padding-section-large" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
            <div className="content_wrapper is-center" style={{ marginBottom: '4rem' }}>
              <div className="heading_wrap-small-width">
                <div>
                  <h2 data-w-id="cbed7ec7-5ec6-8df2-f0e5-6db28dabdbc7">
                    Tech Stack
                  </h2>
                  <h3>Technologies &amp; Tools I Work With</h3>
                </div>
              </div>
            </div>

            <div className="orbit-system">

              <div className="orbiting-glow" />

              <svg className="orbiting-tree-layer" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(400, 400)">
                  {techIcons.map((item, i) => (
                    <path
                      key={i}
                      transform={`rotate(${item.angle})`}
                      d="M 70 0 C 150 60, 240 -60, 320 0"
                      stroke="#00AFCD"
                      strokeWidth="2"
                      fill="none"
                      style={{ opacity: 0.6 }}
                    />
                  ))}
                </g>
              </svg>

              <div className="orbiting-tree-layer">
                {techIcons.map((item, i) => {
                  const rad = (item.angle * Math.PI) / 180;
                  const x = 50 + 40 * Math.cos(rad);
                  const y = 50 + 40 * Math.sin(rad);

                  return (
                    <div
                      key={i}
                      className="orbiting-icon-wrapper"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="orbiting-icon-node">
                        <item.Icon />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="orbiting-center-box">
                <div className="icon-code">&lt;/&gt;</div>
                <div className="icon-text">
                  Full Stack
                  <br />
                  Developer
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
