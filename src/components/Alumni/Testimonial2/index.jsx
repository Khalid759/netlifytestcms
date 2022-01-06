import React from "react";
import Slider from "react-slick";
import { reviewData } from "./data";

import "./styles.scss";

function Testimonial2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="alumni-testi2-slick-carousel">
      <div className="alumni-testi2-bg"></div>
      <div className="alumni-testi2-wrap">
        <div className="alumni-testi2-heroSlider-fixed">
          <div className="alumni-testi2-overlay"></div>
          <Slider {...settings}>
            {reviewData.map((info, key) => (
              <div className="alumni-testi2-slick-card" key={key}>
                <p className="alumni-testi2-slick-card-heading">{info.title}</p>
                <p className="alumni-testi2-slick-card-program">
                  {info.program}
                </p>
                <p className="alumni-testi2-slick-card-desc">
                  {info.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2;
