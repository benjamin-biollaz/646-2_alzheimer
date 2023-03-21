import React, { useState } from "react"
import { Button } from "semantic-ui-react";
import { EventDAO } from "../../../DAL/EventDAO";
import { EventDTO } from "../../../DTO/EventDTO";

export default function AddEvent({id}) {

    const [eventState, setEvent] = useState(new EventDTO('', ''));

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

    const addEvent = (e) => {
        e.preventDefault();
        if (eventState.startDate === '' || eventState.name === ''){
            alert("Veuillez remplir tous les champs");
            return;
        }

        const eventDAO = new EventDAO();
        eventDAO.addEvent(id, eventState.startDate,eventState.endDate, eventState.name).then(() => {
            window.location.reload(false)}
        );
    }


    return (
        <div className="inputDiv" onSubmit={addEvent}>
            <form className="addGrid">
                <label className="">Nom</label>
                <input className="inputTimeline" name="name" value={eventState.name}
                    type="text" onChange={onInputChange}></input>
                <label className="">Date de début</label>
                <input className="inputTimeline" name="startDate" value={eventState.startDate}
                    type="date" onChange={onInputChange}></input>
                <label className="">Date de fin</label>
                <input className="inputTimeline" name="endDate" value={eventState.endDate}
                    type="date" onChange={onInputChange}></input>
                <input type="submit" value="Ajouter événement" />
            </form>
        </div>
    )
}