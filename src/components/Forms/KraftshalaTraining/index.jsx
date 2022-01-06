import React, { useState, useEffect } from "react";
import Input from "../Common/Input/input";
import { API_URL } from "../../../../config/config.js";
import "./styles.scss";

let formData = {
  fnameValue: "",
  lnameValue: "",
  emailValue: "",
  phoneValue: "",
  organisationValue: "",
  more_about: "",
};

// Thank you for showing interest. We will get back to you soon !

const HeroForm = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [scrollValidation, setScrollValidation] = useState(false);

  const [formFields, setFormFields] = useState(formData);

  const [showTextarea, setShowTextarea] = useState(false);

  const [textareaVal, setTextareaVal] = useState("");

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const scrollToErr = () => {
      const errElement = document.querySelector(".validation-err");

      if (errElement) {
        errElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    };

    scrollToErr();
  }, [scrollValidation]);

  const getValuesFn = (data) => {
    formData[data.id] = data.value;

    checkAll();
    setFormFields(formData);
    showTextareaFn();
  };

  const checkAll = () => {
    const isComplete = [];

    Object.keys(formFields).forEach(function (key) {
      if (formFields[key] === "") {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }
    });

    if (isComplete.includes(false)) {
      // setAllFilled(false);
      return false;
    } else {
      // setAllFilled(true);
      return true;
    }
  };

  const textAreaChange = (event) => {
    formData["more_about"] = event.target.value;

    setTextareaVal(event.target.value);

    setFormFields(formData);
  };

  const showTextareaFn = () => {
    const isComplete = [];

    Object.keys(formFields)
      .filter((field) => field !== "more_about")
      .forEach(function (key) {
        if (formFields[key] === "") {
          isComplete.push(false);
        } else {
          isComplete.push(true);
        }
      });

    if (isComplete.includes(false)) {
      setShowTextarea(false);
      return false;
    } else {
      setShowTextarea(true);
      return true;
    }
  };

  const generateFetch = (url, params = {}, method) => {
    let options = {
      method,
    };

    url += "?" + new URLSearchParams(params).toString();

    return fetch(url, options).then((response) => response.json());
  };

  const submitFn = async () => {
    setBtnClicked(true);
    setScrollValidation(!scrollValidation);

    const pass = checkAll();

    setLoading(true);
    if (pass) {
      console.log("data to submit", formFields);

      const get = (url, params) => generateFetch(url, params, "GET");
      get(`${API_URL}/postQuery`, formFields).then((response) => {
        // Do something with response.

        setLoading(false);

        setShowSuccess(true);
      });
    } else {
      console.log("fill the required fields", formFields);
      setLoading(false);
    }
  };

  return (
    <div className="corporate-training-hero-form">
      <div className="form-head">
        Learn more about hiring Kraftshala candidates. No hiring fees.
      </div>

      {showSuccess ? (
        <div className="success-msg">
          <span>
            <img
              src="https://res.cloudinary.com/judiscloud/image/upload/v1570717139/check_circle-24px_yxucst.png"
              alt="success tick"
            />
          </span>
          Thank you for showing interest. We will get back to you soon !
        </div>
      ) : (
        <div className="form-content">
          <div className="group-together">
            <Input
              type="text"
              name="fnameValue"
              label="First Name*"
              getValuesFn={getValuesFn}
              isRequired={true}
              btnClicked={btnClicked}
              value={formFields.fnameValue}
            />

            <Input
              type="text"
              name="lnameValue"
              label="Last Name*"
              getValuesFn={getValuesFn}
              isRequired={true}
              btnClicked={btnClicked}
              value={formFields.lnameValue}
            />
          </div>

          <div className="group-together">
            <Input
              type="tel"
              name="phoneValue"
              label="Phone No.*"
              getValuesFn={getValuesFn}
              isRequired={true}
              btnClicked={btnClicked}
              value={formFields.phoneValue}
            />

            <Input
              type="email"
              name="emailValue"
              label="Email*"
              getValuesFn={getValuesFn}
              isRequired={true}
              btnClicked={btnClicked}
              value={formFields.emailValue}
            />
          </div>

          <div className="group-together">
            <Input
              type="text"
              name="organisationValue"
              label="Organization.*"
              getValuesFn={getValuesFn}
              isRequired={true}
              btnClicked={btnClicked}
              value={formFields.organisationValue}
            />
          </div>

          {showTextarea && (
            <div className="text-area">
              <label htmlFor="more_about">
                We’d love to know a little bit more about how we can help.*
              </label>

              <textarea
                value={textareaVal}
                onChange={textAreaChange}
                name="more_about"
                id="more_about"
                cols="30"
                rows="10"
              ></textarea>

              {btnClicked && !textareaVal && (
                <p className="validation-err">*required field</p>
              )}
            </div>
          )}

          <div className="submit-div">
            {loading ? (
              <button>Loading..</button>
            ) : (
              <button onClick={submitFn}>Submit</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroForm;
