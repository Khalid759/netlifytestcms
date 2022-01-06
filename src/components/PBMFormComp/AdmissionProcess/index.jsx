import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function AdmissionProcess(props) {
  return (
    <div className="pbm-form-main-admission">
      <div className="admission-form-container">
        <div>
          <h2 className="admission-section-title">Admissions Process</h2>

          <span>
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11278.png"
              alt="title underlines"
              placeholder="none"
            />
          </span>
        </div>

        <div className="admission-section-subtitle">
          We select applicants based on their performance in the Screening Test
          and overall profile. It's relevant for both current and aspiring B2C
          and B2B brand builders. On completion of your application,
        </div>

        <div className="admission-timline">
          <div className="admssion-vl"></div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 1: Appear for the Screening Test
              </h3>
            </div>

            <div className="admission-description">
              Here, you will need to decode an ad. You will be given prep
              material which will be a set of videos containing proprietary
              frameworks of Kraftshala.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 2: Attend the LIVE discussion (in small batches)
              </h3>
            </div>

            <div className="admission-description">
              This will be on the questions asked in the Test. While we can only
              accept a handful of students, we’d like to help everyone who
              attempted the Test.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionProcess;
