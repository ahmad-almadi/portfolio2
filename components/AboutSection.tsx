export default function AboutSection() {
  return (
    <section className="section_home-bio">
      <div className="padding-global">
        <div className="container-large">
          <div id="about-me" className="padding-section-large">
            <div className="bio_grid">
              <div className="profile-logo">
                <img src="/images/me.png" className="profile-img" />
              </div>
              <div className="bio_content-wrapper">
                <div className="heading_wrap-small-width">
                  <div>
                    <h2
                      data-w-id="d01320b9-9a4c-58b2-682b-0bf1900a7ac3"
                      style={{
                        transform:
                          "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        opacity: 0,
                      }}
                    >
                      About
                    </h2>
                    <h3>IT Specialist</h3>
                  </div>
                </div>
                <h4>Hey, I’m Ahmad Al-Madi.</h4>
                <p className="paragraph_small">
                  I build scalable web applications and digital solutions that combine design,
                  code, and smart technologies to drive real business results.
                </p>
                <div className="contact_email-wrap">
                  <div className="email_icon w-embed">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask
                        id="mask0_50_1264"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                      >
                        <path d="M31.5 6.75H4.5C3.90326 6.75 3.33097 6.98705 2.90901 7.40901C2.48705 7.83097 2.25 8.40326 2.25 9V27C2.25 27.5967 2.48705 28.169 2.90901 28.591C3.33097 29.0129 3.90326 29.25 4.5 29.25H31.5C32.0967 29.25 32.669 29.0129 33.091 28.591C33.5129 28.169 33.75 27.5967 33.75 27V9C33.75 8.40326 33.5129 7.83097 33.091 7.40901C32.669 6.98705 32.0967 6.75 31.5 6.75ZM31.5 13.5L18 20.25L4.5 13.5V9L18 15.75L31.5 9V13.5Z" fill="#42A5F5" />
                      </mask>
                      <g mask="url(#mask0_50_1264)">
                        <rect width="36" height="36" fill="url(#paint0_radial_50_1264)" />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_50_1264"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(18 18) rotate(90) scale(18)"
                        >
                          <stop stopColor="#D9D9D9" />
                          <stop offset="1" stopColor="#737373" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <h5 className="email_address">ahmadalmadi2005@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
