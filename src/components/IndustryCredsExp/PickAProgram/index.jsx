import React from "react";

import ProgramTabs from "../../ProgramTabs/programTabs";

import "./styles.scss";

const PickAProgram = () => {
  return (
    <div id="program-section" className="ice-pick-program">
      <div className="ice-pick-pro-title">
        <h2>Pick an online course that suits your requirements</h2>
      </div>

      <div className="ice-program-tab">
        <ProgramTabs type="industry" />
      </div>

      <div className="container for-seo">
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
