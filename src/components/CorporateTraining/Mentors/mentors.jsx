import React from "react";
import Slider from "react-slick";
import "./styles.scss";

const Mentors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 5,
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
    <div className="corporate-training-mentors">
      <div className="inner-container">
        <h2 className="mentor-title">
          Meet our <b>Trainers</b>
        </h2>

        <div className="mentors-div">
          <Slider {...settings}>
            <div className="mentor">
              <div className="ad-img">
                <img
                  src="https://res.cloudinary.com/judiscloud/image/upload/v1581430841/Group-11222_kigssv.png"
                  alt="VARUN SATIA, Founder & CEO, Kraftshala"
                />
              </div>

              <div className="ad-name">VARUN SATIA</div>

              <div className="ad-about">
                <span className="new-line">Founder & CEO, Kraftshala</span>
                <span className="new-line">Ex- Nestlé marketing.</span>
                <span className="new-line">
                  Ex-India MD @Campus Ventures Inc.
                </span>
                <span className="new-line">MBA from FMS, Delhi.</span>
                <span className="new-line">B.E. from BITS- Pilani.</span>
              </div>
            </div>

            <div className="mentor">
              <div className="ad-img">
                <img
                  src="https://res.cloudinary.com/judiscloud/image/upload/v1581588613/Group_11237_of5oti.png"
                  alt="ESHU SHARMA, Co-Founder, Kraftshala"
                />
              </div>

              <div className="ad-name">ESHU SHARMA</div>

              <div className="ad-about">
                <span className="new-line">Co-Founder, Kraftshala</span>
                <span className="new-line">Ex- Unilever.</span>
                <span className="new-line">MBA from FMS, Delhi.</span>
                <span className="new-line">B.Tech from PEC, Chandigarh</span>
              </div>
            </div>

            <div className="mentor">
              <div className="ad-img">
                <img
                  src="https://res.cloudinary.com/judiscloud/image/upload/v1581588607/Group_11238_t8mpl4.png"
                  alt="NISHTHA JAIN, Marketing Head, Kraftshala"
                />
              </div>

              <div className="ad-name">NISHTHA JAIN</div>

              <div className="ad-about">
                <span className="new-line">Marketing Head, Kraftshala</span>
                <span className="new-line">
                  Ex- Nestlé Brand Manager (Maggi).
                </span>
                <span className="new-line">MBA from IIM - Lucknow</span>
                <span className="new-line">B.Tech NIT Kkr</span>
              </div>
            </div>
            <div className="mentor">
              <div className="ad-img">
                <img
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/corporate_training/dinesh-sajnani.webp"
                  alt="DINESH SAJNANI, Digital Training Manager, Kraftshala"
                />
              </div>

              <div className="ad-name">DINESH SAJNANI</div>

              <div className="ad-about">
                <span className="new-line">
                  Digital Training Manager, Kraftshala
                </span>
                <span className="new-line">Ex- IPG MediaBrands.</span>
                <span className="new-line">Where he ran campaigns for</span>
                <span className="new-line">Spotify, Hershey's etc</span>
              </div>
            </div>
            <div className="mentor">
              <div className="ad-img">
                <img
                  src="https://kfwebassets.s3.ap-south-1.amazonaws.com/corporate_training/shivang-sethiya.webp"
                  alt="SHIVANG SETHIYA, Marketing Training Manager, Kraftshala"
                />
              </div>

              <div className="ad-name">SHIVANG SETHIYA</div>

              <div className="ad-about">
                <span className="new-line">
                  Marketing Training Manager, Kraftshala
                </span>
                <span className="new-line">Ex-Marketing Manager, Airbnb</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
