import React, { useState } from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
function Location({ location, isEditable }) {

    const [locationState, setLocation] = useState(location);

    const onInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;

        //update event state
        setLocation((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
    }

    return (
        isEditable ?
            <div className='inputDiv'>
                <input className='inputTimeline' value={locationState.locationDTO.name}
                    onChange={onInputChange} type="text"></input>

                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(locationState.locationDTO.startDate)}
                    onChange={onInputChange} type="date"></input>

                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(locationState.locationDTO.endDate)}
                    onChange={onInputChange} type="date"></input>
            </div>
            :
            <p>{locationState.locationDTO.name} - {DateFormatter.prototype.formatDate(locationState.locationDTO.startDate)}
                - {DateFormatter.prototype.formatDate(locationState.locationDTO.endDate)}</p>
    )
}

export default Location