import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { fullTimeChart } from "./data";

import "./styles.scss";

const CourseFormat = () => {
  return (
    <div className="ice-course-format-bg">
      <div className="ice-course-format">
        <div className="ice-cf-title">Course format</div>

        <div className="ice-cf-subtitle mtop-1">
          Follow a rigorous and yet enjoyable structure that will challenge you.
          It will get you results and not just a degree. This varies from
          program to program but the below structure will give you a broad
          understanding of our pedagogy
        </div>

        <div className="ice-full-time">
          <div className="ice-full-time-head">
            Full-time Program (10 AM - 8 PM):
          </div>
          <div className="ice-full-time-program"> Marketing Launchpad</div>

          <div className="ice-full-time-chart">
            {fullTimeChart.map((info) => {
              return (
                <div className="time-div" key={info.id}>
                  <div className="time">{info.time}</div>
                  <div className="about">{info.about}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="divide"></div>

        <div className="ice-part-time">
          <div className="ice-part-time-head">Part-time programs:</div>
          <div className="ice-part-time-program">
            Professional Brand management in the Digital age & BSchool programs
          </div>

          <div className="ice-part-time-img-mob">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/IndustryCredsExperience/Group+11233.png"
              alt="PBM Course Format"
              placeholder="none"
            />
          </div>

          <div className="ice-part-time-img-desk">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/IndustryCredsExperience/part-time-chart-desk.png"
              alt="PBM Course Format"
              placeholder="none"
            />
          </div>

          <div className="ice-part-time-description">
            IN ADDITION{" "}
            <span className="yellow-txt">GET HELP WHEN YOU NEED IT</span>
            <span className="new-line">
              We're in this together. Student Success Advisors are just a
              message away whenever you need extra help, so your learning is
              never stalled while you wait around for a response.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFormat;
