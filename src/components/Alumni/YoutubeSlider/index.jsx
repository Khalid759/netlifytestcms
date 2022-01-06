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
        className="alumni-nextDKHero"
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
        className="alumni-prevDKHero"
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
    <div className="alumni-youtube-testimonial-container">
      <h2 className="alumni-experience-heading">
        meet the marketing and
        <br /> Sales Leaders
      </h2>
      <div className="alumni-heroVideoWrap">
        <div className="alumni-hero-slides">
          <Slider {...settings}>
            {sliderData.map((item) => (
              <div className="alumni-hero-slide" key={item.id}>
                <div className="alumni-hero-slide-content">
                  <p className="alumni-hero-slide-content-heading">
                    {item.title}
                  </p>
                  <p className="alumni-hero-slide-content-program">
                    {item.program}
                  </p>
                  <div className="alumni-hero-slide-divider" />
                  <p className="alumni-hero-slide-content-desc">
                    {item.description}
                  </p>
                </div>
                <div className="alumni-hero-slide-video">
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
