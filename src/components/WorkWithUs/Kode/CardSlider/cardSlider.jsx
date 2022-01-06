import React from "react";
import Slider from "react-slick";

function CardSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: false,
  };
  return (
    <div className="carouselMB">
      <Slider {...settings}>
        {props.data.map((item, key) => {
          return (
            <div className="wwu-kode-cards-card" key={key}>
              <div className="wwu-kode-cards-card-img">
                <img src={item.image} alt={item.alt} title={item.alt} />
              </div>
              <div className="wwu-kode-cards-card-heading">{item.title}</div>
              <p
                className="wwu-kode-cards-card-desc"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CardSlider;
