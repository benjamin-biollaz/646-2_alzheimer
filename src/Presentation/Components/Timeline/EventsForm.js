import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';

function EventsForm({ events }) {
    const renderEventsReadOnly = (events) => {
        return events.map((ev) => (
            <p>{ev.eventDTO.name} - {DateFormatter.prototype.formatDate(ev.eventDTO.date)}</p>
        ));
    }

    const renderEventsEdit = (events) => {
        return events.map((ev) => (
            <div className='inputDiv'>
                <input className='inputTimeline' value={ev.eventDTO.name}></input>
                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(ev.eventDTO.date)}></input>
            </div>
        ));

    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='eventsDiv' title='Events' isEditable={false}
                renderItems={renderEventsEdit} items={events}></GenericForm>
        </div>
    );
}

export default EventsForm