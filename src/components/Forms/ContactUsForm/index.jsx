import React, { useState } from "react";
import "./styles.scss";
import ContactUsSuccess from "./success";
import Input from "./Input/input";
import SimpleSelect from "./SimpleSelect/simpleSelect";
import { API_URL } from "../../../../config/config.js";

let formData = {
  email: "",
  message: "",
  name: "",
  phone: "",
  query_type: "",
};

function ContactUsForm() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [contactMessage, setContactMessage] = useState("");

  const [errorOccured, setErrorOccured] = useState(false);

  const [formFields, setFormFields] = useState(formData);

  const query_type_options = [
    "General",
    "Campus Programs",
    "Professional Programs",
    "corporate Hiring",
    "corporate Training",
    "Employer Branding",
    "Careers",
    "other",
  ];

  const getValuesFn = (data) => {
    if (data.id === "message") {
      setContactMessage(data.value);
    }
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
        await fetch(`${API_URL}/contact_kraftshala`, {
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
    <div className="contact-us-form-wrap">
      <div className="contact-us-contact-form">
        <div className="contact-us-info">
          <p>Email: contact@kraftshala.com</p>
          <p>Address: C-12, Lajpat Nagar-II, New Delhi- 110024</p>
        </div>
        {showSuccessPage && <ContactUsSuccess name={formFields.name} />}
        {!showSuccessPage && (
          <form className="contact-us-training-form">
            <div className="contact-us-desk-border">
              <div className="contact-us-training-form-field">
                <label
                  htmlFor="query_type"
                  className="contact-us-training-form-label"
                >
                  Type Of Query
                </label>
                <SimpleSelect
                  name="query_type"
                  isRequired={true}
                  options={query_type_options}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="contact-us-training-form-input"
                  value=""
                />
              </div>
              <div className="contact-us-training-form-field">
                <label
                  htmlFor="name"
                  className="contact-us-training-form-label"
                >
                  Name*
                </label>

                <Input
                  type="text"
                  name="name"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="contact-us-training-form-input"
                />
              </div>

              <div className="contact-us-training-form-field">
                <label
                  htmlFor="phNo"
                  className="contact-us-training-form-label"
                >
                  Phone No.
                </label>
                <Input
                  type="number"
                  name="phone"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="contact-us-training-form-input"
                />
              </div>

              <div className="contact-us-training-form-field">
                <label
                  htmlFor="email"
                  className="contact-us-training-form-label"
                >
                  Email*
                </label>
                <Input
                  type="email"
                  name="email"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="contact-us-training-form-input"
                />
              </div>

              <div className="contact-us-training-form-field contact-us-training-form-field-textarea">
                <label
                  htmlFor="message"
                  className="contact-us-training-form-label"
                >
                  Your Message
                </label>
                <br />
                <textarea
                  name="message"
                  className="contact-us-training-form-textarea"
                  defaultValue={""}
                  onChange={(e) => {
                    const data = {
                      value: e.target.value,
                      id: "message",
                    };
                    getValuesFn(data);
                  }}
                />
                {btnClicked && contactMessage.length <= 0 && (
                  <p className="contact-us-error-msg">can't be blank</p>
                )}
              </div>
            </div>

            <div className="contact-us-training-form-field-btn">
              {errorOccured && (
                <p className="contact-us-error-msgForm">something went wrong</p>
              )}
              {btnLoading ? (
                <div className="contact-us-training-btn-med contact-us-training-form-btn">
                  Loading...
                </div>
              ) : (
                <div
                  className="contact-us-training-btn-med contact-us-training-form-btn"
                  onClick={submitFn}
                  aria-hidden="true"
                >
                  submit
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUsForm;
