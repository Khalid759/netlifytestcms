import React, { useEffect } from "react";

function Select(props) {
  const { name, value, btnClicked, getValuesFn, placeholder } = props;

  //const [value, setValue] = useState(props.value);

  useEffect(() => {
    // for validation check
    // console.log(btnClicked)
  }, [btnClicked]);

  const handleChange = (event) => {
    let checkedValue = "";
    if (event.target.checked) {
      checkedValue = event.target.value;
    } else {
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
      <div className="bb-checkbox">
        <label className="bb-checkbox-container">
          {placeholder}
          <input
            type="checkbox"
            className="bb-checkbox-input"
            value={value}
            onClick={handleChange}
          />
          <span className="bb-checkbox-checkmark"></span>
        </label>
      </div>
    </React.Fragment>
  );
}

export default Select;
