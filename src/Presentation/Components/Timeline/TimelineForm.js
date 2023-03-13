import React, { useState } from 'react'
import '../CSS/TimelineForm.css';
import '../../Utilities/DateFormatter'
import EventsForm from './timeline/EventsForm';
import PeriodsForm from './timeline/PeriodsForm';
import LocationsForm from './timeline/LocationsForm';


function TimelineForm({periods, events, locations}) {

    const [loc, setLocations] = useState(locations);
    const [per, setPeriods] = useState(periods);
    const [eve, setEvents] = useState(events);

    return (<div className='popup'>
        <div className='grid_container'>
            <EventsForm events={eve}></EventsForm>
            <PeriodsForm periods={per}></PeriodsForm>
            <LocationsForm locations={loc}></LocationsForm>
        </div>
    </div>
    );
}

export default TimelineForm