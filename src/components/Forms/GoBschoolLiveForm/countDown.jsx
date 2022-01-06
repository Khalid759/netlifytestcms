import React from "react";
import "./styles.scss";

function GoBschoolLiveCountDown({ countDown, text }) {
  const { days, hours, minutes, seconds } = countDown;
  return (
    <div className="go-bschool-live-success-group go-bschool-live-countdown">
      <p className="go-bschool-live-success-title">
        Please keep this link open. The session will start in
      </p>
      <p className="go-bschool-live-success-msg">
        {days + hours + minutes + seconds}
      </p>
      <p className="go-bschool-live-success-sub-title">{text}</p>
    </div>
  );
}

export default GoBschoolLiveCountDown;
