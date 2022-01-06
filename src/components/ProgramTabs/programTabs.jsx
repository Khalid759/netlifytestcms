import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "gatsby";
import { programs, programData } from "./data";
import "./styles.scss";

const ProgramTabs = (props) => {
  const [tabSelected, setTabSelected] = useState("1");

  return (
    <div className="program-tabs-container">
      <div className="program-tab-head">
        {programs.map((program) => {
          return (
            <h3
              key={`${program.tabID}-tab`}
              className={
                tabSelected === program.tabID
                  ? "program-tab-head-name active-tab"
                  : "program-tab-head-name"
              }
              onClick={() => setTabSelected(program.tabID)}
              aria-hidden="true"
            >
              {program.groupHead}
            </h3>
          );
        })}
      </div>

      {programData.map((info, index) => {
        return (
          <div key={index + "group"}>
            {info.groupID === tabSelected && (
              <div className="program-tab-content">
                {info.courses.map((course) => {
                  return (
                    <React.Fragment key={course.name}>
                      <div className="program-tab-card ">
                        <Link to={course.gatsbyRoute}>
                          <LazyLoad>
                            <div className="program-card-img">
                              <img
                                src={
                                  props.type
                                    ? course.image2_url
                                    : course.image_url
                                }
                                alt={course.name}
                                title={course.name}
                              />
                            </div>
                          </LazyLoad>

                          <div className="program-card-info">
                            <div className="program-card-title">
                              {course.name}
                            </div>

                            {course.trademark && (
                              <div className="program-card-trademark">
                                with INDUSTRY<b>Creds™</b> Certification
                              </div>
                            )}

                            <div
                              className="program-card-about"
                              dangerouslySetInnerHTML={{
                                __html: props.type
                                  ? course.about2
                                  : course.about,
                              }}
                            />
                          </div>
                        </Link>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <div className="program-note">
        *Please note that all programs have a screening test that you need to
        clear to secure an admission
      </div>
    </div>
  );
};

export default ProgramTabs;
