import React, { useState } from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
function Location({ location, isEditable }) {

    const [locationState, setLocation] = useState(location.locationDTO);

    const onInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;

        //update location state
        setLocation((prevState) => ({
            ...prevState, [fieldName]: value, //es6 computed property syntax
        }));
    }

    return (
        isEditable ?
            <div className='inputDiv'>
                <input className='inputTimeline' value={locationState.name}
                    onChange={onInputChange} type="text" name={"name"}></input>

                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(locationState.startDate)}
                    onChange={onInputChange} type="date" name={"startDate"}></input>

                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(locationState.endDate)}
                    onChange={onInputChange} type="date" name={"endDate"}></input>
            </div>
            :
            <p>{locationState.name} - {DateFormatter.prototype.formatDate(locationState.startDate)}
                - {DateFormatter.prototype.formatDate(locationState.endDate)}</p>
    )
}

export default Location