import React, { useEffect, useState } from "react";
import { benefitsData } from "./data";
import Slider from "react-slick";

import "./styles.scss";

function Benefits() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1;
  let slider2;

  const settings = {
    infinite: false,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    slidesToShow: 5,
    dots: false,
    arrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settings2 = {
    infinite: false,
    initialSlide: 2,
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
    <div className="sl-program-benefitsBG sl-scroll" id="benefits">
      <div className="sl-program-benefits-wrap">
        <h2 className="sl-highlight-heading">
          PROGRAM <b>BENEFITS</b>
        </h2>
        <div className="sl-slider-nav">
          <Slider
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            {...settings}
          >
            {benefitsData.map((info, key) => {
              return (
                <div className="sl-item 5" key={key}>
                  <p className="sl-item-title">{info.title}</p>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="sl-slider-for">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            {...settings2}
          >
            {benefitsData.map((info) => {
              return (
                <div
                  key={info.id}
                  className="sl-benefits-desc"
                  dangerouslySetInnerHTML={{ __html: info.description }}
                ></div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
