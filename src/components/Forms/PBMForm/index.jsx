import React, { useEffect, useState } from "react";
import Input from "../Common/Input/input";
// import MarketingExp from "../Common/MarketingExp/marektingExp";
import Select from "../Common/Select/select";
import SlotDate from "../Common/SlotDate/slotDate";
import WpOptin from "../Common/wpOptin/wpOptin";
import ThankYou from "./ThankYou/thankYou";
import InEligible from "./InEligible/inEligible";
import { API_URL } from "../../../../config/config.js";
import "./styles.scss";

let formData = {
  name: "",
  email: "",
  phone: "",
  profession: "",
  pass_year: "",
  desig: "",
  org: "",
  lead_type: "",
  // has_experience: "",
  opt_in: true,
  preferredSlot: "",
  program: "Professional Brand Management",
};

const PBMForm = (props) => {
  let params = new URLSearchParams(props.search);
  let vemail = params.get("email") || null;
  let utmMedium = params.get("utm_medium") || "No Utm Medium";
  let utmSource = params.get("utm_source") || "No Utm Source";
  let utmContent = params.get("utm_content") || "No Utm Content";
  let utmCampaign = params.get("utm_campaign") || "No Utm Campaign";
  let gaID = "No GA.ID";

  // function getCookie(name) {
  //   var value = '; ' + window.document.cookie;
  //   var parts = value.split('; ' + name + '=');
  //   if (parts.length == 2) return parts.pop().split(';').shift();
  // }
  // let gaCookie = getCookie('_ga') || '';
  // if (gaCookie) {
  //   gaID = gaCookie.slice(6);
  // }

  const studyingDegree = ["2021", "2022", "2023", "2024"];

  const proDegree = [
    "Earlier 2008",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  const [visitorLoading, setVisitorLoading] = useState(false);
  const [detectDropOut, setdetectDropOut] = useState(false);

  const [showForm, setShowForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showInEligible, setShowInEligible] = useState(false);

  const [formFields, setFormFields] = useState(formData);
  const [checkType, setType] = useState(false);
  const [scrollValidation, setScrollValidation] = useState(false);

  const [wpOptin, setWpOptin] = useState(true);

  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [allFilled, setAllFilled] = useState(false);
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
        const res = await await fetch(
          `${API_URL}/get_leads_data/by-email?email=${vemail}&program=${formData.program}`
        );

        const data = await res.json();

        formData = {
          ...data,
          lead_type: data.leadType,
          // has_experience: data.has_marketing_experience,
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
      setAllFilled(false);
      return false;
    } else {
      setAllFilled(true);
      return true;
    }
  };

  const getValuesFn = (data) => {
    setType(!checkType);

    formData[data.id] = data.value;
    // console.log(formData);

    if (formData.name && formData.email && detectDropOut === false) {
      // console.log("form fields", formFields)
      setdetectDropOut(true);

      // code to catch drop out

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

    if (
      formData.lead_type === "Studying" ||
      formData.lead_type === "Preparing for a Job (Fresher)"
    ) {
      delete formData.org;
      delete formData.desig;
    } else if (
      (formData.lead_type !== "Studying" ||
        formData.lead_type !== "Preparing for a Job (Fresher)") &&
      !formData.hasOwnProperty("org")
    ) {
      formData.org = "";
    } else if (
      (formData.lead_type !== "Studying" ||
        formData.lead_type !== "Preparing for a Job (Fresher)") &&
      !formData.hasOwnProperty("desig")
    ) {
      formData.desig = "";
    }

    // eligibility cretiera
    if (
      (formData.profession == "MBA/PGDM" &&
        parseInt(formData.pass_year) >= 2022) ||
      (formData.profession != "MBA/PGDM" &&
        parseInt(formData.pass_year) >= 2021)
    ) {
      // console.log('ineligible user');
      formData.not_eligible_for_program = true;
      delete formData.form_submitted;
    } else {
      delete formData.not_eligible_for_program;
      formData.form_submitted = true;
    }

    checkAll();

    // for utm campaings

    formData.utmMedium = utmMedium;
    formData.utmCampaign = utmCampaign;
    formData.utmSource = utmSource;
    formData.utmContent = utmContent;
    formData.gaID = gaID;

    setFormFields(formData);
  };

  const submitFn = async () => {
    const baseUrl = "https://api.kraftshala.com";

    setBtnClicked(true);
    setScrollValidation(!scrollValidation);

    const pass = checkAll();

    if (pass) {
      setBtnLoading(true);

      console.log("all filled", formFields);
      const res = await fetch(
        `${baseUrl}/isUserRegisteredToProgram?email=${formFields.email}&program=${formFields.program}`
      );

      const data = await res.json();

      if (data.message === "You are already registered!") {
        setEmailAlreadyExists(true);
        setBtnLoading(false);
        return null;
      } else {
        try {
          const postData = await fetch(`${baseUrl}/program_leads_data`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formFields),
          });

          setBtnLoading(false);

          console.log(postData);

          if (formFields.form_submitted) {
            // console.log('show thank you');

            setShowForm(false);
            setShowInEligible(false);
            setShowThankYou(true);
            scrollToMessage("thank-you-screen");
            if (typeof window !== "undefined") {
              if (window.fbq != null) {
                console.log("fbq ran");
                window.fbq(
                  "trackCustom",
                  "FormSubmitProfessionalBrandManagement"
                );
              }

              if (window.gtag != null) {
                console.log("gtag ran");
                window.gtag("config", "AW-819495038");

                window.gtag("event", "conversion", {
                  send_to: "AW-819495038/zuoUCMLooOYBEP6A4oYD",
                });
              }
            }
          } else {
            // console.log('show ineligible');
            setShowForm(false);
            setShowThankYou(false);
            setShowInEligible(true);
            scrollToMessage("ineligible-screen");
          }
        } catch (err) {
          setBtnLoading(false);
          console.log("post data err", err);
        }
      }
    } else {
      console.log("not all filled", formFields);
    }
  };

  const scrollToMessage = (className) => {
    const errElement = document.querySelector(`.${className}`);

    if (errElement) {
      errElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  };

  return (
    <div className="form-div-container pbm-group">
      {showForm && (
        <div className="form-group">
          <div className="application-closed">
            Applications are closed for this program
          </div>
          {visitorLoading ? (
            <p>Loading...</p>
          ) : (
            <React.Fragment>
              <Input
                type="text"
                name="name"
                placeholder="Name*"
                getValuesFn={getValuesFn}
                isRequired={true}
                btnClicked={btnClicked}
                value={formFields.name}
              />

              <Input
                type="email"
                name="email"
                placeholder="Email*"
                isRequired={true}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                value={formFields.email}
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Phone*"
                isRequired={true}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                value={formFields.phone}
              />

              <Select
                name="lead_type"
                placeholder="What are you doing currently*"
                options={[
                  "Studying",
                  "Working",
                  "Freelancer/Business Owner",
                  "Preparing for a Job (Fresher)",
                  "Preparing for Job Change",
                ]}
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                value={formFields.lead_type}
              />

              {formFields.lead_type &&
                formFields.lead_type !== "Studying" &&
                formFields.lead_type !== "Preparing for a Job (Fresher)" && (
                  <React.Fragment>
                    <Input
                      type="text"
                      name="org"
                      placeholder="Organization*"
                      isRequired={true}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      value={formFields.org}
                    />

                    <Input
                      type="text"
                      name="desig"
                      placeholder="Designation*"
                      isRequired={true}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      value={formFields.desig}
                    />

                    <Select
                      name="profession"
                      placeholder={"Your last education*"}
                      options={[
                        "MBA/PGDM",
                        "B.E./B.Tech",
                        "B.Com",
                        "BA",
                        "BBA",
                        "Other",
                      ]}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      value={formFields.profession}
                    />

                    <Select
                      name="pass_year"
                      placeholder="When did you complete your degree*"
                      options={proDegree}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      value={formFields.pass_year}
                    />
                  </React.Fragment>
                )}

              {formFields.lead_type &&
                (formFields.lead_type == "Studying" ||
                  formFields.lead_type == "Preparing for a Job (Fresher)") && (
                  <React.Fragment>
                    <Select
                      name="profession"
                      placeholder={"Currently Pursuing*"}
                      // options={['Bachelors', 'Masters', 'Other']}
                      options={[
                        "MBA/PGDM",
                        "B.E./B.Tech",
                        "B.Com",
                        "BA",
                        "BBA",
                        "Other",
                      ]}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      value={formFields.profession}
                    />

                    <Select
                      name="pass_year"
                      placeholder="When do you complete your degree*"
                      options={studyingDegree}
                      getValuesFn={getValuesFn}
                      btnClicked={btnClicked}
                      value={formFields.pass_year}
                    />
                  </React.Fragment>
                )}

              {/* <MarketingExp
                name="has_experience"
                placeholder="Do you have prior full-time marketing experience?"
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                options={["Yes", "No"]}
                checkedValue={formFields.has_experience}
              /> */}

              <SlotDate
                name="preferredSlot"
                getValuesFn={getValuesFn}
                btnClicked={btnClicked}
                slots={[
                  {
                    value: "November 28",
                    day: "Sat-Sun",
                    date: "Nov 27th-28th",
                    id: "Nov27",
                    isDisabled: true,
                    ischecked: false,
                  },
                  // {
                  //   value: "December 12",
                  //   day: "Sat-Sun",
                  //   date: "Dec 11th-12th",
                  //   id: "Dec11",
                  //   isDisabled: false,
                  // },
                ]}
              />

              {/* <div className='slot-note'>
                The duration of the test is about 1.5 hours and you can give it
                over the weekend as per your schedule.
              </div> */}

              {emailAlreadyExists && (
                <div className="alreadyExists ">
                  You have already registered. You can check your email for more
                  details! In case of any confusion, write to us at
                  <a href="mailto:hi@kraftshala.com">hi@kraftshala.com</a>
                </div>
              )}

              <div className="submit-section">
                <div className="submit-note">
                  {/* <div className="note-1">
                    Only complete and accurate applications will be processed.
                  </div>

                  <div className="note-2">
                    By clicking on Submit you agree to receive communication
                    from Kraftshala
                  </div> */}

                  <WpOptin wpOptin={wpOptin} whatsAppHandle={whatsAppHandle} />
                </div>

                <div className="submit-btn-container">
                  {btnLoading ? (
                    <button
                      className={`submit-btn ${
                        allFilled ? "yellow-bg" : "gray-bg"
                      }`}
                      type="submit"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      className={`submit-btn ${
                        allFilled ? "yellow-bg" : "gray-bg"
                      }`}
                      type="submit"
                      onClick={submitFn}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      )}

      {showThankYou && (
        <div className="thank-you-screen">
          <ThankYou email={formFields.email} program={formFields.program} />
        </div>
      )}

      {showInEligible && (
        <div className="ineligible-screen">
          <InEligible />
        </div>
      )}
    </div>
  );
};

export default PBMForm;
