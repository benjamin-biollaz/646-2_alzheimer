import React, { useState } from "react"
import { Button } from "semantic-ui-react";
import {PeriodDTO} from "../../../DTO/PeriodDTO";
import { PeriodDAO } from "../../../DAL/PeriodDAO";

export default function AddPeriod() {

    const [periodState, setPeriod] = useState(new PeriodDTO('','','',''));

    const onInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const fieldName = target.name;

        //update event state for display
        setPeriod((prevState) => ({
            ...prevState,
            [fieldName]: value, //es6 computed property syntax
        }))

    };

    const addPeriod = (e) => {
        e.preventDefault();
        if (periodState.startDate === ''||periodState.endDate === '' || periodState.name === ''){
            alert("Veuillez remplir tous les champs");
            return;
        }

        const periodDAO = new PeriodDAO();
        periodDAO.addPeriod(localStorage.getItem("timelineId"),periodState.name,periodState.startDate,periodState.endDate).then(() => {
            window.location.reload(false)}
            );
    }


    return (
        <div className="inputDiv">
            <form className="addGrid" onSubmit={addPeriod}>
                <label className="">Name</label>
                <input className="inputTimeline" name="name" value={periodState.name}
                    type="text" onChange={onInputChange}></input>
                <label className="">Start date</label>
                <input className="inputTimeline" name="startDate" value={periodState.startDate}
                    type="date" onChange={onInputChange}></input>
                <label className="">End date</label>
                <input className="inputTimeline" name="endDate" value={periodState.endDate}
                                    type="date" onChange={onInputChange}></input>

                <input type="submit" value="Ajouter période" onClick={addPeriod}/>
            </form>
        </div>
    )
}