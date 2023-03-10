import React from "react";
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker
} from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import { rightResizeStyle } from "react-calendar-timeline/lib/lib/items/styles";

const groups = [{ id: 1, title: 'Périodes' }, { id: 2, title: 'Lieux' },{ id: 3, title: 'Evenements' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'Ingénieur d’études et de développement',
    start_time: moment("19700101", "YYYYMMDD"),
    end_time: moment("19900101", "YYYYMMDD"),
    canMove: false,
  },
  {
    id: 2,
    group: 2,
    title: 'Vaud',
    start_time: moment("19700101", "YYYYMMDD"),
    end_time: moment("20000101", "YYYYMMDD"),
    canMove: false,
  },
  {
    id: 3,
    group: 1,
    title: 'Retraite',
    start_time: moment("19910101", "YYYYMMDD"),
    end_time: moment("20180101", "YYYYMMDD"),
    canMove: false,
  },
  {
    id: 4,
    group: 3,
    title: 'Mariage',
    tip: 'Marc se marie avec Marie',
    start_time: moment("19720101", "YYYYMMDD"),
    end_time: moment("19720102", "YYYYMMDD"),
    canMove: false,
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      'data-custom-attribute': 'Random content',
      'aria-hidden': true,
      style: {
        background: 'fuchsia',
        color: 'black',
        
      }
    }
  }
  
]
// multiple CustomMarkers


export default function Home({ resident }) {
  return (
    <div>
      <h1 data-testid="1">Hello World!</h1>
      <h2 data-testid="2">{resident?.firstName}</h2>
      <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment("19600101", "YYYYMMDD")}
      defaultTimeEnd={moment()}
      maxZoom={100 * 365.24 * 86400 * 1000}
      minZoom={60 * 60 * 1000 * 24 * 50}
      canvasStartTime={moment("19600101", "YYYYMMDD")}
      canvasEndTime={moment()}
      
      
    >
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
    <br/>
    <button onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
}
