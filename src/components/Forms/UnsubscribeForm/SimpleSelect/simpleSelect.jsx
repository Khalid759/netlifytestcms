import React, { useState } from "react";

const SimpleSelect = (props) => {
  const { options, btnClicked, getValuesFn, isRequired } = props;
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => {
    setValue(event.target.value);

    if (event.target.value) {
      const data = {
        value: event.target.value,
      };

      getValuesFn(data);
    } else {
      const data = {
        value: "",
      };

      getValuesFn(data);
    }
  };

  return (
    <React.Fragment>
      <select onChange={handleChange} className={props.className} value={value}>
        <option value="" disabled>
          Select
        </option>
        {options.map((item, key) => {
          return (
            <option value={item} key={key}>
              {item}
            </option>
          );
        })}
      </select>
      {isRequired && btnClicked && !value && (
        <p className="unsubscribe-error-msg">please select an option</p>
      )}
    </React.Fragment>
  );
};

export default SimpleSelect;
