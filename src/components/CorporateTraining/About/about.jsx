import React from "react";

import "./styles.scss";

const About = () => {
  return (
    <div className="corporate-training-about">
      <div className="inner-container">
        <h2 className="about-title">
          WE ARE ONE OF <b> INDIA’S LARGEST MARKETING</b>
          <b>
            <span className="new-line">AND SALES TRAINING PLATFORM</span>
          </b>
        </h2>

        <div className="about-cards">
          <div>
            <h3 className="about-card-title">5000+</h3>
            <div className="about-card-subtitle">
              Professionals trained in marketing and sales in 2 years
            </div>
          </div>

          <div>
            <h3 className="about-card-title">Marquee Clients</h3>
            <div className="about-card-subtitle">
              across sectors including FMCG, leaders like Unilever, P&G, Nestle
              and business school students of IIMs, ISB, XLRI, FMS
            </div>
          </div>

          <div>
            <h3 className="about-card-title">95%+ Advocacy Scores</h3>
            <div className="about-card-subtitle">
              across sectors including FMCG, leaders like Unilever, P&G, Nestle
              and business school students of IIMs, ISB, XLRI, FMS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
