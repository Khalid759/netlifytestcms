import React, { useEffect, useState } from "react";
import NoValueErr from "../NoValueErr/noValueErr";

function SlotDate({ name, btnClicked, getValuesFn, slots }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    // for validation check
    // console.log("slot date", btnClicked)
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
    <div className="slot-group mtop-2">
      <div className="slot-text">Choose your slot for Screening Test*</div>

      <div className="slot-dates">
        {slots.map((slot, k) => {
          return (
            <div key={k} className="date">
              <input
                type="radio"
                name="slot_screen"
                id={slot.id}
                className="slot-input"
                onChange={handleChange}
                value={slot.value}
                disabled={slot.isDisabled}
              />
              <label htmlFor={slot.id}>
                <span>{slot.day}</span>
                <span>
                  <b>{slot.date}</b>
                </span>
                <span className="slot-time">{slot.time}</span>
              </label>
            </div>
          );
        })}
      </div>
      {btnClicked && !value && <NoValueErr />}
    </div>
  );
}

export default SlotDate;
