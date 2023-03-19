import React, { useState } from "react"
import { Button } from "semantic-ui-react";
import {LocationDTO} from "../../../DTO/LocationDTO";
import { LocationDAO } from "../../../DAL/LocationDAO";

export default function AddLocation() {

    const [locationState, setLocation] = useState(new LocationDTO('','','',''));

    const onInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const fieldName = target.name;

        //update event state for display
        setLocation((prevState) => ({
            ...prevState,
            [fieldName]: value, //es6 computed property syntax
        }))

    };

    const addLocation = () => {
        if (locationState.startDate === ''||locationState.endDate === '' || locationState.name === '')
            return;

        const locationDAO = new LocationDAO();
        locationDAO.addLocation('X9mfzXVODmuErhLMbrj3',locationState.startDate,locationState.endDate,locationState.name);
    }


    return (
        <div className="inputDiv">
            <form className="addGrid">
                <label className="">Name</label>
                <input className="inputTimeline" name="name" value={locationState.name}
                    type="text" onChange={onInputChange}></input>
                <label className="">Start date</label>
                <input className="inputTimeline" name="startDate" value={locationState.startDate}
                    type="date" onChange={onInputChange}></input>
                <label className="">End date</label>
                <input className="inputTimeline" name="endDate" value={locationState.endDate}
                                    type="date" onChange={onInputChange}></input>

                <Button onClick={addLocation}>New event</Button>
            </form>
        </div>
    )
}