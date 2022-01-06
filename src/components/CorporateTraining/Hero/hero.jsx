import React from "react";
import Form from "../../Forms/CorporateTraining/HeroForm";

import "./styles.scss";

const Hero = () => {
  return (
    <div className="corporate-training-hero">
      <div className="inner-container hero-content">
        <div className="hero-text">
          <h1>Corporate Training Programs</h1>
          <h2>Get trained from India’s Top Marketing Training Platform</h2>
        </div>

        <div className="hero-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hero;
