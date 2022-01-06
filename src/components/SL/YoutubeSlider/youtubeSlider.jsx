import React from "react";
import { sliderData } from "./data";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} aria-hidden="true">
      <img
        className="sl-nextDKHero"
        src="https://res.cloudinary.com/judiscloud/image/upload/v1583679105/Subtract_1.svg"
        alt="prev"
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} aria-hidden="true">
      <img
        className="sl-prevDKHero"
        src="https://res.cloudinary.com/judiscloud/image/upload/v1583679105/Subtract_1.svg"
        alt="next"
      />
    </div>
  );
}

function YoutubeSlider() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 500,
    dots: false,
    fadeIn: false,
    pauseOnHover: true,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="sl-youtube-testimonial-container">
      <h2 className="sl-experience-heading">
        Hear from our Alumni on their <br />
        Kraftshala Experience
      </h2>
      <div className="sl-heroVideoWrap">
        <div className="sl-hero-slides">
          <Slider {...settings}>
            {sliderData.map((item) => (
              <div className="sl-hero-slide" key={item.id}>
                <div className="sl-hero-slide-content">
                  <p className="sl-hero-slide-content-heading">{item.title}</p>
                  <div className="sl-hero-slide-divider" />
                  <p className="sl-hero-slide-content-desc">
                    {item.description}
                  </p>
                </div>
                <div className="sl-hero-slide-video">
                  <LazyLoad>
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.link}
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={item.id}
                    />
                  </LazyLoad>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default YoutubeSlider;
