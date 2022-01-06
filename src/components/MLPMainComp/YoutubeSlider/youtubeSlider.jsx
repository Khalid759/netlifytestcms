import React, { useState } from "react";
import Slider from "react-slick";
import LazyLoad from "react-lazyload";
import { ytStudentData } from "./data";
import "./styles.scss";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + " yt-arrow-prev"}
      aria-hidden="true"
      onClick={onClick}
    >
      <img
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Subtract-2.png"
        alt="prev"
        width="30"
        height="48"
      />
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className + " yt-arrow-next"}
      aria-hidden="true"
      onClick={onClick}
    >
      <img
        src="https://kfwebassets.s3.ap-south-1.amazonaws.com/mlp_images/Subtract-3.png"
        alt="next"
        width="30"
        height="48"
      />
    </div>
  );
}

const YoutubeSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1;
  let slider2;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const settings2 = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <div className="mlp-youtube-slider" id="alumni">
      <h2 className="mlp-yt-title">
        Here are some heartfelt{" "}
        <span className="yellow-txt"> stories from our alumni!</span>
      </h2>

      <div className="mlp-yt-sub">
        We’ve put together some of them but you can also connect with them
        directly to hear it yourself if you clear the screening test!
      </div>

      <div className="slider-1">
        <Slider
          asNavFor={nav2}
          ref={(slider) => (slider1 = slider)}
          {...settings}
        >
          {ytStudentData.map((student) => {
            return (
              <div key={student.id}>
                {/* <LazyLoad height={200} once>
                  <img
                    className="testimonial-yt-thumb"
                    src={student.youtube_img}
                    alt={student.alt + "-Kraftshala Review"}
                    title={student.alt + "-Kraftshala Review"}
                    onClick={() => window.open(student.redirectLink, "_blank")}
                    aria-hidden="true"
                  />
                </LazyLoad> */}
                <LazyLoad height={500}>
                  <iframe
                    width="708"
                    height="421"
                    src={student.iframeSrc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-player"
                  ></iframe>
                </LazyLoad>
              </div>
            );
          })}
        </Slider>
      </div>

      <Slider
        asNavFor={nav1}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        ref={(slider) => (slider2 = slider)}
        centerMode={true}
        {...settings2}
      >
        {ytStudentData.map((student) => {
          return (
            <div key={student.id}>
              <LazyLoad height={200}>
                <img
                  src={student.imageUrl}
                  alt={student.alt + "-Kraftshala Review"}
                  title={student.alt + "-Kraftshala Review"}
                />
              </LazyLoad>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default YoutubeSlider;
