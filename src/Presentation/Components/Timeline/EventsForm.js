import React from 'react'
import GenericForm from './GenericForm';
import Event from './Event';
import AddEvent from './AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';

/**
 * This component renders a list of event. 
 * Note that the display of indivual event is handled in the "Event" component.
 */
function EventsForm({ events }) {

    // those two collections store events before/after modifications
    // to access database only if changes have been made
    var eventsBeforeEdition = [...events];
    const eventsEdited = [...events];

    // this functions is passed to the child to keep tack of changes
    const updateEventsList = (eventId, eventDTO) => {
        var foundIndex = eventsEdited.findIndex(e => e.id === eventId);
        eventsEdited[foundIndex] = new EventWithId(eventId, eventDTO);
    }

    const updateEventsInDB = () => {
        const eventDAO = new EventDAO();
        for (const ev of eventsBeforeEdition) {
            // update each event
            const eventIndex = eventsEdited.findIndex(e => e.id === ev.id)
            eventDAO.updateEvent('X9mfzXVODmuErhLMbrj3', ev, eventsEdited[eventIndex].eventDTO.date, eventsEdited[eventIndex].eventDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        eventsBeforeEdition = eventsEdited;
    }

    const renderEvents = (events, isEditable) => {
        return events.map((ev) => (
            <Event key={ev.id} event={ev} isEditable={isEditable}
                updateEventsList={updateEventsList}></Event>
        ));
    }

    const renderAdd = () => {
        return (
            <AddEvent />
        );
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='eventsDiv' title='Events'
                renderItems={renderEvents} renderAddForm={renderAdd}
                items={events} submitModifications={updateEventsInDB}></GenericForm>
        </div>
    );
}

export default EventsForm