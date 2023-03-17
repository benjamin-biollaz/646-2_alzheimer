import React, { useState } from 'react'
import '../../CSS/TimelineForm.css';
import '../../../Utilities/DateFormatter'
import EventsForm from './EventsForm';
import PeriodsForm from './PeriodsForm';
import LocationsForm from './LocationsForm';


function TimelineForm({ periods, events, locations }) {

    return (
            <div className='grid_container'>
                <EventsForm events={periods}></EventsForm>
                <PeriodsForm periods={events}></PeriodsForm>
                <LocationsForm locations={locations}></LocationsForm>
            </div>
    );
}

export default TimelineForm