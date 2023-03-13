import React from 'react';
import { TimelineWidget } from './Timeline/Timeline';
import "../CSS/Home.css"

export default function Home({ resident }) {

  return (
    <div>
      <h1 data-testid="1">Hello World!</h1>
      <h2 data-testid="2">{resident?.firstName}</h2>
      <div className='divTimelineWidget'>
        <TimelineWidget resident={resident} />
      </div>
    </div>
  );

}
