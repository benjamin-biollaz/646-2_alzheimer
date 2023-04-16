import React, { useState } from 'react'
import GenericForm from '../Form/GenericForm';
import Location from './Location';
import { LocationWithId } from '../../../DTO/LocationWithId'
import { LocationDAO } from '../../../DAL/LocationDAO'
import { LocationDTO } from '../../../DTO/LocationDTO';

function LocationsForm({ locations, id }) {

    const [locationState, setLocationState] = useState(locations);
    var addedItemsCount = 0; // used to generate ids

    // those two collections store locations before/after modifications
    // to access database only if changes have been made
    var locationsBeforeEdition = [...locations];

    // this functions is passed to the child to keep tack of changes
    const updateLocationsList = (locationId, locationDTO) => {
        var foundIndex = locationState.findIndex(l => l.id == locationId);
        const elements = locationState;
        elements[foundIndex] = new LocationWithId(locationId, locationDTO);
        setLocationState(elements);
    }

    const updateLocationsInDB = async () => {
        const locationDAO = new LocationDAO();
        const timelineId = localStorage.getItem("timelineId");

        const locationsToDelete = locationsBeforeEdition.filter(
            (location) => !locationState.some((e) => e.id === location.id)
        );
        for (const location of locationsToDelete) {
            await locationDAO.deleteLocation(timelineId, location.id);
        }

        for (const loc of locationState) {

            // the id of type int are the newly added one because Firestore
            // generates only String id
            if (typeof (loc.id) === "number") {
                // add the new event
                const newId = await locationDAO.addLocation(timelineId, loc.locationDTO.startDate,
                    loc.locationDTO.endDate, loc.locationDTO.name);
                setNewItemId(newId, loc.id);
                continue;
            }

            // update each location
            const locationIndex = locationState.findIndex(l => l.id == loc.id)
            locationDAO.updateLocation(timelineId, locationsBeforeEdition[locationIndex],
                loc.locationDTO.startDate, loc.locationDTO.endDate, loc.locationDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        locationsBeforeEdition = locationState;
    }

       // add an empty location to the list
       const addNewLocation = () => {
        const newLocation = new LocationWithId(addedItemsCount, new LocationDTO("", "", "nouveau"));
        const elements = locationState;
        elements.unshift(newLocation)
        setLocationState(elements);
        addedItemsCount++;
    }

    const deleteLocation = (locationId) => {
        const index = locationState.findIndex((location) => location.id === locationId);
        const newLocations = [...locationState];
        newLocations.splice(index, 1);
        setLocationState(newLocations);
        localStorage.setItem("update", true);
      };

    const renderLocations = (locations, isEditable) => {
        return locations
            .sort((a, b) => new Date(a.locationDTO.endDate) - new Date(b.locationDTO.endDate))
            .map((loc) => (
                <Location key={loc.id} location={loc} isEditable={isEditable} 
                    updateLocationList={updateLocationsList} deleteLocation={deleteLocation}></Location>
            ));
    }

    const setNewItemId = (firestoreId, generatedId) => {
        var foundIndex = locationState.findIndex(loc => loc.id === generatedId);
        const elements = [...locationState];
        elements[foundIndex].id = firestoreId;
        setLocationState(elements);
    }

    return (
        <div className='flexDiv'>
            <GenericForm className='right_section' title='Lieux' renderItems={renderLocations} addNewItem={addNewLocation}
                items={locationState} submitModifications={updateLocationsInDB}></GenericForm>
        </div>
    );
}

export default LocationsForm