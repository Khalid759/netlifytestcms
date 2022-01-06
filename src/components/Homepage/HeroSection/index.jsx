import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import LazyLoad from "react-lazyload";

import "./styles.scss";

const HeroSection = () => {
  const [imageURL, setURL] = useState(
    "https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/hero_section/image-1.png"
  );

  useEffect(() => {
    const currentdate = new Date();
    const imagenumber = currentdate.getDay() + 1;

    let imgURL = `https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/hero_section/image-${imagenumber}.png`;
    setURL(imgURL);
  }, []);

  const scrollTo = () => {
    const element = document.querySelector(".home-pick-program");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-div container">
        <div className="hero-text">
          <h1 className="title">
            Become the marketing and sales leader of tomorrow.
            <span className="title-deco">
              <img
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/title-deco.svg"
                alt="title underlines"
                title="title underlines"
              />
            </span>
          </h1>

          <div className="top-svg-div"></div>
          <div className="subtitle">
            By gaining access to industry-driven content, solving real business
            problems and getting personalised coaching from industry experts,
            become a part of India’s most promising talent in just 3-6 months.
          </div>

          <div
            className="home-btn home-btn-desktop"
            aria-hidden="true"
            onClick={scrollTo}
          >
            Pick a program
          </div>

          <div className="partners-container-desktop">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/homepage-company.png"
              alt="Kraftshala Partners"
              title="Kraftshala Partners"
              placeholder="none"
            />
          </div>
        </div>

        <div className="hero-image">
          {imageURL && (
            <LazyLoad>
              <img
                src={imageURL}
                alt="Become the marketing and sales leader of tomorrow."
                title="Become the marketing and sales leader of tomorrow."
                placeholder="none"
              />
            </LazyLoad>
          )}
        </div>
      </div>

      <div
        className="home-btn home-btn-mob"
        aria-hidden="true"
        onClick={scrollTo}
      >
        Pick a program
      </div>

      <div className="partners-container-mob">
        <StaticImage
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/homepage-company.png"
          alt="Kraftshala Partners"
          title="Kraftshala Partners"
          placeholder="none"
        />
      </div>

      <div
        className="home-scrollto-section"
        aria-hidden="true"
        onClick={scrollTo}
      >
        <StaticImage
          placeholder="none"
          src="https://res.cloudinary.com/judiscloud/image/upload/v1580460665/Group-11160_kh3ee5.png"
          alt="scroll down"
          title="scroll down"
        />
      </div>
    </div>
  );
};

export default HeroSection;
