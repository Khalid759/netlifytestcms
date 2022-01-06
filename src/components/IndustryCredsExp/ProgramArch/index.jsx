import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { archData } from "./data";
import Slider from "react-slick";

import "./styles.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <span className="ice-slider-prev" onClick={onClick} aria-hidden="true">
      <img
        src="https://res.cloudinary.com/judiscloud/image/upload/v1581438668/Group-11195_ciymfj.png"
        alt="prev arrow"
      />
    </span>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <span
      className="ice-slider-next"
      aria-disabled="false"
      onClick={onClick}
      aria-hidden="true"
    >
      <img
        src="https://res.cloudinary.com/judiscloud/image/upload/v1581438673/Group-11194_hjroah.png"
        alt="next arrow"
      />
    </span>
  );
}

const ProgramArch = () => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    variableHeight: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="ice-program-arch">
      <div className="ice-program-arch-title">
        <h2>
          Meet your <span className="yellow-txt">Program Architects</span>
        </h2>
      </div>

      <div className="ice-program-arch-subtitle">
        We're in this together. Student Success Advisors are just a message away
        whenever you need extra help, so your learning is never stalled while
        you wait around for a response.
      </div>
      <div className="ice">
        <div className="ice-wrapper">
          <StaticImage
            className="bg-fluid bg-fluid1"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/circular-icon-2.png"
            alt="circular icon"
            placeholder="none"
          />
          <StaticImage
            className="bg-fluid bg-fluid2"
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/circular-icon-1.png"
            alt="circular icon"
            placement="none"
          />
        </div>
        <div className="ice-slider">
          <Slider {...settings}>
            {archData.map((item, key) => {
              return (
                <div className="ice-slider-card" key={key}>
                  <div className="ice-slider-img">
                    <img
                      src={item.image}
                      alt={item.name + ", " + item.designation}
                    />
                  </div>
                  <div className="ice-slider-info">
                    <span className="ice-slider-name">{item.name}</span>
                    <br />
                    <span className="ice-slider-desg">{item.designation}</span>
                  </div>
                  <div
                    className="ice-slider-desg"
                    dangerouslySetInnerHTML={{ __html: item.past }}
                  ></div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProgramArch;
