import React, { useState } from "react";
import "./styles.scss";
import Input from "./Input/input";
import { API_URL } from "../../../../config/config.js";

let formData = {
  email: "",
  event_id: "",
  lead_name: "",
  streaming_source: "youtube",
};

function KFLiveForm(props) {
  formData.event_id = props.filteredInfo.event_id;
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
        await fetch(`${API_URL}/saveWebinarAttendeeFromWebsite`, {
          method: "post",
          headers: { processData: false, contentType: false },
          body: form_data,
        });
        setShowSuccessMessage(true);
        setBtnLoading(false);
        window.open(props.filteredInfo.youtube, "_blank");
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
    <React.Fragment>
      <div
        className="kflive-custom-modal"
        onClick={props.closeModal}
        aria-hidden="true"
      ></div>
      <div className="kflive-modal-content">
        <span
          className="kflive-close-button"
          onClick={props.closeModal}
          aria-hidden="true"
        >
          ×
        </span>
        <div className="kflive-inner-content">
          <div className="kflive-form-content">
            <div className="kflive-form-heading">
              Fill up your details to get free access:
            </div>
            <form className="kflive-modal-form">
              <div className="kflive-label-wrap">
                <label htmlFor="lead_name" className="kflive-form-label">
                  Name*
                </label>
                <br />
                <Input
                  type="text"
                  name="lead_name"
                  id="lead_name"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="kflive-form-input"
                />
              </div>
              <div className="kflive-label-wrap">
                <label htmlFor="email" className="kflive-form-label">
                  Email*
                </label>
                <br />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="kflive-form-input"
                />
              </div>
              <div className="kflive-watch-btn">
                {errorOccured && (
                  <p className="kflive-wwuan-error-msgForm">
                    something went wrong
                  </p>
                )}
                {btnLoading ? (
                  <div className="kflive-modal-form-btn">Loading...</div>
                ) : (
                  <div
                    className="kflive-modal-form-btn"
                    onClick={submitFn}
                    aria-hidden="true"
                  >
                    watch now
                  </div>
                )}
              </div>
            </form>
            {showSuccessMessage && (
              <div className="kflive-mod-success">
                Thank you for filling in your information.
              </div>
            )}
          </div>
          <div className="kflive-event-content">
            <img
              className="kflive-modal-event-img"
              src={props.filteredInfo.watch_img}
              alt={props.filteredInfo.name}
              placeholder="none"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default KFLiveForm;
