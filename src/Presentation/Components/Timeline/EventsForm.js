import React from 'react'
import GenericForm from '../Form/GenericForm';
import Event from './Event';
import AddEvent from './AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';

/**
 * This component renders a list of event. 
 * Note that the display of indivual event is handled in the "Event" component.
 */
function EventsForm({ events, id }) {

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
            eventDAO.updateEvent(id, ev, eventsEdited[eventIndex].eventDTO.startDate, eventsEdited[eventIndex].eventDTO.endDate,eventsEdited[eventIndex].eventDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        eventsBeforeEdition = eventsEdited;
    }

    const renderEvents = (events, isEditable) => {
        return events
        .sort((a, b) => new Date(a.eventDTO.startDate) - new Date(b.eventDTO.startDate)) 
        .map((ev) => (
            <Event key={ev.id} event={ev} isEditable={isEditable}
                updateEventsList={updateEventsList}></Event>
        ));
    }

    const renderAdd = () => {
        return (
            <AddEvent id={id} />
        );
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='left_section' title='Evénements'
                renderItems={renderEvents} renderAddForm={renderAdd}
                items={events} submitModifications={updateEventsInDB}></GenericForm>
        </div>
    );
}

export default EventsForm