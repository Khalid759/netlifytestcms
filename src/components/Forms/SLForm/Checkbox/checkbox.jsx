import React, { useState, useEffect } from "react";

function Select(props) {
  const { name, btnClicked, getValuesFn } = props;

  const [checkedFilter, setCheckedFilter] = useState("");

  useEffect(() => {
    // for validation check
    // console.log(btnClicked)
  }, [btnClicked]);

  const handleChange = (event) => {
    let checkedValue = "";
    if (event.target.value === "dbb + sl" && event.target.checked) {
      setCheckedFilter("dbb + sl");
      checkedValue = event.target.value;
    } else if (event.target.value === "bb + sl" && event.target.checked) {
      setCheckedFilter("bb + sl");
      checkedValue = event.target.value;
    } else {
      setCheckedFilter("");
      checkedValue = "";
    }
    const data = {
      value: checkedValue,
      id: name,
    };
    getValuesFn(data);
  };

  return (
    <React.Fragment>
      <div className="sl-training-form-field sl-training-form-field-check">
        <div className="sl-checkbox">
          <label className="sl-checkbox-container">
            I would like to apply for Special Preparatory Package 1(Digital
            Brand Building + Sales Leadership) at discounted price of INR
            40,000+GST
            <input
              type="checkbox"
              className="sl-checkbox-input"
              value="dbb + sl"
              checked={checkedFilter === "dbb + sl"}
              onChange={handleChange}
              name={name}
            />
            <span className="sl-checkbox-checkmark"></span>
          </label>
        </div>
      </div>
      <div className="sl-training-form-field">
        <div className="sl-checkbox">
          <label className="sl-checkbox-container">
            I would like to apply for Special Preparatory Package 2 (Brand
            Building + Sales Leadership) at discounted price of INR 32,000+GST
            <input
              type="checkbox"
              className="sl-checkbox-input"
              value="bb + sl"
              checked={checkedFilter === "bb + sl"}
              onChange={handleChange}
              name={name}
            />
            <span className="sl-checkbox-checkmark"></span>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Select;
