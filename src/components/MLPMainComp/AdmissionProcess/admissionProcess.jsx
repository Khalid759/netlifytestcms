import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./styles.scss";

function AdmissionProcess(props) {
  return (
    <div className="mlp-main-admission">
      <div className="admission-container">
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
          We receive lots of applications for every seat. Students are selected
          through a week-long process where they are tested on their quant and
          logical aptitude, communications skills, marketing acumen and overall
          learnability.
        </div>

        <div className="admission-section-subtitle">
          Here's a quick overview:
        </div>

        <div className="admission-timline">
          <div className="admssion-vl"></div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 1: Apply to Kraftshala
              </h3>
            </div>

            <div className="admission-description">
              Tell us briefly about your background, and book a slot for the
              Screening Test.
              <Link
                to={`/marketing-launchpad-application-form/${props.urlParams}`}
              >
                <div className="admission-section-btn">Apply Now</div>
              </Link>
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 2: Appear for the Screening Test
              </h3>
            </div>

            <div className="admission-description">
              Take the Common Screening Test, which evaluates you on your
              logical ability, marketing acumen, your overall learnability and
              written communication (only for content and social media
              applicants). Practice material will be shared with you as soon as
              you finish applying in Step 1. This is an elimination step.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">Step 3: Submit your SOP</h3>
            </div>

            <div className="admission-description">
              If shortlisted, you will be asked to submit a Statement of Purpose
              for joining the program, along with a few additional details. We
              will release the final offers for both specialisations (digital
              marketing, content & social media) post this stage.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">Step 4: Enrollment</h3>
            </div>

            <div className="admission-description">
              Based on your performance in the Screening Test, SOP and your
              overall profile, we will extend an offer to join a specialisation
              under the Marketing Launchpad.
              <div className="special-text">
                Welcome to the ride{" "}
                <span role="img" aria-label="smiley">
                  🙂
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionProcess;
