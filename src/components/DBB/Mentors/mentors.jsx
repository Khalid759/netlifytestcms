import React from "react";
import { mentorsData } from "./data";
import Slider from "react-slick";

import "./styles.scss";

function Mentors() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    dots: false,
    infinite: true,
    fadeIn: false,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="dbb-mentors-container">
      <h2 className="dbb-highlight-heading">
        YOUR <b>MENTORS</b>
      </h2>
      <div className="dbb-slider">
        <Slider {...settings}>
          {mentorsData.map((item) => (
            <div className="dbb-mentors-slide" key={item.id}>
              <div>
                <img
                  src={item.image}
                  className="dbb-mentors-slide-img"
                  alt={item.name + " " + item.designation}
                />
              </div>
              <div className="dbb-mentors-slide-content">
                <p className="dbb-mentors-slide-content-name">{item.name}</p>
                <p className="dbb-mentors-slide-content-desig">
                  {item.designation}
                </p>
                {item.company_logo && (
                  <img
                    src={item.company_logo}
                    className="dbb-mentors-slide-content-logo"
                    alt={item.company_alt}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Mentors;
