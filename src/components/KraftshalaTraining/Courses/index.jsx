import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";
import { Link } from "gatsby";

const Courses = () => {
  return (
    <div className="kf-hiring-courses">
      <div className="inner-container">
        <div className="title">
          <h3>Our students are trained on:</h3>
        </div>

        <div className="course-cards">
          <div className="card">
            <Link to="/brand-building/">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11267.png"
                placeholder="none"
                alt="Brand Building"
              />
            </Link>
          </div>
          <div className="card">
            <Link to="/sales-leadership/">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11268.png"
                placeholder="none"
                alt="Sales Leadership"
              />
            </Link>
          </div>
          <div className="card">
            <Link to="/digital-brand-building/">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11269.png"
                placeholder="none"
                alt="Digital Brand Building"
              />
            </Link>
          </div>
          <div className="card">
            <Link to="/professional-brand-management-in-the-digital-age/">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11270.png"
                placeholder="none"
                alt="Professional Brand Management"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
