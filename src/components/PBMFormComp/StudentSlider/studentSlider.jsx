import React from "react";
import Slider from "react-slick";

import { studentData } from "./data";

const StudentCard = ({ info }) => (
  <div className="student-card">
    <div className="student-info-section">
      <div className="student-info-img">
        <img src={info.image_url} alt={info.name} />
      </div>
      <div className="student-info-div">
        <div className="student-name">{info.name}</div>

        <div className="student-desgination">{info.college}</div>
        <div className="student-desgination placedAt">{info.placed}</div>
      </div>
    </div>

    <div className="student-info-desc-div">{info.description}</div>
  </div>
);

function StudentSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    centerMode: true,
    fadeIn: false,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="pbm-student-slider">
      <h2 className="slider-head">Hear from the past students</h2>

      <Slider {...settings}>
        {studentData.map((info, k) => (
          <StudentCard key={k} info={info} />
        ))}
      </Slider>
    </div>
  );
}

export default StudentSlider;
