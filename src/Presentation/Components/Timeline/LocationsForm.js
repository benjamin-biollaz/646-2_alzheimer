import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';
import Location from './Location';
import {LocationWithId} from '../../../DTO/LocationWithId'
import {LocationDAO} from '../../../DAL/LocationDAO'

function LocationsForm({ locations }) {

    // those two collections store locations before/after modifications
    // to access database only if changes have been made
    var locationsBeforeEdition = [...locations];
    const locationsEdited = [...locations];

    // this functions is passed to the child to keep tack of changes
    const updateLocationsList = (locationId, locationDTO) => {
        var foundIndex = locationsEdited.findIndex(l => l.id == locationId);
        locationsEdited[foundIndex] = new LocationWithId(locationId, locationDTO);
    }

    const updateLocationsInDB = () => {
        const locationDAO = new LocationDAO();
        for (const loc of locationsBeforeEdition) {
            // update each location
            const locationIndex = locationsEdited.findIndex(l => l.id == loc.id)
            locationDAO.updateLocation('X9mfzXVODmuErhLMbrj3', loc, locationsEdited[locationIndex].locationDTO.startDate, 
            locationsEdited[locationIndex].locationDTO.endDate, locationsEdited[locationIndex].locationDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        locationsBeforeEdition = locationsEdited;
    }

    const renderLocations = (locations, isEditable) => {
        return locations.map((loc) => (
            <Location key={loc.id} location={loc} isEditable={isEditable} updateLocationList={updateLocationsList}></Location>
        ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='locationsDiv' title='Locations'renderItems={renderLocations} 
            items={locations} submitModifications={updateLocationsInDB}></GenericForm>
        </div>
    );
}

export default LocationsForm