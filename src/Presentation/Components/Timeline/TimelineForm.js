import React, { useState } from 'react'
import '../../CSS/TimelineForm.css';
import '../../../Utilities/DateFormatter'
import EventsForm from './EventsForm';
import PeriodsForm from './PeriodsForm';
import LocationsForm from './LocationsForm';


function TimelineForm({ periods, events, locations, id }) {

    const [loc, setLocations] = useState(locations);
    const [per, setPeriods] = useState(periods);
    const [eve, setEvents] = useState(events);

    return (
            <div className='grid_container'>
                <EventsForm events={eve} id={id}></EventsForm>
                <PeriodsForm periods={per} id={id}></PeriodsForm>
                <LocationsForm locations={loc} id={id}></LocationsForm>
            </div>
    );
}

export default TimelineForm