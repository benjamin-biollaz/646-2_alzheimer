import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function PeriodsForm({periods}) {
    return (
        <div id='periodsDiv' className='grid_item'>
            <div className='header'>
                <h3 className='sectionTitle'>Periods</h3>
                <button>+</button>
            </div>
            {periods.map((per) => (
                <p>{per.periodDTO.name} - {DateFormatter.prototype.formatDate(per.periodDTO.startDate)} 
                - {DateFormatter.prototype.formatDate(per.periodDTO.endDate)}</p>
            ))}
        </div>
    );
}

export default PeriodsForm