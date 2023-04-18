import React, { useState, useEffect, useRef } from "react";
import Timeline, {
    TimelineMarkers,
    TodayMarker,
    DateHeader,
    TimelineHeaders,
    SidebarHeader,
} from "react-calendar-timeline";
import "../../CSS/Timeline.css";
import moment from "moment";
import { TimelineDAO } from "../../../DAL/TimelineDAO";
import { EventDAO } from "../../../DAL/EventDAO";
import { PeriodDAO } from "../../../DAL/PeriodDAO";
import { LocationDAO } from "../../../DAL/LocationDAO";
import { FaEdit } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import SectionHeader from "../SectionHeader";

//popup
import Popup from "reactjs-popup";
import TimelineForm from "./TimelineForm";
import "reactjs-popup/dist/index.css";
import "../../CSS/TimelineForm.css";
import { DateFormatter } from "../../../Utilities/DateFormatter";
import { color } from "@mui/system";
import { border } from '@mui/system';
import { useNavigate } from "react-router";
import NestedHeader from "../NestedHeader";

export function TimelineWidget() {

    const navigate = useNavigate();
    var alerted = false;
    //check local storage is not empty and alert if empty

    const groups = [{ id: 1, title: 'Périodes' }, { id: 2, title: 'Lieux' }, { id: 3, title: 'Evénements', stackItems: false, height: 120 }]

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

    // Colors
    const periodsColors = ["#f48c06", "#e85d04", "#dc2f02", "#d00000", "#9d0208"];
    const locationsColors = [
        "#00b4d8",
        "#0096c7",
        "#0077b6",
        "#90e0ef",
        "#caf0f8",
    ];
    const eventsColors = ["#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff"];

    const df = new DateFormatter();

    const ref = useRef();
    const toggleTooltip = () => ref.current.toggle();
    function doRender(){window.location.reload(false)};

    useEffect(() => {
        if (localStorage.getItem("residentId") == null) {
            navigate("/home");
            if(!alerted){
                alert("Veuillez sélectionner un résident");
                alerted = true;
            }
        }
        const fetchData = async () => {
            const timeline = await timelineDAO.getTimelineByResidentId(localStorage.getItem("residentId"))
            // const timeline = await timelineDAO.getTimelineByResidentId(resident.id);
            setTimeline(timeline);

            localStorage.setItem("timelineId",timeline.id);

            const periods = await periodDAO.getPeriodsByTimelineId(timeline.id);
            const events = await eventDAO.getEventsByTimelineId(timeline.id);
            const locations = await locationDAO.getLocationsByTimelineId(timeline.id);

            // Combine items from all sources into a single array
            const allItems = [

                // Mapping event elements
                ...events.map((element, index) => ({
                    id: parseInt(element.id, 36),
                    group: 3,
                    // title: (element.eventDTO.name).split(/\s+/).slice(0, 1),
                    title: element.eventDTO.name + " (" + moment(element.eventDTO.startDate).format('DD/MM/YY') + (element.eventDTO.endDate == '' || element.eventDTO.endDate == element.eventDTO.startDate ? '' : '-' + moment(element.eventDTO.endDate).format('DD/MM/YY')) + ")",
                    tip: element.eventDTO.name,
                    start_time: moment(df.format_YYYMMDD(element.eventDTO.startDate)),
                    end_time: (element.eventDTO.endDate == '' ? moment(df.format_YYYMMDD(element.eventDTO.startDate)).add(1, 'days') : moment(df.format_YYYMMDD(element.eventDTO.endDate))),
                    canMove: false,
                    itemProps: {
                        'data-custom-attribute': 'Random content',
                        'aria-hidden': true,
                        onDoubleClick: () => {
                            setToolTipText(element.eventDTO.name + " " + element.eventDTO.date,
                            );
                            toggleTooltip()
                        },
                        style: {
                            background: eventsColors[index % eventsColors.length],
                            color: 'black',
                            'itemContext.maxheight': 60,
                        },
                    },
                })),


                // Mapping period elements
                ...periods.map((element, index) => ({
                    id: parseInt(element.id, 36),
                    group: 1,
                    title: element.periodDTO.name + "\u000D \u000A(" + moment(element.periodDTO.startDate).format('DD/MM/YY') + " - " + moment(element.periodDTO.endDate).format('DD/MM/YY') + ")",
                    tip: element.periodDTO.name,
                    start_time: moment(df.format_YYYMMDD(element.periodDTO.startDate)),
                    end_time: moment(df.format_YYYMMDD(element.periodDTO.endDate)),
                    canMove: false,
                    itemProps: {
                        style: {
                            background: periodsColors[index % periodsColors.length],
                        },
                    },
                })),

                // Mapping locations elements
                ...locations.map((element, index) => ({
                    id: parseInt(element.id, 36),
                    group: 2,
                    title: element.locationDTO.name + "\n (" + moment(element.locationDTO.startDate).format('DD/MM/YY') + " - " + moment(element.locationDTO.endDate).format('DD/MM/YY') + ")",
                    tip: element.locationDTO.name,
                    start_time: moment(df.format_YYYMMDD(element.locationDTO.startDate)),
                    end_time: moment(df.format_YYYMMDD(element.locationDTO.endDate)),
                    canMove: false,
                    itemProps: {
                        style: {
                            background: locationsColors[index % locationsColors.length],
                        },
                    },
                })),

            ];



            setItems(allItems);

            setEvents(events);
            setLocations(locations);
            setPeriods(periods);
        };
        //set min date of all Items
        setMin(Math.min(...items.map(item => item.start_time)));

        fetchData();
    }, []);

    return (
        <div className="evenements">
            <NestedHeader onClose={doRender.bind(this)} sectionTitle={"Évènements"} popupContent={
                 <TimelineForm
                 events={events}
                 periods={periods}
                 locations={locations}
                 id={timeline?.id}
             />
            }></NestedHeader>

            <Popup className-popup={'info-popup-content'} ref={ref} position={'bottom left'} keepTooltipInside={true} trigger={<button disabled>ℹ️</button>}><div>{toolTipText}</div></Popup>
            <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment(df.format_YYYMMDD(localStorage.getItem("residentBirthDate")))}
                defaultTimeEnd={moment().add(1, 'year')}
                maxZoom={120 * 365.24 * 86400 * 1000}
                minZoom={60 * 60 * 1000 * 24 * 365.24 * 15}
                canvasStartTime={moment(df.format_YYYMMDD(localStorage.getItem("residentBirthDate")))}
                canvasEndTime={moment().add(1, 'year')}
            >
                <TimelineHeaders>
                    <SidebarHeader>
                        {({ getRootProps }) => {
                            return <div {...getRootProps()}></div>
                        }}
                    </SidebarHeader>
                    <DateHeader
                        unit="year"
                        labelFormat="YYYY"
                        style={{ height: 50 }}
                        //set an interval of 10 years between each label
                        intervalRenderer={({ getIntervalProps, intervalContext }) => {
                            const intervalProps = getIntervalProps()
                            {
                                if (intervalContext.intervalText % 10 == 0) {
                                    intervalProps.style.textAlign = 'right'
                                    intervalProps.style.borderLeft = '2px solid gray'

                                    return <div {...intervalProps}>{intervalContext.intervalText}</div>
                                }


                            }
                        }

                        }
                    />
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
               
                <TbReload
                    onClick={() => window.location.reload()}
                    style={{ width: "25px", color: "#a78a7f" }}
                ></TbReload>
            </div>
        </div>
    );

}
