import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { teamData } from "./data";
import Slider from "react-slick";

import "./styles.scss";
import LazyLoad from "react-lazyload";

function TeamSliders() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
    variableWidth: true,
    variableHeight: true,
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
    <div className="wwu-team">
      <div className="wwu-team-wrapper">
        <StaticImage
          className="bg-fluid bg-fluid1"
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/circular-icon-2.webp"
          alt="circular icon"
          placeholder="none"
        />
        <StaticImage
          className="bg-fluid bg-fluid2"
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/circular-icon-1.webp"
          alt="circular icon"
          placement="none"
        />
      </div>
      <div className="wwu-team-head">
        <h2 className="wwu-team-heading">
          Life at <b>kraftshala</b>
        </h2>
        <LazyLoad>
          <div className="top-svg-div">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/title-deco.svg"
              alt="title underlines"
              title="title underlines"
            />
          </div>
        </LazyLoad>
      </div>
      <div className="wwu-team-slider slider">
        <Slider {...settings}>
          {teamData.map((item, key) => {
            return (
              <div key={key}>
                <img
                  className="slide-img"
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TeamSliders;
