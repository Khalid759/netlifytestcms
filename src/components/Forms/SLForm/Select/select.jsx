import React, { useEffect, useState } from "react";
import { API_URL } from "../../../../../config/config.js";

function Select(props) {
  const {
    name,
    btnClicked,
    getValuesFn,
    showOtherInstitute,
    hideOtherInstitute,
  } = props;

  const [value, setValue] = useState(props.value);
  const [selectedValue, setSelectedValue] = useState("");
  const [filterInstitutesData, setFilterInstitutesData] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    //
  }, [btnClicked]);

  useEffect(() => {
    fetch(`${API_URL}/institutes`)
      .then((res) => res.json())
      .then((data) => {
        let newData = data.filter((data) => data["value"] !== undefined);
        setInstitutes(newData);
        setFilterInstitutesData(newData);
      });
  }, []);

  const updateSearch = (e) => {
    const filteredInstitutes = institutes.filter((data) => {
      if (data["value"]) {
        return data["value"].toLowerCase().includes(e.target.value);
      }
    });
    setFilterInstitutesData(filteredInstitutes);
  };

  const showListHandler = () => {
    setShowList(!showList);
  };

  const optionClickHandler = (option) => {
    setSelectedValue(option);
    setShowList(false);
    setValue(option);
    if (option === "Other") {
      showOtherInstitute();
    } else {
      hideOtherInstitute();
      const data = {
        value: option,
        id: name,
      };

      getValuesFn(data);
    }
  };

  return (
    <React.Fragment>
      <input
        id="lead_type"
        onClick={showListHandler}
        name={name}
        className="sl-training-form-input sl-training-form-select-institute"
        readOnly={true}
        value={selectedValue}
        placeholder="Select"
      />
      {showList && (
        <div className="sl-training-form-list">
          <div className="sl-training-form-list-content">
            <div className="sl-training-form-list-search">
              <input
                type="text"
                onChange={updateSearch}
                className="sl-training-form-input"
              />
            </div>
            <div className="sl-training-form-list-wrap">
              {filterInstitutesData.length > 0 ? (
                <div className="sl-training-form-list-item disabled">
                  select
                </div>
              ) : (
                <div className="sl-training-form-list-item disabled">
                  Type "Other" (If Institute not in the list)
                </div>
              )}

              <div
                onClick={() => optionClickHandler("Other")}
                aria-hidden="true"
                className={
                  "sl-training-form-list-item " +
                  (filterInstitutesData.length <= 0 ? "active" : "")
                }
              >
                Other
              </div>
              {filterInstitutesData.map((option, k) => (
                <div
                  key={k}
                  onClick={() => optionClickHandler(option.value)}
                  aria-hidden="true"
                  className={
                    "sl-training-form-list-item " + (k === 0 ? "active" : "")
                  }
                >
                  {option.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {btnClicked && !value && <p className="sl-error-msg">can't be blank</p>}
    </React.Fragment>
  );
}

export default Select;
