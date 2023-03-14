import React, { useState, useEffect } from 'react';
import Timeline, {
    TimelineMarkers,
    CustomMarker,
    TodayMarker,
    DateHeader,
    TimelineHeaders,
    SidebarHeader,
    CursorMarker
} from 'react-calendar-timeline'
import '../../CSS/Timeline.css'
import moment from 'moment'
import { rightResizeStyle } from "react-calendar-timeline/lib/lib/items/styles";
import { TimelineDAO } from '../../../DAL/TimelineDAO';
import { EventDAO } from '../../../DAL/EventDAO';
import { PeriodDAO } from '../../../DAL/PeriodDAO';
import { LocationDAO } from '../../../DAL/LocationDAO';

//popup 
import Popup from 'reactjs-popup';
import TimelineForm from "./TimelineForm";
import 'reactjs-popup/dist/index.css';
import '../../CSS/TimelineForm.css'


export function TimelineWidget(resident) {

    const groups = [{ id: 1, title: 'Périodes' }, { id: 2, title: 'Lieux' }, { id: 3, title: 'Evenements' }]

    // Create instances of DAO classes
    const timelineDAO = new TimelineDAO();
    const periodDAO = new PeriodDAO();
    const eventDAO = new EventDAO();
    const locationDAO = new LocationDAO();

    // Arrays for timeline data using useState
    const [timeline, setTimeline] = useState();
    const [periods, setPeriods] = useState([]);
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [items, setItems] = useState([]);

    //Default useEffect
    useEffect(() => {
        fetchTimeline();
    }, [])

    // Place events
    useEffect(() => {
        placeEvents(events);
        console.warn("event use effect");
    }, [events]);

    // Place periods
    useEffect(() => {
        placePeriods(periods);
        console.warn("period use effect");
    }, [periods]);

    // Place locations
    useEffect(() => {
        placeLocations(locations);
        console.warn("location use effect");
    }, [locations]);

    const fetchTimeline = async () => {
        const timeline = await timelineDAO.getTimelineByResidentId('HvrELV7MRnnJcV24ro1w');
        // const timeline = await timelineDAO.getTimelineByResidentId('resident.id');
        setTimeline(timeline);
        const periods = await periodDAO.getPeriodsByTimelineId(timeline.id);
        setPeriods(periods);
        const events = await eventDAO.getEventsByTimelineId(timeline.id);
        setEvents(events);
        const locations = await locationDAO.getLocationsByTimelineId(timeline.id);
        setLocations(locations);
    }

    const placeEvents = (events) => {
        const newItem = events.map((element) => ({
            id: element.id,
            group: 3,
            title: element.eventDTO.name,
            tip: element.eventDTO.name,
            start_time: moment(element.eventDTO.date.toDate().toDateString()),
            end_time: moment(element.eventDTO.date.toDate().toDateString()).add(10, 'day'),
            canMove: false,
            itemProps: {
                'data-custom-attribute': 'Random content',
                'aria-hidden': true,
                style: {
                    background: 'fuchsia',
                    color: 'black',
                },
            },
        }));
        items.push(...newItem);
    };

    const placePeriods = (periods) => {
        const newItem = periods.map((element) => ({
            id: element.id,
            group: 1,
            title: element.periodDTO.name,
            tip: element.periodDTO.name,
            start_time: moment(element.periodDTO.startDate.toDate().toDateString()),
            end_time: moment(element.periodDTO.endDate.toDate().toDateString()),
            canMove: false,
        }));
        items.push(...newItem);
    };

    const placeLocations = (locations) => {
        const newItem = locations.map((element) => ({
            id: element.id,
            group: 2,
            title: element.locationDTO.name,
            tip: element.locationDTO.name,
            start_time: moment(element.locationDTO.startDate.toDate().toDateString()),
            end_time: moment(element.locationDTO.endDate.toDate().toDateString()),
            canMove: false,
        }));
        items.push(...newItem);
    };

    return (
        <div>
            <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment("19600101", "YYYYMMDD")}
                defaultTimeEnd={moment()}
                maxZoom={70 * 365.24 * 86400 * 1000}
                minZoom={60 * 60 * 1000 * 24 * 50}
                canvasStartTime={moment("19600101", "YYYYMMDD")}
                canvasEndTime={moment()}
            >
                <TimelineHeaders>
                    <SidebarHeader>
                        {({ getRootProps }) => {
                            return <div {...getRootProps()}></div>
                        }}
                    </SidebarHeader>
                    <DateHeader unit="primaryHeader" />
                </TimelineHeaders>
                <TimelineMarkers>
                    <TodayMarker>
                        {({ styles, date }) => {
                            const customStyles = {
                                ...styles,
                                backgroundColor: 'red',
                                width: '2px',
                            }
                            return (
                                <div style={customStyles} />
                            )
                        }}
                    </TodayMarker>
                </TimelineMarkers>
            </Timeline>
            <br />
            <div>
                <Popup trigger={<button> Open pop up</button>} closeOnDocumentClick modal position='center center'>
                    <TimelineForm events={events} periods={periods} locations={locations} />
                </Popup>
                <button onClick={() => window.location.reload()}>Reset</button>
            </div>
        </div>
    );

}