import React, { useState, useEffect, useRef } from 'react';
import Timeline, {
    TimelineMarkers,
    TodayMarker,
    DateHeader,
    TimelineHeaders,
    SidebarHeader,
} from 'react-calendar-timeline'
import '../../CSS/Timeline.css'
import moment from 'moment'
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
    const [toolTipText, setToolTipText] = useState("");
    const [min, setMin] = useState("1930-01-01");

    const ref = useRef();
    const toggleTooltip = () => ref.current.toggle();

    useEffect(() => {
        const fetchData = async () => {
            const timeline = await timelineDAO.getTimelineByResidentId('HvrELV7MRnnJcV24ro1w');
            // const timeline = await timelineDAO.getTimelineByResidentId(resident.id);
            setTimeline(timeline);

            const periods = await periodDAO.getPeriodsByTimelineId(timeline.id);
            const events = await eventDAO.getEventsByTimelineId(timeline.id);
            const locations = await locationDAO.getLocationsByTimelineId(timeline.id);


            // Combine items from all sources into a single array
            const allItems = [

                // Mapping event elements
                ...events.map((element) => ({
                    id: parseInt(element.id, 36),
                    group: 3,
                    // title: (element.eventDTO.name).split(/\s+/).slice(0, 1),
                    title: element.eventDTO.name,
                    tip: element.eventDTO.name,
                    start_time: moment(element.eventDTO.date, "YYYYMMDD"),
                    end_time: moment(element.eventDTO.date, "YYYYMMDD").add(10, 'day'),
                    canMove: false,
                    itemProps: {
                        'data-custom-attribute': 'Random content',
                        'aria-hidden': true,
                        onDoubleClick: () => {
                            setToolTipText(element.eventDTO.name);
                            toggleTooltip()
                        },
                        style: {
                            // background: element.eventDTO.color,
                            color: 'black',
                        },
                    },
                })),

                // Mapping period elements
                ...periods.map((element) => ({
                    id: parseInt(element.id, 36),
                    group: 1,
                    title: element.periodDTO.name,
                    tip: element.periodDTO.name,
                    start_time: moment(element.periodDTO.startDate, "YYYYMMDD"),
                    end_time: moment(element.periodDTO.endDate, "YYYYMMDD"),
                    canMove: false,
                    itemProps: {
                        style: {
                            // background: element.periodDTO.color,
                        },
                    },
                })),

                // Mapping locations elements
                ...locations.map((element) => ({
                    id: parseInt(element.id, 36),
                    group: 2,
                    title: element.locationDTO.name,
                    tip: element.locationDTO.name,
                    start_time: moment(element.locationDTO.startDate, "YYYYMMDD"),
                    end_time: moment(element.locationDTO.endDate, "YYYYMMDD"),
                    canMove: false,
                    itemProps: {
                        style: {
                            // background: element.locationDTO.color,
                        },
                    },
                })),

            ];

            //get min date
            var tempmin = Math.min(...allItems.map(item => item.start_time));
            setMin(tempmin);

            setItems(allItems);

            setEvents(events);
            setLocations(locations);
            setPeriods(periods);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Popup className-popup={'info-popup-content'} ref={ref} position={'bottom left'} keepTooltipInside={true} trigger={<button disabled>ℹ️</button>}><div>{toolTipText}</div></Popup>
            <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment(min, "YYYYMMDD")}
                defaultTimeEnd={moment().add(1, 'month')}
                maxZoom={70 * 365.24 * 86400 * 1000}
                minZoom={60 * 60 * 1000 * 24 * 50}
                canvasStartTime={moment(min, "YYYYMMDD")}
                canvasEndTime={moment().add(1, 'month')}
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
                        {({ styles }) => {
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
                <Popup className-content={'form-popup-content'} trigger={<button> Open pop up</button>} closeOnDocumentClick modal position='center center'>
                    <TimelineForm events={events} periods={periods} locations={locations} />
                </Popup>
                <button onClick={() => window.location.reload()}>Reset</button>
            </div>
        </div>
    );

}