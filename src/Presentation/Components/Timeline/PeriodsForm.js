import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';

function PeriodsForm({periods}) {
    
    const renderPeriodsReadOnly = (periods) => {
        return periods.map((per) => (
            <p>{per.periodDTO.name} - {DateFormatter.prototype.formatDate(per.periodDTO.startDate)} 
            - {DateFormatter.prototype.formatDate(per.periodDTO.endDate)}</p>
        ))}

        const renderPeriodsEditable = (periods) => {
            return periods.map((per) => (
                <div className='inputDiv'>
                <input className='inputTimeline' value={per.periodDTO.name}></input>
                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(per.periodDTO.startDate)}></input>
                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(per.periodDTO.endDate)}></input>
            </div>
            ))}

    return (
        <div className='flexDiv'>
           <GenericForm divId='periodsDiv' isEditable={false} title='Periods'
            renderItemsReadonly={renderPeriodsReadOnly} renderItemsEditable={renderPeriodsEditable} items={periods}></GenericForm>
            </div>
    );
}

export default PeriodsForm