import React from "react";
import Slider from "react-slick";
import { reviewData } from "./data";

import "./styles.scss";

function Reviews() {
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
    <div className="kflive-slick-carousel">
      <h2 className="kflive-review-heading">
        Kraftshala LIVE <b>Reviews</b>
      </h2>
      <div className="kflive-bg"></div>
      <div className="kflive-wrap">
        <div className="kflive-heroSlider-fixed">
          <div className="kflive-overlay"></div>
          <Slider {...settings}>
            {reviewData.map((info, key) => (
              <div className="kflive-slick-card" key={key}>
                <p className="kflive-slick-card-heading">
                  <b>{info.name}</b> | {info.company}
                </p>
                <p className="kflive-slick-card-desc">{info.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
