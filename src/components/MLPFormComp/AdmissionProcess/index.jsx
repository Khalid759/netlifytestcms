import React from "react";

const AdmissionProcess = () => {
  return (
    <div className="mlpForm-admission">
      <div className="section-head">Admission Process</div>
      <div className="section-info">
        We receive lots of applications for every seat. You need to clear 2
        rounds:
      </div>

      <div className="admission-cards">
        <div className="admission-card">
          <div className="round-img">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/round-1.svg"
              alt="round 1"
            />
          </div>
          <div className="round-title desktop-hide">
            Aptitude (Quant, Logical), Marketing Aptitude and
            <br />
            <span className="new-line">Writing skills</span>{" "}
          </div>
          <div className="round-title mobile-hide">
            Aptitude (Quant, Logical), Marketing{" "}
            <span className="new-line">Aptitude and Writing skills</span>{" "}
          </div>
        </div>
        <div className="admission-card">
          <div className="round-img">
            <img
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/round-2.svg"
              alt="round 2"
            />
          </div>

          <div className="round-title">Statement of Purpose</div>
        </div>
      </div>

      <div className="further-detail">
        You will receive further details on the prep material once you complete
        your application.
      </div>
    </div>
  );
};

export default AdmissionProcess;
