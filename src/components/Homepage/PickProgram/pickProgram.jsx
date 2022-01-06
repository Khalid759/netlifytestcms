import React from "react";
import ProgramTabs from "../../ProgramTabs/programTabs";
import "./styles.scss";

const PickProgram = () => {
  return (
    <div className="home-pick-program">
      <div className="container">
        <h2 className="pick-program-head">
          Pick a online course
          <span className="bold-text"> that suits your requirements</span>
        </h2>

        <ProgramTabs />
      </div>
    </div>
  );
};

export default PickProgram;
