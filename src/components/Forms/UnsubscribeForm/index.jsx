import React, { useState, useEffect } from "react";
import "./styles.scss";
import UnsubscribeSuccess from "./success";
import { EMAIL_REGEX } from "../../../../config/config.js";
import SimpleSelect from "./SimpleSelect/simpleSelect";
import { CONVEX_API_URL } from "../../../../config/config.js";

function UnsubscribeForm(props) {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [errorOccured, setErrorOccured] = useState(false);

  const reason_options = [
    "Your emails are not relevant to me",
    "Your emails are too frequent",
    "I am not liking the content that’s coming ",
    "I don’t remember signing up for these emails",
    "I am no more interested in a marketing career",
    "I am signed up for there from my other email id",
  ];

  useEffect(() => {
    let params = new URLSearchParams(props.search);
    let email = params.get("email");
    if (email && EMAIL_REGEX.test(email)) {
      checkSubscription(email);
      setEmail(email);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }, []);

  const checkSubscription = async (email) => {
    try {
      let data = { email };
      let response = await fetch(
        `${CONVEX_API_URL}/lead/email-subscription/status`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      let resData = await response.json();
      if (resData.status === 400) {
        setEmailExists(false);
      }
      if (resData.mx_Unsubscribed == "yes") {
        setShowSuccessPage(true);
      }
    } catch (err) {
      setErrorOccured(true);
      console.log("err", err);
    }
  };

  const getValuesFn = (data) => {
    console.log("changing", { data });
    setSelectedReason(data.value);
  };

  const submitFn = async (e) => {
    e.preventDefault();
    setBtnClicked(true);
    setErrorOccured(false);

    if (selectedReason.length > 0) {
      console.log("passed");
      setBtnLoading(true);
      const data = {
        email: email,
        reason: selectedReason,
        unsubscribe: "yes",
      };
      try {
        //OLD CLASSAPI PLATFORM API
        // let response = await fetch(
        //   `${API_URL}/unsubscribe/leads-email?email=${email}&reason=${selectedReason}`
        // );
        //CONVEX PLATFORM API
        let response = await fetch(
          `${CONVEX_API_URL}/lead/email-subscription`,
          {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        let resData = await response.json();
        if (resData.message == "SUCCESS") {
          setShowSuccessPage(true);
        } else {
          setErrorOccured(true);
        }

        setBtnLoading(false);
      } catch (err) {
        setBtnLoading(false);
        setErrorOccured(true);
        console.log("err", err);
      }
    } else {
      console.log("fill all");
    }
  };

  return (
    <div className="unsubscribe-formWrap">
      <p className="unsubscribe-apply-heading">Unsubscribe from Emails</p>
      {!isValidEmail || !emailExists ? (
        <div className="unsubscribe-contact-form">
          <div className="unsubscribe-success-group">
            <div className="unsubscribe-success-ty-text2-error">
              Email does not exists!
            </div>
          </div>
        </div>
      ) : (
        <div className="unsubscribe-contact-form">
          {showSuccessPage && <UnsubscribeSuccess />}
          {!showSuccessPage && (
            <React.Fragment>
              <div className="unsubscribe-success-group">
                <div className="unsubscribe-success-ty-text1">
                  <b>Email : {email}</b>
                </div>
                <div className="unsubscribe-success-ty-text2">
                  We're sorry you don't want to hear from us anymore. By
                  confirming below, you will be removed from all mailing lists
                  and future communications from Kraftshala.
                </div>
                <div className="unsubscribe-success-ty-text2">
                  Please take a moment and help us understand why you are
                  unsubscribing.
                </div>
              </div>
              <form className="unsubscribe-training-form">
                <div className="unsubscribe-desk-border">
                  <div className="unsubscribe-training-form-field">
                    <label
                      htmlFor="reason"
                      className="unsubscribe-training-form-label"
                    >
                      Reason for unsubscribing*
                    </label>
                    <SimpleSelect
                      type="number"
                      isRequired={true}
                      options={reason_options}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      className="unsubscribe-training-form-input"
                      value=""
                    />
                  </div>
                </div>

                <div className="unsubscribe-training-form-field-btn">
                  {errorOccured && (
                    <p className="unsubscribe-error-msgForm">
                      something went wrong
                    </p>
                  )}
                  {btnLoading ? (
                    <div className="unsubscribe-training-btn-med unsubscribe-training-form-btn">
                      Loading...
                    </div>
                  ) : (
                    <div
                      className="unsubscribe-training-btn-med unsubscribe-training-form-btn"
                      onClick={submitFn}
                      aria-hidden="true"
                    >
                      Submit
                    </div>
                  )}
                </div>
              </form>
              <div className="unsubscribe-success-group">
                <div className="unsubscribe-success-ty-text3 ptop-0">
                  Please Note: Only once you have clicked on the above button,
                  you will be unsubscribed.
                </div>
              </div>{" "}
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
}

export default UnsubscribeForm;
