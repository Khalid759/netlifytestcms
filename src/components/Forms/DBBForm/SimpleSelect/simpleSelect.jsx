import React, { useState } from "react";

const SimpleSelect = (props) => {
  const { name, options, btnClicked, getValuesFn, isRequired } = props;
  const [value, setValue] = useState(props.value);

  const handleChange = (event) => {
    setValue(event.target.value);

    if (event.target.value) {
      const data = {
        value: event.target.value,
        id: name,
      };

      getValuesFn(data);
    } else {
      const data = {
        value: "",
        id: name,
      };

      getValuesFn(data);
    }
  };

  return (
    <React.Fragment>
      <select
        onChange={handleChange}
        name={name}
        className={props.className}
        value={value}
      >
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
        <p className="dbb-error-msg">can't be blank</p>
      )}
    </React.Fragment>
  );
};

export default SimpleSelect;
