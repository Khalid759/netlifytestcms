import React, { useState } from "react";
import { experienceData } from "./data";
import Slider from "react-slick";

import "./styles.scss";

const ReadMoreModal = (props) => {
  const text = props.children;
  const isReadMore = text.length > 500;

  const showReadMoreModalHandler = () => {
    props.showReadMoreModal(props.id);
  };

  return (
    <React.Fragment>
      <p className="bb-experience-slide-story-desc">
        {isReadMore ? text.slice(0, 500) + "..." : text}
        <span
          onClick={showReadMoreModalHandler}
          aria-hidden="true"
          className="bb-read-more"
        >
          {isReadMore && "...Read more"}
        </span>
      </p>
    </React.Fragment>
  );
};

function KraftshalaExperience() {
  const [readModal, showReadModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const showReadMoreModal = (id) => {
    let data = experienceData.find((data) => data.id === id);
    setModalData(data);
    showReadModal(true);
  };

  const hideReadMoreModal = () => {
    showReadModal(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fadeIn: false,
    pauseOnHover: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <div className="bb-experience-container">
        <div className="bb-experience-wrap">
          <div className="bb-experience-slider">
            <Slider {...settings}>
              {experienceData.map((item) => (
                <div className="bb-experience-slide" key={item.id}>
                  <div>
                    <img
                      src={item.image}
                      className="bb-experience-slide-passport"
                      alt={item.title}
                    />
                  </div>
                  <div className="bb-experience-slide-about">
                    <p>{item.title}</p>
                    <p>Placed at {item.company}</p>
                  </div>
                  <div className="bb-experience-slide-divider"></div>
                  <div className="bb-experience-slide-story">
                    <img
                      src="https://res.cloudinary.com/judiscloud/image/upload/v1580578660/-1_gsvzdt.png"
                      className="bb-experience-slide-story-quote"
                      alt="quote"
                    />
                    <ReadMoreModal
                      id={item.id}
                      readModal={readModal}
                      showReadMoreModal={showReadMoreModal}
                    >
                      {item.desc}
                    </ReadMoreModal>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {readModal ? (
        <React.Fragment>
          <div
            className="bb-mask bb-active"
            onClick={hideReadMoreModal}
            aria-hidden="true"
          ></div>
          <div className="bb-modal">
            <div className="bb-modal-content">
              <div className="bb-modal-content-txt">
                <div className="bb-modal-card-header">
                  <img
                    className="bb-modal-card-img-person"
                    src={modalData.image}
                    alt={modalData.title}
                  />
                  <div className="bb-modal-card-info">{modalData.title}</div>
                  <img
                    className="bb-modal-card-info-quote"
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/alumni/quote.png"
                    alt="quote"
                  />
                </div>
                <div className="bb-modal-card-head-divide" />
                <div className="bb-modal-card-content">{modalData.desc}</div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}

export default KraftshalaExperience;
