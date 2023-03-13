import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function EventsForm({events}) {
    return (
        <div id='eventsDiv' className='grid_item'>
            <div className='header'>
                <h3 className='sectionTitle'>Events</h3>
                <button>+</button>
            </div>
            {/*events.map((ev) => (
                <p>{ev.eventDTO.name} - {DateFormatter.prototype.formatDate(ev.eventDTO.date)}</p>
            ))*/}
        </div>
    );
}

export default EventsForm