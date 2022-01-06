import React, { useEffect, useState } from "react";
import { trainersSliderData } from "./data";
import Slider from "react-slick";

import "./styles.scss";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} aria-hidden="true">
      <img
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Subtract-2.png"
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
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Subtract-3.png"
        alt="next"
      />
    </div>
  );
}

function TrainersSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1;
  let slider2;

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    dots: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div className="pbm-trainers_slider">
      <h3 className="pbm-trainers_slider-head">
        You will also interact with CEOs and CMOs like
      </h3>
      <div className="pbm-slider-navTrainer">
        <Slider
          asNavFor={nav2}
          ref={(slider) => (slider1 = slider)}
          {...settings}
        >
          {trainersSliderData.map((info) => {
            return (
              <div key={info.id} className="pbm-trainer-navSlide">
                <img src={info.image} alt={info.alt} title={info.alt} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="pbm-slider-forTrainer">
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2 = slider)}
          {...settings2}
        >
          {trainersSliderData.map((info) => {
            return (
              <div key={info.id} className="pbm-forTrainer-slide">
                <div className="pbm-forTrainer-slide-head">{info.name}</div>
                <div
                  className="pbm-forTrainer-slide-desc"
                  dangerouslySetInnerHTML={{ __html: info.designation }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TrainersSlider;
