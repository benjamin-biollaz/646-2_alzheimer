import React, { useState } from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function Event({ event, isEditable }) {

    const [eventState, setEvent] = useState(event);

    const onInputChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;

        alert(fieldName);

        //update event state
        setEvent((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
    }

    return (
        isEditable ?
            <div className='inputDiv'>
                <form>
                    <input className='inputTimeline' value={eventState.eventDTO.name}
                        type="text" name={"name"} onChange={onInputChange}></input>

                    <input className='inputTimeline' value={DateFormatter.prototype.formatDate(eventState.eventDTO.date)}
                        type="date" name={"date"} onChange={onInputChange}></input>
                </form>
            </div>
            : 
            <p>{eventState.eventDTO.name} - {DateFormatter.prototype.formatDate(eventState.eventDTO.date)}</p>
    )
}

export default Event