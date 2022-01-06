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
        className="dbb-nextDKHero"
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
        className="dbb-prevDKHero"
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
    <div className="dbb-youtube-testimonial-container">
      <h2 className="dbb-experience-heading">
        Hear from our Alumni on their <br />
        Kraftshala Experience
      </h2>
      <div className="dbb-heroVideoWrap">
        <div className="dbb-hero-slides">
          <Slider {...settings}>
            {sliderData.map((item) => (
              <div className="dbb-hero-slide" key={item.id}>
                <div className="dbb-hero-slide-content">
                  <p className="dbb-hero-slide-content-heading">{item.title}</p>
                  <div className="dbb-hero-slide-divider" />
                  <p className="dbb-hero-slide-content-desc">
                    {item.description}
                  </p>
                </div>
                <div className="dbb-hero-slide-video">
                  <LazyLoad>
                    <iframe
                      title={item.title}
                      width="100%"
                      height="100%"
                      src={item.link}
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
