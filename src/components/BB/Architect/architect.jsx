import React from "react";
import { architectData } from "./data";

import "./styles.scss";

function Architect() {
  return (
    <div className="bb-architect-container" id="architect">
      <h2 className="bb-highlight-heading">
        PROGRAM <b>ARCHITECTS</b>
      </h2>
      <p className="bb-program-architect-head-desc">
        Meet your course instructors
      </p>
      <div className="bb-architect-cards">
        {architectData.map((item, key) => {
          return (
            <div className="bb-architect-card" key={key}>
              <div
                className={
                  "bb-architects-card-profile " +
                  (key % 2 !== 0 ? "bb-reverse-grid" : "")
                }
              >
                <a
                  href={item.linkedin}
                  target="_blank"
                  className="bb-architect-link"
                  rel="noreferrer"
                >
                  <img
                    src={item.image}
                    className="bb-architects-card-profile-img"
                    alt={item.name + " " + item.designation}
                    title={item.name + " " + item.designation}
                  />
                </a>
                <div className="bb-architects-card-profile-content">
                  <p className="bb-architects-card-profile-content-name">
                    {item.name}
                  </p>
                  <p className="bb-architects-card-profile-content-desig">
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
