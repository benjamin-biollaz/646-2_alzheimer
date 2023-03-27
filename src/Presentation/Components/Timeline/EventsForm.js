import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import Event from './Event';
import AddEvent from './AddEvent';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';
import { EventDTO } from '../../../DTO/EventDTO';

/**
 * This component renders a list of event. 
 * Note that the display of indivual event is handled in the "Event" component.
 */
function EventsForm({ events }) {

    const [eventState, setEventState] = useState(events);
    var addedItemsCount = 0; // used to generate ids


    // those two collections store events before/after modifications
    // to access database only if changes have been made
    var eventsBeforeEdition = [...events];

    // this functions is passed to the child to keep tack of changes
    const updateEventsList = (eventId, eventDTO) => {
        var foundIndex = eventState.findIndex(e => e.id === eventId);
        const elements = eventState;
        elements[foundIndex] = new EventWithId(eventId, eventDTO);
        setEventState(elements);
    }

    const updateEventsInDB = async () => {
        const eventDAO = new EventDAO();
        const timelineId = localStorage.getItem("timelineId");
        for (const ev of eventState) {

            // the id of type int are the newly added one because Firestore
            // generates only String id
            if (typeof (ev.id) === "number") {
                // add the new event
                const newId = await eventDAO.addEvent(timelineId, ev.eventDTO.startDate,
                    ev.eventDTO.endDate, ev.eventDTO.name);
                setNewItemId(newId, ev.id);
                console.log("added ...")
                continue;
            }

            // update each event
            console.log(ev);
            const eventIndex = eventsBeforeEdition.findIndex(e => e.id === ev.id)
            eventDAO.updateEvent(timelineId, eventsBeforeEdition[eventIndex], ev.eventDTO.startDate,
                ev.eventDTO.endDate, ev.eventDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        eventsBeforeEdition = eventState;
        localStorage.setItem("update", false)
    }

    const setNewItemId = (firestoreId, generatedId) => {
        var foundIndex = eventState.findIndex(ev => ev.id === generatedId);
        const elements = [...eventState];
        elements[foundIndex].id = firestoreId;
        setEventState(elements);
    }

    // add an empty event to the list
    const addNewEvent = () => {
        const newEvent = new EventWithId(addedItemsCount, new EventDTO("", "", "nouveau"));
        const elements = eventState;
        elements.unshift(newEvent)
        setEventState(elements);
        addedItemsCount++;
        console.log(eventState)
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
            <AddEvent />
        );
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='left_section' title='Evénements'
                renderItems={renderEvents} addNewItem={addNewEvent}
                items={events} submitModifications={updateEventsInDB}></GenericForm>
        </div>
    );
}

export default EventsForm