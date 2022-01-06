import React from "react";

import "./styles.scss";

const Standards = () => {
  return (
    <div className="kf-standards-container">
      <div className="inner-container standard-div">
        <div className="standard-title">
          <h2>
            Standards as high <b>as your role demands</b>
          </h2>

          <p>
            {" "}
            INDUSTRYCreds™, scores are evaluation scores which are calculated on
            the basis of 9 parameters problem solving, conceptual mastery,
            curiosity to fetch for information when its not available, ability
            to go above and beyond and many more
          </p>
        </div>

        <div className="standard-points">
          <span className="arrow-one">
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582281656/Group_11265_j37cw3.svg"
              alt=""
            />
          </span>

          <span className="arrow-two">
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582281656/Group_11265_j37cw3.svg"
              alt=""
            />
          </span>

          <span className="arrow-three">
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1582281656/Group_11265_j37cw3.svg"
              alt=""
            />
          </span>

          <div className="point-div">
            <div className="num-deco">1.</div>

            <div className="point-desc">
              Only <span className="yellow-text">1 out of 10 applicants</span>{" "}
              is offered admission in each cohort
            </div>
          </div>

          <div className="point-div">
            <div className="num-deco">2.</div>

            <div className="point-desc">
              They go through 1:1 Interviews, cognitive tests, psychometric
              tests, writing tests, and multiple deadlines{" "}
              <span className="yellow-text">
                to get INDUSTRYCreds™ certified
              </span>
            </div>
          </div>

          <div className="point-div">
            <div className="num-deco">3.</div>

            <div className="point-desc">
              <span className="yellow-text">Only 3-5 students</span> are
              shortlisted for each hiring partner
            </div>
          </div>

          <div className="point-div">
            <div className="num-deco">4.</div>

            <div className="point-desc">
              <span className="yellow-text">1 out of 3 recommendations</span>{" "}
              usually get hired
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;
