import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';

function LocationsForm({ locations }) {
    const renderLocations = (locations) => {
        return locations.map((loc) => (
            <p>{loc.locationDTO.name} - {DateFormatter.prototype.formatDate(loc.locationDTO.startDate)}
                - {DateFormatter.prototype.formatDate(loc.locationDTO.endDate)}</p>
        ))
    }
    return (
        <div className='flexDiv'>
            <GenericForm divId='locationsDiv' isEditable={false} title='Locations' 
            renderItems={renderLocations} items={locations}></GenericForm>
            </div>
    );
}

export default LocationsForm