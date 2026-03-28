const headingStyle = {
  transform:
    "translate3d(0, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  opacity: 0,
} as const;

const CDN =
  "https://wubflow-shield.NOCODEXPORT.DEV/68f3884d9e35f473a885d321/";

const testimonials = [
  {
    quote:
      "Ahmad did a great job building our website. The performance is fast and the design is clean. He was easy to communicate with and delivered everything on time.",
    avatar: "/images/osama.jpg",
    avatarAlt: "Portrait of a young man smiling",
    name: "Omar Khaled",
    role: "Small Business Owner, Amman"
  },
  {
    quote:
      "Working with Ahmad was smooth and professional. He understood the requirements بسرعة and implemented everything exactly as needed.",
    avatar: "/images/saleh.jpg",
    avatarAlt: "Portrait of a man with short hair",
    name: "Yazan Ahmad",
    role: "Startup Founder, Jordan"
  },
  {
    quote:
      "Ahmad helped us improve our website structure and performance. His attention to detail and problem-solving skills really stood out.",
    avatar: "/images/suhaip.jpg",
    avatarAlt: "Portrait of a man looking to the side",
    name: "Ahmad Suleiman",
    role: "University Project Teammate"
  },
] as const;

function StarRating() {
  const star =
    "M12.6623 18.9562L8.28324 21.5942C8.08979 21.7173 7.88754 21.77 7.6765 21.7524C7.46546 21.7348 7.2808 21.6645 7.12252 21.5414C6.96425 21.4183 6.84114 21.2646 6.75321 21.0803C6.66527 20.896 6.64769 20.6892 6.70045 20.4598L7.86116 15.474L3.98332 12.1238C3.80745 11.9655 3.69771 11.7851 3.6541 11.5825C3.61049 11.3799 3.6235 11.1822 3.69314 10.9894C3.76278 10.7967 3.8683 10.6384 4.0097 10.5146C4.1511 10.3908 4.34455 10.3117 4.59006 10.2772L9.70775 9.82873L11.6862 5.13312C11.7742 4.92208 11.9106 4.7638 12.0957 4.65828C12.2807 4.55276 12.4695 4.5 12.6623 4.5C12.855 4.5 13.0439 4.55276 13.2289 4.65828C13.4139 4.7638 13.5504 4.92208 13.6384 5.13312L15.6168 9.82873L20.7345 10.2772C20.9807 10.3124 21.1742 10.3915 21.3149 10.5146C21.4556 10.6377 21.5611 10.796 21.6315 10.9894C21.7018 11.1829 21.7152 11.3809 21.6715 11.5835C21.6279 11.7861 21.5178 11.9662 21.3413 12.1238L17.4634 15.474L18.6241 20.4598C18.6769 20.6884 18.6593 20.8953 18.5714 21.0803C18.4835 21.2653 18.3603 21.419 18.2021 21.5414C18.0438 21.6638 17.8591 21.7341 17.6481 21.7524C17.4371 21.7707 17.2348 21.718 17.0414 21.5942L12.6623 18.9562Z";

  return (
    <svg width="100%" height="100%" viewBox="0 0 130 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 26.168, 52.338, 78.506, 104.676].map((x) => (
        <path key={x} d={star} fill="#00AFCD" transform={`translate(${x} 0)`} />
      ))}
    </svg>
  );
}

function SliderArrow({ left = false }: { left?: boolean }) {
  return left ? (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
        fill="currentColor"
      />
    </svg>
  ) : (
    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="section_home-testimoinal">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large overflow-hidden">
            <div className="content_wrapper is-center">
              <div className="heading_wrap-small-width">
                <div>
                  <h2 data-w-id="c16348b4-2974-9bac-6ca7-7d10abb5b7d5" style={headingStyle}>
                    Testimonial
                  </h2>
                  <h3>What People Says</h3>
                </div>
              </div>
              <div className="testimonial_slide-wrap">
                <div
                  data-delay="4000"
                  data-animation="slide"
                  className="testimonial_slider w-slider"
                  data-autoplay="false"
                  data-easing="ease"
                  data-hide-arrows="false"
                  data-disable-swipe="false"
                  data-autoplay-limit="0"
                  data-nav-spacing="4"
                  data-duration="500"
                  data-infinite="true"
                >
                  <div className="testimonial_mask w-slider-mask">
                    {testimonials.map((item) => (
                      <div className="testimonial_slide w-slide" key={item.name}>
                        <div className="testimonial_slide-card">
                          <div className="slider_project-content">
                            <div className="testimonial_star w-embed">
                              <StarRating />
                            </div>
                            <div className="testimonial_card-content">
                              <p className="slider_testimonial-text" style={{ whiteSpace: "pre-line" }}>
                                {item.quote}
                              </p>
                              <div className="avatar_detail-wrap">
                                <img
                                  src={item.avatar}
                                  loading="lazy"
                                  width="79"
                                  height="59"
                                  alt={item.avatarAlt}
                                  className="testimonial_avatar"
                                />
                                <div>
                                  <h4>{item.name}</h4>
                                  <div>{item.role}</div>
                                </div>
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
                  <div className="slide_nav w-slider-nav"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
