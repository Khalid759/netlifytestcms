import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import StudentsMobile from "./Mobile/index";
import { data } from "./data";
import { Link } from "gatsby";

import "./styles.scss";

const StudentsBridgeGap = () => {
  const [selectedID, setSelectedID] = useState("content1");

  return (
    <React.Fragment>
      <div className="home-students-bridge-gap">
        <div className="container">
          <h2 className="home-students-title">
            WE HAVE HELPED <span>THOUSANDS OF STUDENTS</span>{" "}
            <span>BRIDGE THE GAP</span>
          </h2>

          <div className="home-students-container">
            <div className="home-student-say">
              {data.map((info, k) => {
                return (
                  <div key={info.contentID} className="home-student-content">
                    {info.contentID === selectedID && (
                      <React.Fragment>
                        <div className="home-student-deco-img">
                          <LazyLoad>
                            <img
                              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/deco-comma.png"
                              alt="quotes"
                              title="quotes"
                            />
                          </LazyLoad>
                        </div>
                        <div className="home-student-name">{info.name}</div>
                        <div className="home-student-company">
                          {info.company}
                        </div>
                        <div className="home-student-program">
                          {info.program}
                        </div>
                        <div
                          className="home-student-description"
                          dangerouslySetInnerHTML={{ __html: info.description }}
                        />
                      </React.Fragment>
                    )}
                  </div>
                );
              })}

              <div className="home-student-more-stories">
                <Link to="/alumni/">Hear more such stories!</Link>
              </div>
            </div>

            <div className="home-student-image">
              <div className="home-student-bg">
                <LazyLoad>
                  <img
                    src="https://kfwebassets.s3.ap-south-1.amazonaws.com/Homepage/students-bridge-gap-bg.png"
                    alt="spiral"
                    title="spiral"
                  />
                </LazyLoad>
              </div>
              <div className="home-student-group">
                {data.map((info) => {
                  return (
                    <div
                      onMouseOver={() => setSelectedID(info.contentID)}
                      onFocus={() => {}}
                      key={info.id}
                      className={
                        selectedID === info.contentID
                          ? "imageBx active"
                          : "imageBx"
                      }
                      id={info.studentID}
                      data-id={info.contentID}
                      aria-hidden="true"
                    >
                      <LazyLoad>
                        <img
                          src={info.imageURL}
                          alt={
                            info.name +
                            ", " +
                            info.program +
                            ", " +
                            info.company
                          }
                          title={
                            info.name +
                            ", " +
                            info.program +
                            ", " +
                            info.company
                          }
                        />
                      </LazyLoad>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <StudentsMobile data={data} />
    </React.Fragment>
  );
};

export default StudentsBridgeGap;
