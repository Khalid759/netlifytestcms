import React from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + " yt-arrow-prev"}
      aria-hidden="true"
      onClick={onClick}
    >
      <img
        src="https://res.cloudinary.com/judiscloud/image/upload/v1581345303/Group-11209-1_p2neel.png"
        alt="prev"
        title="prev"
      />
    </div>
  );
}

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + " yt-arrow-next"}
      aria-hidden="true"
      onClick={onClick}
    >
      <img
        src="https://res.cloudinary.com/judiscloud/image/upload/v1581345298/Group-11208-1_de0kad.png"
        alt="next"
        title="next"
      />
    </div>
  );
}

const StudentsMobile = ({ data }) => {
  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: false,
    infinite: true,
    fadeIn: false,
    autoplay: false,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="home-students-container-mob">
      <div className="students-title-mob">
        We have helped <b> thousands of students bridge the gap</b>
      </div>
      <div className="home-students-slider-div">
        <Slider {...settings}>
          {data.map((info) => {
            return (
              <div key={info.id} className="student-slider-card">
                <div className="student-img">
                  <LazyLoad>
                    <img
                      src={info.mobileImage}
                      alt={
                        info.name + ", " + info.program + ", " + info.company
                      }
                      title={
                        info.name + ", " + info.program + ", " + info.company
                      }
                    />
                  </LazyLoad>
                </div>

                <div className="student-details">
                  <div className="name">{info.name}</div>
                  <div className="designation">{info.company}</div>

                  <div
                    className="description"
                    dangerouslySetInnerHTML={{ __html: info.description }}
                  ></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default StudentsMobile;
