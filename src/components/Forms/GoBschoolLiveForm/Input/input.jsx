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

    const setDataFn = async () => {
      const data = {
        value: event.target.value,
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
    } else if (type === "number") {
      if (event.target.value.length !== 10) {
        setValidPhone(false);
        setDataEmptyFn();
      } else {
        setValidPhone(true);
        setDataFn(type);
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
        value={value}
      />
      {isRequired && btnClicked && type === "text" && !value && (
        <p className="go-bschool-live-error-msg">can't be blank</p>
      )}
      {isRequired && btnClicked && type === "email" && !validEmail && (
        <p className="go-bschool-live-error-msg">must be a valid email</p>
      )}
      {isRequired && btnClicked && type === "number" && !validPhone && (
        <p className="go-bschool-live-error-msg">must be of 10 digits</p>
      )}
    </React.Fragment>
  );
};

export default Input;
