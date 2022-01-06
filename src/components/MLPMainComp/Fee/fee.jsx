import React, { useState } from "react";
import LazyLoad from "react-lazyload";

import "./styles.scss";

function Fee() {
  const [userSalary, setUserSalary] = useState("4.5");
  const [userInput, setUserInput] = useState("450000");
  const [payableFees, setPayableFees] = useState("1,26,500 + GST");

  const handleChange = (event) => {
    const { value } = event.target;
    let calculatedSalary = (value / 100000).toString();

    console.log("value", value);
    if (value < 450000) {
      setPayableFees("No fees");
    } else if (value > 900000) {
      setPayableFees("2,50,000 + GST");
    } else {
      let calculatedAmount = (value / 12) * 3 + 14000; // value/4 + 14000
      setPayableFees(calculatedAmount.toLocaleString("en-IN") + " + GST");
    }
    setUserInput(value);
    setUserSalary(calculatedSalary);
  };

  return (
    <div className="mlp-main-fee">
      <div className="fee-container">
        <h2 className="mlp-fee-title">How much does it Cost?</h2>

        <div className="mlp-fee-description">
          <div className="description-one mobile-hide">
            We believe in making education performance-driven.
            <span className="fee-line-break">
              Hence, it is a pay after placement program.
            </span>
          </div>
          <div className="description-one desktop-hide">
            We believe in making education performance-driven. Hence, it is a
            pay after placement program.
          </div>
          <div>This puts us on the same team as our students.</div>
          <div>The better you do, the better we do.</div>
        </div>

        <div className="mlp-fee-options mtop-4">
          <div className="mlp-fee-option-1">
            <h3 className="option-title">Option 1</h3>

            <h3 className="option-title">
              ₹14,000 Upfront + You pay 3 months salary after your placement
            </h3>

            <div className="option-description desc-dot">
              You pay the balance fees - which is 3 months of your salary only
              after you get a job with a minimum CTC of ₹4.5 lakhs. Capped at a
              maximum of ₹2.5 lakhs (Plus GST@ 18% ).
            </div>

            <div className="option-description desc-dot">
              Registration fees is ₹14,000 (Plus GST@ 18% ) at the time of
              enrolment. This fee is refundable, if you want to opt-out within
              the first 3 weeks or if you don't get placed within 12 months of
              the program completion
            </div>
          </div>
          <div className="mlp-fee-option-2">
            <h3 className="option-title">Option 2</h3>

            <h3 className="option-title">₹1.5 lakh upfront</h3>

            <div className="option-description">
              You can also go for the fixed ₹ 1.5 lakh fee (Plus GST@ 18% ).
              This fee Is refundable in case you want to opt-out within the
              first 3 weeks or if you don't get placed within 12 months of
              program completion.
            </div>
          </div>
        </div>

        <div className="fee-note" id="fee-calculator">
          *All amounts can be facilitated through our EMI partners.
        </div>

        <div className="fee-range-slider">
          <div className="fee-range-head">Here’s how the maths works:</div>

          <div className="fee-range-salary">
            If your salary is...
            <span className="salary-text"> {userSalary} Lakhs/Year</span>
          </div>

          <div className="fee-range-input">
            <input
              className="input-slider"
              type="range"
              min="400000"
              max="1500000"
              step="50000"
              value={userInput}
              onChange={handleChange}
            />

            <div className="fee-range-number">
              <div className="number1">₹4,50,000</div>
              <div className="number2">₹15,00,000</div>
            </div>
          </div>

          <div className="fee-range-total">
            Total Fees Payable:{" "}
            <span className="payable-text">{payableFees}</span>
          </div>
        </div>

        <div className="fee-calc-table">
          <div className="fee-calc-head">
            A few examples to show how the fee calculation works:
          </div>

          <div className="fee-table">
            <table>
              <thead>
                <tr className="table-head">
                  <th> </th>
                  <th>Not getting a job</th>
                  <th>
                    Any offer less <span className="new-line">than 4.5L</span>{" "}
                    <span className="new-line">eg. CTC 4L</span>
                  </th>
                  <th>CTC 4.5L</th>
                  <th>CTC 6L</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-content">
                  <th>Upfront Payment</th>
                  <th>₹14,000</th>
                  <th>₹14,000</th>
                  <th>₹14,000</th>
                  <th>₹14,000</th>
                </tr>
                <tr className="table-content">
                  <th>After getting a job</th>
                  <th>₹ 0</th>
                  <th>₹ 0</th>
                  <th>3/12*4.5L= 112,500</th>
                  <th>3/12*6L = 150,000</th>
                </tr>
              </tbody>

              <tfoot>
                <tr className="table-footer">
                  <th>Total Fees</th>
                  <th>
                    ₹ 0 <span className="new-line">₹14K refunded</span>{" "}
                  </th>
                  <th>
                    ₹ 0 <span className="new-line">₹14K refunded</span>{" "}
                  </th>
                  <th>₹126,500</th>
                  <th>₹164,000</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="fee-table-mob">
            <LazyLoad height={300}>
              <img
                src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_main/fee-table-mob.svg"
                alt="fee table"
              />
            </LazyLoad>
          </div>

          <div className="fee-table-note">
            All amounts can be facilitated through EMI partners and are
            exclusive of GST
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fee;
