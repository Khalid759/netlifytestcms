import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { topFeedback } from "./data";

import Card3 from "../../TestimonialCard/Card3/index";

import "./styles.scss";

const TopCompanies = () => {
  return (
    <div className="kf-companies-container">
      <div className="inner-container">
        <h2>
          Talent trusted by <b>top companies</b>
        </h2>

        <div className="feedback-container">
          {topFeedback.map((info) => {
            return <Card3 key={info.id} info={info} />;
          })}
        </div>

        <div className="alumni-div">
          <h2>
            <b>Our alumni</b> now work in
          </h2>

          <div className="alumni-img desktop">
            <StaticImage
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582284115/Group-11266_mdktj7.jpg"
              alt="OUR ALUMNI NOW WORK IN"
              placeholder="none"
            />
          </div>

          <div className="alumni-img mob">
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582544785/Group_11263_pfx5il.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
