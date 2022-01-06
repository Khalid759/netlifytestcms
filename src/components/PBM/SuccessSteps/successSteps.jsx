import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { Link } from "gatsby";

import "./styles.scss";

function SuccessSteps() {
  return (
    <div className="pbm-success-container">
      <div className="pbm-success-header">
        <h2 className="pbm-success-head">
          How will this help me succeed in marketing roles?
        </h2>
        <div className="pbm-success-desc">
          Unlike campuses where you are hired for potential, later hiring /
          internal movements happen on the basis of your ability to deliver from
          Day 1. In that context, career planning laterally requires a different
          approach.
          <br />
          <br />
          With Kraftshala, you will go through the process of planning your
          career with{" "}
          <span>
            CAMP (Career Acceleration Module for Professionals). It paves the
            shortest path to your dream roles.
          </span>
        </div>
      </div>
      <div className="pbm-success-footer">
        <div className="pbm-success-ft-content">
          <div className="pbm-success-step">
            <div className="pbm-success-ft-head">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Vector.png"
                alt="Sharpen your career strategy"
                title="Sharpen your career strategy"
                placeholder="none"
              />
              <h3 className="pbm-success-ft-head">
                {" "}
                Step #1 - Sharpen your career strategy
              </h3>
            </div>
            <h4 className="pbm-success-ft-subHeader">
              What marketing roles should you apply for? What internal roles /
              projects should you take up?
            </h4>
            <div className="pbm-success-ft-desc">
              In this step, instead of wasting time continuously ‘carpet
              bombing’ anything under the Sun, you focus on strategically
              building your career plan with expert inputs such that it
              progressively takes you closer to your dream role. Not carpet
              bombing, but focused shooting.
            </div>
            <div className="pbm-success-step-border"></div>
            <div className="pbm-success-ft-head pbm-success-ft-headCol1">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Vector.png"
                alt="Work towards that goal"
                title="Work towards that goal"
                placeholder="none"
              />
              <h3 className="pbm-success-ft-head">
                Step #2 - Work towards that goal
              </h3>
            </div>
            <h4 className="pbm-success-ft-subHeader">
              How do you maximise your chances of getting a shortlist and
              cracking an interview?
            </h4>
            <div className="pbm-success-ft-desc">
              Here you focus on making your profile and your candidature work
              towards this new marketing career. Unlike campuses where everyone
              tries to make similar profiles, here you will undergo a very
              personalised and individual prep depending on YOUR experiences and
              YOUR goals.
            </div>
          </div>
          <div className="pbm-step-right">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/diptimaya-views.png"
              alt="Diptimaya Sarangi Manager(BD) - Brand Ads at Flipkart"
              title="Diptimaya Sarangi Manager(BD) - Brand Ads at Flipkart"
              placeholder="none"
            />
          </div>
        </div>
        <div className="pbm-success-ft-content">
          <div className="pbm-success-step">
            <div className="pbm-success-ft-head">
              <StaticImage
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Vector.png"
                alt="Get a lift in actual placements"
                title="Get a lift in actual placements"
                placeholder="none"
              />
              <h3 className="pbm-success-ft-head">
                Step #3 - Get a lift in actual placements
              </h3>
            </div>
            <div className="pbm-success-ft-desc extra-margin">
              <h4>
                1. Insights on <span>highlighting your candidature</span> for
                relevant recruiters
              </h4>{" "}
              <br />
              Once you complete the program, you get INDUSTRYCreds™ certified,
              which will give companies an understanding of your inclination and
              relevance to marketing roles. You will get insights on how to make
              your profiles stand out in front of relevant recruiters on various
              job platforms
            </div>
            <div className="pbm-success-ft-desc">
              <h4>
                2. <span>Targeted referrals </span>(Once you get INDUSTRYCreds™
                certified){" "}
              </h4>
              <br />
              Once you have completed the program and become endorsed by
              INDUSTRYCreds™ certification of Kraftshala, your profile will be
              pushed to our network of partners looking to hire, based on the
              right fit.
            </div>
          </div>
          <div className="pbm-step-right">
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/PBM_main/vibhu-views.png"
              alt="Vibhu Joshi Assistant Brand Manager, The Moms Co."
              title="Vibhu Joshi Assistant Brand Manager, The Moms Co."
              placeholder="none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessSteps;
