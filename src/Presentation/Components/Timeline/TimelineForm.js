import React, { useState } from 'react'
import '../../CSS/GenericForm.css';
import '../../../Utilities/DateFormatter'
import EventsForm from './EventsForm';
import PeriodsForm from './PeriodsForm';
import LocationsForm from './LocationsForm';


function TimelineForm({ periods, events, locations}) {

    const [loc, setLocations] = useState(locations);
    const [per, setPeriods] = useState(periods);
    const [eve, setEvents] = useState(events);

    return (
            <div className='grid_container'>
                <EventsForm events={eve}></EventsForm>
                <PeriodsForm periods={per} ></PeriodsForm>
                <LocationsForm locations={loc} ></LocationsForm>
            </div>
    );
}

export default TimelineForm