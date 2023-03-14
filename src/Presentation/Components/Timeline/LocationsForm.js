import React from 'react'
import { DateFormatter } from '../../../Utilities/DateFormatter';

function LocationsForm({ locations }) {
    return (
        <div id='locationsDiv' className='grid_item'>
            <div className='header'>
                <h3 className='sectionTitle'>Locations</h3>
                <button>+</button>
            </div>
            {locations.map((loc) => (
                <p>{loc.locationDTO.name} - {DateFormatter.prototype.formatDate(loc.locationDTO.startDate)}
                    - {DateFormatter.prototype.formatDate(loc.locationDTO.endDate)}</p>
            ))}
        </div>
    );
}

export default LocationsForm