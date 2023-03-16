import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';
import Event from './Event';

function EventsForm({ events }) {

    const renderEvents = (events, isEditable) => {
        return events.map((ev) => (
            <Event key={ev.id} event={ev} isEditable={isEditable}></Event>
        ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='eventsDiv' title='Events'
                isEditable={false} renderItems={renderEvents}
                items={events}></GenericForm>
        </div>
    );
}

export default EventsForm