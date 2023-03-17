import React, {useState } from "react"
import { Button } from "semantic-ui-react";
import { EventDAO } from "../../../DAL/EventDAO";


export default function AddEvent({isAddable, props}) {
    
    const [eventState, setEvent] = useState({name: '', date: ''});

    const handleInputChange = (e) => {
        setEvent({...e, [e.target.name]: e.target.value});
    }

    const addEvent = () => {
        props.saveEvent(eventState);
    }

    return(
        isAddable ??
        <div className="inputDiv">
            <form>
                <input className="inputTimeline" name="name" value={eventState.name} 
                    type="text" onChange={handleInputChange}></input>

                <input className="inputTimeline" name="date" value={eventState.date} 
                    type="date" onChange={handleInputChange}></input>

                <Button onClick={addEvent}>New event</Button>
            </form>
        </div>
    )
}