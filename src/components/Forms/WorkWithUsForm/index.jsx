import React, { useState } from "react";
import "./styles.scss";
import WorkWithUsSuccess from "./success";
import Input from "./Input/input";
import { API_URL } from "../../../../config/config.js";

let formData = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  linkedin: "",
  file: "",
  additional_info: "NA",
  role: "",
};

function WorkWithUsForm(props) {
  formData.role = props.role.title.toLowerCase();

  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const [errorOccured, setErrorOccured] = useState(false);

  const [formFields, setFormFields] = useState(formData);

  const getValuesFn = (data) => {
    console.log("changing", { data });
    formData[data.id] = data.value;
    checkAll();
    setFormFields(formData);
  };

  const checkAll = () => {
    const isComplete = [];
    console.log(formFields);
    Object.keys(formFields).forEach(function (key) {
      if (formFields[key] === "") {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }
    });

    if (isComplete.includes(false)) {
      return false;
    } else {
      return true;
    }
  };

  const submitFn = async (e) => {
    e.preventDefault();
    setBtnClicked(true);
    setErrorOccured(false);

    var form_data = new FormData();

    for (var key in formFields) {
      form_data.append(key, formFields[key]);
    }

    const pass = checkAll();

    if (pass) {
      console.log("passed");
      setBtnLoading(true);
      try {
        await fetch(`${API_URL}/apply_kraftshala`, {
          method: "post",
          headers: { processData: false, contentType: false },
          body: form_data,
        });
        setShowSuccessPage(true);
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
    <div className="wwuan-formWrap" id="wwuan-work-with-us-form">
      {!showSuccessPage && (
        <div className="wwuan-form-head">
          <p className="wwuan-form-head-heading">Just one last thing.</p>
          <p className="wwuan-form-head-desc">
            We require your basic details to proceed with the application. This
            information helps us evaluate your application.
          </p>
        </div>
      )}
      <div className="wwuan-contact-form">
        {showSuccessPage && <WorkWithUsSuccess />}
        {!showSuccessPage && (
          <form className="wwuan-training-form">
            <div className="wwuan-desk-border">
              <div className="wwuan-training-form-field">
                <label htmlFor="fName" className="wwuan-training-form-label">
                  First Name*
                </label>
                <br />

                <Input
                  type="text"
                  name="fName"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="wwuan-training-form-input"
                />
              </div>
              <div className="wwuan-training-form-field">
                <label htmlFor="lName" className="wwuan-training-form-label">
                  Last Name*
                </label>
                <br />
                <Input
                  type="text"
                  name="lName"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="wwuan-training-form-input"
                />
              </div>
              <div className="wwuan-training-form-field">
                <label htmlFor="email" className="wwuan-training-form-label">
                  Email*
                </label>
                <br />
                <Input
                  type="email"
                  name="email"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="wwuan-training-form-input"
                />
              </div>
              <div className="wwuan-training-form-field">
                <label htmlFor="phNo" className="wwuan-training-form-label">
                  Phone no.
                </label>
                <br />
                <Input
                  type="tel"
                  name="phone"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="wwuan-training-form-input"
                />
              </div>
              <div className="wwuan-training-form-field">
                <label htmlFor="linkedin" className="wwuan-training-form-label">
                  Linkedin Profile*
                </label>
                <br />
                <Input
                  type="url"
                  name="linkedin"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="wwuan-training-form-input"
                />
              </div>
              <div className="wwuan-training-form-field">
                <label className="wwuan-training-form-label" htmlFor="cv-input">
                  Upload your CV*
                </label>
                <Input
                  type="file"
                  name="file"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="wwuan-training-form-inputCV"
                />
              </div>
            </div>
            <div className="wwuan-training-form-field wwuan-training-form-field-textarea">
              <label
                id="orgLabel"
                htmlFor="org"
                className="wwuan-training-form-label"
              >
                Additional Information
              </label>
              <br />
              <textarea
                name="additional_info"
                className="wwuan-training-form-textarea"
                defaultValue={""}
                onChange={(e) => {
                  const data = {
                    value: e.target.value,
                    id: "additional_info",
                  };
                  getValuesFn(data);
                }}
              />
            </div>
            <div className="wwuan-training-form-field-btn">
              {errorOccured && (
                <p className="wwuan-error-msgForm">something went wrong</p>
              )}
              {btnLoading ? (
                <div className="wwuan-training-btn-med wwuan-training-form-btn">
                  Loading...
                </div>
              ) : (
                <div
                  className="wwuan-training-btn-med wwuan-training-form-btn"
                  onClick={submitFn}
                  aria-hidden="true"
                >
                  submit
                </div>
              )}
            </div>
            <p className="wwuan-confidential-desc">
              We take privacy very seriously at Kraftshala, and the information
              that you have shared with us will only be used to process your
              application and further possible candidature.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default WorkWithUsForm;
