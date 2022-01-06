import React from "react";
import Slider from "react-slick";
import "./styles.scss";

const Advisors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="corporate-training-advisors">
      <div className="inner-container">
        <h2 className="advisor-title">
          Meet our <b>Advisors</b>
        </h2>

        <div className="advisors-div">
          <Slider {...settings}>
            <div className="advisor">
              <div className="ad-img">
                <img
                  src="https://res.cloudinary.com/judiscloud/image/upload/v1583214145/nandu.png"
                  alt=""
                />
              </div>

              <div className="ad-name">NANDU NANDKISHORE</div>

              <div className="ad-about">
                <span className="new-line">Former Fortune 100 CEO</span>
                <span className="new-line">
                  Ex-Head of Asia, Oceania, Africa for
                </span>
                <span className="new-line">
                  Nestlé & Global CEO for Nestlé Nutrition
                </span>
              </div>
            </div>

            <div className="advisor">
              <div className="ad-img">
                <img
                  src="https://res.cloudinary.com/judiscloud/image/upload/v1583214137/pallav_jain.png"
                  alt=""
                />
              </div>

              <div className="ad-name">PALLAV JAIN</div>

              <div className="ad-about">
                <span className="new-line">Co-CEO at Performics India</span>
                <span className="new-line">MBA from IIM Ahmedabad 2007</span>
              </div>
            </div>

            <div className="advisor">
              <div className="ad-img">
                <img
                  src="https://res.cloudinary.com/judiscloud/image/upload/v1583214151/sarfaraz.png"
                  alt=""
                />
              </div>

              <div className="ad-name">SARFARAZ KHIMANI</div>

              <div className="ad-about">
                <span className="new-line">Co-CEO at Performics India</span>
                <span className="new-line">MBA from IIM Calcutta 2009</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
