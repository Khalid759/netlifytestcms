import React, { useState, useEffect } from "react";
import "./styles.scss";
import GoBschoolLiveCountDown from "./countDown";
import TimeOverPage from "./timeOver";
import Input from "./Input/input";
import { API_URL } from "../../../../config/config.js";

const JOIN_URL = "https://youtu.be/cMXsoKK62n4"; //url to redirect user when he click watch now button
const JOIN_DATE = "2021/10/10 19:00:00"; //date in yyyy/mm/dd format
const JOIN_DATE_TEXT =
  "Link to join the session will appear here at sharp 7:00PM on 10th October";
const SESSION_DURATION = 75; //in minutes

const isSSR = typeof window === "undefined";

let formData = {
  name: "",
  phone: "",
  email: "",
  campus: "",
  webinar: "SUMMER PLACEMENT PREP",
  session_date: JOIN_DATE,
  // webinar_group: "Bschool Series Group",
  // webinar_id: "5ff8897c686bd7085d44e1f3",
};
if (!isSSR) {
  formData = {
    name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
    phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : "",
    email: localStorage.getItem("email") ? localStorage.getItem("email") : "",
    campus: localStorage.getItem("campus")
      ? localStorage.getItem("campus")
      : "",
    webinar: "SUMMER PLACEMENT PREP",
    session_date: JOIN_DATE,
    // webinar_group: "Bschool Series Group",
    // webinar_id: "5ff8897c686bd7085d44e1f3",
  };
}

function GoBschoolLiveForm() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showWatchNow, setShowWatchNow] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [liveCountDown, setLiveCountDown] = useState({
    isExpired: true,
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const [errorOccured, setErrorOccured] = useState(false);
  const [formFields, setFormFields] = useState(formData);

  useEffect(() => {
    if (!isSSR) {
      whatToShow();
    }
  }, []);

  const whatToShow = () => {
    if (
      localStorage.getItem("name") !== null &&
      localStorage.getItem("phone") !== null &&
      localStorage.getItem("email") !== null &&
      localStorage.getItem("webinar") !== null
    ) {
      setShowForm(false);
      if (
        localStorage.getItem("webinar") !== formFields.webinar ||
        localStorage.getItem("session_date") !== formFields.session_date
      ) {
        setShowForm(true);
      } else {
        if (CurrentTimeGreaterThanDuration()) {
          setTimeOver(true);
        }
      }
    }
  };

  const CurrentTimeGreaterThanDuration = () => {
    if (
      new Date(new Date(JOIN_DATE).getTime() + SESSION_DURATION * 60000) <
      new Date().getTime()
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    let x = setInterval(function () {
      let now = new Date().getTime();
      let joinDate = new Date(JOIN_DATE).getTime();
      let difference = joinDate - now;

      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(x);
        setLiveCountDown({
          ...liveCountDown,
          isExpired: true,
        });
        setShowWatchNow(true);
      } else {
        setLiveCountDown({
          ...liveCountDown,
          isExpired: false,
          days: days > 0 ? days + "d " : "",
          hours: hours + "h ",
          minutes: minutes + "m ",
          seconds: seconds + "s ",
        });
        setShowWatchNow(false);
      }
    }, 1000);
  }, [liveCountDown.isExpired]);

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
        await fetch(`${API_URL}/summer-placement/form`, {
          method: "post",
          headers: { processData: false, contentType: false },
          body: form_data,
        });
        localStorage.setItem("name", formFields.name);
        localStorage.setItem("phone", formFields.phone);
        localStorage.setItem("email", formFields.email);
        localStorage.setItem("campus", formFields.campus);
        localStorage.setItem("webinar", formFields.webinar);
        localStorage.setItem("session_date", formFields.session_date);
        whatToShow();
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

  const watchNowHandler = () => {
    window.open(JOIN_URL, "_blank");
  };

  return (
    <div className="go-bschool-live-form-container">
      {timeOver && !showForm && (
        <div className="go-bschool-live-form">
          <TimeOverPage />
        </div>
      )}

      {showWatchNow && !showForm && !timeOver && (
        <div className="go-bschool-live-form-field-btn go-bschool-live-form watchNow">
          <div
            className="go-bschool-live-btn-med go-bschool-live-form-btn"
            onClick={watchNowHandler}
            aria-hidden="true"
          >
            Join Now
          </div>
        </div>
      )}

      {!liveCountDown.isExpired && !showForm && !timeOver && (
        <GoBschoolLiveCountDown
          text={JOIN_DATE_TEXT}
          countDown={liveCountDown}
        />
      )}

      {showForm && (
        <React.Fragment>
          <form className="go-bschool-live-form">
            <div className="form-head">
              Please fill up the form to join the session
            </div>
            <div className="go-bschool-live-form-field">
              <label htmlFor="name" className="go-bschool-live-form-label">
                Name*
              </label>

              <Input
                type="text"
                name="name"
                isRequired={true}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                className="go-bschool-live-form-input"
                value={formFields.name}
              />
            </div>

            <div className="go-bschool-live-form-field">
              <label htmlFor="campus" className="go-bschool-live-form-label">
                Campus*
              </label>

              <Input
                type="text"
                name="campus"
                isRequired={true}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                className="go-bschool-live-form-input"
                value={formFields.campus}
              />
            </div>

            <div className="go-bschool-live-form-field">
              <label htmlFor="phNo" className="go-bschool-live-form-label">
                Phone No.
              </label>
              <Input
                type="number"
                name="phone"
                isRequired={true}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                className="go-bschool-live-form-input"
                value={formFields.phone}
              />
            </div>

            <div className="go-bschool-live-form-field">
              <label htmlFor="email" className="go-bschool-live-form-label">
                Email*
              </label>
              <Input
                type="email"
                name="email"
                isRequired={true}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                className="go-bschool-live-form-input"
                value={formFields.email}
              />
            </div>

            <div className="go-bschool-live-form-field-btn">
              {errorOccured && (
                <p className="contact-us-error-msgForm">something went wrong</p>
              )}
              {btnLoading ? (
                <div className="go-bschool-live-btn-med go-bschool-live-form-btn">
                  Loading...
                </div>
              ) : (
                <div
                  className="go-bschool-live-btn-med go-bschool-live-form-btn"
                  onClick={submitFn}
                  aria-hidden="true"
                >
                  Submit
                </div>
              )}
            </div>
          </form>
        </React.Fragment>
      )}
    </div>
  );
}

export default GoBschoolLiveForm;
