import React, { useState } from "react";
import "./styles.scss";
import BBSuccess from "./success";
import Input from "./Input/input";
import Select from "./Select/select";
import Checkbox from "./Checkbox/checkbox";
import SimpleSelect from "./SimpleSelect/simpleSelect";
import { API_URL } from "../../../../config/config.js";

let formData = {
  name: "",
  phone: "",
  pass_year: "",
  professional_email: "",
  email: "",
  internship: "",
  recommendation_code: "",
  // program: "Brand Building Program",
  program: "BB_GetNotified",
  sendMail: 1,
  form_submitted: true,
  file: "",
  college_name: "",
  otherPrograms: "",
};
const getNotified = true;

function BBForm() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [hasOtherInstitute, setHasOtherInstitute] = useState(false);

  const [errorOccured, setErrorOccured] = useState(false);

  const [formFields, setFormFields] = useState(formData);

  const pass_year_options = [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
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
    "2023",
    "2024",
  ];

  const getValuesFn = (data) => {
    console.log("changing", { data });
    formData[data.id] = data.value;
    checkAll();
    setFormFields(formData);
  };

  const showOtherInstitute = () => {
    setHasOtherInstitute(true);
  };

  const hideOtherInstitute = () => {
    setHasOtherInstitute(false);
  };

  const checkAll = () => {
    const isComplete = [];
    console.log(formFields);

    Object.keys(formFields).forEach(function (key) {
      if (
        formFields[key] === "" &&
        key !== "otherPrograms" &&
        key !== "recommendation_code"
      ) {
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
        await fetch(`${API_URL}/program_leads_data`, {
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
    <div className="bb-formWrap" id="bb-form">
      {!showSuccessPage && (
        <p className="bb-apply-heading">I'm interested in this program</p>
      )}
      <div className="bb-contact-form">
        {showSuccessPage && <BBSuccess name={formFields.name} />}
        {!showSuccessPage && (
          <form className="bb-training-form">
            <div className="bb-desk-border">
              <div className="bb-training-form-field">
                <label htmlFor="fName" className="bb-training-form-label">
                  Name*
                </label>

                <Input
                  type="text"
                  name="name"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                />
              </div>
              <div className="bb-training-form-field">
                <label htmlFor="lName" className="bb-training-form-label">
                  Institute*
                </label>
                <Select
                  name="college_name"
                  btnClicked={btnClicked}
                  getValuesFn={getValuesFn}
                  showOtherInstitute={showOtherInstitute}
                  hideOtherInstitute={hideOtherInstitute}
                />
              </div>
              {hasOtherInstitute && (
                <div className="bb-training-form-field">
                  <label htmlFor="institute" className="bb-training-form-label">
                    Name Of Your Institute*
                  </label>

                  <Input
                    type="text"
                    name="college_name"
                    isRequired={true}
                    getValuesFn={getValuesFn}
                    btnClicked={btnClicked}
                    className="bb-training-form-input"
                  />
                </div>
              )}
              <div className="bb-training-form-field">
                <label htmlFor="phNo" className="bb-training-form-label">
                  Phone no.
                </label>
                <Input
                  type="tel"
                  name="phone"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                />
              </div>
              <div className="bb-training-form-field">
                <label htmlFor="passyear" className="bb-training-form-label">
                  Pass Year
                </label>
                <SimpleSelect
                  type="number"
                  name="pass_year"
                  isRequired={true}
                  options={pass_year_options}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                  value=""
                />
              </div>
              <div className="bb-training-form-field">
                <label htmlFor="email" className="bb-training-form-label">
                  Email Institute*
                </label>
                <Input
                  type="email"
                  name="professional_email"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                />
              </div>

              <div className="bb-training-form-field">
                <label htmlFor="linkedin" className="bb-training-form-label">
                  Summer Internship
                  <span className="bb-training-form-sub-label">
                    (Please mention “NA” if it’s not applicable to you)
                  </span>
                </label>
                <Input
                  type="text"
                  name="internship"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                />
              </div>
              <div className="bb-training-form-field">
                <label htmlFor="email" className="bb-training-form-label">
                  Email Personal*
                </label>
                <Input
                  type="email"
                  name="email"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                />
              </div>
              <div className="bb-training-form-field">
                <label className="bb-training-form-label" htmlFor="cv-input">
                  Upload your CV*
                </label>
                <Input
                  type="file"
                  name="file"
                  isRequired={true}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-inputCV"
                />
              </div>
              <div className="bb-training-form-field bb-training-form-field-check ">
                <Checkbox
                  name="otherPrograms"
                  btnClicked={btnClicked}
                  getValuesFn={getValuesFn}
                  value="bb + sl"
                  placeholder="I would like to apply for Special Preparatory Package 1 (Brand
                    Building + Sales Leadership) at discounted price of INR 34,000+GST"
                />
              </div>
              <div className="bb-training-form-field">
                <label
                  htmlFor="recommendation"
                  className="bb-training-form-label"
                >
                  Recommendation Code(If Any)
                </label>
                <Input
                  type="text"
                  name="recommendation_code"
                  isRequired={false}
                  getValuesFn={getValuesFn}
                  btnClicked={btnClicked}
                  className="bb-training-form-input"
                />
              </div>
            </div>

            <div className="bb-training-form-field-btn">
              {errorOccured && (
                <p className="bb-error-msgForm">something went wrong</p>
              )}
              {btnLoading ? (
                <div className="bb-training-btn-med bb-training-form-btn">
                  Loading...
                </div>
              ) : (
                <div
                  className="bb-training-btn-med bb-training-form-btn"
                  onClick={submitFn}
                  aria-hidden="true"
                >
                  {getNotified ? "notify" : "submit"}
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default BBForm;
