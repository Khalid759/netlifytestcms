import React, { useState } from "react";
import Slider from "react-slick";
import { cardData } from "./data";
import KFLiveForm from "../../Forms/KFLiveForm";

import "./styles.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <img
      className="kflive-watch-prev"
      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/kraftshalaLiveSeries/left-arrow.svg"
      alt="prev"
      aria-hidden="true"
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img
      className="kflive-watch-next"
      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/kraftshalaLiveSeries/right-arrow.svg"
      alt="next"
      aria-hidden="true"
      onClick={onClick}
    />
  );
}

function WatchSession() {
  const [showForm, setShowForm] = useState(false);
  const [filteredInfo, setFilteredInfo] = useState(null);

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const handleClick = (event_id) => {
    let filteredContent = cardData.find((data) => data.event_id === event_id);
    setFilteredInfo(filteredContent);
    setShowForm(true);
  };

  return (
    <React.Fragment>
      <div className="kflive-watch-slide-container">
        <div className="kflive-watch-live-wrap ">
          <h2 className="kflive-watch-live-headlines-heading">
            AVAILABLE TO <b>WATCH</b>
          </h2>
          <div className="kflive-watch-sessions-carousel">
            <div className="kflive-watch-sessions-carousel-cards">
              <Slider {...settings}>
                {cardData.map((info, key) => (
                  <div className="kflive-watch-trainer-card" key={key}>
                    <img
                      src={info.apply_img}
                      alt={info.name}
                      onClick={() => handleClick(info.event_id)}
                      aria-hidden={true}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <KFLiveForm filteredInfo={filteredInfo} closeModal={closeModal} />
      )}
    </React.Fragment>
  );
}

export default WatchSession;
