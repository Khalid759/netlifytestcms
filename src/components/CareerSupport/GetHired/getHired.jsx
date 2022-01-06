import React from "react";
import "./styles.scss";
import { getHiredData } from "./data";

const GetHired = () => {
  return (
    <div className="career-hired-container">
      <div className="career-hired-section">
        <h2 className="career-hired-section-title">
          WE’LL HELP YOU <b>GET HIRED</b>
        </h2>
        {getHiredData.map((info, key) => {
          return (
            <div
              className={
                "career-hired-framework-container " +
                (info.id % 2 === 0
                  ? "career-hired-framework-container-withBg"
                  : "")
              }
              key={key}
            >
              <div className="career-hired-framework">
                <div className="career-hired-framework-wrap">
                  <h2 className="career-hired-yellow-line">{info.title}</h2>
                  <div className="career-hired-framework-description">
                    {info.description}
                  </div>
                </div>
                <div className="career-hired-img">
                  <img src={info.image} alt={info.alt} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetHired;
