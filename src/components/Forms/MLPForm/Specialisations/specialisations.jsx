import React, { useEffect, useState } from "react";
import NoValueErr from "../NoValueErr/noValueErr";

function Specialisations({ name, btnClicked, getValuesFn, slots }) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    // for validation check
    // console.log("slot date", btnClicked)
  }, [btnClicked]);

  useEffect(() => {
    let arr = [];
    slots.forEach((slot) => {
      if (slot.isChecked) {
        arr.push(slot.value);
      }
    });
    setValue(arr);
    const data = {
      value: arr,
      id: name,
    };
    getValuesFn(data);
  }, []);

  const handleChange = (event) => {
    console.log(value);

    let newArr = [...value];
    if (value.includes(event.target.value)) {
      const index = newArr.indexOf(event.target.value);
      if (index > -1) {
        newArr.splice(index, 1);
      }
      setValue(newArr);
    } else {
      newArr.push(event.target.value);
      setValue(newArr);
    }

    const data = {
      value: newArr,
      id: name,
    };
    getValuesFn(data);
  };
  return (
    <div className="slot-group mtop-2">
      <div className="slot-text">Evaluate me for*</div>

      <div className="spec-dates">
        {slots.map((slot, k) => {
          return (
            <div key={k} className="date">
              <input
                type="checkbox"
                name={name}
                id={slot.id}
                className="slot-input"
                onChange={handleChange}
                value={slot.value}
                disabled={slot.isDisabled}
                defaultChecked={slot.isChecked}
                // defaultChecked={value.includes(slot.value)}
              />
              <label htmlFor={slot.id}>
                <span>
                  <b>{slot.title}</b>
                </span>
                {/* <span className="spec-text">SPECIALISATIONS</span> */}
              </label>
            </div>
          );
        })}
      </div>
      {btnClicked && value.length === 0 && <NoValueErr />}
    </div>
  );
}

export default Specialisations;
