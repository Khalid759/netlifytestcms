import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";

const Benefit = () => {
  return (
    <div className="corportate-traing-benefit">
      <div className="inner-container">
        <h2 className="benefit-title">
          BENEFIT FROM A <b>DIFFERENT APPROACH TO CORPORATE TRAINING</b>
        </h2>

        <div className="benefit-points mobile-hide">
          <div className="top-point">
            <h3 className="head">INTERESTING</h3>
            <div className="about">
              In our corporate trainings, we bring alive concepts through case
              stories, live engagement tools, and examples from popular culture
            </div>
          </div>

          <div className="mid-points">
            <div className="point-1">
              <h3 className="head">RELEVANT</h3>
              <div className="about">
                We deliver practical takeaways that help participants start
                delivering from Day 1
              </div>
            </div>
            <div className="point-img">
              <img
                src="https://res.cloudinary.com/judiscloud/image/upload/v1583039785/white_Artboard_4.png"
                alt=""
              />
            </div>
            <div className="point-3">
              <h3 className="head">MEMORABLE</h3>
              <div className="about">
                We demystify complex concepts through structured frameworks,
                projects, and DIY exercises to make the learning from the
                corporate training course memorable.
              </div>
            </div>
          </div>

          <div className="fundamental-text">FUNDAMENTAL THINKING MODELS</div>
        </div>
        <StaticImage
          src="https://res.cloudinary.com/judiscloud/image/upload/v1583039785/white_Artboard_4.png"
          alt="kraftshala"
          className="desktop-hide mb-point-img"
          placeholder="none"
        />

        <div className="mb-fundamental-text  desktop-hide">
          FUNDAMENTAL THINKING MODELS
        </div>
        <div className="mb-timline desktop-hide">
          <div className="mb-vl"></div>

          <div className="mb-section">
            <div className="mb-title">
              <div className="mb-deco"></div>

              <h3 className="mb-title-text">INTERESTING</h3>
            </div>

            <div className="mb-description">
              In our corporate trainings, we bring alive concepts through case
              stories, live engagement tools, and examples from popular culture
            </div>
          </div>

          <div className="mb-section">
            <div className="mb-title">
              <div className="mb-deco"></div>

              <h3 className="mb-title-text">RELEVANT</h3>
            </div>

            <div className="mb-description">
              We deliver practical takeaways that help participants start
              delivering from Day 1
            </div>
          </div>

          <div className="mb-section">
            <div className="mb-title">
              <div className="mb-deco"></div>

              <h3 className="mb-title-text">MEMORABLE</h3>
            </div>

            <div className="mb-description">
              We demystify complex concepts through structured frameworks,
              projects, and DIY exercises to make the learning from the
              corporate training course memorable.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
