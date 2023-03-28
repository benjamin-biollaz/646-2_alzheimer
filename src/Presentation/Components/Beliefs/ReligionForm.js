import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import Event from './Event';
import { EventDAO } from '../../../DAL/EventDAO';
import { EventWithId } from '../../../DTO/EventWithId';
import { EventDTO } from '../../../DTO/EventDTO';
import { ReligionDAO } from '../../../DAL/ReligionDAO';

/**
 * This component renders a list of religions. 
 * Note that the display of indivual event is handled in the "Event" component.
 */
function ReligionForm({ religions }) {

    const [religionState, setReligionState] = useState(religions);
    var addedItemsCount = 0; // used to generate ids


    // those two collections store religions before/after modifications
    // to access database only if changes have been made
    var religionsBeforeEdition = [...religions];

    // this functions is passed to the child to keep tack of changes
    const updateReligionsList = (religionWithId, religionDTO) => {
        var foundIndex = religionState.findIndex(r => r.id === religionWithId);
        const elements = religionState;
        elements[foundIndex] = new EventWithId(religionWithId, religionDTO);
        setReligionState(elements);
    }

    const updateReligionsInDB = async () => {
        const religionDAO = new ReligionDAO();
        for (const ev of religionState) {

            // the id of type int are the newly added one because Firestore
            // generates only String id
            if (typeof (ev.id) === "number") {
                // add the new event
                const newId = await religionDAO.addEvent(timelineId, ev.eventDTO.startDate,
                    ev.eventDTO.endDate, ev.eventDTO.name);
                setNewItemId(newId, ev.id);
                continue;
            }

            // update each event
            const eventIndex = religionsBeforeEdition.findIndex(e => e.id === ev.id)
            religionDAO.updateEvent(timelineId, religionsBeforeEdition[eventIndex], ev.eventDTO.startDate,
                ev.eventDTO.endDate, ev.eventDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        religionsBeforeEdition = religionState;
        localStorage.setItem("update", false)
    }

    const setNewItemId = (firestoreId, generatedId) => {
        var foundIndex = religionState.findIndex(ev => ev.id === generatedId);
        const elements = [...religionState];
        elements[foundIndex].id = firestoreId;
        setReligionState(elements);
    }

    // add an empty event to the list
    const addNewEvent = () => {
        const newEvent = new EventWithId(addedItemsCount, new EventDTO("", "", "nouveau"));
        const elements = religionState;
        elements.unshift(newEvent)
        setReligionState(elements);
        addedItemsCount++;
    }

    const renderEvents = (events, isEditable) => {
        return events
            .sort((a, b) => new Date(a.eventDTO.startDate) - new Date(b.eventDTO.startDate))
            .map((ev) => (
                <Event key={ev.id} event={ev} isEditable={isEditable}
                    updateEventsList={updateReligionsList}></Event>
            ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='left_section' title='Evénements'
                renderItems={renderEvents} addNewItem={addNewEvent}
                items={religions} submitModifications={updateReligionsInDB}></GenericForm>
        </div>
    );
}

export default ReligionForm