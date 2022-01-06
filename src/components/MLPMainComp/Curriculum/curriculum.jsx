import React, { useState } from "react";
import YoutubeSlider from "../YoutubeSlider/youtubeSlider";

import "./styles.scss";

function Curriculum() {
  const [tabSelected, setTabSelected] = useState("1");

  return (
    <div className="mlp-main-curriculum">
      <div className="curriculum-container">
        <h2 className="curriculum-head">
          Our digital marketing course curriculum is designed to get you hired
        </h2>
        <div className="curriculum-description">
          <span>
            The average digital marketing talent in this market knows the theory
            about tools, pulling out reports and some theory about optimizations
            - all of which is stuff that you can learn for free
          </span>

          <span>
            And in case you want to know from where, we will be happy to help
          </span>

          <span className="yellow-desc mtop-2">
            The Marketing Launchpad candidates, on the other hand, will excel
            because through our digital marketing course curriculum, they will
            be trained to do more.
          </span>
        </div>

        <div className="curriculum-weeks">
          <div className="weeks-head">Here’s a summary of the 20 weeks:</div>
          <div className="cur-tab-head">
            <h3
              className={
                tabSelected === "1"
                  ? "cur-tab-head-name active-tab"
                  : "cur-tab-head-name"
              }
              onClick={() => setTabSelected("1")}
              aria-hidden="true"
            >
              Digital Media Marketing
            </h3>
            <h3
              className={
                tabSelected === "2"
                  ? "cur-tab-head-name active-tab"
                  : "cur-tab-head-name"
              }
              onClick={() => setTabSelected("2")}
              aria-hidden="true"
            >
              Content & Social Media Marketing
            </h3>
          </div>

          <div className="forSeo">
            <h4>Team Huddles + Onboardings</h4>
            <h4>Business Fundamentals</h4>
            <h4>Communication Skills</h4>
            <h4>SEO (Search Engine Optimization)</h4>
            <h4>Introduction to Facebook Ads</h4>
            <h4>Leadership Skills</h4>
            <h4>FB Ads:</h4>
            <h4>On-Page & Tech SEO</h4>
            <h4>Google Ads:</h4>
            <h4>Off-Page SEO</h4>
            <h4>People Skills</h4>
            <h4>Work Ethics</h4>
            <h4>Amazon Ads</h4>
            <h4>ASO: App-store optimization</h4>
            <h4>CV and Interview Prop continues throughout</h4>
            <h4>Placements</h4>
            <h4>Internships</h4>
            <h4>Final placements starting INR 4.5 lakhs / year</h4>
            <h4>Team Huddles + Onboardings</h4>
            <h4>Business Fundamentals</h4>
            <h4>Writing Basics</h4>
            <h4>Communication Skills</h4>
            <h4>Social Media Management:</h4>
            <h4>Writing for Blogs</h4>
            <h4>Leadership Skills</h4>
            <h4>Influencer Management:</h4>
            <h4>Writing for Social Media</h4>
            <h4>People Skills</h4>
            <h4>Design Principles</h4>
            <h4>Writing for Website / Ads</h4>
            <h4>Work Ethics</h4>
            <h4>SEO:</h4>
            <h4>Portfolio Building</h4>
            <h4>CV and Interview Prep continues throughout</h4>
            <h4>Placements</h4>
            <h4>Internships</h4>
            <h4>Final placements starting INR 4.5 lakhs / year</h4>
          </div>

          {tabSelected === "1" && (
            <table className="mlp-curriculum-table">
              <thead>
                <tr>
                  <th className="text-yellow text-h3">Week</th>
                  <th className="text-yellow" colSpan="2">
                    <div className="text-h3">Functional skill</div>
                  </th>
                  <th className="text-yellow">
                    <div className="text-h3">Human skill</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-yellow">0</th>
                  <td colSpan="3">
                    <div className="text-h4">Team Huddles + Onboardings</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">1</th>
                  <td colSpan="2">
                    <div className="text-h4">Business Fundamentals</div>
                    <br />
                    Converting a business problem into a marketing strategy
                  </td>
                  <th rowSpan="3">
                    <div className="mobile-hide">Communication Skills</div>
                    <div className="desktop-hide text-h4">
                      Communic-
                      <br /> ation Skills
                    </div>
                  </th>
                </tr>

                <tr>
                  <th className="bg-yellow">2</th>
                  <td colSpan="2">
                    <div className="text-h4">
                      SEO (Search Engine Optimization)
                    </div>
                    <br />
                    Driving traffic and sales{" "}
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">3</th>
                  <td colSpan="2">
                    <div className="text-h4">Introduction to Facebook Ads</div>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-center">
                    Basis your scores, you get mapped to either of SEO / Paid
                    Media Track
                  </td>
                  <td rowSpan="2">
                    <div className="text-h4">Leadership Skills</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">4-6</th>
                  <td className="v-align-top">
                    <div className="text-h4">FB Ads:</div>
                    <br />
                    How to build brands and drive growth
                    <br />
                    <br />
                    <b>Integrated project</b>
                  </td>
                  <td className="v-align-top">
                    <div className="text-h4">On-Page & Tech SEO</div>
                    <br />
                    Creating and optimizing your websites to rank higher on
                    search
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">7-9</th>
                  <td rowSpan="2" className="v-align-top">
                    <div className="text-h4">Google Ads:</div>
                    <br />
                    How to build brands and drive growth
                    <br />
                    <br />
                    <b>Integrated project</b>
                  </td>
                  <td className="v-align-top">
                    <div className="text-h4">Off-Page SEO</div>
                    <br />
                    Getting more links for your website Making content strategy
                    to drive business growth
                  </td>
                  <td>
                    <div className="text-h4">People Skills</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">10</th>

                  <td>
                    <b>Integrated Project</b>
                  </td>
                  <td>
                    <div className="text-h4">Work Ethics</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">11-12</th>
                  <td className="v-align-top">
                    <div className="text-h4">Amazon Ads</div>
                  </td>
                  <td className="v-align-top">
                    <div className="text-h4">ASO: App-store optimization</div>
                  </td>
                  <td>
                    <div className="text-h4">
                      CV and Interview Prop continues throughout
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colSpan="4" className="bg-light-yellow text-center">
                    <div className="text-h4">Placements</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">13-20</th>
                  <td colSpan="3">
                    <div className="text-h4">Internships</div>
                    <br />
                    <b>Weekdays:</b> Internship in a digital marketing role to
                    apply and showcase and your learning
                    <br />
                    <br />
                    <b>Weekends:</b> Refinement of your concepts and behavioural
                    skills basis your individual progress
                  </td>
                </tr>

                <tr>
                  <td colSpan="4" className="bg-light-yellow text-center">
                    <div className="text-h4">
                      Final placements starting INR 4.5 lakhs / year
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {tabSelected === "2" && (
            <table className="mlp-curriculum-table">
              <thead>
                <tr>
                  <th className="text-yellow text-h3">Week</th>
                  <th className="text-yellow" colSpan="3">
                    <div className="text-h3">Functional skill</div>
                  </th>
                  <th className="text-yellow">
                    <div className="text-h3">Human skill</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-yellow">0</th>
                  <td colSpan="4">
                    <div className="text-h4">Team Huddles + Onboardings</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">1</th>
                  <td colSpan="2">
                    <div className="text-h4">Business Fundamentals</div>
                    <br />
                    Converting a business problem into a marketing strategy
                  </td>
                  <td rowSpan="2">
                    <div className="text-h4">Writing Basics</div>
                  </td>
                  <th rowSpan="2">
                    <div className="mobile-hide">Communication Skills</div>
                    <div className="desktop-hide text-h4">
                      Communic-
                      <br /> ation Skills
                    </div>
                  </th>
                </tr>

                <tr>
                  <th className="bg-yellow">2</th>
                  <td colSpan="2">
                    <b>Role of content</b> in marketing
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">3-5</th>
                  <td colSpan="2">
                    <div className="text-h4">Social Media Management:</div>
                    <br />
                    Building a content plan to drive brand growth
                  </td>
                  <td>
                    <div className="text-h4">Writing for Blogs</div>
                  </td>
                  <td>
                    <div className="text-h4">Leadership Skills</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">6-7</th>
                  <td colSpan="2">
                    <div className="text-h4">Influencer Management:</div>
                    <br />
                    Deciding partners to drive brand awareness and growth
                  </td>
                  <td>
                    <div className="text-h4">Writing for Social Media</div>
                  </td>
                  <td>
                    <div className="text-h4">People Skills</div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-yellow">8</th>
                  <td colSpan="2">
                    <div className="text-h4">Design Principles</div>
                    <br />
                    How to build brands and drive growth
                  </td>
                  <td>
                    <div className="text-h4">Writing for Website / Ads</div>
                  </td>
                  <td>
                    <div className="text-h4">Work Ethics</div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-yellow">9-11</th>
                  <td colSpan="2">
                    <div className="text-h4">SEO:</div>
                    <br />
                    How to create and structure content that drive business
                    results
                  </td>
                  <td>
                    <div className="text-h4">Portfolio Building</div>
                  </td>
                  <td>
                    <div className="text-h4">
                      CV and Interview Prep continues throughout
                    </div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">12</th>

                  <td colSpan="4" className="text-center">
                    <b>Getting ready for the placements</b>
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="bg-light-yellow text-center">
                    <div className="text-h4">Placements</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow">13-20</th>
                  <td colSpan="4">
                    <div className="text-h4">Internships</div>
                    <br />
                    <b>Weekdays:</b> Internship in a digital marketing role to
                    apply and showcase and your learning
                    <br />
                    <br />
                    <b>Weekends:</b> Refinement of your concepts and behavioural
                    skills basis your individual progress
                  </td>
                </tr>

                <tr>
                  <td colSpan="5" className="bg-light-yellow text-center">
                    <div className="text-h4">
                      Final placements starting INR 4.5 lakhs / year
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="typical-day">
        <div className="curriculum-container">
          <div className="typical-day-img">
            <h2 className="type-day-title">
              What will a typical day look like?
            </h2>
            <div className="type-day-desc">
              Classes take place between Monday - Friday. You will have a test
              every week to assess your mastery of the objectives set for the
              week.
            </div>
            {/* <div className="type-day-desc">
              During internships, classes would happen over the weekends.
            </div> */}
            <div className="type-day-desc">
              Here is how an average day might look like.
            </div>
            <div className="type-day-devider"></div>
            <div className="type-day-schedule">
              <div className="type-day-content">
                <div className="type-day-time">10 - 12 AM</div>
                <div className="type-day-routine">
                  Review of lectures for the day
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">12 - 1 PM</div>
                <div className="type-day-routine">
                  Practice of the concepts through exercises
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">1 - 2 PM</div>
                <div className="type-day-routine">Lunch</div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">2 - 4 PM</div>
                <div className="type-day-routine">Project work in groups</div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">4 - 5 PM</div>
                <div className="type-day-routine">
                  Feedback on exercises and doubt resolutions
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">5 - 7 PM</div>
                <div className="type-day-routine">
                  Communication Classes including role plays, activities,
                  writing etc.{" "}
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">7 - 8:30 PM</div>
                <div className="type-day-routine">
                  Additional huddles with experts for clarifying any concept
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YoutubeSlider />
    </div>
  );
}

export default Curriculum;
