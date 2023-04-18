import React, { useState } from "react";
import FloatLabelInput from "../Form/FloatLabelInput";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import { BiTrash } from "react-icons/bi";
import Swal from "sweetalert2";

/**
 * Event renders the details of a timeline event either an input or a text field 
 * depending if the view is readonly or not.
 */

function Event({ event, isEditable, updateEventsList, deleteEvent }) {
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

  const handleDelete = () => {
    Swal.fire({
      title: 'Voulez-vous réellement supprimer ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      reverseButtons: true,
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEvent(event.id);
      }
    })
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
      <BiTrash onClick={handleDelete} size={"20px"} ></BiTrash>
    </div>
  ) : (
    <p>
      {eventState.name} - {df.format_DDMMYYYY(eventState.date)}
    </p>
  );
}

export default Event;