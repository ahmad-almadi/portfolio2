type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

// const cardBackdrop =
//   "https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/68f4858aac250343d662c890_2c81f5cced6abafded484e934f41324a_Ellipse%204.avif";

const services: ServiceCard[] = [
  {
    id: "82b43a68-3da9-2389-02ed-e46febcbf892",
    title: "Full Stack Development",
    description:
      "Full stack development with modern frontend and scalable backend systems.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="90" rx="18" fill="url(#frontend-bg)" />
        <path d="M18 22H72V59H18V22Z" stroke="#000000" strokeWidth="4" />
        <path d="M14 64H76" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        <path d="M35 70H55" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
        <defs>
          <radialGradient id="frontend-bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) rotate(90) scale(45)">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#00A9C9" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "574b060d-8e30-5804-55ce-346124f0a1e7",
    title: "Scalable Web Systems",
    description: "Building high-performance web applications with clean architecture and real-world scalability.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none">
        <rect width="90" height="90" rx="45" fill="url(#scale-bg)" />

        {/* Nodes */}
        <circle cx="45" cy="30" r="4" stroke="#000000" strokeWidth="3" />
        <circle cx="30" cy="55" r="4" stroke="#000000" strokeWidth="3" />
        <circle cx="60" cy="55" r="4" stroke="#000000" strokeWidth="3" />

        {/* Lines (FIXED) */}
        <path d="M45 34V46" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <path d="M45 46L33 52" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
        <path d="M45 46L57 52" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

        <defs>
          <radialGradient id="scale-bg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) rotate(90) scale(45)">
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#00A9C9" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "e1e4db0b-23cf-1a78-5d15-3826765d8090",
    title: "Performance Optimization",
    description: "Optimized systems focused on speed, security, and seamless user experience.",
    icon: (
      <svg width="100%" height="100%" viewBox="0 0 90 90" fill="none">
        <rect width="90" height="90" rx="45" fill="url(#perf-bg)" />

        {/* Arc */}
        <path
          d="M25 55C25 40 35 30 45 30C55 30 65 40 65 55"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Needle */}
        <line
          x1="45"
          y1="45"
          x2="58"
          y2="38"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Center dot */}
        <circle cx="45" cy="45" r="3" fill="#000000" />

        <defs>
          <radialGradient
            id="perf-bg"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(45 45) rotate(90) scale(45)"
          >
            <stop stopColor="#D9D9D9" />
            <stop offset="1" stopColor="#00A9C9" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section_home-services">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="content_wrapper">
              <div className="heading_wrap-small-width">
                <div>
                  <h3>What I Build</h3>
                </div>
                <p scrub-each-word="" text-split="">
                  From idea to production — I design and develop fast, scalable web applications that actually perform.
                </p>
              </div>

              <div className="service_card-wrap">
                <div className="service_card-grid">
                  {services.map((service) => (
                    <div key={service.id} data-w-id={service.id} className="service_card">
                      <div className="service_icon-1x1 w-embed">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      {/* <img src={cardBackdrop} loading="lazy" alt="" className="elipse2" /> */}
                      {/* <img src={cardBackdrop} loading="lazy" alt="" className="elipse1" /> */}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shadow_title">Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
