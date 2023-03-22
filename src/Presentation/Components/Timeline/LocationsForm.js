import React from 'react'
import GenericForm from '../Form/GenericForm';
import Location from './Location';
import {LocationWithId} from '../../../DTO/LocationWithId'
import {LocationDAO} from '../../../DAL/LocationDAO'
import AddLocation from './AddLocation';

function LocationsForm({ locations, id }) {

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
            locationDAO.updateLocation(id, loc, locationsEdited[locationIndex].locationDTO.startDate, 
            locationsEdited[locationIndex].locationDTO.endDate, locationsEdited[locationIndex].locationDTO.name)
        }

        // eventsBeforeEdition is updated with the DB
        locationsBeforeEdition = locationsEdited;
    }

    const renderLocations = (locations, isEditable) => {
        return locations
        .sort((a, b) => new Date(a.locationDTO.endDate) - new Date(b.locationDTO.endDate)) 
        .map((loc) => (
            <Location key={loc.id} location={loc} isEditable={isEditable} updateLocationList={updateLocationsList}></Location>
        ));
    }

    const renderAdd = () => {
        return (
            <AddLocation id={id} />
        );
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='locationsDiv' title='Lieux'renderItems={renderLocations} renderAddForm={renderAdd} 
            items={locations} submitModifications={updateLocationsInDB}></GenericForm>
        </div>
    );
}

export default LocationsForm