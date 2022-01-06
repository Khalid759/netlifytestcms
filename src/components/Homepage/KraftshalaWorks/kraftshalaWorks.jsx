import React from "react";
import LazyLoad from "react-lazyload";
import { data } from "./data";

import "./styles.scss";

const KraftshalaWorks = () => {
  return (
    <div className="home-kraftshala-works">
      <div className="container">
        <h2 className="kraftshala-works-head">
          KRAFTSHALA WORKS BECAUSE{" "}
          <span className="bold-text"> IT WORKS DIFFERENTLY</span>
        </h2>

        <div className="kraftshala-works-cards">
          {data.map((info) => {
            return (
              <div key={info.id} className="kraftshala-works-card">
                <div className="kf-works-card-img">
                  <LazyLoad height={200}>
                    <div>
                      <img
                        className="desktop-img"
                        src={info.imgURL}
                        alt={info.seoTitle}
                        title={info.seoTitle}
                      />
                      <div className="kf-works-svg-div">
                        {info.betterIcon && (
                          <div className="better-icon">
                            <svg
                              className="better1"
                              width="43"
                              height="64"
                              viewBox="0 0 43 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.5008 6.09132L21.5 2.07236L22.4992 6.09132C25.217 17.0232 32.2568 26.3683 41.9833 32C32.2568 37.6317 25.217 46.9768 22.4992 57.9087L21.5 61.9276L20.5008 57.9087C17.783 46.9768 10.7432 37.6317 1.01666 32C10.7432 26.3683 17.783 17.0232 20.5008 6.09132Z"
                                stroke="#FFB800"
                              />
                            </svg>

                            <svg
                              className="better2"
                              width="21"
                              height="32"
                              viewBox="0 0 21 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2262 3.24657L10.5 2.11885L10.7738 3.24657C12.0635 8.55742 15.3912 13.1341 20.0179 16C15.3912 18.8659 12.0635 23.4426 10.7738 28.7534L10.5 29.8811L10.2262 28.7534C8.93649 23.4426 5.60883 18.8659 0.982146 16C5.60883 13.1341 8.93649 8.55742 10.2262 3.24657Z"
                                stroke="#FFB800"
                              />
                            </svg>

                            <svg
                              className="better3"
                              width="43"
                              height="64"
                              viewBox="0 0 43 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.5008 6.09132L21.5 2.07236L22.4992 6.09132C25.217 17.0232 32.2568 26.3683 41.9833 32C32.2568 37.6317 25.217 46.9768 22.4992 57.9087L21.5 61.9276L20.5008 57.9087C17.783 46.9768 10.7432 37.6317 1.01666 32C10.7432 26.3683 17.783 17.0232 20.5008 6.09132Z"
                                stroke="#FFB800"
                              />
                            </svg>

                            <svg
                              className="better4"
                              width="21"
                              height="32"
                              viewBox="0 0 21 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2262 3.24657L10.5 2.11885L10.7738 3.24657C12.0635 8.55742 15.3912 13.1341 20.0179 16C15.3912 18.8659 12.0635 23.4426 10.7738 28.7534L10.5 29.8811L10.2262 28.7534C8.93649 23.4426 5.60883 18.8659 0.982146 16C5.60883 13.1341 8.93649 8.55742 10.2262 3.24657Z"
                                stroke="#FFB800"
                              />
                            </svg>
                          </div>
                        )}

                        {info.lineIcon && (
                          <div className="line-icon">
                            <svg
                              width="218"
                              height="103"
                              viewBox="0 0 218 103"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <line
                                className="line4"
                                x1="111"
                                y1="1"
                                x2="111"
                                y2="31"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <line
                                className="line7"
                                x1="217"
                                y1="102"
                                x2="187"
                                y2="102"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <line
                                className="line1"
                                x1="31"
                                y1="102"
                                x2="1"
                                y2="102"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <line
                                className="line5"
                                x1="171.203"
                                y1="21.4059"
                                x2="152.406"
                                y2="44.7873"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <line
                                className="line3"
                                x1="62.6453"
                                y1="44.7862"
                                x2="43.8472"
                                y2="21.4061"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <line
                                className="line2"
                                x1="37.3258"
                                y1="68.6068"
                                x2="9.31923"
                                y2="57.8536"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <line
                                className="line6"
                                x1="200.044"
                                y1="57.8537"
                                x2="172.036"
                                y2="68.6048"
                                stroke="#FFB800"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        )}

                        {info.arrowIcon && (
                          <div>
                            <svg
                              className="placement_arrow1"
                              width="67"
                              height="64"
                              strokeWidth="1"
                              viewBox="0 0 67 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M55.6183 49.2446L55.3958 50.2196L55.6183 49.2446ZM65.7226 50.5254L55.8409 48.2697L55.3958 50.2196L65.2775 52.4752L65.7226 50.5254ZM55.8409 48.2697C33.5689 43.1858 15.2559 27.4097 6.93124 6.1356L5.06875 6.86439C13.6346 28.7551 32.4783 44.9883 55.3958 50.2196L55.8409 48.2697Z"
                                stroke="#FFB800"
                              />
                            </svg>

                            <svg
                              className="placement_arrow2"
                              width="68"
                              height="91"
                              strokeWidth="1"
                              viewBox="0 0 68 91"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M59.4325 4.38584L58.4475 4.21346L58.4475 4.21346L59.4325 4.38584ZM60.3184 3.42544C60.001 2.97344 59.3774 2.86429 58.9254 3.18165L51.5596 8.35332C51.1076 8.67067 50.9985 9.29436 51.3159 9.74636C51.6332 10.1984 52.2569 10.3075 52.7089 9.99015L59.2562 5.39311L63.8532 11.9404C64.1706 12.3924 64.7943 12.5016 65.2463 12.1842C65.6983 11.8668 65.8074 11.2432 65.4901 10.7912L60.3184 3.42544ZM40.5 36.5001L41.0512 37.3344L41.0908 37.3083L41.1277 37.2785L40.5 36.5001ZM60.4175 4.55823L60.485 4.17245L58.515 3.82769L58.4475 4.21346L60.4175 4.55823ZM41.1277 37.2785C51.3086 29.0682 58.163 17.4414 60.4175 4.55823L58.4475 4.21346C56.2764 16.6194 49.6759 27.8155 39.8722 35.7217L41.1277 37.2785ZM9.49268 88.1204C11.9945 67.4813 23.6974 48.8003 41.0512 37.3344L39.9487 35.6657C22.1133 47.4499 10.0807 66.6488 7.50722 87.8797L9.49268 88.1204Z"
                                stroke="#FFB800"
                              />
                            </svg>

                            <svg
                              className="placement_arrow3"
                              width="33"
                              height="90"
                              strokeWidth="1"
                              viewBox="0 0 33 90"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.3587 10.5232L19.2392 10.0491L18.3587 10.5232ZM13.7874 0.542158C13.2584 0.383458 12.701 0.683642 12.5423 1.21263L9.9561 9.83306C9.79741 10.3621 10.0976 10.9195 10.6266 11.0782C11.1556 11.2369 11.7131 10.9368 11.8718 10.4078L14.1706 2.74516L21.8332 5.04397C22.3622 5.20267 22.9196 4.90249 23.0783 4.37349C23.237 3.8445 22.9369 3.28702 22.4079 3.12832L13.7874 0.542158ZM19.2392 10.0491L14.3806 1.02589L12.6196 1.97408L17.4782 10.9972L19.2392 10.0491ZM6.6861 87.7271C27.9577 67.6539 33.1053 35.8007 19.2392 10.0491L17.4782 10.9972C30.9155 35.9523 25.9271 66.8202 5.31345 86.2725L6.6861 87.7271Z"
                                stroke="#FFB800"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <img
                      className="mobile-img"
                      src={info.mobURL}
                      alt={info.seoTitle}
                      title={info.seoTitle}
                    />
                  </LazyLoad>
                </div>

                <div
                  className="kf-works-card-title"
                  dangerouslySetInnerHTML={{ __html: info.title }}
                />

                <div
                  className="kf-works-card-description"
                  dangerouslySetInnerHTML={{ __html: info.description }}
                />

                <div className="kf-works-card-btn">
                  <a href={info.link} target="_blank" rel="noreferrer">
                    {info.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KraftshalaWorks;
