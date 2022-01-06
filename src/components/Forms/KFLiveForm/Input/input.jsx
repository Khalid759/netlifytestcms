import React, { useState } from "react";
import { EMAIL_REGEX } from "../../../../../config/config.js";

const Input = (props) => {
  const { name, placeholder, type, btnClicked, getValuesFn } = props;
  const [value, setValue] = useState(props.value);

  const [validEmail, setValidEmail] = useState(props.value ? true : false);

  function ValidateEmail(inputText) {
    //eslint-disable-next-line
    var mailformat = EMAIL_REGEX;
    if (mailformat.test(inputText)) {
      return true;
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
      {btnClicked && type === "text" && !value && (
        <p className="kflive-error-msg">can't be blank</p>
      )}
      {btnClicked && type === "email" && !validEmail && (
        <p className="kflive-error-msg">must be a valid email</p>
      )}
    </React.Fragment>
  );
};

export default Input;
