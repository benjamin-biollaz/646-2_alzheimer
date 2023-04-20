import React from 'react'
import EventsForm from './EventsForm';
import PeriodsForm from './PeriodsForm';
import LocationsForm from './LocationsForm';
import '../../CSS/GenericForm.css';
import '../../../Utilities/DateFormatter'

function TimelineForm({ periods, events, locations}) {

    return (
            <div className='grid_container'>
                <EventsForm events={events}></EventsForm>
                <PeriodsForm periods={periods} ></PeriodsForm>
                <LocationsForm locations={locations} ></LocationsForm>
            </div>
    );
}

export default TimelineForm