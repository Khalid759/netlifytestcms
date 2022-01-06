import React from "react";

import { topFeedback } from "./data";

import Card3 from "../../TestimonialCard/Card3/index";

import "./styles.scss";

const ClientFeedback = () => {
  return (
    <div className="corporate-training-feedback">
      <h1 className="feedback-title inner-container">
        HERE'S THE FEEDBACK FROM OUR <b>CLIENTS AND THE</b>{" "}
        <span className="new-line">
          <b>PARTICIPANTS FOR OUR TRAININGS</b>
        </span>
      </h1>

      <div className="feedback-section">
        {topFeedback.map((info) => {
          return (
            <div key={info.id} className="feedback-layout">
              <div className="inner-container">
                <Card3 info={info} />

                <div className="sub-feedbacks">
                  {info.subFeedbacks.map((feedback) => {
                    return (
                      <div key={feedback.id} className="sub-card">
                        <div className="sub-description">
                          {feedback.description}.
                        </div>

                        <div className="sub-name">- {feedback.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientFeedback;
