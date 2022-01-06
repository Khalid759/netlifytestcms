import React from "react";

import "./styles.scss";

const Overview = () => {
  return (
    <div className="corporate-training-overview">
      <div className="inner-container">
        <div className="expertise-areas">
          <h2 className="area-title">
            <b>OUR EXPERTISE</b> AREAS
          </h2>

          <div className="area-desc">
            Kraftshala does corporate training in marketing, sales and digital
            marketing. We have conducted training programs for companies like
            HUL, Myntra, Taco Bell and many more.
          </div>

          <div className="area-cards">
            <div className="area-card">
              <div className="card-head">
                <div className="area-img">
                  <img
                    src="https://res.cloudinary.com/judiscloud/image/upload/v1583158202/bb_icon.png"
                    alt=""
                  />
                </div>

                <h2 className="area-head">Brand Building</h2>
              </div>

              <div className="card-content">
                <ul>
                  <li>
                    <h3>Brief writing</h3>
                  </li>
                  <li>
                    <h3>Insight discovery</h3>
                  </li>
                  <li>
                    <h3>Cultural Insights</h3>
                  </li>
                  <li>
                    <h3>Creative Evaluation</h3>
                  </li>
                  <li>
                    <h3>Brand Purpose Brand</h3>
                  </li>
                  <li>
                    <h3>Brand Personality</h3>
                  </li>
                  <li>
                    <h3>Invoking action through copies</h3>
                  </li>
                  <li>
                    <h3>The Marketing Process</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="area-card">
              <div className="card-head">
                <div className="area-img">
                  <img
                    src="https://res.cloudinary.com/judiscloud/image/upload/v1583158219/sl_icon.png"
                    alt=""
                  />
                </div>

                <h2 className="area-head">Sales Leadership</h2>
              </div>

              <div className="card-content">
                <ul>
                  <li>
                    <h3>From sales leaders to business</h3>
                  </li>
                  <li>
                    <h3>Using Storytelling in Sales</h3>
                  </li>
                  <li>
                    <h3>Objection Handling</h3>
                  </li>
                  <li>
                    <h3>Driving excellence in execution</h3>
                  </li>
                  <li>
                    <h3>Influencing through persuasion</h3>
                  </li>
                  <li>
                    <h3>persuasion Stakeholder</h3>
                  </li>
                  <li>
                    <h3>Stakeholder Management</h3>
                  </li>
                  <li>
                    <h3>Bandwidth Expansion</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="area-card">
              <div className="card-head">
                <div className="area-img">
                  <img
                    src="https://res.cloudinary.com/judiscloud/image/upload/v1583158210/dm_icon.png"
                    alt=""
                  />
                </div>

                <h2 className="area-head">Digital Marketing</h2>
              </div>

              <div className="card-content">
                <ul>
                  <li>
                    <h3>Decoding the brief from a brand’s</h3>
                  </li>
                  <li>
                    <h3>Precision Marketing</h3>
                  </li>
                  <li>
                    <h3>Consumer Deep Dive</h3>
                  </li>
                  <li>
                    <h3>Make plans which impact the brand metrics</h3>
                  </li>
                  <li>
                    <h3>Writing copies that convert</h3>
                  </li>
                  <li>
                    <h3>Ecommerce Marketing</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="training-modules">
        <div className="inner-container module-text">
          <div>
            We create{" "}
            <b>
              <span className="big-yellow-line">
                corporate training modules with your business context and to
                drive
              </span>{" "}
              your business objectives.
            </b>{" "}
            We have been on the other side and know exactly what not to do in
            these sessions!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
