import React from "react";

import ProgramTabs from "../../ProgramTabs/programTabs";

import "./styles.scss";

const PickAProgram = () => {
  return (
    <div id="career-program-section" className="career-ice-pick-program">
      <div className="career-ice-pick-pro-title">
        <h2>Pick an online course that suits your requirements</h2>
      </div>

      <div className="career-ice-program-tab">
        <ProgramTabs type="industry" />
      </div>

      <div className="career-container career-for-seo">
        <h4>Digital Brand Building</h4>
        <h4>Brand Building</h4>
        <h4>Sales Leadership</h4>
        <h4>Professional Brand Mangement</h4>
        <h4>Marketing Launchpad</h4>
      </div>
    </div>
  );
};

export default PickAProgram;
