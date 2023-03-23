import React, { useState, useContext } from "react";
import { EventDAO } from "../../../DAL/EventDAO";
import { EventDTO } from "../../../DTO/EventDTO";
import ButtonForm from "../ButtonForm";
import { ResidentContext } from "../../../Context/ResidentContext";

export default function AddEvent() {
  const [eventState, setEvent] = useState(new EventDTO("", ""));
    const context = useContext(ResidentContext);

  const onInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const fieldName = target.name;

    //update event state for display
    setEvent((prevState) => ({
      ...prevState,
      [fieldName]: value, //es6 computed property syntax
    }));
  };

    const addEvent = (e) => {
        e.preventDefault();
        if (eventState.startDate === '' || eventState.name === ''){
            alert("Veuillez remplir tous les champs");
            return;
        }

        const eventDAO = new EventDAO();
        eventDAO.addEvent(context.residentId, eventState.startDate,eventState.endDate, eventState.name).then(() => {
            window.location.reload(false)}
        );
    }


    return (
        <div className="inputDiv" >
            <form className="addGrid" onSubmit={addEvent}>
                <label className="">Nom</label>
                <input className="inputTimeline" name="name" value={eventState.name}
                    type="text" onChange={onInputChange}></input>
                <label className="">Date de début</label>
                <input className="inputTimeline" name="startDate" value={eventState.startDate}
                    type="date" onChange={onInputChange}></input>
                <label className="">Date de fin</label>
                <input className="inputTimeline" name="endDate" value={eventState.endDate}
                    type="date" onChange={onInputChange}></input>
                 <ButtonForm
          label="Ajouter"
          type="submit"
          value="Ajouter évènement"
          onClick={addEvent}
        />
            </form>
        </div>
    )
}