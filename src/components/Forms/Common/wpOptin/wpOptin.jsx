import React from "react";
import "./styles.scss";

function WpOptin({ whatsAppHandle, wpOptin }) {
  return (
    <div className="wp-optin">
      <label className="optin-container">
        Send me Screening Test details on{" "}
        <img
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/whatsapp-label.svg"
          alt="whatsapp icon"
        />
        <input
          type="checkbox"
          className="optin-input"
          checked={wpOptin}
          onChange={whatsAppHandle}
        />
        <span className="optin-checkmark"></span>
      </label>
      {/* <span className="opt-out-text">You can opt-out later at anytime</span> */}
    </div>
  );
}

export default WpOptin;
