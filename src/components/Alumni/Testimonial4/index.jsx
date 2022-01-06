import React, { useState } from "react";
import Slider from "react-slick";
import { reviewData } from "./data";
import LazyLoad from "react-lazyload";

import "./styles.scss";

const ReadMoreModal = (props) => {
  const text = props.children;
  const isReadMore = text.length > 700;

  const showReadMoreModalHandler = () => {
    props.showReadMoreModal(props.id);
  };

  return (
    <React.Fragment>
      <p className="experience-slide-story-desc">
        {isReadMore ? text.slice(0, 700) + "..." : text}
        <span
          onClick={showReadMoreModalHandler}
          aria-hidden="true"
          className="read-more"
        >
          {isReadMore && "Read more"}
        </span>
      </p>
    </React.Fragment>
  );
};

function Testimonial4() {
  const [readModal, showReadModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const showReadMoreModal = (id) => {
    let filterData = reviewData.find((item) => item.id === id);
    setModalData(filterData);
    showReadModal(true);
  };

  const hideReadMoreModal = () => {
    showReadModal(false);
  };

  const settings = {
    prevArrow: "",
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 8000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="alumni-testi4-slick-carousel">
      <div className="alumni-testi4-placement-slider">
        <h3 className="alumni-testi4-role-head">
          HERE'S WHAT STUDENT'S <b>ARE SAYING ON LINKEDIN</b>
        </h3>
        <Slider {...settings}>
          {reviewData.map((info, key) => (
            <div className="alumni-card-type2-section" key={key}>
              <div className="type2-head">
                <div className="type2-img-div">
                  <LazyLoad once>
                    <img
                      src={info.image}
                      alt={info.name + " " + info.designation}
                      title={info.name + " " + info.designation}
                    />
                  </LazyLoad>
                </div>

                <div className="type2-info">
                  <div className="name">{info.name}</div>
                  <div className="company">{info.designation}</div>
                  <div className="deco-line"></div>
                </div>
              </div>

              <div className="type2-description">
                <ReadMoreModal
                  id={info.id}
                  readModal={readModal}
                  showReadMoreModal={showReadMoreModal}
                >
                  {info.description}
                </ReadMoreModal>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {readModal ? (
        <React.Fragment>
          <div
            className="alumni-mask alumni-active"
            onClick={hideReadMoreModal}
            aria-hidden="true"
          ></div>
          <div className="alumni-modal">
            <div className="alumni-modal-content">
              <div className="alumni-modal-content-txt">
                <div className="alumni-modal-card-header">
                  <div>
                    <img
                      className="alumni-modal-card-img-person"
                      src={modalData.image}
                      alt={modalData.name}
                    />
                  </div>
                  <div className="alumni-modal-card-info">
                    <div>
                      <b>{modalData.name}</b>
                    </div>
                    <div>{modalData.designation}</div>
                  </div>

                  <img
                    className="alumni-modal-card-info-quote"
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/alumni/quote.png"
                    alt="quote"
                  />
                </div>
                <div className="alumni-modal-card-head-divide" />
                <div className="alumni-modal-card-content">
                  {modalData.description}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default Testimonial4;
