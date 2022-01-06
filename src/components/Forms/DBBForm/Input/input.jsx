import React, { useState } from "react";
import { EMAIL_REGEX } from "../../../../../config/config.js";

const Input = (props) => {
  const {
    name,
    placeholder,
    type,
    btnClicked,
    getValuesFn,
    isRequired,
  } = props;
  const [value, setValue] = useState(props.value);

  const [validEmail, setValidEmail] = useState(props.value ? true : false);
  const [validPhone, setValidPhone] = useState(props.value ? true : false);
  const [validUrl, setValidUrl] = useState(props.value ? true : false);
  const [validFile, setValidFile] = useState(props.value ? true : false);

  function ValidateEmail(inputText) {
    //eslint-disable-next-line
    var mailformat = EMAIL_REGEX;
    if (mailformat.test(inputText)) {
      return true;
    } else {
      return false;
    }
  }

  function ValidateLinkedIn(inputText) {
    //eslint-disable-next-line
    var linkformat = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (linkformat.test(inputText)) {
      return true;
    } else {
      return false;
    }
  }

  function ValidateFileCv(file) {
    if (file) {
      let fsize;
      for (let i = 0; i < file.length; i++) {
        fsize = file[0].size;
      }

      let ext = file[0].name.split(".").pop();

      if (
        (ext === "pdf" ||
          ext === "docx" ||
          ext === "doc" ||
          ext === "txt" ||
          ext === "png" ||
          ext === "jpeg" ||
          ext === "jpg") &&
        fsize <= 2000000
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);

    const setDataFn = async (type) => {
      let fieldValue = "";
      if (type === "file") {
        fieldValue = event.target.files[0];
      } else {
        fieldValue = event.target.value;
      }
      const data = {
        value: fieldValue,
        id: name,
      };

      getValuesFn(data);
    };

    const setDataEmptyFn = () => {
      const data = {
        value: "",
        id: name,
      };

      getValuesFn(data);
    };

    if (type === "email") {
      ValidateEmail(event.target.value);
      if (ValidateEmail(event.target.value)) {
        setValidEmail(true);
        setDataFn(type);
      } else {
        setValidEmail(false);
        setDataEmptyFn();
      }
    } else if (type === "tel") {
      if (event.target.value.length !== 10) {
        setValidPhone(false);
        setDataEmptyFn();
      } else {
        setValidPhone(true);
        setDataFn(type);
      }
    } else if (type === "file") {
      ValidateFileCv(event.target.files);
      if (ValidateFileCv(event.target.files)) {
        setValidFile(true);
        setDataFn(type);
      } else {
        setValidFile(false);
        setDataEmptyFn();
      }
    } else if (type === "url") {
      ValidateLinkedIn(event.target.value);
      if (ValidateLinkedIn(event.target.value)) {
        setValidUrl(true);
        setDataFn(type);
      } else {
        setValidUrl(false);
        setDataEmptyFn();
      }
    } else {
      setDataFn(type);
    }
  };

  return (
    <React.Fragment>
      <input
        type={type}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        className={props.className}
      />
      {isRequired && btnClicked && type === "text" && !value && (
        <p className="dbb-error-msg">can't be blank</p>
      )}
      {isRequired && btnClicked && type === "email" && !validEmail && (
        <p className="dbb-error-msg">must be a valid email</p>
      )}
      {isRequired && btnClicked && type === "tel" && !validPhone && (
        <p className="dbb-error-msg">must be of 10 digits</p>
      )}
      {isRequired && btnClicked && type === "url" && !validUrl && (
        <p className="dbb-error-msg">
          can't be blank, must be a valid profile link
        </p>
      )}
      {isRequired && btnClicked && type === "file" && !validFile && (
        <p className="dbb-error-msg">
          can't be blank, must be a pdf, docx, txt, png, jpeg, jpg or doc file
          type & file size must be upto 2mb
        </p>
      )}
    </React.Fragment>
  );
};

export default Input;
