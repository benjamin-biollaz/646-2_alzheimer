import React, { useState } from "react"
import { Button } from "semantic-ui-react";
import { EventDAO } from "../../../DAL/EventDAO";
import { EventDTO } from "../../../DTO/EventDTO";

export default function AddEvent() {

    const [eventState, setEvent] = useState(new EventDTO('', '', '#fb6f92'));

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

    const addEvent = () => {
        if (eventState.date === '' || eventState.name === '')
            return;

        const eventDAO = new EventDAO();
        eventDAO.addEvent('X9mfzXVODmuErhLMbrj3', eventState.date, eventState.name);
    }


    return (
        <div className="inputDiv">
            <form className="addGrid">
                <label className="">Name</label>
                <input className="inputTimeline" name="name" value={eventState.name}
                    type="text" onChange={onInputChange}></input>
                <label className="">Date</label>
                <input className="inputTimeline" name="date" value={eventState.date}
                    type="date" onChange={onInputChange}></input>

                <Button onClick={addEvent}>New event</Button>
            </form>
        </div>
    )
}