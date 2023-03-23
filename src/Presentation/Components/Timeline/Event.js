import React, { useState } from "react";
import FloatLabelInput from "../Form/FloatLabelInput";
import { DateFormatter } from "../../../Utilities/DateFormatter";

/**
 * Event renders the details of a timeline event either an input or a text field 
 * depending if the view is readonly or not.
 */

function Event({ event, isEditable, updateEventsList }) {
  const [eventState, setEvent] = useState(event.eventDTO);

  const df = new DateFormatter();

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update event state for display
    setEvent((prevState) => ({
      ...prevState,
      [fieldName]: value, //es6 computed property syntax
    }))

  };

    // update events list of parent component
    // this is called at every render as setState renders the component again
  updateEventsList(event.id, eventState);

  return isEditable ? (
    <div className="inputDiv">
      <FloatLabelInput
        label="Évènement"
        name={"name"}
        value={eventState.name}
        onChange={onInputChange}
        type={"text"}
      />
      <FloatLabelInput
        label="Date de début"
        name={"startDate"}
        value={eventState.startDate}
        onChange={onInputChange}
        type={"date"}
      />
      <FloatLabelInput
        label="Date de fin"
        name={"endDate"}
        value={eventState.endDate}
        onChange={onInputChange}
        type={"date"}
      />

    </div>
  ) : (
    <p>
      {eventState.name} - {df.format_DDMMYYYY(eventState.date)}
    </p>
  );
}

export default Event;
