import React from "react";

import "./styles.scss";

function Fee(props) {
  return (
    <React.Fragment>
      <div className="bb-fee-container">
        <div className="bb-fee-info">
          <h2 className="bb-fee-title">PROGRAM FEE</h2>
          <p className="bb-fee-amount">INR 20,000 + GST</p>
          <p className="bb-fee-emi">Low Cost EMI options available</p>
        </div>
        <div className="bb-apply-now-div">
          <div
            className="bb-apply-now"
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
