import React from "react";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { trainersImages } from "./data";

import "./styles.scss";

function Trainers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
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
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="mlp-main-trainers">
      <div className="will-be-training">
        <div className="trainers-container">
          <h3 className="training-section-title">WHO WILL BE TRAINING?</h3>

          <div className="trainers-slider">
            <Slider {...settings}>
              {trainersImages.map((info, key) => (
                <div className="trainer-card" key={key}>
                  <LazyLoad once>
                    <img src={info.image} alt={info.alt} title={info.alt} />
                  </LazyLoad>
                </div>
              ))}
            </Slider>
            <div className="trainers-note">And a range of external experts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
