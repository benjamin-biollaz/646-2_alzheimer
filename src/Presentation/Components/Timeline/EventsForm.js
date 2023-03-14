import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';

function EventsForm({events}) {
    const renderEvents = (events) => {
        return events.map((ev) => (
            <p>{ev.eventDTO.name} - {DateFormatter.prototype.formatDate(ev.eventDTO.date)}</p>
        ))
    }
    return (
        <div className='flexDiv'>
            <GenericForm divId='eventsDiv' title='Events' isEditable='false'
             renderItems={renderEvents} items={events}></GenericForm>
             </div>
    );
}

export default EventsForm