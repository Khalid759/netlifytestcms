import React from "react";
import { architectData } from "./data";

import "./styles.scss";

function Architect() {
  return (
    <div className="dbb-architect-container" id="architect">
      <h2 className="dbb-highlight-heading">
        PROGRAM <b>ARCHITECTS</b>
      </h2>
      <p className="dbb-program-architect-head-desc">
        Meet your course instructors
      </p>
      <div className="dbb-architect-cards">
        {architectData.map((item, key) => {
          return (
            <div className="dbb-architect-card" key={key}>
              <div
                className={
                  "dbb-architects-card-profile " +
                  (key % 2 !== 0 ? "dbb-reverse-grid" : "")
                }
              >
                <a
                  href={item.linkedin}
                  target="_blank"
                  className="dbb-architect-link"
                  rel="noreferrer"
                >
                  <img
                    src={item.image}
                    className="dbb-architects-card-profile-img"
                    alt={item.name + " " + item.designation}
                    title={item.name + " " + item.designation}
                  />
                </a>
                <div className="dbb-architects-card-profile-content">
                  <p className="dbb-architects-card-profile-content-name">
                    {item.name}
                  </p>
                  <p className="dbb-architects-card-profile-content-desig">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Architect;
