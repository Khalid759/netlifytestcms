import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

const Founders = () => {
  return (
    <div className="about-us-founders-testimonials">
      <div className="about-us-container">
        <div className="about-us-founders-head">
          <p className="about-us-founders-head-heading">
            Kraftshala{" "}
            <span className="about-us-founders-mb-block">
              <b>Founders</b>
            </span>
          </p>
        </div>
        <div className="about-us-founders-testi-card">
          <a
            href="https://www.linkedin.com/in/varunsatia/"
            className="about-us-founders-image-div"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/about_us/varun-satia-2.webp"
              placeholder="none"
              alt="Varun Satia, Co-Founder & CEO "
            />
          </a>

          <div className="about-us-founders-about-div">
            <div className="about-us-founders-name">Varun Satia</div>

            <div className="about-us-founders-designation">
              Co-Founder & CEO
            </div>

            <div className="about-us-founders-about">
              Varun has over 10 years of experience in marketing, training and
              entrepreneurship. He’s worked at Nestle as a Brand Manager, Maggi
              Noodles, conducted over 200+ sessions for students and corporates
              alike, has headed Placement Cell at FMS and has even founded a
              business with 2 graduate students of Harvard University which was
              acquired by the Ewing Marion Kauffman Foundation in 2009.
              <br /> At Kraftshala, he leads the overall growth, strategy,
              product, team building and placements. He is an FMS and BITS Goa
              Alum.
            </div>
          </div>
        </div>
        <div className="about-us-founders-testi-card about-us-founders-reverse-card">
          <a
            href="https://www.linkedin.com/in/eshu-sharma-04287386/"
            className="about-us-founders-image-div"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/about_us/eshu-sharma-2.webp"
              placeholder="none"
              alt="Eshu Sharma, Co-Founder, Student Experience"
            />
          </a>

          <div className="about-us-founders-about-div">
            <div className="about-us-founders-name">Eshu Sharma</div>

            <div className="about-us-founders-designation">
              Co-Founder, Student Experience
            </div>

            <div className="about-us-founders-about">
              At Kraftshala, he leads the student experience and the build of
              the new programs. He is an FMS and PEC (Punjab Engineering
              College) Alum.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
