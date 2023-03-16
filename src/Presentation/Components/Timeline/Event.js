import React, { useState } from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function Event({ event, isEditable }) {

    const [eventState, setEvent] = useState(event.eventDTO);

    const onInputChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;

        //update event state
        setEvent((prevState) => ({
            ...prevState, [fieldName]: value, //es6 computed property syntax
        }));
    

    }

    return (
        isEditable ?
            <div className='inputDiv'>
                <form>
                    <input className='inputTimeline' value={eventState.name}
                        type="text" name={"name"} onChange={onInputChange}></input>

                    <input className='inputTimeline' value={DateFormatter.prototype.formatDate(eventState.date)}
                        type="date" name={"date"} onChange={onInputChange}></input>
                </form>
            </div>
            : 
            <p>{eventState.name} - {DateFormatter.prototype.formatDate(eventState.date)}</p>
    )
}

export default Event