import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';

function LocationsForm({ locations }) {
    const renderLocationsReadonly = (locations) => {
        return locations.map((loc) => (
            <p>{loc.locationDTO.name} - {DateFormatter.prototype.formatDate(loc.locationDTO.startDate)}
                - {DateFormatter.prototype.formatDate(loc.locationDTO.endDate)}</p>
        ));
    }

    const renderLocationsEditable = (locations) => {
        return locations.map((loc) => (
            <div className='inputDiv'>
                <input className='inputTimeline' value={loc.locationDTO.name}></input>
                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(loc.locationDTO.startDate)}></input>
                <input className='inputTimeline' value={DateFormatter.prototype.formatDate(loc.locationDTO.endDate)}></input>
            </div>
        ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='locationsDiv' isEditable={false} title='Locations'
                renderItemsReadonly={renderLocationsReadonly} renderItemsEditable={renderLocationsEditable}
                items={locations}></GenericForm>
        </div>
    );
}

export default LocationsForm