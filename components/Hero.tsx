export default function Hero() {
  return (
    <section id="hero" className="section_home-hero">
      <div className="padding-global">
        <div className="container-large">
          <div>
            <header className="hero_home-content hero_home-content--staged">
              <h1>
                full stack develepor
                <br />
                & it specialist
              </h1>
              <p className="hero_home-paragraph">
                I design and develop high-performance websites
                <br />
                that are clean, scalable, and built to grow.
              </p>
              <a
                data-click-formopen=""
                data-hover=""
                data-w-id="a484803e-4f9b-07a3-053c-5175fa7d8223"
                href="#"
                className="button is-icon w-inline-block"
              >
                <div className="pulse_dot-parent">
                  <div
                    style={{
                      transform:
                        "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      opacity: 1,
                    }}
                    className="pulse_dot-back"
                  />
                  <div className="pulse_dot-front" />
                </div>
                <div>Get In Touch</div>
                <div className="icon-1x1-small hide w-embed">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    role="img"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                  </svg>
                </div>
              </a>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
