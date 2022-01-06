import React from "react";
//import DBBForm from "../../Forms/DBBForm/Index";

import "./styles.scss";

function Fee(props) {
  return (
    <React.Fragment>
      <div className="dbb-fee-container">
        <div className="dbb-fee-info">
          <h2 className="dbb-fee-title">PROGRAM FEE</h2>
          <p className="dbb-fee-amount">INR 26,000 + GST</p>
          <p className="dbb-fee-emi">Low Cost EMI options available</p>
        </div>
        <div className="dbb-apply-now-div">
          <div
            className="dbb-apply-now"
            onClick={props.showFormHandler}
            aria-hidden="true"
          >
            {/* Apply Now */}
            Get Notified
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Fee;
