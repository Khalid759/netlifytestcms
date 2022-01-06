import React, { useEffect, useState } from 'react';
import NoValueErr from '../NoValueErr/noValueErr';

function MarketingExp({
  name,
  placeholder,
  btnClicked,
  getValuesFn,
  options,
  checkedValue,
}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    // for validation check
  }, [btnClicked]);

  const handleChange = (event) => {
    setValue(event.target.value);

    const data = {
      value: event.target.value,
      id: name,
    };

    getValuesFn(data);
  };

  return (
    <React.Fragment>
      <div className="experience-group mtop-2">
        <div className="exp-text">{placeholder}</div>

        <div className="radio-group">
          {options.map((option, k) => {
            return (
              <div key={k} className="date">
                <input
                  type="radio"
                  name="marketing_exp"
                  id={option}
                  className=""
                  onChange={handleChange}
                  value={option}
                  checked={option === checkedValue ? true : false}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            );
          })}
        </div>
      </div>
      {btnClicked && !value && <NoValueErr />}
    </React.Fragment>
  );
}

export default MarketingExp;
