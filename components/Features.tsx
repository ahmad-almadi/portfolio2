export default function Features() {
  return (
    <section className="section_home-wegotyou">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="wegotyou_content-wrap">
              <div className="heading_wrap z-index-1">
                <div>
                  <h2>We got your back!</h2>
                  <h3 scrub-each-word="" text-split="">
                    Custom-built. Speed-optimized. AI-ready.
                  </h3>
                </div>
                <p scrub-each-word="" text-split="">
                  Let your site evolve with your vision.
                </p>
              </div>
              <img
                src="/images/about.png"
                loading="lazy"
                alt="Dashboard showing uptime at 99.99%, Google Lighthouse performance score of 97/100, and DDoS prevented graph."
                className="absolute_position"
                width={1000}

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
