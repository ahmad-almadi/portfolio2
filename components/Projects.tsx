const techSets = {
  full: [
    { src: "/icons/react.svg", alt: "React logo" },
    { src: "/icons/next.svg", alt: "Next logo" },
    { src: "/icons/typescript.svg", alt: "TypeScript logo" },
  ],
} as const;

const projects = [
  {
    image: "/images/doctor-proj.webp",
    alt: "OrbitAI homepage with dashboard interface and dark space background.",
    visitHref: "https://doctor-fral.vercel.app/",
    title: "IT System Administrator Portfolio",
    description:
      "A clean portfolio website built to present an IT specialist with a polished digital presence.",
    spacer: "spacer-medium hide-mobile-landscape",
    tech: techSets.full,
  },
  {
    image: "/images/beauty-lounge-proj.webp",
    alt: "Luxury eyelash extensions website homepage.",
    visitHref: "https://beatuty-lounge-production.up.railway.app/",
    title: "Elegantnast",
    description:
      "A multilingual beauty website designed to reflect a refined and premium brand identity.",
    spacer: "spacer-medium hide-mobile-landscape",
    tech: techSets.full,
  },
  {
    image: "/images/flow-proj.webp",
    alt: "Service website for Tyrol craftspeople.",
    visitHref: "https://flowofpurity.com/",
    title: "Handwerkerseiten.at",
    description:
      "A professional service website created to help local craftsmen showcase their work and attract clients.",
    spacer: "spacer-medium hide-mobile-landscape",
    tech: techSets.full,
  },
  {
    image: "/images/dental.webp",
    alt: "Construction landing page with home renovation messaging.",
    visitHref: "https://dental-one-rho.vercel.app/",
    title: "Timms-Team",
    description:
      "A modern dental clinic website designed to provide patients with a seamless and informative experience. The platform showcases services, enables easy appointment booking.",
    spacer: "spacer-medium hide-mobile-landscape",
    tech: techSets.full,
  },
  {
    image: "/images/e-commerce-proj.webp",
    alt: "Macrostate landing page screenshot.",
    visitHref: "https://glamora.up.railway.app/",
    title: "Macrostate Landing Page",
    description:
      "A modern e-commerce platform designed to deliver a seamless shopping experience. The website features intuitive navigation, secure checkout, and optimized performance to enhance user engagement and conversions.",
    spacer: "spacer-medium",
    tech: techSets.full,
  },
] as const;

function VisitArrow() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z"
        fill="currentColor"
      />
      <path
        d="M0.202737 14.6906L14.412 5.4243L3.76911 2.41348L3.88421 0.916792L17.0611 4.64448L15.1588 18.2057L13.7428 17.7076L15.2793 6.75422L1.07001 16.0205L0.202737 14.6906Z"
        fill="currentColor"
        fillOpacity="0.6"
      />
    </svg>
  );
}

function SliderArrow({ left = false }: { left?: boolean }) {
  return left ? (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section_home-project">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div id="portfolio" className="content_wrapper">
              <div className="heading_wrap-small-width">
                <div>
                  <h3>Featured Projects</h3>
                </div>
                <p>
                  Real-world projects built with performance
                  scalability
                  <br />
                  and clean architecture in mind.
                </p>
              </div>

              <div className="shadow_title shadow_title-portfolio">PORTFOLIO</div>

              <div className="projects_wrap overflow-hidden">
                <div
                  className="projects_slider w-slider"
                  data-delay="4000"
                  data-animation="slide"
                  data-autoplay="false"
                  data-easing="ease"
                  data-hide-arrows="false"
                  data-disable-swipe="false"
                  data-autoplay-limit="0"
                  data-nav-spacing="4"
                  data-duration="500"
                  data-infinite="true"
                >
                  <div className="projects_mask w-slider-mask">
                    {projects.map((project, index) => (
                      <div className="project_slide w-slide" key={index}>
                        <div className="project_slide-card">
                          <div className="slider_project-content">
                            <div className="project_thumbnail-wrap">
                              <img
                                src={project.image}
                                alt={project.alt}
                                className="project_thumbnail"
                              />
                            </div>

                            <div className="slide_card-content">
                              <a
                                href={project.visitHref}
                                target="_blank"
                                rel="noreferrer"
                                className="visit_roject-link w-inline-block"
                              >
                                <div>Visit Site</div>
                                <div className="link_arrow">
                                  <VisitArrow />
                                </div>
                              </a>

                              <h4 className="slider_project-title">{project.title}</h4>
                              <p className="slider_project-description">{project.description}</p>

                              <div className="tech_used">
                                {project.tech.map((tech) => (
                                  <img key={`${index}-${tech.src}`} src={tech.src} alt={tech.alt} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="arrow is-left w-slider-arrow-left">
                    <div className="project_arrow-icon w-embed">
                      <SliderArrow left />
                    </div>
                  </div>

                  <div className="arrow w-slider-arrow-right">
                    <div className="project_arrow-icon w-embed">
                      <SliderArrow />
                    </div>
                  </div>

                  <div className="slide_nav w-slider-nav" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
