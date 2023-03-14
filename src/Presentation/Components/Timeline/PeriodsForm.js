import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';

function PeriodsForm({periods}) {
    const renderPeriods = (periods) => {
        return periods.map((per) => (
            <p>{per.periodDTO.name} - {DateFormatter.prototype.formatDate(per.periodDTO.startDate)} 
            - {DateFormatter.prototype.formatDate(per.periodDTO.endDate)}</p>
        ))
    }
    return (
        <div className='flexDiv'>
           <GenericForm divId='periodsDiv' isEditable='false' title='Periods'
            renderItems={renderPeriods} items={periods
            }></GenericForm>
            </div>
    );
}

export default PeriodsForm