import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';
import GenericForm from './GenericForm';
import Location from './Location';

function LocationsForm({ locations }) {
    const renderLocations = (locations, isEditable) => {
        return locations.map((loc) => (
            <Location location={loc} isEditable={isEditable}></Location>
        ));
    }

    return (
        <div className='flexDiv'>
            <GenericForm divId='locationsDiv' isEditable={false} title='Locations'
                renderItems={renderLocations} items={locations}></GenericForm>
        </div>
    );
}

export default LocationsForm