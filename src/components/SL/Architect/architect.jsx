import React from "react";
import { architectData } from "./data";

import "./styles.scss";

function Architect() {
  return (
    <div className="sl-architect-container" id="architect">
      <h2 className="sl-highlight-heading">
        PROGRAM <b>ARCHITECTS</b>
      </h2>
      <p className="sl-program-architect-head-desc">
        Meet your course instructors
      </p>
      <div className="sl-architect-cards">
        {architectData.map((item, key) => {
          return (
            <div className="sl-architect-card" key={key}>
              <div
                className={
                  "sl-architects-card-profile " +
                  (key % 2 !== 0 ? "sl-reverse-grid" : "")
                }
              >
                <a
                  href={item.linkedin}
                  target="_blank"
                  className="sl-architect-link"
                  rel="noreferrer"
                >
                  <img
                    src={item.image}
                    className="sl-architects-card-profile-img"
                    alt={item.name + " " + item.designation}
                    title={item.name + " " + item.designation}
                  />
                </a>
                <div className="sl-architects-card-profile-content">
                  <p className="sl-architects-card-profile-content-name">
                    {item.name}
                  </p>
                  <p className="sl-architects-card-profile-content-desig">
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
