import React, { useEffect, useState } from "react";
import Input from "./Input/input";
import Select from "./Select/select";
import SlotDate from "./SlotDate/slotDate";
import ThankYou from "./ThankYou/thankYou";
import InEligible from "./InEligible/inEligible";
import "./styles.scss";
import { API_URL } from "../../../../config/config.js";
import { CONVEX_API_URL } from "../../../../config/config.js";
import Specialisations from "./Specialisations/specialisations";
import moment from "moment";
console.log(CONVEX_API_URL);
let formData = {
  name: "",
  email: "",
  phone: "",
  lead_type: "",
  organization: "",
  profession: "",
  pass_year: "",
  preferredSlot: "",
  specialisation: [],
  opt_in: true,
  program: "Marketing Launchpad",
};

function MLPForm(props) {
  let params = new URLSearchParams(props.search);

  let vemail = params.get("email") || null;

  let utmMedium = params.get("utm_medium") || "No Utm Medium";
  let utmSource = params.get("utm_source") || "No Utm Source";
  let utmContent = params.get("utm_content") || "No Utm Content";
  let utmCampaign = params.get("utm_campaign") || "No Utm Campaign";
  let utmTerm = params.get("utm_term") || "No Utm Term";

  let gaID = "No GA.ID";
  // function getCookie(name) {
  //   var value = "; " + document.cookie
  //   var parts = value.split("; " + name + "=")
  //   if (parts.length == 2) return parts.pop().split(";").shift()
  // }
  // let gaCookie = getCookie("_ga") || ""
  // if (gaCookie) {
  //   gaID = gaCookie.slice(6)
  // }

  const [visitorLoading, setVisitorLoading] = useState(false);

  const [detectDropOut, setdetectDropOut] = useState(false);

  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showInEligible, setShowInEligible] = useState(false);

  const [formFields, setFormFields] = useState(formData);
  const [screeningTests, setScreeningTests] = useState([]);
  const [testCourses, setTestCourses] = useState([]);
  const [campaignId, setCampaignId] = useState();
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedCourse, setSelectedCourse] = useState([]);

  const [checkType, setType] = useState(false);
  const [scrollValidation, setScrollValidation] = useState(false);

  const [allFilled, setAllFilled] = useState(false);

  const [wpOptin, setWpOptin] = useState(true);

  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);

  useEffect(() => {}, [checkType]);

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

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await fetch(
          `${API_URL}/get_leads_data/by-email?email=${vemail}&program=${formData.program}`
        );

        const data = await res.json();

        formData = {
          ...data,
          lead_type: data.leadType,
          preferredSlot: "",
        };

        setFormFields(formData);

        setVisitorLoading(false);

        // console.log("data", formData)
      } catch (err) {
        console.log("visitor err", err);
        setVisitorLoading(false);
      }
    };

    const getProgramCampaign = async () => {
      try {
        const res = await fetch(
          `${CONVEX_API_URL}/program/mlp/campaign/active` //mlp is variable
        );

        const data = await res.json();
        const sortedDates = data.ScreeningTests.sort(function (a, b) {
          return new Date(a.datetime) - new Date(b.datetime);
        });
        setCampaignId(data.id);
        let screenSlot = sortedDates.map((item) => ({
          value: moment(item.datetime).format("MMMM D, h:mm A"),
          day: moment(item.datetime).format("ddd"),
          time: moment(item.datetime).format("h:mm A"),
          date: moment(item.datetime).format("MMMM D"),
          id: item.id,
          isDisabled: item.status === "ACTIVE" ? false : true,
        }));

        setScreeningTests(screenSlot);

        const coursesOptions = data.ScreeningTests[0].TestCourses.map(
          (item) => ({
            value: item.name,
            title: item.description,
            id: item.id,
            isDisabled: item.status === "ACTIVE" ? false : true,
            isChecked: true,
          })
        );
        console.log(coursesOptions);
        setTestCourses(coursesOptions);

        // console.log("data", formData)
      } catch (err) {
        console.log("visitor err", err);
      }
    };

    getProgramCampaign();

    if (vemail) {
      setVisitorLoading(true);
      getUserDetails();
    }
  }, []);

  const whatsAppHandle = () => {
    setWpOptin(!wpOptin);

    formData.opt_in = !wpOptin;

    setFormFields(formData);
  };

  const getValuesFn = (data) => {
    if (data.id === "preferredSlot") {
      let optedSlot = screeningTests.find((item) => item.value === data.value);
      setSelectedSlot(optedSlot.id);
    }
    if (data.id === "specialisation") {
      let optedCoursesId = [];
      testCourses.forEach((item) => {
        if (data.value.includes(item.value)) {
          optedCoursesId.push(item.id);
        }
      });
      setSelectedCourse(optedCoursesId);
    }
    setType(!checkType);
    formData[data.id] = data.value;
    console.log("formdata", formData);

    if (formData.name && formData.email && detectDropOut === false) {
      // console.log("form fields", formFields)
      setdetectDropOut(true);

      // let data = {
      //   name: formData.name,
      //   email: formData.email,
      //   program: formData.program,
      //   opt_in: formData.opt_in,
      // };

      // try {
      //   const dropOutFn = async () => {
      //     await fetch(`${API_URL}/program_leads_data`, {
      //       method: "post",
      //       headers: { "Content-Type": "application/json" },
      //       body: JSON.stringify(data),
      //     });
      //   };
      //   dropOutFn();
      // } catch (err) {
      //   console.log("drop out err", err);
      // }
    }

    if (formData.lead_type === "Studying") {
      delete formData.organization;
    } else if (data.id === "organization") {
      formData.organization = data.value;
    } else if (
      formData.lead_type !== "Studying" &&
      !formData.hasOwnProperty("organization")
    ) {
      formData.organization = "";
    }

    if (parseInt(formData.pass_year) >= 2023) {
      formData.not_eligible_for_program = true;
      delete formData.form_submitted;
    } else {
      formData.form_submitted = true;
    }

    checkAll();

    // for utm campaings

    formData.utmMedium = utmMedium;
    formData.utmCampaign = utmCampaign;
    formData.utmSource = utmSource;
    formData.utmContent = utmContent;
    formData.utmTerm = utmTerm;
    formData.gaID = gaID;

    setFormFields(formData);
  };

  const checkAll = () => {
    const isComplete = [];

    Object.keys(formFields).forEach(function (key) {
      if (formFields[key] === "") {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }
      if (
        key === "specialisation" &&
        formFields["specialisation"].length === 0
      ) {
        isComplete.push(false);
      } else {
        isComplete.push(true);
      }
    });

    if (isComplete.includes(false)) {
      setAllFilled(false);
      return false;
    } else {
      setAllFilled(true);
      return true;
    }
  };

  const submitFn = async () => {
    setScrollValidation(!scrollValidation);
    setBtnClicked(true);

    const pass = checkAll();

    if (pass) {
      setBtnLoading(true);
      // console.log("submit clicked", formFields)
      //
      const res = await fetch(
        `${API_URL}/isUserRegisteredToProgram?email=${formFields.email}&program=${formFields.program}`
      );

      const data = await res.json();

      // console.log("data", data)

      if (data.message === "You are already registered!") {
        setEmailAlreadyExists(true);
        setBtnLoading(false);
        return null;
      } else {
        try {
          const postData = await fetch(`${API_URL}/program_leads_data`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formFields),
          });

          // preferredSlot: "",
          // specialisation: [],

          const leadData = {
            campaign_id: campaignId,
            course_ids: selectedCourse,
            screening_test_id: selectedSlot,
            email: formFields.email,
            // is_drop_off: detectDropOut,
            is_drop_off: false,
            whatsapp_consent: formFields.opt_in,
            organization: formFields.organization,
            year_of_completion: formFields.pass_year,
            qualification: formFields.profession,
            role: formFields.lead_type,
            phone: formFields.phone,
            name: formFields.name,
            additional_data: {
              gaId: formFields.gaID,
              utmMedium: formFields.utmMedium,
              utmCampaign: formFields.utmCampaign,
              utmSource: formFields.utmSource,
              utmContent: formFields.utmContent,
              utmTerm: formFields.utmTerm,
            },
          };
          if (parseInt(formFields.pass_year) < 2023) {
            const postLeadData = await fetch(`${CONVEX_API_URL}/lead/create`, {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(leadData),
            });
            const resData = await postLeadData.json();
            if (resData.message == "Lead already exists.") {
              setEmailAlreadyExists(true);
              setBtnLoading(false);
              return null;
            }
          }
          setBtnLoading(false);

          console.log(postData);

          if (parseInt(formFields.pass_year) >= 2023) {
            console.log("inEligible");
            setShowForm(false);
            setShowInEligible(true);
            setShowThankYou(false);
            scrollToMessage("ineligible-screen");
          } else {
            console.log("thank you");
            setShowForm(false);
            setShowInEligible(false);
            setShowThankYou(true);
            scrollToMessage("thank-you-screen");
            if (typeof window !== "undefined") {
              if (window.fbq != null) {
                console.log("fbq ran");
                window.fbq("trackCustom", "FormSubmitMLP");
              }

              if (window.gtag != null) {
                console.log("gtag ran");
                window.gtag("config", "AW-819495038");

                window.gtag("event", "conversion", {
                  send_to: "AW-819495038/znKGCJPX2N8BEP6A4oYD",
                });
              }
            }
          }
        } catch (err) {
          setBtnLoading(false);
          console.log("err", err);
        }
      }
    } else {
      // console.log("fill all", formFields)
      console.log("fill all");
    }
  };

  const scrollToMessage = (className) => {
    const errElement = document.querySelector(`.${className}`);

    if (errElement) {
      errElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className="main-mlp-form">
      {showForm && (
        <div className="form-content">
          {visitorLoading ? (
            <p>Loading...</p>
          ) : (
            <React.Fragment>
              <Input
                type="text"
                name="name"
                placeholder="Name*"
                isRequired={true}
                btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.name}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email*"
                isRequired={true}
                btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.email}
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                isRequired={true}
                btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.phone}
              />

              <Select
                name="lead_type"
                placeholder="What are you doing currently*"
                options={[
                  "Studying",
                  "Working",
                  "Preparing for Job Change",
                  "Preparing for a Job (Fresher)",
                  "Business Owner",
                ]}
                btnClicked={btnClicked}
                getValuesFn={getValuesFn}
                value={formFields.lead_type}
              />

              {/* applicant select group */}

              {formFields.lead_type && (
                <React.Fragment>
                  <Select
                    name="profession"
                    btnClicked={btnClicked}
                    getValuesFn={getValuesFn}
                    value={formFields.profession}
                    placeholder="Degree*"
                    options={[
                      "MBA / PGDM",
                      "BE / BTech",
                      "BMS/BBA/BBS",
                      "B.Com / M.Com",
                      "B.Sc",
                      "LLB - Law",
                      "BHM - Hotel Management",
                      "Other",
                    ]}
                  />
                  {/* 
                  {formFields.profession === "Other" && (
                    <Input
                      type="text"
                      name="otherValue"
                      placeholder="Specify other*"
                      isRequired={true}
                      btnClicked={btnClicked}
                      getValuesFn={getValuesFn}
                      value=""
                    />
                  )} */}

                  <Select
                    name="pass_year"
                    btnClicked={btnClicked}
                    getValuesFn={getValuesFn}
                    value={formFields.pass_year}
                    placeholder="Year of completion*"
                    options={[
                      "Before 2015",
                      "2016",
                      "2017",
                      "2018",
                      "2019",
                      "2020",
                      "2021",
                      "2022",
                      "2023",
                      "2024",
                      "2025",
                    ]}
                  />
                </React.Fragment>
              )}

              {/* field for all group except studying */}

              {formFields.lead_type && formFields.lead_type !== "Studying" && (
                <Input
                  type="text"
                  name="organization"
                  placeholder="Organization*"
                  isRequired={true}
                  btnClicked={btnClicked}
                  getValuesFn={getValuesFn}
                  value={formData.organization}
                />
              )}
              {screeningTests.length > 0 ? (
                <SlotDate
                  name="preferredSlot"
                  btnClicked={btnClicked}
                  getValuesFn={getValuesFn}
                  slots={screeningTests}
                  // slots={[
                  //   {
                  //     value: "December 5, 11:00 AM",
                  //     day: "Sun",
                  //     time: "11:00 AM",
                  //     date: "December 5",
                  //     id: "December5",
                  //     isDisabled: false,

                  //   },
                  //   {
                  //     value: "December 12, 11:00 AM",
                  //     day: "Sun",
                  //     time: "11:00 AM",
                  //     date: "December 12",
                  //     id: "December12",
                  //     isDisabled: false,
                  //   },
                  // ]}
                />
              ) : null}
              {testCourses.length > 0 ? (
                <Specialisations
                  name="specialisation"
                  btnClicked={btnClicked}
                  getValuesFn={getValuesFn}
                  slots={testCourses}
                  // slots={[
                  //   {
                  //     value: "Digital Media Marketing",
                  //     title: "Digital Media Specialisation",
                  //     id: "dmm",
                  //     isDisabled: false,
                  //     isChecked: true,
                  //   },
                  //   {
                  //     value: "Content and Social Media Management",
                  //     title: "Content & Social Media Specialization",
                  //     id: "csmm",
                  //     isDisabled: false,
                  //     isChecked: true,
                  //   },
                  // ]}
                />
              ) : null}

              <div className="whatsapp_optin mtop-2">
                <label className="optin-container">
                  {/* Send me the admission process & test details on Whatsapp */}
                  <div className="wrapper-check">
                    Send me Screening Test details on{" "}
                    <img
                      src="https://kfwebassets.s3.ap-south-1.amazonaws.com/MLP_Form/whatsapp-label.svg"
                      alt="whatsapp icon"
                    />
                  </div>
                  <input
                    type="checkbox"
                    className="optin-input"
                    checked={wpOptin}
                    onChange={whatsAppHandle}
                  />
                  <span className="optin-checkmark"></span>
                </label>
                <span className="opt-out-text">
                  You can opt-out later at anytime
                </span>
              </div>

              <div className="notice mtop-2">
                Only complete and accurate applications will be processed.
              </div>

              {emailAlreadyExists && (
                <div className="alreadyExists mtop-1">
                  You have already registered. You can check your email for more
                  details! In case of any confusion, write to us at
                  <a href="mailto:hi@kraftshala.com">hi@kraftshala.com</a>
                </div>
              )}

              <div className="mlp-submit mtop-2">
                {btnLoading ? (
                  <div
                    className={`submit-btn ${
                      allFilled ? "yellow-bg" : "gray-bg"
                    }`}
                  >
                    Loading...
                  </div>
                ) : (
                  <div
                    className={`submit-btn ${
                      allFilled ? "yellow-bg" : "gray-bg"
                    }`}
                    onClick={submitFn}
                    aria-hidden="true"
                  >
                    Submit
                  </div>
                )}
              </div>

              {allFilled && (
                <div className="notice mtop-2">
                  By clicking on submit you agree that you can attend full-time
                  (10 AM - 8 PM) classes for 20 weeks Starting 27th January
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      )}

      {showThankYou && (
        <div className="thank-you-screen">
          <ThankYou name={formFields.name} slot={formFields.preferredSlot} />
        </div>
      )}

      {showInEligible && (
        <div className="ineligible-screen">
          <InEligible />
        </div>
      )}
    </div>
  );
}

export default MLPForm;
