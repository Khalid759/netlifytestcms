import React, { useEffect, useState } from "react";
import NoValueErr from "../NoValueErr/noValueErr";

import "./styles.scss";

const CheckBox = (props) => {
  const { name, btnClicked, options, getValuesFn } = props;

  const [valueArr, setValueArr] = useState([]);

  useEffect(() => {
    // for validation check
  }, [btnClicked, props.value]);

  const handleChange = (event) => {
    const setDataFn = (arr) => {
      const data = {
        value: arr,
        id: name,
      };

      getValuesFn(data);
    };

    if (event.target.checked) {
      console.log("checked");
      setValueArr([...valueArr, event.target.value]);

      const arrValue = [...valueArr, event.target.value];

      setDataFn(arrValue.toString());
    } else {
      console.log("unchecked");

      const removeArr = valueArr.filter(
        (value) => value === event.target.value
      );

      const filterArr = valueArr.filter((value) =>
        removeArr.indexOf(value) == -1 ? true : false
      );

      setValueArr(filterArr);

      setDataFn(filterArr.toString());
    }
  };
  return (
    <div className="custom-checkbox-div form-input">
      {options.map((option, k) => {
        return (
          <div key={k} className="checkbox-div">
            <label className="container">
              {option}
              <input
                value={option}
                // name={value}
                onChange={handleChange}
                type="checkbox"
              />
              <span className="checkmark"></span>
            </label>
          </div>
        );
      })}

      {btnClicked && valueArr.length === 0 && <NoValueErr />}
    </div>
  );
};

export default CheckBox;
