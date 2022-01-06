import React from "react";

import "./styles.scss";

const HeroSection = () => {
  const handleClick = (contentID) => {
    const element = document.getElementById(contentID);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="ice-hero">
      <div className="ice-hero-title">
        <h1>
          INDUSTRY<b>Creds™ Certification</b>
          <span className="new-line">by Kraftshala</span>
        </h1>
      </div>

      <div className="ice-hero-subtitle">
        <h2>
          The only marketing and sales certification which gets you ready to
          deliver from Day 1
        </h2>
      </div>

      <div className="ice-hero-cta">
        <button onClick={() => handleClick("program-section")}>
          Pick a Program
        </button>
      </div>

      <hr className="section-divide" />

      <div className="ice-hero-description">
        We talk to hundreds of companies on what specific skills are
        continuously needed for the marketing and sales roles of today and then
        design our courses to{" "}
        <span className="color-black">
          <b>
            help candidates master those skills to contribute to these{" "}
            <span className="deco-txt">
              companies from Day 1.
              <img
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/IndustryCredsExperience/Group+11298.png"
                alt=""
              />
            </span>
          </b>
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
