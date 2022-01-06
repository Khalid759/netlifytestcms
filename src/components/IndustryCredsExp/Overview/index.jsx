import React from "react";
import LazyLoad from "react-lazyload";
import { overviewpoints } from "./data";
import "./styles.scss";

const Overview = () => {
  return (
    <div className="ice-overview">
      <h2 className="ice-overview-title">
        How are
        <span className="yellow-txt">
          {" "}
          INDUSTRYCreds™ certified students
        </span>{" "}
        <span className="desk-newline">ready to deliver from Day 1?</span>
      </h2>

      <div className="ice-overview-points-mob ice-overview-container mtop-2">
        {overviewpoints.map((point) => {
          return (
            <div className="ice-overview-point mtop-2" key={point.id}>
              <div className="point-head">
                <div className="point-img">
                  <LazyLoad>
                    <img src={point.mobImg} alt={point.name} />
                  </LazyLoad>
                </div>
                <h3 className="point-name">{point.name}</h3>
              </div>

              <div
                className="point-description"
                dangerouslySetInnerHTML={{ __html: point.description }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="ice-overview-points-desk mtop-2">
        <div className="overview-point-div ice-overview-container">
          <div className="overview-point-img">
            <LazyLoad>
              <img
                src={overviewpoints[0].deskImg}
                alt={overviewpoints[0].name}
              />
            </LazyLoad>
          </div>

          <div className="overview-point-content">
            <div className="overview-point-name">{overviewpoints[0].name}</div>
            <div
              className="overview-point-description"
              dangerouslySetInnerHTML={{
                __html: overviewpoints[0].description,
              }}
            ></div>
          </div>
        </div>

        <div className="curve-bg">
          <div className="overview-point-div reverse-flex ice-overview-container">
            <div className="overview-point-img">
              <LazyLoad>
                <img
                  src={overviewpoints[1].deskImg}
                  alt={overviewpoints[1].name}
                />
              </LazyLoad>
            </div>

            <div className="overview-point-content">
              <div className="overview-point-name">
                {overviewpoints[1].name}
              </div>
              <div
                className="overview-point-description"
                dangerouslySetInnerHTML={{
                  __html: overviewpoints[1].description,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="overview-point-div ice-overview-container">
          <div className="overview-point-img">
            <LazyLoad>
              <img
                src={overviewpoints[2].deskImg}
                alt={overviewpoints[2].name}
              />
            </LazyLoad>
          </div>

          <div className="overview-point-content">
            <div className="overview-point-name">{overviewpoints[2].name}</div>
            <div
              className="overview-point-description"
              dangerouslySetInnerHTML={{
                __html: overviewpoints[2].description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
