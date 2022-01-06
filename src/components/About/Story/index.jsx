import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function Story() {
  return (
    <div className="about-us-main-container">
      <div className="about-us-story-container">
        <div>
          <h2 className="about-us-story-section-title">Our Story</h2>

          <span className="about-us-story-underline-img">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11278.png"
              alt="title underlines"
              placeholder="none"
            />
          </span>
        </div>

        <div className="about-us-story-section-subtitle">
          Kraftshala was founded in 2016 by Varun Satia (ex-Nestle, ex-FMS) and
          Eshu Sharma (Ex-HUL, ex-FMS) with the premise that most jobs (even
          entry-level) require candidates to start delivering from Day 1 and
          that’s not how anyone is training people today!
        </div>

        <div className="about-us-story-timline">
          <div className="about-us-story-admssion-vl"></div>

          <div className="about-us-story-section">
            <div className="about-us-story-title">
              <div className="about-us-story-deco"></div>
              <div className="about-us-story-description">
                <div className="special-text">2017</div> - We began our journey
                by offering an online program in marketing to current B School
                students, starting with the top 12 campuses (IIMs/ ISB/ XLRI
                etc).
              </div>
            </div>
          </div>

          <div className="about-us-story-section">
            <div className="about-us-story-title">
              <div className="about-us-story-deco"></div>

              <div className="about-us-story-description">
                <div className="special-text">2018</div> - Expanded to 50
                B-School campuses and 3 programs (Brand Building, Digital Brand
                Building and Sales Leadership) of 8-11 weeks each.
              </div>
            </div>
          </div>

          <div className="about-us-story-section">
            <div className="about-us-story-title">
              <div className="about-us-story-deco"></div>

              <div className="about-us-story-description">
                <div className="special-text">2019 </div>- The second audience
                we created a program for was working professionals, called
                Professional Brand Management in the Digital Age (PBM) taken up
                by early stage managers to accelerate their marketing careers
              </div>
            </div>
          </div>
          <div className="about-us-story-section">
            <div className="about-us-story-title">
              <div className="about-us-story-deco"></div>

              <div className="about-us-story-description">
                <div className="special-text">2020</div> - In late 2020, we
                launched a digital marketing program called The Marketing
                Launchpad for entry-level roles. This is a 20-week program where
                students train full-time (10am-8pm) and pay the fees only once
                they get a job with min. 4.5 L CTC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
