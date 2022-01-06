import React from "react";

import "./styles.scss";

const HowDoYou = () => {
  return (
    <div className="ice-howdoyou">
      <div className="ice-howdoyou-title">
        <h2>
          How do you get{" "}
          <span className="yellow-txt">INDUSTRYCreds™ certified</span>{" "}
          <span className="desk-newline">in sales or marketing?</span>
        </h2>
      </div>

      <div className="ice-howdoyou-description">
        INDUSTRYCreds™ certification is earned upon successful completion of a
        Kraftshala program. Candidates are assessed on the basis of SuccessKeys,
        which are parameters that reflect leadership and sales and marketing
        aptitude that reflect their learning from the program. These SuccessKeys
        are parameters that are used by major recruiters in their own hiring
        process and thus are a good indication of your success in your future
        roles. Once you have completed the program and become endorsed by
        INDUSTRYCreds™ certification of Kraftshala, your profile will be pushed
        to our network of partners looking to hire, based on the right fit.
      </div>
    </div>
  );
};

export default HowDoYou;
