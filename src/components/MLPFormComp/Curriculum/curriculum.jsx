import React, { useState } from "react";

import "./styles.scss";

function Curriculum() {
  const [tabSelected, setTabSelected] = useState("1");

  return (
    <div className="mlp-main-curriculum">
      <div className="curriculum-container ptop-1">
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
    </div>
  );
}

export default Curriculum;
