import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../FloatLabelInput";

function Event({ event, isEditable }) {
  const [eventState, setEvent] = useState(event);

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    alert(fieldName);

    //update event state
    setEvent((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput
        label="Évènement"
        value={eventState.eventDTO.name}
        onChange={onInputChange}
        type={"text"}
      />
      <FloatLabelInput
        label="Date"
        value={DateFormatter.prototype.formatDate(eventState.eventDTO.date)}
        onChange={onInputChange}
        type={"date"}
      />
    </div>
  ) : (
    <p>
      {eventState.eventDTO.name} -{" "}
      {DateFormatter.prototype.formatDate(eventState.eventDTO.date)}
    </p>
  );
}

export default Event;
