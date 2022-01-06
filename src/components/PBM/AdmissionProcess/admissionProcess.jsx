import React from "react";
// import { Link } from "gatsby";

import "./styles.scss";

function AdmissionProcess() {
  return (
    <div className="pbm-main-admission" id="admissions">
      <h2 className="admission-section-title">Who Should Apply?</h2>

      <div className="admission-section-subtitle">
        This program is designed for people with potential to become marketing
        leaders. We select applicants based on their performance in the
        Screening Test and overall profile. It's relevant for both current and
        aspiring B2C and B2B brand builders.
      </div>

      <div className="admission-container">
        <h2 className="admission-section-title">Admissions Process</h2>

        {/* <div className="admission-section-subtitle">
          Batch Starts: 18th October
        </div> */}

        <div className="admission-timline">
          <div className="admssion-vl"></div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 1: Apply for the brand management course
              </h3>
            </div>

            <div className="admission-description">
              Fill up the form on the website and choose your screening test
              date out of the 2 given weekend slots.The duration of the test is
              about 1.5 hours and you can give it over the weekend as per your
              schedule.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 2: Prepare for the test / Address your queries
              </h3>
            </div>

            <div className="admission-description">
              You will be given practice material for the Screening Test
              beforehand. These will be a set of videos containing proprietary
              frameworks of Kraftshala. You will also be connecting with our
              counsellors at this point to address any queries that you may
              have.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">
                Step 3: Appear for the Screening Test
              </h3>
            </div>

            <div className="admission-description">
              You will receive the details of the test at the start of the
              weekend. The test will be followed up by an invitation to a
              discussion (in small batches) on the questions asked in the Test.
              While we can only accept a handful of students, we’d like to help
              everyone who attempted the Test to become better marketing
              professionals.
            </div>
          </div>

          <div className="admission-section">
            <div className="admission-title">
              <div className="admission-deco"></div>

              <h3 className="admission-title-text">Step 4: Enrollment</h3>
            </div>

            <div className="admission-description">
              If you clear the screening test, you are in! Welcome to the ride
              <span role="img" aria-label="smiley">
                🙂
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionProcess;
