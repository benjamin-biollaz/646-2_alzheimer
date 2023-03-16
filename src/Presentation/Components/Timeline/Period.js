import React, { useState } from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function Period({ period, isEditable }) {

    const [periodState, setPeriod] = useState(period.periodDTO);

    const onInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const fieldName = target.name;

        //update period state
        setPeriod((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
    }

    return (
        isEditable ?
            <div className='inputDiv'>
                <form>
                    <input className='inputTimeline' value={periodState.name}
                    onChange={onInputChange} type="text" name={"name"}></input>

                    <input className='inputTimeline' value={DateFormatter.prototype.formatDate(periodState.startDate)}
                    onChange={onInputChange} type="date" name={"startDate"}></input>

                    <input className='inputTimeline' value={DateFormatter.prototype.formatDate(periodState.endDate)}
                    onChange={onInputChange} type="date" name={"endDate"}></input>
                </form>
            </div>
            :
            <p>{periodState.name} - {DateFormatter.prototype.formatDate(periodState.startDate)}
                - {DateFormatter.prototype.formatDate(periodState.endDate)}</p>
    )
}

export default Period