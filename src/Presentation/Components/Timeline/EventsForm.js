import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';
import Event from './Event';
import AddEvent from './AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';

function EventsForm({ events }) {

    const renderEvents = (events, isEditable) => {
        return events.map((ev) => (
            <Event key={ev.id} event={ev} isEditable={isEditable}></Event>
        ));
    }

    const renderAdd = () => {
        return(
            <AddEvent saveEvent={saveEvent}/>
        );
    }

    const saveEvent = (eventState) => {
        const eventDAO = new EventDAO();
        eventDAO.addEvent('X9mfzXVODmuErhLMbrj3', (eventState.date).getTime(), eventState.name);
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='eventsDiv' title='Events'
                isEditable={false} renderItems={renderEvents} isAdding={false} renderForm={renderAdd}
                items={events}></GenericForm>
        </div>
    );
}

export default EventsForm