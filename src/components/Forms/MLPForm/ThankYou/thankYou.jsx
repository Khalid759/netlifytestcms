import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import HelpDesk from "../HelpDesk/helpDesk";

function ThankYou({ name, slot }) {
  return (
    <div className="thank-you-container">
      <div className="submit-strip">
        <span className="tick-div">
          <img
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/tick.png"
            alt="Success Tick"
          />
        </span>

        <span>Your Application has been submitted!</span>
      </div>

      <div className="greeting">
        <div className="welcome-text">Welcome Aboard</div>
        <div className="user-name">{name}</div>

        <div className="info">
          <div> We’ve sent the details of your Screening Test</div>
          <div>
            Scheduled for{" "}
            <span className="choosen-date"> {slot} on email.</span>
          </div>
        </div>

        <div className="chat-with-us">
          <a
            href="https://wa.me/message/HHNAOZDIMB4ZE1"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/chat-with-us-1.png"
              alt="Chat with us whatsapp"
              placeholder="none"
            />
          </a>
        </div>

        <div className="more-program">
          <a
            href="https://www.kraftshala.com/marketing-launchpad/"
            target="_blank"
            rel="noreferrer"
          >
            Click here
          </a>{" "}
          to know more about the program
        </div>

        <HelpDesk />
      </div>
    </div>
  );
}

export default ThankYou;
