import React, { useState } from "react";
import Slider from "react-slick";
import { reviewData } from "./data";
import "./styles.scss";

const ReadMoreModal = (props) => {
  const text = props.children;
  const isReadMore = text.length > 250;

  const showReadMoreModalHandler = () => {
    props.showReadMoreModal(props.id);
  };

  return (
    <React.Fragment>
      <p className="experience-slide-story-desc">
        {isReadMore ? text.slice(0, 250) + "..." : text}
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

function Testimonial3() {
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
    dots: false,
    infinite: true,
    speed: 500,
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
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="alumni-testi3-wrap">
      <div className="alumni-testi3-heroSlider-fixed">
        <Slider {...settings}>
          {reviewData.map((info, key) => (
            <div className="alumni-testi3-wrap-card" key={key}>
              <div className="testimonial-card-img-wrap">
                <img
                  src={info.image}
                  alt={info.title}
                  className="testimonial-card-img"
                />
              </div>
              <div className="alumni-testi3-slick-card" key={key}>
                <p className="alumni-testi3-slick-card-heading">{info.title}</p>
                <p className="alumni-testi3-slick-card-program">
                  {info.program}
                </p>
                <p className="alumni-testi3-slick-card-desc">
                  <ReadMoreModal
                    id={info.id}
                    readModal={readModal}
                    showReadMoreModal={showReadMoreModal}
                  >
                    {info.description}
                  </ReadMoreModal>
                </p>
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
                    <div className="alumni-modal-card-title">
                      <b>{modalData.title}</b>
                    </div>
                    <div className="alumni-modal-card-program">
                      {modalData.program}
                    </div>
                  </div>
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

export default Testimonial3;
