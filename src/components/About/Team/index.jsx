import React from "react";
import "./styles.scss";
import { teamData } from "./data";

const Team = () => {
  return (
    <div className="about-us-team-container">
      <div className="about-us-team-head">
        <p className="about-us-team-head-heading">
          meet our <b>team</b>
        </p>
        <div className="about-us-team-head-desc">
          We’re building a diverse team ready to change the future of education.
        </div>
      </div>
      <div className="about-us-team-col-cards">
        {teamData.map((item, key) => (
          <div className="about-us-team-card" key={key}>
            <img
              className="about-us-team-img"
              src={item.image}
              alt={item.name + ", " + item.designation}
            />
            <div className="about-us-team-card-content">
              {item.linkedin.length ? (
                <a
                  className="about-us-team-card-content-linkedin"
                  href={item.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="about-us-team-linkedin-link-img"
                    src="https://res.cloudinary.com/judiscloud/image/upload/v1585025451/LinkedIn.svg"
                    alt="linkedin"
                  />
                </a>
              ) : null}
              <p className="about-us-team-card-content-name">{item.name}</p>
              <p className="about-us-team-card-content-role">
                {item.designation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="about-us-team-btn-wrap">
        <a
          href="https://www.kraftshala.com/work-with-us/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="about-us-team-join-btn">Work with Us</button>
        </a>
        <a
          href="https://www.kraftshala.com/alumni/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="about-us-team-join-btn">
            Hear from our Alumni
          </button>
        </a>
      </div>
    </div>
  );
};

export default Team;
