import React from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import { studentData } from "./data";

const StudentCard = ({ info }) => (
  <div className="student-card">
    <div className="student-info-section">
      <div className="student-info-img">
        <img src={info.image_url} alt={info.name} />
      </div>
      <div className="student-info-div">
        <div className="student-name">{info.name}</div>

        <div className="student-esgination">{info.college}</div>
        <div className="student-desgination placedAt">
          Placed @ {info.placed}
        </div>
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
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
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
    <div className="mlp-student-slider">
      <div className="slider-section-head">Placements Results</div>
      <div className="batch-info">
        <b> 100% placements</b> in roles with <b> CTC {`>=`} 4.5 lakhs</b>{" "}
        Companies hiring across the different batches thus far:
      </div>
      <div className="placement-comp-div">
        <LazyLoad height={300}>
          <img
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/mlp-form-placement-dsk-v2.png"
            alt="Digital Marketing Recruiting Partners for The Marketing Launchpad"
            className="placement-desktop"
          />
          <img
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/mlp-form-placement-mb-v2.png"
            alt="Digital Marketing Recruiting Partners for The Marketing Launchpad"
            className="placement-mob"
          />
        </LazyLoad>
      </div>
      <div className="slider-section-head mtop-4">
        We offer the following 2 specialisations:
      </div>
      <div className="placement-comp-div">
        <LazyLoad height={300}>
          <img
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/program-table-desktop.png"
            alt="Digital Media Marketing & Content & Social Media Marketing"
            className="placement-desktop placement-desktop-2"
          />
          <img
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/program-table-mobile.png"
            alt="Digital Media Marketing & Content & Social Media Marketing"
            className="placement-mob placement-mob-2"
          />
        </LazyLoad>
      </div>
      <div className="slider-head">Student testimonials</div>
      <Slider {...settings}>
        {studentData.map((info, k) => (
          <StudentCard key={k} info={info} />
        ))}
      </Slider>
    </div>
  );
}

export default StudentSlider;
