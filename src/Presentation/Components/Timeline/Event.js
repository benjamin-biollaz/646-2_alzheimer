import React, { useState } from "react";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import FloatLabelInput from "../FloatLabelInput";
import moment from "moment";

/**
 * Event renders the details of a timeline event either an input or a text field 
 * depending if the view is readonly or not.
 */

function Event({ event, isEditable, updateEventsList }) {
  const [eventState, setEvent] = useState(event.eventDTO);

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
        label="Date"
        name={"date"}
        value={eventState.date}
        onChange={onInputChange}
        type={"date"}
      />
    </div>
  ) : (
    <p>
      {eventState.name} - {(moment(eventState.date).format("DD/MM/YYYY"))}
    </p>
  );
}

export default Event;
