import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = (props) => {
  return (
    <div className="hero-sec-container">
      <div className="pbm-form-container">
        <div className="pbm-form-kf-image">
          <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/white_ArtboardKraftshala.png"
            alt="Kraftshala"
            placeholder="none"
          />
        </div>

        <div className="pbm-form-hero-section">
          <h1 className="pbm-form-program-name">
            <span>Professional </span>
            <span className="brand-management"> Brand Management </span>
            <span className="pbm-digital-txt">in the Digital Age</span>
          </h1>
        </div>
      </div>

      <div className="pbm-form-hired-section">
        <div className="sec-title">
          Fastest path to marketing leadership in the digital age
        </div>

        <div className="sec-description mtop-2 desktop-hide">
          <span>Transition into your dream marketing role</span> through 20
          weeks of high intensity learning under guidance of industry’s top
          leaders.
        </div>

        <div className="sec-description mtop-2 mobile-hide">
          <div className="desc-1">
            Kraftshala’s Brand Management in the Digital Age helps you
            <span> transition into your dream marketing role</span> through 20
            weeks of high intensity learning and by working on real brand
            management and digital marketing problems under guidance of{" "}
            <span>industry’s top marketing leaders.</span>
          </div>

          <div className="desc-2 mtop-1">
            <span>Next step after applying: 1.5 hour Screening Test</span> where
            you will be asked to decode an ad
            <span className="text-strokes">
              <img
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/strokes.png"
                alt="strokes"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
