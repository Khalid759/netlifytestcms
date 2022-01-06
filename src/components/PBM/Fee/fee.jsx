import React from "react";
import { Link } from "gatsby";

import "./styles.scss";

function Fee(props) {
  return (
    <div className="pbm-fee-container">
      <div className="pbm-fee-info">
        <p className="pbm-fee-title">PROGRAM FEE</p>
        <p className="pbm-fee-amount">INR 85,000 + GST</p>
        <p className="pbm-fee-emi">Low Cost EMI options available</p>
      </div>
      <div className="pbm-apply-now-div">
        <Link
          to={`/professional-brand-management-in-the-digital-age-application-form/${props.urlParams}`}
          className="pbm-apply-now"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}

export default Fee;
