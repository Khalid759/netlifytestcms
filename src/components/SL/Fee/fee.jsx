import React from "react";

import "./styles.scss";

function Fee(props) {
  return (
    <React.Fragment>
      <div className="sl-fee-container">
        <div className="sl-fee-info">
          <p className="sl-fee-title">PROGRAM FEE</p>
          <p className="sl-fee-amount">INR 20,000 + GST</p>
          <p className="sl-fee-emi">Low Cost EMI options available</p>
        </div>
        <div className="sl-apply-now-div">
          <div
            className="sl-apply-now"
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
