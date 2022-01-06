import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function HeroSection() {
  const handleClick = () => {
    const element = document.getElementById("jobOpenings");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="wwu-header-container">
      <div className="wwu-header-content">
        <h1 className="wwu-header-title">work with us</h1>
        <p className="wwu-header-desc">
          We are a team that is gunning to bring transformative changes to
          India’s higher education ecosystem. Welcome to the ride!{" "}
          <span role="img" aria-label="smily">
            🙂
          </span>
        </p>
        <div
          className="wwu-header-goto"
          aria-hidden="true"
          onClick={handleClick}
        >
          <p className="wwu-header-desc2">view open positions</p>

          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Work_with_us/wwu-right-arrow.webp"
            placeholder="none"
            alt="right-arrow"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
