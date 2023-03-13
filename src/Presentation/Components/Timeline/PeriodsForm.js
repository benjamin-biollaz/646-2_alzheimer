import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function PeriodsForm({periods}) {
    return (
        <div id='periodsDiv' className='grid_item'>
            <div className='header'>
                <h3 className='sectionTitle'>Periods</h3>
                <button>+</button>
            </div>
            {/*events.map((ev) => (
                <p>{ev.eventDTO.name} - {DateFormatter.prototype.formatDate(ev.eventDTO.date)}</p>
            ))*/}
        </div>
    );
}

export default PeriodsForm