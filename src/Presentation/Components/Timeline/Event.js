import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../FloatLabelInput";

function Event({ event, isEditable }) {
  const [eventState, setEvent] = useState(event.eventDTO);

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update event state
    setEvent((prevState) => ({
      ...prevState,
      [fieldName]: value, //es6 computed property syntax
    }));
  };

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput
        label="Évènement"
        value={eventState.name}
        onChange={onInputChange}
        type={"text"}
      />
      <FloatLabelInput
        label="Date"
        value={DateFormatter.prototype.formatDate(eventState.date)}
        onChange={onInputChange}
        type={"date"}
      />
    </div>
  ) : (
    <p>
      {eventState.name} - {DateFormatter.prototype.formatDate(eventState.date)}
    </p>
  );
}

export default Event;
